const pilotos = ['Vettel', 'Alomso', 'Raikkonen', 'Massa']
pilotos.pop() //massa quebrou o carro!
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // remove o primeiro
console.log(pilotos)

pilotos.unshift('Hamilton') // adciona no inicio
console.log(pilotos)

//splice pode adcionar e remover elementos

//adcionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1,) // Massa quebrou :(
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,4)
console.log(algunsPilotos2)
