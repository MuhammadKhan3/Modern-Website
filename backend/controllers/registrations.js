const fetch =require('node-fetch');
const { validationResult } = require('express-validator');
const {OAuth2Client}=require('google-auth-library');
const Users = require('../model/user');
var bcrypt = require('bcryptjs');
const jwt=require('jsonwebtoken')

const client=new OAuth2Client("821241871483-2v894njbu58fd7llvbmpg0e812n94tss.apps.googleusercontent.com");

exports.googlelogin=async (req,res,next)=>{
    const {token,clientId}=req.body;
    
    client.verifyIdToken({idToken:token,audience:"821241871483-ah0oc16fcbhtedm026m7h7qpk292f8f1.apps.googleusercontent.com"})
    .then(response=>{

        const {name,picture,email}=response.payload;
        console.log('repeat');
        
        
        if(email){
            Users.findOne({where:{email:email}})
            .then((user)=>{
                console.log(user);
                if(!user){
                    console.log(token)
                    Users.create({
                        email:email,
                        name:name,
                        image:picture,
                        // save the clients id in google database
                        google:clientId
                    }).then((user)=>{
                        const token=jwt.sign({name:user.name,email:user.email,id:user.id},'thisissecretkeyyouwantthechange',{
                            expiresIn:'1h'
                        })
                        res.json({userId:user.id,token:token,flag:true})
                        // const decode=jwt.verify(token,'thisissecretkeyyouwantthechange');
                    });        
                }else{
                    if(user.google===clientId){
                        const token=jwt.sign({name:user.name,email:user.email,id:user.id},'thisissecretkeyyouwantthechange',{
                            expiresIn:'1h'
                        })
                        res.json({userId:user.id,token:token,flag:true})
                    }else{
                        user.google=clientId;
                        user.save();
                    }

                }
            })
        }else{
            res.json({data:"Not A valid toke",flag:false})
        }
    })
    .catch((err)=>{
        throw new Error(err);
    })
}



exports.facebooklogincheck=(req,res,next)=>{
    const {clientId}=req.body;
    Users.findOne({where:{facebook:clientId}})
    .then(user=>{
        if(user){
            res.json({flag:true});
        }else{
            res.json({flag:false});
        }
    })
    .catch((err)=>{
        throw new Error(err);
    })
}
exports.facebooklogin=(req,res,next)=>{
    const {token,clientId}=req.body;
    var email='';
    if(req.body.email!==""){
        email=req.body.email
    }
    console.log(email)
    console.log('facebook...')
    console.log(token,clientId);
    let url=`https://graph.facebook.com/${clientId}?fields=id,name,email,picture&access_token=${token}`
    fetch(url,{
        method:'GET'
    })
    .then(data=>{
        return data.json();
    })
    .then(data=>{
        let {name,picture:{data:{
            url:image
        }}}=data;

        if(data.email){
            email=data.email;
        }
        Users.findOne({where:{facebook:clientId}})
        .then(user=>{
            if(user){
                if(user.facebook===clientId){
                    console.log('compare')
                    const token=jwt.sign({name:name,email:email,id:clientId},'thisissecretkeyyouwantthechange',{
                        expiresIn:'1h'
                    })
                    res.json({userId:user.id,token:token,flag:true})
                }else{
                    console.log('not exist')
                    user.facebook=clientId;
                    user.save();
                }
            }else{
                Users.create({
                    name:name,
                    image:image,
                    email:email,
                    facebook:clientId,
                }).then(user=>{
                    if(user){
                        const token=jwt.sign({name:user.name,email:user.email,id:user.facebook},'thisissecretkeyyouwantthechange',{
                            expiresIn:'1h'
                        })
                        res.json({userId:user.id,token:token,flag:true})
                    }
                });
            }
        })
    })
    .catch((err)=>{
        throw new Error(err);
    })
}




exports.signup=(req,res,next)=>{
    // console.log("signup");

    const errors=validationResult(req);
    if(!errors.isEmpty()){
        const err=new Error('Signup Error');
        err.statusCode=500;
        err.data=errors.array();
        throw err;
        
    }
    var salt = bcrypt.genSaltSync(10);

    const {name,email,password,confirmPassword}=req.body;
    
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(password, salt, function(err, hash) {
            // Store hash in your password DB.
            Users.create({
                name:name,
                email:email,
                password:hash,
                verification:req.verification,
            })
            .then(user=>{
                if(user){
                    const token=jwt.sign({name:user.name,email:user.email,id:user.id},'thisissecretkeyyouwantthechange',{
                        expiresIn:'1h'
        
                    })
                    res.json({userId:user.id,token:token,flag:true,status:'two'})
                }

            })
            .catch((error)=>{
                const err=new Error('Signup Time Issue');
                err.data=error;
                err.statusCode=500;
                throw err;
            })     
        });
    })



}
exports.login=(req,res,next)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        const err=new Error('Login Error')
        err.statusCode=500;
        err.data=errors.array();
        throw err;
    }
    
    const {email,password}=req.body;
    Users.findOne({where:{email:email}})
    .then((user)=>{
        bcrypt.compare(password,user.password,(err,result)=>{
          if(result){
            console.log(result);
            const token=jwt.sign({name:user.name,email:user.email,id:user.id},'thisissecretkeyyouwantthechange',{
                expiresIn:'1h'

            })
            res.json({userId:user.id,token:token,flag:result})
          }else{
            res.json({flag:false,data:"Your Credentials does not correct"})
          }
        })
    })
    .catch((err)=>{
        throw new Error(err);
    })

}