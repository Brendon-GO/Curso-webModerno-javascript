console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

function logThis(){
    console.log('Inside of a function...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)
}

logThis()
// O 'this', dentro de uma função, aponta para o 'global'. Fora de uma função, ele aponta pra exports