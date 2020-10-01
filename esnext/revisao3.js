// ES8: Object.values/Object.entries
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj))
console.log(Object.entries(obj))

// Improvements in literal notation.
const name = 'Carla'
const people = {
    name,
    hello () {
        return'Hello guys!'
    }
}

console.log(people.name, people.hello())

// Class
class Animal {}
class Dog extends Animal {
    toSpeak() {
        return 'Au au!'
    }
}

console.log(new Dog().toSpeak())