// pessoa -> 123 -> {...}
const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
//pessoa = { nome: 'Ana'}

Object.freeze(pessoa) // Congela o objeto, impossibilitando quaiquer modificações que possam ser feitas

pessoa.nome = 'Maria'
pessoa.end = 'Rua abc'
delete pessoa.nome
console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'Joao'})
console.log(pessoaConstante)