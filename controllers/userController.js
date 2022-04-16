const db=require('../models');
const Address=db.address;
const User=db.users;
const addUser=async(req,res)=>{
    let info={
        fname:req.body.firstName,
        lname:req.body.lastName,
        email:req.body.email
    }
    const data=await User.create(info);
    res.status(200).send(data);
}
module.exports={
    addUser
}