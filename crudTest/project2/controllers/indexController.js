const express = require('express');
var router = express.Router();

const mongoose = require('mongoose');
const Paciente = mongoose.model('Paciente');

router.get('/paciente/:nome', (req, res) => {
    Paciente.find({nome : new RegExp(req.params.nome, 'i')}, function(err, paciente) {
        res.json(paciente);
      });
});

module.exports = router;