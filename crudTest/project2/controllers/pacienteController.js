const express = require('express');
var router = express.Router();

const mongoose = require('mongoose');
const Paciente = mongoose.model('Paciente');

router.get('/', (req, res) => {
    res.render('paciente/addOrEdit.hbs',{
        viewTitle : "Insira um novo paciente" 
    });
});

router.post('/', (req, res) => {
    if(req.body._id ==''){
        insertRecord(req, res);
    }        
    else{
        updateRecord(req, res);
    }
       
});

function insertRecord( req, res){
    var paciente = new Paciente();
    paciente.fullName = req.body.fullName;
    paciente.email = req.body.email;
    paciente.mobile = req.body.mobile;
    paciente.city = req.body.city;
    paciente.save((err, doc) => {
        if(!err)
            res.redirect('paciente/list')
        else {
            if(err.name == 'ValidationError'){
                handleValidationError(err, req.body);
                res.render('paciente/addOrEdit.hbs',{
                    viewTitle : "Insira um novo usuário",
                    paciente : req.body
                });
            }
                

            console.log('Error during record insertion : ' + err);
        }
    });
}

function updateRecord(req, res){
    Paciente.findOneAndUpdate({_id: req.body._id}, req.body, {new: true}, (err, doc) => {
        if(!err){
            res.redirect('paciente/list');
        }
        else{
            if(err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("paciente/addOrEdit", {
                    viewTitle: 'Atualizar Paciente',
                    User: req.body
                });
            }
            else{
                console.log('Error during record update: ' + err);
            }            
        }
    });
};

router.get('/listpaciente', (req, res) => {
    // res.json('from list');
    Paciente.find((err, docs) => {
        if(!err){
            res.render("paciente/list.hbs", {
                list: docs
            });
        }
        else{
            console.log('Error in retrieving paciente list:' + err);
        }
    });
});

function handleValidationError(err, body){   
    for(field in err.errors){
        switch(err.errors[field].path) {
            case 'fullName':
                body['fullNameError'] = err.errors[field].message;
                break;
            case 'email':
                body['emailError'] = err.errors[field].message;
                break;
            default:
                break;
        }
    }
}

router.get('/:id', (req, res) => {
    Paciente.findById(req.params.id, (err, doc) => {
        if(!err){
            res.render("paciente/addorEdit.hbs", {
                viewTitle: "Atualizar Paciente",
                user: doc
            });
        }
    });
});

router.get('/delete/:id', (req, res) => {
    Paciente.findByIdAndRemove(req.params.id, (err, docs) => {
        if(!err){
            res.redirect('/paciente/list');
        }
        else{
            console.log('Error in user delete: ' + err);
        }
    });
});

module.exports = router;