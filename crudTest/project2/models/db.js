const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/SimoDB', {useNewUrlParser: true}, (err) => {
    if(!err) {console.log('MongoDB Conection Succeeded.') }
    else { console.log('Error in DB connection: ' + err) }
});

require('./user.model');
require('./paciente.model');