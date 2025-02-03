const mongoose= require('mongoose')
mongoose.connect('mongodb://localhost:27017/account')
.then(()=>{console.log('dbconnected');})
.catch(()=>{console.log('db non connected')})
module.exports=mongoose