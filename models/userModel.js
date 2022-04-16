module.exports=(sequelize,DataTypes)=>{
    const User=sequelize.define('user',{
        fname:{
            type:DataTypes.STRING
        },
        lname:{
type:DataTypes.STRING
        },
        email:{
            type:DataTypes.STRING,
            unique:true,
            alowNull:false
        }
    })
    return User
}