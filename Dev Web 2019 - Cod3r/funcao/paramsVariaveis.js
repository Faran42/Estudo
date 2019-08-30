function soma(){
    let soma = 0
    for(i in arguments){
        soma += arguments[1] //é um array interno de uma função
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1,2.2,3.3))
console.log(soma(1.1,2.2,'Teste'))
console.log(soma('Teste1','Teste2','Teste3'))
console.log(soma('a','b','c'))