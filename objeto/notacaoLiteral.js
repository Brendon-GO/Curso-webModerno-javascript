const a = 1
const b = 2
const c = 3 

const obj1 = {a: a, b: b, c: c} // Antes se escrevia assim. OBS: Caso queira mudar o nome das constantes, escreva assim
const obj2 = {a, b, c} // Agora se escreve assim. OBS: Se usa assim quando as constantes tem nomes iguais
console.log(obj1, obj2)

const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

const obj5 = {
    funcao1: function() {
        // Versão anterior do ES
    },
    funcao2(){
        // Versão nova do ES
    }
}

console.log(obj5)