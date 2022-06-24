const sequelize=require('../untils/db');
const Sequelize=require('sequelize');

const Users=sequelize.define('user',{
    name:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    password:{
        type:Sequelize.STRING,
    },
    image:{
        type:Sequelize.STRING,
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true,
    },
    verification:{
        type:Sequelize.STRING,
    },
    verified:{
        type:Sequelize.DATE
    },
    facebook:{
        type:Sequelize.STRING,
    },
    google:{
        type:Sequelize.TEXT,
    }
})
module.exports=Users;