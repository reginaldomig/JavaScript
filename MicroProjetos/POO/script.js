class pessoa {
    constructor(nome,idade,altura,peso){
        this.nome = nome
        this.idade = idade
        this.altura = altura
        this.peso = peso
    }

    pular(){
        alert(`O ${nome} Pulou`)
    }

    andar(){
        alert(`O ${nome} andou`)
    }

    envelhever(){
        alert(`A Idade de ${this.nome} é ${this.idade} anos`)
        this.idade = this.idade + 1
        alert(`Agora ${this.nome} tem ${this.idade} anos`)
    } 

}



p1 = new pessoa("Ludovico",99,1.80,50)

p2 = new pessoa("Cleide",3,0.90,10)

p3 = new pessoa("Isabela",12,1.50,50)



