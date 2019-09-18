const pessoa = {
    nome: 'Rebeca',
    idade:2,
    peso:13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]/* operador destructure de arrays*/) => {
    console.log(`${chave}: ${valor}`)
});

Object.defineProperty(pessoa, 'dataNascimento', { //define a forma como os dados devem ser usados no objeto, LEIA COM ATENÇÃO!!!!!
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

/// Object.assign (ECMAScript 2015)

const dest = { a: 1}
const o1 = { b: 2 }
const o2 = { c: 3, a:4 }
const obj = Object.assign(dest, o1, o2) 
/*Object.assign pega todos os atributos dos objetos passados 
e coloca eles dentro do primeiro objeto passado como param
O valor final de cada atributo, será o que for passado por ultimo, 
ou seja, os valores anteriores serão sobre escritos*/
console.log(dest)

Object.freeze(obj)
obj.c = 1234

console.log(obj)

