// Arrow function
// Arrow function is an anonymous function, and its assigned to a variable.
// If it have only one parameter, you don't need use the parentheses.
/* If you will to use a body in the arrow function, you will need use the "return". 
Exemple: const sum = (a, b) => {
     return a + b 
    }*/
const sum = (a, b) => a + b 
console.log(sum(2, 3))

// Arrow function (this)
const lexicon1 = () => console.log(this === exports)
const lexicon2 = lexicon1.bind({})
lexicon1()
lexicon2()

// Default parameter 
function log(text = 'Node') {
    console.log(text)
}
log()
log('Sou mais forte!')

// Rest operator
function total (...numbers) {
    let total = 0
    numbers.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5))