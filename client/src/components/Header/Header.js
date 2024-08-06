import { ContainerHeader, LoginDiv, NavContainer, HeaderUl, LoginText, HeaderLi, DivLinks, IconPerson, HouseMenu, PersonLogin, DoorLogout } from './HeaderStyled';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import userService from '../../services/userService';
import { AppContext } from '../../context/AppContext';
import { toast } from "react-toastify"
import Logo from '../Logo/Logo';
import useDeviceType from '../../hooks/useDeviceType';
import HeaderBurger from '../HeaderBurguer/HeaderBurguer';

const Header = () => {
    const { onReset, checkLogin, isAuthenticated } = useContext(AppContext)
    const navigate = useNavigate();
    const deviceType = useDeviceType();

    useEffect(() => {
        const checkSession = async () => {
            try {
                checkLogin()
            } catch (error) {
                console.error('Erro ao verificar autenticação', error)
            }
        }
        checkSession()
    },[checkLogin])

    const handleLogout = async () => {
        try{
            await userService.logout()
            checkLogin()
            toast.success(`Usuário deslogado com sucesso`)
            navigate('/')
        } catch (error) {
            toast.error(`Usuário falhou ao deslogar, tente novamnte mais tarde.`)
            console.error ('Erro ao deslogar!', error)
        }
    }

    const links = ['Início', 'Perfil']
    const toLinks = ['/', 'perfil']
    const iconLinks = [ <HouseMenu/>, <IconPerson/> ]


    return(
        <ContainerHeader>
            <NavContainer>
                <Logo/>
                {deviceType === 'mobile' || deviceType === 'tablet'  ? (
                    <HeaderBurger
                        links={links} 
                        toLinks={toLinks} 
                        iconLinks={iconLinks} 
                        isAuthenticated={isAuthenticated} 
                        onReset={onReset} 
                        handleLogout={handleLogout} 
                    />
                ) : (
                <>
                <HeaderUl>
                {links.map((link, index) => (
                    <HeaderLi key={index}>
                        <Link to={toLinks[index]} onClick={onReset}>
                            <DivLinks> {iconLinks[index]} {link} </DivLinks>
                        </Link>
                    </HeaderLi>
                ))} 
                </HeaderUl> 
                
                {isAuthenticated ? (
                    <LoginDiv onClick={handleLogout}>
                        <DoorLogout/>
                        <LoginText>Logout</LoginText>
                    </LoginDiv>
                ) : (
                    <Link to={"/login-registro"}>
                        <LoginDiv>
                            <PersonLogin/>
                            <LoginText>Fazer Login ou Registrar-se</LoginText>
                        </LoginDiv>
                    </Link>
                )} 
                </>
                )}
            </NavContainer>
        </ContainerHeader>
    )
}

export default Header;
