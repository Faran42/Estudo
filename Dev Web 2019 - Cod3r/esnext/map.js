const tecnologias = new Map()
tecnologias.set('react', {framework: false})
tecnologias.set('angular', {framwork: true})

console.log(tecnologias.get('react').framework)

const chavesVariadas = new Map([
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número'],
])