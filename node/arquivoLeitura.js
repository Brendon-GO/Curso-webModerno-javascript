const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// Sincrono...
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// Assincrono...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

// Forma mais simples de fazer a mesma coisa que está acima
const config = require('./arquivo.json')
console.log(config.db)

// Ler pasta...
fs.readdir(__dirname/*__dirname representa o diretório atual*/, (err, arquivos) =>{
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})