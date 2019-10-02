const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true})) 

/*lê o corpo da requisição e transforma os 
dados para que possam ser interpretados pela aplicação, 
atraves do comando req.body*/

app.post('/usuarios', (req, resp) => {
    console.log(req.body)
    resp.send('<h1>Parabéns<h1>')
})

app.listen(3003)