const nums = [1, 2, 3, 4, 5]

// Is a 'for' with a purpose
let resultado = nums.map(function(e) {  // the 'Map' don't change the origin array, but It create a new array
    return e * 2
})

console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)