const express = require('express');
const request = require('request');
const rotas = express.Router();

rotas.get('/empresarios', function (requisicao, resposta, next) {
    request({
        uri: 'http://localhost:8080/request/api/mestre/empresarios'
    }).pipe(resposta);
});

rotas.get('/agricultores', function (requisicao, resposta, next) {
    request({
        uri: 'http://localhost:8080/request/api/mestre/agricultores'
    }).pipe(resposta);
});

rotas.get('/infoMundo', function (requisicao, resposta, next) {
    request({
        uri: 'http://localhost:8080/request/api/mestre/infoMundo'
    }).pipe(resposta);
});

rotas.get('/agricultor/:id', async (requisicao, resposta) => {
    request({
        uri: 'http://localhost:8080/request/api/agricultor/' + requisicao.params.id
    }).pipe(resposta);
});

rotas.get('/empresario/:id', async (requisicao, resposta) => {
    request({
        uri: 'http://localhost:8080/request/api/empresario/' + requisicao.params.id
    }).pipe(resposta);
});

rotas.get('/arquivoResumo/:id', async (requisicao, resposta) => {
    request({
        uri: 'http://localhost:8080/request/api/arquivoResumo/' + requisicao.params.id
    }).pipe(resposta);
});

rotas.post('/empresario/:id/venda', async (requisicao, resposta) => {
    const {idProd, idAgr, numParcela, precoProd} = requisicao.body;
    request.post({
        headers: { 'content-type': 'application/json' },
        url: 'http://localhost:8080/request/api/empresario/'+requisicao.params.id+'/venda',
        form: JSON.stringify({ idProd, idAgr, numParcela, precoProd })
    });
});

module.exports = rotas;