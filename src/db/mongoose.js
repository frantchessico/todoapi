const mongoose = require('mongoose');

const urlDB = 'mongodb://localhost/todoapi'
mongoose.connect(urlDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true

}).then(() => console.log('Database is connected'))
.catch(err => console.log('Database is not connected', err))