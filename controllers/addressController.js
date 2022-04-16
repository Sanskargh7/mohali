const async = require('hbs/lib/async');
const db=require('../models');
const Address=db.address;
const Uaddress=async(req,res)=>{
    const id=req.params.id
    let data={
        Address:req.body.Address,
        state:req.body.state,
        city:req.body.city,
        pincode:req.body.pincode,
    }
    const address=await Address.create(data)
    res.status(200).send(address)
}
const getOndeAddress=async(req,res)=>{
    let id=req.params.id;
    let address=await Address.findOne({where:{id:id}})
    res.status(200).send(address)
}
const getAllAddress=async(req,res)=>{
    const address=await Address.findAll({})
    res.status(200).send(address)
}
const updateAddress=async(req,res)=>{
    let id=req.params.id
    const address=await Address.update(req.body,{where:{id:id}})
    res.status(200).send(address)
}
module.exports={
    getAllAddress,
    Uaddress,
    getOndeAddress,
    updateAddress
}