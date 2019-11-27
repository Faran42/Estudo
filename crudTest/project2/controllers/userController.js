const express = require('express');
var router = express.Router();

const mongoose = require('mongoose');
const User = mongoose.model('User');

router.get('/', (req, res) => {
    res.render('user/addOrEdit.hbs',{
        viewTitle : "Insira um novo usuário" 
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
    var user = new User();
    user.fullName = req.body.fullName;
    user.email = req.body.email;
    user.mobile = req.body.mobile;
    user.city = req.body.city;
    user.save((err, doc) => {
        if(!err)
            res.redirect('user/list')
        else {
            if(err.name == 'ValidationError'){
                handleValidationError(err, req.body);
                res.render('user/addOrEdit.hbs',{
                    viewTitle : "Insira um novo usuário",
                    user : req.body
                });
            }
                

            console.log('Error during record insertion : ' + err);
        }
    });
}

function updateRecord(req, res){
    User.findOneAndUpdate({_id: req.body._id}, req.body, {new: true}, (err, doc) => {
        if(!err){
            res.redirect('User/list');
        }
        else{
            if(err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("User/addOrEdit", {
                    viewTitle: 'Update User',
                    User: req.body
                });
            }
            else{
                console.log('Error during record update: ' + err);
            }            
        }
    });
};

router.get('/list', (req, res) => {
    // res.json('from list');
    User.find((err, docs) => {
        if(!err){
            res.render("user/list.hbs", {
                list: docs
            });
        }
        else{
            console.log('Error in retrieving employee list:' + err);
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
    User.findById(req.params.id, (err, doc) => {
        if(!err){
            res.render("user/addorEdit.hbs", {
                viewTitle: "Update user",
                user: doc
            });
        }
    });
});

router.get('/delete/:id', (req, res) => {
    User.findByIdAndRemove(req.params.id, (err, docs) => {
        if(!err){
            res.redirect('/user/list');
        }
        else{
            console.log('Error in user delete: ' + err);
        }
    });
});

module.exports = router;