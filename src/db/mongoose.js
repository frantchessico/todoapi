const mongoose = require('mongoose');

const prodUrl = "mongodb+srv://francisco-savanapoint:Luisa@jaime1996@cluster0.jao6i.mongodb.net/TodoApi?retryWrites=true&w=majority"
const urlDB = 'mongodb://localhost/todoapi'
mongoose.connect(prodUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true

}).then(() => console.log('Database is connected'))
.catch(err => console.log('Database is not connected', err))