/*const prod1 = {
    nome: '...',
    preco: 45
}

const prod2 = {
    nome: '...',
    preco: 1234
}*/
// Factory simples. Funçao factory é uma função que retorna um objeto

function criarPessoa(){
    return{
        nome: 'Ana',
        sobrenome:'Silva'
    }
}

console.log(criarPessoa())