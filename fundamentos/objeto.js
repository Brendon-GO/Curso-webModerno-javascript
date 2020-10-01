const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto legal'] = 0.40 // Evitar atributos com espaço

console.log(prod1)

const prod2 = {
nome: 'Camisa polo',
preco: 79.90
}

'{ "nome": "Camisa polo", "preco": 79.90}' //Json... diferente de objeto. Json é texto, objeto é atributos

console.log(prod2)
