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

    //Padrão de JSON que deve ser retornado
    let message = {

        "status": true,
        "statuscode": 200,
        "developer": "Roger Ribeiro de Oliveira",
        "uf": []

    }

    listaDeEstados.estados.forEach(function (estado) {
        message.uf.push(estado.sigla)

    })
    //Adicionar um novo elemento no JSON
    message.quantidade = message.uf.length
    //Apaga um elemento no JSON
    delete message.status
    if (message.uf.length > 0)
        return message // Resultado verdadeiro da API 200
    else
        return MESSAGE_ERROR // Resultado falso da API 500


};

//Retorna os dados de um estado filtrando pela sigla
const getEstadoBySigla = (sigla) => {

    let message = {

        "status": true,
        "statuscode": 200,
        "developer": "Roger Ribeiro de Oliveira",

    }

    let arrayEstados = listaDeEstados.estados
    let estadoBySigla = arrayEstados.find(estado => estado.sigla === sigla)


    if (estadoBySigla) {
        message.uf = estadoBySigla.sigla
        message.descricao = estadoBySigla.nome
        message.capital = estadoBySigla.capital
        message.regiao = estadoBySigla.regiao
        return message

    } else {
        return MESSAGE_ERROR
    }

};

//Retorna a capital do estado filtrando pela sigla
const getCapitalBySigla = (sigla) => {
    let message = {

        "status": true,
        "statuscode": 200,
        "developer": "Roger Ribeiro de Oliveira",

    }

    let arrayEstados = listaDeEstados.estados
    let capitalBySigla = arrayEstados.find(estado => estado.sigla === sigla)

    if (capitalBySigla) {
        message.uf = capitalBySigla.sigla
        message.descricao = capitalBySigla.nome
        message.capital = capitalBySigla.capital
        return message
    } else {
        return MESSAGE_ERROR
    }


};

//Retorna a lista de estados filtrando pela regiao
const getEstadosByRegiao = (regiao) => {
    let message = {

        "status": true,
        "statuscode": 200,
        "developer": "Roger Ribeiro de Oliveira",
        "regiao": "",
        "estados": []

    }

    listaDeEstados.estados.forEach(estado => {
        if (estado.regiao === regiao) {
            let uf = estado.nome
            let descricao = estado.nome
            let estadoByRegiao = { uf, descricao }
            message.regiao = estado.regiao.toUpperCase()
            message.estados.push(estadoByRegiao)

        }

    })

    if (message.estados.length > 0)
        return message
    else
        return MESSAGE_ERROR

};


//Retorna a lista de estados que forma a capital
const getEstadosIsCapitalByCountry = (pais) => {

    let message = {

        "status": true,
        "statuscode": 200,
        "developer": "Roger Ribeiro de Oliveira",
        "capitais": []

    }
    if (listaDeEstados.pais === pais) {
        listaDeEstados.estados.forEach(estado => {
            if (estado.capital_pais) {
                let info = {
                    "capital_atual": '',
                    "uf": '',
                    "descricao": '',
                    "capital": '',
                    "regiao": '',
                    "capital_pais_ano_inicio": '',
                    "capital_pais_ano_termino": ''
                }
                info.capital_atual = estado.capital_pais.capital
                info.uf = estado.capital_pais.capital
                info.descricao = estado.nome
                info.capital = estado.capital
                info.regiao = estado.regiao
                info.capital_pais_ano_inicio = estado.capital_pais.ano_inicio
                info.capital_pais_ano_termino = estado.capital_pais.ano_fim

                message.capitais.push(info)

            }

        })

        return message
    }

    return MESSAGE_ERROR


}

//Retorna as cidades existentes em um estado filtrando pela sigla.
const getCidadesBySigla = (sigla) => {
    let message = {

        "status": true,
        "statuscode": 200,
        "developer": "Roger Ribeiro de Oliveira",
        "uf": '',
        "descricao": '',
        "quantidade_cidades": '',
        "cidades": []

    }

    listaDeEstados.estados.forEach(function (estado) {
        if (estado.sigla === sigla) {
            message.uf = estado.sigla
            message.descricao = estado.nome
            message.quantidade_cidades = estado.cidades.length
            estado.cidades.forEach(function (cidade) {
                message.cidades.push(cidade.nome)
            })
        }

    })
    if (message.uf === sigla)
        return message
    else
        return MESSAGE_ERROR
}

module.exports = {
    getAllEstados,
    getEstadoBySigla,
    getCapitalBySigla,
    getEstadosByRegiao,
    getEstadosIsCapitalByCountry,
    getCidadesBySigla

}

