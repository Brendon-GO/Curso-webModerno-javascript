console.log(soma(4, 3))

/* Function Declaration. O interpretador do JS carrega todas as funções declaradas dessa forma primeiro, 
sendo assim, posso chamar a função antes da declaração.*/
function soma(x, y) {
    return x + y
}

// function expression. Só posso chamar a funcão, depois da declaração
const sub = function (x, y) {
    return x - y
}
console.log(sub(4, 3))

// named function expression. Só posso chamar a funcão, depois da declaração
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(4, 3))
