const express=require('express');
const { body } = require('express-validator');
const router=express.Router();
const regController=require('../controllers/registrations');
const email=require('../controllers/email');
const Users = require('../model/user');

router.post('/google',regController.googlelogin);
router.post('/facebook',regController.facebooklogin);
router.post('/facebookcheck',regController.facebooklogincheck);
router.post('/signup',[
    body('name').notEmpty().isLength({min:8}),
    body('email').notEmpty().isEmail()
    .custom(value=>{
        return Users.findOne({where:{email:value}})
        .then(user=>{
            if(user){
                return Promise.reject('Email Already exist')
            }
        })
    }),
    body('password').notEmpty().isLength({min:5 ,max:30})
    .custom((password,{req})=>{
        if(password!==req.confirmPassword){
            throw new Error('Password does not match in server compare')
        }
    })
],email.sendemail,regController.signup);

router.post('/login',
[
    body('email').notEmpty().isEmail().normalizeEmail(),
    body('password').notEmpty().isLength({min:6,max:20}),
]
,regController.login);
router.get('/send-email',email.sendemail);
router.post('/find-email',email.findEmail);
router.post('/verified',email.verified);
router.post('/verify-account',email.verifiedaccount);

router.post('/password-change',email.passwordhandler);
module.exports=router;