const express = require('express');
const request = require('request');
const { json } = require('express');
const rotas = express.Router();

rotas.get('/empresarios', async (requisicao, resposta, next) => {
    request({
        uri: 'http://localhost:8080/request/api/mestre/empresarios'
    }).pipe(resposta);
});

rotas.get('/agricultores', async (requisicao, resposta, next) => {
    request({
        uri: 'http://localhost:8080/request/api/mestre/agricultores'
    }).pipe(resposta);
});

rotas.get('/infoMundo', async (requisicao, resposta, next) => {
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
    const jsonVenda = resposta.json(requisicao.body);
    request.post({
        headers: { 
            'Content-Type': 'application/json',
            'User-Agent': ''
        },
        url: 'http://localhost:8080/request/api/empresario/'+requisicao.params.id+'/venda',
        form: jsonVenda
    });
});

module.exports = rotas;