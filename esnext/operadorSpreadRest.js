// operator ... rest(juntar)/spread(espalhar)
// To use rest with function parameter

// To use spread with object
const employee = { name: 'Maria', salary: 12348.99 }
const clone = { ativo: true, ...employee }
console.log(clone)

// To use spread with array
const groupA = ['João', 'Pedro', 'Glória']
const finalGroup = ['Maria', ...groupA, 'Rafaela']
console.log(finalGroup)