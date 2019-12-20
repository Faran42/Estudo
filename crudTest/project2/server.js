require('./models/db')

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');

const userController = require('./controllers/userController');
const pacienteController = require('./controllers/pacienteController');

const app = express()
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());
app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({ extname: '.hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/' }));
app.set('views engine', 'hbs');

app.listen(3000, function(){
    console.log('Listen to Port 3000')
})

app.use('/user', userController);
app.use('/paciente', pacienteController);

app.get('/quest', (req, res) => {
    res.render('questionario/questionario.hbs',{
        viewTitle : "Questionário" 
    });
});
