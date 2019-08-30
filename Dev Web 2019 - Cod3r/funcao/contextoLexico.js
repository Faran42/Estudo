//a função carrega consigo o local onde ela foi criada
const valor = 'Global'

function minhaFuncao(){
    console.log(valor)
}

function exec(){
    const valor = 'Local'
    minhaFuncao()
}

exec()