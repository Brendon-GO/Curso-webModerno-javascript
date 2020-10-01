let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let compartilhaComThisArrow = param => console.log(this === param)
compartilhaComThisArrow(global)
compartilhaComThisArrow(module.exports)

compartilhaComThisArrow = compartilhaComThisArrow.bind(obj)
compartilhaComThisArrow(obj)
compartilhaComThisArrow(module.exports)