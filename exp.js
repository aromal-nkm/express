const express=require('express')
const morgan=require('morgan');
const app=new express();
app.use(morgan('dev'))
app.set('view engine','ejs')
 app.set('views',__dirname+"/views");
// console.log(__dirname)
const basicroutes=require('./routes/basicroutes')
app.use('/basic',basicroutes);






app.listen(3000,()=>{

    console.log('server running on port 3000')
})