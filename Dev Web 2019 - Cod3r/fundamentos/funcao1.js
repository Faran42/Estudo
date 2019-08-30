// Função sem retorno
function imprimirSoma(a, b){
    console.log(a+b)
}

imprimirSoma(2,3)
imprimirSoma(2) //passar apenas um parametros faz com que o outro fique undefined e o resultado sera um NaN
imprimirSoma(2,3,4,5,8) //ignora os parametros extras

//Função com retorno

function soma(a,b=0){//padronizando um parametro
    return a + b
}

console.log(soma(2))