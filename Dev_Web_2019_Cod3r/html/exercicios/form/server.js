const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true})) 

/*lê o corpo da requisição e transforma os 
dados para que possam ser interpretados pela aplicação, 
atraves do comando req.body*/

app.post('/usuarios', (req, resp) => {
    console.log(req.body)
    resp.send('<h1>Parabéns. Usuário incluido!</h1></br><a href=\"\http://localhost:8080/index.html\"\>Voltar</a>')
})

app.post('/usuarios/:id', (req, resp) => {
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h1>Parabéns. Usuário Alterado!</h1></br><a href=\"\http://localhost:8080/index.html\"\>Voltar</a>')
})

app.listen(3003)