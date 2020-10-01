const student = [
    { name: 'João',  note: 7.3, scholarship: false},
    { name: 'Maria', note: 9.2, scholarship: true},
    { name: 'Pedro', note: 9.8, scholarship: false},
    { name: 'Ana',   note: 8.7, scholarship: true}   
]

console.log(student.map(a => a.note))
const result = student.map(a => a.note).reduce(function(accumulator, current){
    console.log(accumulator, current)
    return accumulator + current
}, 0)

console.log(result)