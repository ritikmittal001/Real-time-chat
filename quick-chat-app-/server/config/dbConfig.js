const mongoose = require('mongoose');

//Connection logic
mongoose.connect(process.env.CONN_STRING);


mongoose.connect('mongodb://127.0.0.1:27017/chat', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected Successfully'))
.catch(err => console.error('MongoDB Connection Error:', err));

//connection state
// const db = mongoose.connection;

// //Check DB Connection
// db.on('connected', () => {
//     console.log('DB Connection Successful!')
// })

// db.on('err', () => {
//     console.log('DB Connection failed!');
// })

// module.exports = db;

