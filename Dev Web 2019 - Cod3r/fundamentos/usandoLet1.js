/*

Variáveis definidas com a palavra reservada VAR, tem apenas 2 escopos
Global e Local, ou seja, dentro do escopo das funções

Variáveis definidas com a palavra reservada LET, tem três escopos:
Global, Local e Bloco, ou seja, dentro de chaves "{}"



*/

var numero = 1
{
    let numero = 2
    console.log(numero)
}

console.log(numero)