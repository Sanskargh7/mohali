const express=require('express');
const app=express();
const cors=require('cors')


app.use(express.json());
app.use(express.urlencoded({extended:true}))
const router=require('./routes/userRouter.js');
app.use('/api/users',router)


app.listen(8000,()=>{
    console.log('server startetd')
})