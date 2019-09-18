//var tem como escopo, o bloco da função, mas tambem pode ser acessado de forma global
// let e const vieram para especificar melhor o uso das variaveis
{
    var a = 2
    let b = 3

    console.log(b)
}

console.log(a)

// Template String
const produto = 'iPad'
console.log(`${produto} é caro`)

// Destructuring

const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const{ idade, nome} = { nome: 'Ana', idade: 9}
console.log(idade, nome)

