const porta = 3003

const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))

/*app.get('/produtos', (req, res, next) => {
    console.log('Middleware 1...')
    next()
})*/

/*app.use((req, res, next) => { Dessa forma, qualquer url que eu usar será atendida...
    res.send({ nome: 'Notebook', preco: 123.45 }) // O objeto será convertido para JSON
})*/

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProducts()) // O objeto será convertido para JSON
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduct(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const product = bancoDeDados.toSaveProduct({
        name: req.body.name,
        price: req.body.price
    })
    res.send(product) // Converte em JSON
})

app.put('/produtos/:id', (req, res, next) => {
    const product = bancoDeDados.toSaveProduct({
        id: req.params.id,
        name: req.body.name,
        price: req.body.price
    })
    res.send(product) // Converte em JSON
})

app.delete('/produtos/:id', (req, res, next) => {
    const product = bancoDeDados.deleteProduct(req.params.id)
    res.send(product) // Converte em JSON
})

app.listen(porta, () =>{
    console.log(`Servidor está executando na porta ${porta}.`)
})