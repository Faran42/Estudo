function getInteriorAleatorioEntre(min, max){
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

let opcao=0

while(opcao != -1){
    opcao = getInteriorAleatorioEntre(-1, 10)
    console.log('Opção escolhuda foi ' + opcao)
}

console.log(typeof (`${opcao}`))