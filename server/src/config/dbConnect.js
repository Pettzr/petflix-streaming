const mongoose = require('mongoose');
require('dotenv').config();

async function dbConnect() {
  await mongoose.connect(process.env.DB_CONNECT, 

  ).then(() => { console.log('Conexão com o MongoDB Atlas estabelecida')})
  .catch((err) => {console.error('Erro ao conectar no banco de dados MongoDB Atlas', err)});

}

module.exports = dbConnect;
