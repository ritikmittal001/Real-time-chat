const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config({path: './config.env'});

// const dbconfig = require('./config/dbConfig');

const server = require('./app');

const port = process.env.PORT_NUMBER || 3000;


//Connection logic
// mongoose.connect(process.env.CONN_STRING);


mongoose.connect('mongodb://127.0.0.1:27017/chat')
.then(() => console.log('MongoDB Connected Successfully'))
.catch(err => console.error('MongoDB Connection Error:', err));


server.listen(port, () => {
    console.log('Listening to requests on PORT: ' + port);
});