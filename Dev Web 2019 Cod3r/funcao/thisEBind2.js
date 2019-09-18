function Pessoa(){
    this.idade=0

    const self = this // criar self facilita o entendimento do que esta acontecendo com o this

    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa