/*
Um objeto, em javascript é uma coleção de chave e valor
*/

const prod1 = {}
prod1.nome='Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 //evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome:'Camisa Polo',
    preco : 79.90
}

'{"nome": "Camisa Polo", "preco" : 79.90}' //json Java Scrpit Objet Notation não é um objeto java, é um arquivo de texto

console.log(prod2)