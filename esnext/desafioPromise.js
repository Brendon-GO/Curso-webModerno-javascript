const fs = require('fs')
const path = require('path')

function readFile(way) {
  return new Promise(resolve => {
    fs.readFile(way, function(_, content) {
        resolve(content.toString())
    })
  })
}

const way = path.join(__dirname, 'dados.txt')

readFile(way)
  .then(content => content.split('\n'))
  .then(rows => rows.join(','))
  .then(content => `The final value is: ${content}`)
  .then(console.log)