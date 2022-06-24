const Sequelize=require('sequelize');

const sequelize = new Sequelize('modern', 'root', 'ahmad327', {
    host: 'localhost',
    dialect:'mysql'
});

module.exports=sequelize;