const { sequelize } = require(".");

module.exports=(sequelize,DataTypes)=>{
    const Address=sequelize.define('address',{
        Address:{
            type:DataTypes.STRING
        },
        city:{
            type:DataTypes.STRING
        },
        state:{
            type:DataTypes.STRING
        },
        pincode:{
            type:DataTypes.INTEGER
        },
        country:{
            type:DataTypes.STRING
        },
        userId:{
            type:DataTypes.STRING,
            unique:true,
            primaryKey:true,
            auto_Incremented:true
        }
    })
    return Address
}