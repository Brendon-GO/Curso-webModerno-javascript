const student = [
    { name: 'João',  note: 7.3, scholarship: false},
    { name: 'Maria', note: 9.2, scholarship: true},
    { name: 'Pedro', note: 9.8, scholarship: false},
    { name: 'Ana',   note: 8.7, scholarship: true}   
]

// Challenge 1: All students is scholarship?
const allScholarship = (result, scholarship) => result && scholarship
console.log(student.map(a => a.scholarship).reduce(allScholarship))

// Challenge 2: Some student is scholarship? 
const someScholarship = (result, scholarship) => result || scholarship
console.log(student.map(a => a.scholarship).reduce(someScholarship))