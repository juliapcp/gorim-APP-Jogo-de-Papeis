const express = require('express');

const rotas = express.Router();

rotas.post('/users', (requisicao, resposta) => {
    const body = requisicao.body;
    console.log(body);
});

module.exports = rotas;