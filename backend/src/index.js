const express = require('express');
const aplicacao = express();
const rotas = require('./rotas');

aplicacao.use(express.json());
aplicacao.use(rotas);
aplicacao.listen(3333);
