import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import userService from "../../services/userService";
import Form from "../../components/Form/Form";
import { LogRegContainer, PasswordRequirements, PasswordUl, ToggleButton, ToggleButtonContainer } from "./LoginRegistroStyled";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify"
import useAuthRedirect from "../../hooks/useAuthRedirect";

const LoginRegistro = () => {
    
    useAuthRedirect(true, '/', 'Você não pode acessar está pagina enquanto estiver logado!')
    
    const initialFormData = {
        userName: '',
        password: '',
        confirmPassword: '',
    }

    const initialPasswordRequirements ={
        length: false,
        upperCase: false,
        lowerCase: false,
        number: false,
        specialChar: false,
        equalPasswords: false,
    }

    const [formData, setFormData] = useState(initialFormData)
    const {checkLogin} = useContext(AppContext)
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(true);
    const [passwordRequirements, setpasswordRequirements] = useState(initialPasswordRequirements);

    const resetForm = () => {
        setFormData(initialFormData);
        setpasswordRequirements(initialPasswordRequirements)
    };

    const handleToggle = () => {
        setIsLogin((prev) => !prev);
        resetForm();
    };

    const validatePassword = (password, confirmPassword) => {
        return {
            length: password.length >= 8,
            upperCase: /[A-Z]/.test(password),
            lowerCase: /[a-z]/.test(password),
            number: /[0-9]/.test(password),
            specialChar: /[!@#$%^&*]/.test(password),
            equalPasswords: password === confirmPassword,
        };
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    useEffect(() => {
        if (!isLogin) {
            setpasswordRequirements(validatePassword(formData.password, formData.confirmPassword));
        }
    }, [formData.password, formData.confirmPassword, isLogin]);

    const registerSubmit = async (event) => {
        event.preventDefault();
            try {
                const data = JSON.stringify(formData)
                await userService.createUser(data)
                toast.success(`Usuário ${formData.userName} criado com sucesso!`)
                handleToggle()
            } catch (error) {
                toast.error(`Erro ao registrar. ${error.response.data.message}`)
            }  
    }

    const loginSubmit = async (event) => {
        event.preventDefault();
        try {
            const data = JSON.stringify(formData)
            await userService.loginUser(data)
            checkLogin()
            toast.success(`Usuário ${formData.userName} logado com sucesso!`)
            navigate('/')
        } catch (error) {
            console.log('Erro:', error);
            toast.error(`Erro ao fazer login. ${error.response.data.message}`)
        }
    }

    return(
        <LogRegContainer>
            <ToggleButtonContainer>
                <ToggleButton $active={isLogin} onClick={handleToggle}>Registrar-se</ToggleButton>
                <ToggleButton $active={!isLogin} onClick={handleToggle}>Fazer Login</ToggleButton>    
            </ToggleButtonContainer>
                { isLogin ? (
                <Form 
                    formData={formData}
                    setFormData={setFormData}
                    handleSubmit={loginSubmit}
                    handleChange={handleChange}
                    fields={[
                        {type:'text', alias:'Usuário:', name:'userName', placeholder:'Digite seu Username'},
                        {type:'password', alias:'Senha:', name:'password', placeholder:'Digite sua Senha'},
                    ]}
                    submitText='Login'
                /> ) : (
                <Form 
                    formData={formData}
                    setFormData={setFormData}
                    handleSubmit={registerSubmit}
                    handleChange={handleChange}
                    fields={[
                        {type:'text', alias:'Usuário:', name:'userName', placeholder:'Digite seu Username'},
                        {type:'password', alias:'Senha:', name:'password', placeholder:'Digite sua Senha'},
                        {type:'password', alias:'Confirme sua senha:', name:'confirmPassword', placeholder:'Confirme sua Senha'}
                    ]}
                    submitText='Registrar'
                />
                )}
                {!isLogin && (
                    <PasswordRequirements className={formData.password ? "fade-in" : "fade-out"}>
                        <h4>Requisitos de senha:</h4>
                        <PasswordUl>
                            <li>{passwordRequirements.length ? "✔️" : "❌"} - A senha deve ter pelo menos 8 caracteres.</li>
                            <li>{passwordRequirements.upperCase ? "✔️" : "❌"} - A senha deve conter pelo menos uma letra maiúscula.</li>
                            <li>{passwordRequirements.lowerCase ? "✔️" : "❌"} - A senha deve conter pelo menos uma letra minúscula.</li>
                            <li>{passwordRequirements.number ? "✔️" : "❌"} - A senha deve conter pelo menos um número.</li>
                            <li>{passwordRequirements.specialChar ? "✔️" : "❌"} - A senha deve conter pelo menos um caractere especial.</li>
                            <li>{passwordRequirements.equalPasswords ? "✔️" : "❌"} - As senhas devem ser iguais.</li>
                        </PasswordUl>
                    </PasswordRequirements>
                )}
        </LogRegContainer>
    )
}

export default LoginRegistro;