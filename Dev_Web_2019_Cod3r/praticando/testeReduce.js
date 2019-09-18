let vetor = [1,2,3,4,5,6,7,8,9,10]

const a = vetor.reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log(a)