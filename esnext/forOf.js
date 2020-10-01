for (let letter of "Cod3r") {
    console.log(letter)
}

const ecmaSubjects = ['Map', 'Set', 'Promise']

for (let i in ecmaSubjects) {
    console.log(i)
}

for (let subject of ecmaSubjects) {
    console.log(subject);
}

const mapSubjects = new Map([
    ['Map', { approached: true }],
    ['Set', { approached: true }],
    ['Promise', { approached: false }]
])

for (let subject of mapSubjects) {
    console.log(subject)
}

for (let key of mapSubjects.keys()) {
    console.log(key)
}

for (let value of mapSubjects.values()) {
    console.log(value)
}

for (const [ky, vl] of mapSubjects.entries()) {
    console.log(ky, vl)
}

const s = new Set(['a', 'b', 'c'])
for (let letter of s) {
    console.log(letter);
}