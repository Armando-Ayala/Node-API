const express = require('express')
const bodyParser = require('body-Parser')
const app = express()
const dotenv = require('dotenv').config()
const moviesAPI = require('./routes/movies')
const mongoose = require('mongoose')
const url = process.env.DB
const {logError, handleError} = require('./middlewares/errorMiddleware')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}).then(res => {
  console.log('Conectado a la base de datos con éxito ' + res.connections[0].name)
}).catch(err => {
  console.log('Error al conectar con la base de datos')
});

moviesAPI(app)
app.use(logError)
app.use(handleError)

app.listen(process.env.PORT, () => {
  console.log(` app listening on port ${process.env.PORT} 
  http://localhost:${process.env.PORT}`)
})