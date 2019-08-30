const a = 1
const b = 2
const c = 3

const obj1 = {a:a, b:b, c:c}
const obj2 = {a, b, c}
console.log(obj1,obj2)

const nomeAttr = 'nota'
const valorAttr = 7.78

const obj3 = {}
obj3[nomeAttr] = valorAttr

console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)


//funções dentro de objetos não necessitam da palavra reservada function
const obj5 = {

    funcao1(){
        //{...}
    },

    funcao2(){
        //{...}
    }
}