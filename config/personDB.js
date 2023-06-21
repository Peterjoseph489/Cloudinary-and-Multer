require('dotenv').config();
const mongoose = require('mongoose');

const url = 'mongodb://localhost/personDB';
mongoose.connect(url).then(()=>{
    console.log('Database connected successfully');
}).catch((error)=>{
    console.log(error.message)
})