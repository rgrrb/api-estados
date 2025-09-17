/* *********************************************************************
* Objetivo: API responsavel em criar endPoints refernte a estados e cidades
* Data: 29/08/2022  
* Autor: Marcel
*
* Observações: Instalar dependencias para criar a API
*      express     - npm install express     --save Instala as dependencias para criar uma API
*      cors        - npm install cors        --save Instala as dependencias para configurar as permissões para uma api
*      body-parser - npm install body-parser --save Instala as dependencias para receber os tipos de dados via POST ou PUT
* 
* **********************************************************************/

//Import das dependencias do app
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const functions = require('./module/functions.js')

//Define a porta padrão da API, se for em um servidor de nuvem não tem acesso a porta
//Em execução local define 8080
const PORT =  process.PORT || 8080

//Instancia na classe do express
const app = express()

//configurações do CORS
app.use((request, response, next) => {
    response.header('Acess-Control-Allow-Origin', '*') //IP de origem 
    response.header('Acess-Control-Allow-Methods', 'GET') // Meodos do (Verbos) protocolo http 

    app.use(cors())
    next() //Proximo
})

//Request -> recebe os dados
//Responde -> envia os Dados


//EndPoints
app.get('/v1/estados', function(request, response){
    let estados = functions.getAllEstados()
    response.status(estados.statuscode)
    response.json(estados)

})

app.get('/v1/estados/:sigla', function(request, response){
    let sigla = request.params.sigla

    let estados = functions.getEstadoBySigla(sigla)
    response.status(estados.statuscode)
    response.json(estados)

})

app.listen(PORT, function(){
    console.log('conectado')
})