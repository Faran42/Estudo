// index, para  retornará uma listagem de sessões
// show, para  lista uma única sessão
// store, para  criar uma sessão
// update, para alterar uma sessão
// destroy, para remover/deletar uma sessão
const User = require('../models/User')

module.exports = {
    async store(req, res){ // Usa-se async, quando uma instrução é assíncrona
        const {email} = req.body;

        let user = await User.findOne({email});

        if(!user){
            user = await User.create({email}); //await força a aplicação a esperar essa instrução ser executada
        }     

        return res.json(user);
    }
}