const dbConfig=require('../config/dbConfig');
const {Sequelize,DataTypes}=require('sequelize');
const sequelize=new Sequelize(dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD,{
    host:dbConfig.HOST,
    dialect:dbConfig.dialect
})

sequelize.authenticate().then(()=>{
    console.log('connected...')
})
.catch(err=>{
    console.log('error'+err)
})
const db={};
db.Sequelize=Sequelize;
db.sequelize=sequelize;
db.users=require('./userModel')(sequelize,DataTypes);
db.address=require('./addressModel')(sequelize,DataTypes);
db.sequelize.sync({force:true}).then(()=>{
    console.log('re-sync is done')
})
module.exports=db;