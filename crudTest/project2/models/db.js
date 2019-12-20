const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/SimoDB', {useUnifiedTopology: false, useNewUrlParser: true, useCreateIndex: true }, (err) => {
    if(!err) {console.log('MongoDB Conection Succeeded.') }
    else { console.log('Error in DB connection: ' + err) }
});

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

require('./user.model');
require('./paciente.model');