const mongoose = require('mongoose');

var pacienteSchema = new mongoose.Schema({
    fullName:{
        type: String,
        required: 'Campo obrigatório.'
    },
    birthDate:{
        type: Date,
        required: 'Campo obrigatório.'
    },
    sex:{
        type: String,
        required: 'Campo obrigatório.'
    },
    susCard:{
        type: Number,
        required: 'Campo obrigatório.'
    },
    phone:{
        type: Number,
        required: 'Campo obrigatório.'
    }
});

mongoose.model('Paciente', pacienteSchema);