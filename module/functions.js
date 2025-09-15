/****************************************************************************************
 * 
 *  Objetivo: Arquivo responsavel pelas funções para criar a API de estados e cidades
 *  Data: 15/09/2025
 *  Autor: Roger Ribeiro
 *  Versão: 1.0
 * 
 * 
 * 
 *
 ****************************************************************************************/


//Import do arquivo estados e cidades
const lista = require('./estados_cidades.js')
const listaDeEstados = lista.listaDeEstados

const MESSAGE_ERROR = {

    "status": false,
    "statuscode": 500,
    "developer": "Roger Ribeiro de Oliveira",

}

//Retorna a lista de estados
const getAllEstados = () => {
    let message = {

        "status": true,
        "statuscode": 200,
        "developer": "Roger Ribeiro de Oliveira",
        "uf": []

    }

    listaDeEstados.estados.forEach(function(estado){
      message.uf.push(estado.sigla)
      
    })
    //Adicionar um novo elemento no JSON
    message.quantidade = message.uf.length
    //Apaga um elemento no JSON
    delete message.status
    if(message.uf.length > 0)
        return message // Resultado verdadeiro da API 200
    else
        return MESSAGE_ERROR // Resultado falso da API 500
    
    
};

//Retorna os dados de um estado filtrando pela sigla
const getEstadoBySigla = (sigla) => {
    const estadoById = listaDeEstado
};

//Retorna a capital do estado filtrando pela sigla
const getCapitalBySigla = (sigla) => {
};

//Retorna a lista de estados filtrando pela regiao
const getEstadosByRegiao = (regiao) => {
};


//Retorna a lista de estados que forma a capital
const getEstadosIsCapitalByCountry = (pais) => {
}

//Retorna as cidades existentes em um estado filtrando pela sigla.
const getCidadesBySigla = (sigla) => {
}

module.exports = {
    getAllEstados,
}