function Pessoa(nome){
    this.nome = nome

    this.falar = function(){
        console.log(`Meu nome é ${this.nome}`) // Na função construtora eu tambem preciso do this
    }
}

const p1 = new Pessoa('João')
p1.falar()
console.log(p1.nome) 
