// Função em JS é First-Class Object (Citizens)
// Higher-order function

// criar de forma literal
function fun1(){} // se n for definido um "return" a função retornara um valor "undefined"

// Armazenar em uma variável
const fun2 = function(){} //atribuind uma função "anonima" a uma constante

// Armazenar em um Array
const array = [function (a, b) {return a+ b}, fun1, fun2]
console.log(array[0](2,3))


// Armazenar em um atributo de um Objeto
const obj={}
obj.falar = function() {return 'Opa'}
console.log(obj.falar())

// Passar função como param
function run(fun){
    fun()
}

run(function (){console.log("executando...")})

//Tambem é possível retornar uma função como param