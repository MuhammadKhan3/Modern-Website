const express=require('express');
const cors=require('cors');
const Users=require('./model/user');
const routes=require('./routes/routes')
const sequelize=require('./untils/db');
const app=express();

app.use(cors())
app.use(express.json());
app.use(routes);
// app.use('/',()=>{
//     console.log('hello')
// })

app.use((err, req, res, next) => {
    // logic
    res.json({msg:err.data,flag:false})
    console.log('hello')
    console.log(err)
})


sequelize.sync({alter:true})
.then((result) => {
}).catch((err) => {
    console.log(err);    
});

app.listen(8000);