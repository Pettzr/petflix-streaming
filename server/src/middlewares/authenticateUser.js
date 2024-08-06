const jwt = require('jsonwebtoken')
require('dotenv').config();

const secret = process.env.SECRET_JWT

async function authenticateUser (req, res, next) {
    try{
        const token = req.cookies.token;
        if (token) {
            const decoded = jwt.verify(token, secret)
            req.userId = decoded.id
        } else {
            req.userId = null;
        }
    } catch (error) {
        console.error('Erro ao verificar token', error)
        req.userId = null;
    }
    next();
}

module.exports = authenticateUser;