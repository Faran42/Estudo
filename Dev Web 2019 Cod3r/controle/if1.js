function soBoaNoticia(nota){
    if(nota >= 7){
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVerrdade(valor){
    if(valor){
        console.log('É verdade...'+valor)
    }else{
        console.log('Não é verdade...' + valor)
    }
}

seForVerrdade()
seForVerrdade(null)
seForVerrdade(undefined)
seForVerrdade(NaN)
seForVerrdade('')
seForVerrdade(0)
seForVerrdade(-1)
seForVerrdade(' ')
seForVerrdade('?')
seForVerrdade([])
seForVerrdade([1,2])
seForVerrdade({})
