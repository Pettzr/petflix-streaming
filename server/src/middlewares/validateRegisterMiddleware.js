const bcrypt = require('bcrypt');
const User = require('../models/userModels')

const validateRegister = async (req, res, next) => {

    function validatePassword (password) {
        const errors = [];
        if (password.length < 8) errors.push("A senha deve ter pelo menos 8 caracteres.");
        if (!/[A-Z]/.test(password)) errors.push("A senha deve conter pelo menos uma letra maiúscula.");
        if (!/[a-z]/.test(password)) errors.push("A senha deve conter pelo menos uma letra minúscula.");
        if (!/[0-9]/.test(password)) errors.push("A senha deve conter pelo menos um número.");
        if (!/[!@#$%^&*]/.test(password)) errors.push("A senha deve conter pelo menos um caractere especial.");
        return errors;
    };

    try {
        const filteredUserName = req.body.userName.trim();
        const existingUser = await User.findOne({ userName: filteredUserName });

        if (filteredUserName === '') {
            return res.status(409).json({ message: 'O campo usuário não pode ficar em branco!' });
        }

        if (existingUser) {
            return res.status(409).json({ message: 'Usuário já cadastrado.' });
        }

        if (req.body.password !== req.body.confirmPassword) {
            return res.status(400).json({ message: 'As senhas não coincidem.' });
        }
        
        const passwordErrors = validatePassword(req.body.password);
        if (passwordErrors.length > 0) {
            return res.status(400).json({ message: 'A senha não cumpre os requisitos.' });
        }

        req.body.userName = filteredUserName
        req.body.password = await bcrypt.hash(req.body.password, 10);
        next(); 
    } catch(error) {
        console.error('Erro ao validar registro', error);
        res.status(500).json({ message: 'Erro ao validar registro' });
    }
};

module.exports = validateRegister;