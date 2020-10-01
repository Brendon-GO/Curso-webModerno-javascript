// Também pode-se criar funções ao invés de objetos

function criarProduto(nome,preco){
    return{
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook',    8999.99))
console.log(criarProduto('Iphone',      6899.99))
console.log(criarProduto('Apple watch', 1999.99))
console.log(criarProduto('Ipad',        7399.99))