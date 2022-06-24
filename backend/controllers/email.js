const nodemailer=require('nodemailer');
const Users = require('../model/user');
const crypto = require("crypto");
const { Op } = require("sequelize");
const bcrypt=require('bcryptjs');

exports.sendemail=async (req,res,next)=>{
    const {email}=req.body;
    crypto.randomInt(0, 1000000, (err, generate) => {
        const transporter=nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth:{
                user:'muhammadkh3278@gmail.com',
                pass:'aiacatlkgusedzep'
                }
            })
        
            let mailoptions={
                from:'muhammadkh3278@gmail.com',
                to:email,
                subject:'Otp Verification',
                html:`<html>
                <body>
                <h3>Otp Verification</h3><br/>
                <p>don,t share anyone kindly enter ${generate} the code in verification field</p>
                </body>
                </html>`
            }
        
            transporter.sendMail(mailoptions,(err,info)=>{
                if(err){
                    console.log(err)
                }else{
                    req.verification=generate;
                    console.log('email send'+info.response);
                    next();
                }
            })

    })
    // .catch((err)=>{
    //     throw new Error(err);
    // });
  

}

exports.findEmail=(req,res,next)=>{
    const {email}=req.body;
    crypto.randomInt(0, 1000000, (err, generate) => {
        if (err)
        {
            throw err
        }
        Users.findOne({where:{email:email}})
       .then(user=>{
            if(user){
                user.verification=generate;
                user.save();
                const transporter=nodemailer.createTransport({
                    host: 'smtp.gmail.com',
                    port: 465,
                    secure: true,
                    auth:{
                        user:'muhammadkh3278@gmail.com',
                        pass:'aiacatlkgusedzep'
                        }
                })              

                let mailoptions={
                        from:'muhammadkh3278@gmail.com',
                        to:email,
                        subject:'Otp Verification',
                        html:`<html>
                        <body>
                        <h3>Modern  Website</h3><br/>
                        <p>don,t share anyone kindly enter  ${generate} the code  in the 30 mintues other it expires after the 30 mintues</p>
                        </body>
                        </html>`
                }
                transporter.sendMail(mailoptions,(err,info)=>{
                    if(err){
                            console.log(err)
                    }else{
                            console.log('email send'+info.response);
                    }
                })
                res.json({emailstatus:'two',flag:true})
            }else if(!user){
                res.json({emailstatus:'null',flag:true})
            }    
        })   
    })
    .catch((err)=>{
        throw new Error(err);
    });
}

exports.verified=(req,res,next)=>{
    const {code,email}=req.body;
    Users.findOne({
        where:{[Op.and]:[
        {email:email},
        {verification:code},
    ]}})
    .then(user=>{
        if(user){
            user.verified=new Date().toUTCString();
            user.save();
            res.json({emailstatus:'three',flag:true});
        }
    })
    .catch((err)=>{
        throw new Error(err);
    })
}


exports.verifiedaccount=(req,res,next)=>{
    const {code,email}=req.body;
    Users.findOne({
        where:{[Op.and]:[
        {email:email},
        {verification:code},
        {createdAt:{
            [Op.gte]:new Date(Date.now()-(30*60*1000))
        }}
    ]}})
    .then(user=>{
        if(user){
            user.verified=new Date().toUTCString();
            user.save();
            res.json({status:'one',flag:true});
        }
        else{
            res.json({status:'two',flag:false});
        }
    })
    .catch((err)=>{
        throw new Error(err);
    })
}

exports.passwordhandler=(req,res,next)=>{
    const {email,password}=req.body;
    Users.findOne({where:{email:email}})
    .then((user)=>{
        if(user){
            bcrypt.genSalt(10, function(err, salt) {
                bcrypt.hash(password, salt, function(err, hash) {
                    user.password=hash;
                    user.save();
                    res.json({flag:true});
                }) 
            })    
        }

    })
    .catch((err)=>{
        throw new Error(err);
    })
}