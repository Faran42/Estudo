const sequencia = {
    _valor: 1, //convenção para informar aos desenvolvedores que essa variável deve ser tratada como privada (encapsulamento)
    // JS não suporta sobrecarga(@override) de método(function), a não ser nesse exemplo, quando se usa get e set
    get valor() { return this._valor++},    
    set valor(valor) { 
        if(valor > this._valor){
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor) 
