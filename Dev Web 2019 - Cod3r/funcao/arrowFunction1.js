let dobro = function(a){
    return 2*a
}

dobro = (a)=>{ //toda funcao arrow deve ser atribuida a uma variavel
    return 2*a
}

dobro = a => 2*a //funcao arrow com apenas uma linha de codigo pode ser escrita dessa forma
console.log(dobro(Math.PI))

let ola = function (){
    return 'Olá'
}

ola = () => 'Olá' // possui um param
console.log(ola())