const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const path = require('path');
const router = require('./src/routes/index.js');
const { createProxyMiddleware } = require('http-proxy-middleware');
require('dotenv').config();

PORT = 5000

const dbConnect = require('./src/config/dbConnect.js')

const app = express();

dbConnect();


app.use(cors({
    origin: [process.env.CORS_URL],
    methods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH'],
    credentials: true
}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/images', express.static(path.join(__dirname, 'assets' )))


app.use('/', router)

app.get('/',(req,res)=>{
    res.send('Express on vercel')
})

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})

module.exports = app;
