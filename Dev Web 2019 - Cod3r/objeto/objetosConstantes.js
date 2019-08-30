// pessoa -> 123 -> {...}

const pessoa = {nome: 'joão'}
pessoa.nome = 'Pedro'

console.log(pessoa)

//pessoa -> 456 -> {...}
//pessoa = {nome: 'Ana'}

Object.freeze(pessoa) // torna o objeto imutável, mesmo que tentem mudar seus valores, etc

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'João'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)