class Pessoa{
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`) // Na classe eu preciso usar o this
    }
}

const p1 = new Pessoa('João')
p1.falar()

const criarPessoa = nome =>{
    return{
        falar: () => console.log(`Meu nome é ${nome}`) // ja na function eu não preciso usar o this
    }
}

const p2 = criarPessoa('João')
p2.falar( )