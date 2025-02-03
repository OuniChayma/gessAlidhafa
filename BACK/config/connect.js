const mongoose= require('mongoose')
mongoose.connect('mongodb://localhost:27017/malak')
.then(()=>{console.log('dbconnected');})
.catch(()=>{console.log('db non cnected')})