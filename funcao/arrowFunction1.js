let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // Return implícito
console.log(dobro(Math.PI))

let ola = function () {
    return 'olá'
}

ola = () => 'Olá'
ola = _ => 'Ola' // Possui um param
console.log(ola())