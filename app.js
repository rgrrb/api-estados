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

//Define a porta padrão da API, se for em um servidor de nuvem não tem acesso a porta
//Em execução local define 8080
const PORT =  process.PORT || 8080

//Instancia na classe do express
const app = express()

app.use(express.json)

app.use((request, response, next) => {
    response.header('Acess-Control-Allow-Origin', '*')
    response.header('Acess-Control-Allow-Methods', 'GET')

    app.use(cors())
    next()
})

app.get('/v1/estados')