import React, { useEffect, useState } from "react";
import google from "../../assets/login/google.png";
import facebook from "../../assets/login/facebook.png";
import Fade from "react-reveal/Fade";
import Typewriter from "typewriter-effect";
import { useDispatch, useSelector} from "react-redux";
import { Link } from "react-router-dom";
import Googlethunk from "../thunk/googlethunk";
import Slide  from "react-reveal/Slide";
import { useNavigate } from "react-router-dom";
import FacebookLogin from 'react-facebook-login';
import { useFormik } from 'formik';
import FacebookThunk from "../thunk/facebookthunk";
import axios from "axios";
import * as Yup from 'yup';
import signupThunk from "../thunk/signupthunk";
import VerificationThunk from "../thunk/verificationthunk";
import { user_action } from "../store";
import VerifiedThunk from "../thunk/verifiedthunk";

const Signup = () => {
  const email=useSelector(state=>state.userSlice.email);
  const errors=useSelector(state=>state.userSlice.errors);
  const dispatch=useDispatch();
  const [popup,setpopup]=useState(false);
  const [continuebtn,setcontinuebtn]=useState(false);
  const [userID,setuserID]=useState('');
  const [accessToken,setaccessToken]=useState('');
  const [showpassword,setshowpassword]=useState('password');
  const changestatus=useSelector(state=>state.userSlice.changestatus);
  
  const validationSchema=Yup.object().shape({
    uname:Yup.string()
    .min(2,'Too Short')
    .max(20,'Too Long')
    .required('Required fileds'),
    email:Yup.string().email('Invalid Email').required('Required email'),
    password:Yup.string().min(8,'Too Short').max(20,'Too Long').required('Required password'),
    confirmPassword:Yup.string().oneOf([Yup.ref('password'),null],"Password does not match")
    .min(8,'Too Short').max(20,'Too Long').required('Required password') 
    ,
    verification:Yup.string().min(5,"value length less than and equal 6").max(6,"value greater than 5 and equal 6")
  });

  const formik=useFormik({
    initialValues:{
      uname:'',
      email:'',
      password:'',
      confirmPassword:'',
      verification:'',
    },
    validationSchema:validationSchema
  })
  
  const showpasswordhandler=()=>{
    if(showpassword==='password'){
      setshowpassword('text')
    }else{
      setshowpassword('password')
    }
  }


  const navigate=useNavigate();
  const clickhandler=(response)=>{
    dispatch(Googlethunk(response.credential,response.clientId,navigate));
  }
  useEffect(()=>{
    /* global google*/
   const google=window.google
      if(google){
          /* global google*/
     google.accounts.id.initialize({
      client_id:'821241871483-ah0oc16fcbhtedm026m7h7qpk292f8f1.apps.googleusercontent.com',
      callback:clickhandler
    })
         google.accounts.id.renderButton(
      document.getElementById('loginbutton'),
      {theme:'outline',size:'large',shape:'pill',text: "signin",width: 100}
    )  
    google.accounts.id.prompt();
    }  
   },[])

   const responseFacebook = (response) => {
    setuserID(response.userID);
    setaccessToken(response.accessToken);
    console.log(userID,accessToken);


    if(response.email){
      dispatch(FacebookThunk(response.accessToken,response.userID,navigate,''));
    }else{
      // let person = prompt("Please enter your name:", "Harry Potter");
      // alert('email not exist')
      const obj={
        clientId:response.userID,
      }
      axios.post('http://localhost:8000/facebookcheck',obj)
      .then(responses=>{
        const flag=responses.data.flag;
        if(flag===true){
          dispatch(FacebookThunk(response.accessToken,response.userID,navigate,''));
        }else{
          setpopup(true);
        }
      });

      // setpopup(true);          
    }


   }
 

   const continuebtnhandler=()=>{
    setcontinuebtn(true);
      setpopup(false);
      dispatch(FacebookThunk(accessToken,userID,navigate,formik.values.email));
  }

  const submithandler=(e)=>{
    e.preventDefault();
    if(formik.values.uname && formik.values.email && formik.values.password && formik.values.confirmPassword){
    dispatch(user_action.setemail(formik.values.email));

      dispatch(signupThunk({name:formik.values.uname,email:formik.values.email,password:formik.values.password,confirmPassword:formik.values.confirmPassword},navigate));
    }
  }
  
  const verificationhandler=(e)=>{
    e.preventDefault();
    console.log(formik.values.verification);
    if(formik.values.verification){
        dispatch(VerifiedThunk({email:email,code:formik.values.verification,signup:true},navigate))
    }
  }

if(changestatus==='one'){
  return (
    <>
      {popup &&
        <div className="modal bg-blue-500 text-white p-5 ml-[700px] rounded-xl w-[20rem] z-50  absolute">
          <Slide top>  
            <div className="modal-box">
              <label> Email Enter</label>
              <br/>
              <input type='email' className='h-7 text-black' onChange={formik.handleChange} onBlur={formik.handleBlur} name='email'/>
              <div className="mt-5">
                  <button className="bg-white text-black rounded-lg p-1" onClick={continuebtnhandler}>Continue</button>
                  <button className="bg-white text-black ml-1 rounded-lg p-1" onClick={()=>{setpopup(false);}}>Cancel</button>
              </div>
            </div>
          </Slide>
        </div>}
      <section className="bg-slate-700 lg:w-screen     lg:h-screen   absolute top-0 left-0 sm:w-auto">
        <div className=" flex flex-row  bg-white rounded-lg relative top-20  z-10  h-auto w-auto sm:w-[50rem]   md:w-auto lg:w-[60rem] lg:ml-[400px] ">        
          <div className="bg-white rounded-t-lg rounded-b-lg w-[30rem]">
            <form className="" onSubmit={submithandler}>
              <legend className="mt-[70px] ml-[200px] text-pink-600 text-3xl font-bold">
                Signup
              </legend>
              <div className="ml-[135px] mt-[70px] block">
                  <FacebookLogin
                   appId="7669411649797222"
                    autoLoad={false}
                    fields="name,email,picture"
                    size='small'
                    textButton='facebook'
                    cssClass="face-button"
                    // icon={facebook}
                    // onClick={componentClicked}
                    callback={responseFacebook}  />
                      <div id='loginbutton' className="google-btn" ></div>
              </div>
  
              <br/>
              <br/>
              <p className="float-left block ml-40 mt-5 ">
                or use another account
              </p>
              <br/>
              {errors.length>0 && errors.map((value,i)=>{
                return(<p key={i} className="text-red-500  block ml-[160px] w-[200px]">{value.msg}</p>);
              })}

              <input
                type="text"
                className="bg-slate-200 opacity-50 ml-[110px] w-[260px] h-10 outline-cyan-500"
                placeholder="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.errors.email  && formik.touched.email ? <div className="text-red-400 ml-[110px]">{formik.errors.email}</div>:''}
              <input
                type="text"
                className="bg-slate-200 opacity-50 ml-[110px] mt-5 w-[260px] h-10 outline-cyan-500"
                placeholder="username"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.uname}
                name="uname"
              />
              {formik.errors.uname && formik.touched.uname ? <div className="text-red-400 ml-[110px]">{formik.errors.uname}</div>:''}
              <input
                type={showpassword}
                className="bg-slate-200 opacity-50 ml-[110px] mt-5 w-[260px] h-10 outline-cyan-500"
                placeholder="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                name="password"
              />
              {formik.errors.password && formik.touched.password ? <div className="text-red-400 ml-[110px]">{formik.errors.password}</div>:''}
              <input
                type={showpassword}
                className="bg-slate-200 opacity-50 ml-[110px] mt-5 w-[260px] h-10 outline-cyan-500"
                placeholder="confirmPassword"
                name="confirmPassword"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
              />
              <br/>
              <input type='checkbox' className="ml-[110px] mt-[5px]" id='show'  onClick={showpasswordhandler} name="shown" value="shown"/>
              <label className="ml-[10px]" htmlFor="show">Show Password</label>
              {formik.errors.confirmPassword && formik.touched.confirmPassword ? <div className="text-red-400 ml-[110px]">{formik.errors.confirmPassword}</div>:''}
              <br/>
              <Link              
              to='/forgot-password'
              >
                <span
                className="ml-[150px] mt-4 text-pink-500 hover:text-pink-700 focus:underline focus:underline-offset-8 "
                >
                  Forgot you password?
                </span>
              </Link>
              <button type="submit" className="ml-[180px] mt-4 bg-pink-600 hover:bg-pink-900 rounded-full text-white block px-10 py-1 focus:bg-white focus:border-[1px] focus:border-pink-500 focus:text-black float-left ">
                Signup
              </button>
              <Link to="/login">
                <button className="ml-[180px] mt-4 bg-pink-600 hover:bg-pink-900 rounded-full text-white block px-[45px] py-1  focus:bg-white focus:border-[1px] focus:border-pink-500 focus:text-black float-left ">
                  Login
                </button>
              </Link>
            </form>
          </div>
          <div className="bg-gradient-to-r from-pink-500 to-yellow-500 rounded-r-lg  md:w-[30rem] sm:w-[400px]   hidden lg:block medium:block">
            <div className="mt-[220px]">
              <Fade right>
                <h1 className="text-white text-[30px] text-bold ml-36">
                  <Typewriter
                    className
                    onInit={(typewriter) => {
                      typewriter
                        .typeString("Welcome Back")
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString("Thank you visit website")
                        .start();
                    }}
                  />
                </h1>
              </Fade>
              <Fade left>
                <p className="text-white text-justify w-96 ml-16 medium:w-[260px]">
                  A good example of a paragraph contains a topic sentence, details
                  and a conclusion. 'There are many different kinds of animals
                  that live in China. Tigers and leopards are animals that live in
                  China's forests in the north
                </p>
              </Fade>
            </div>
          </div>
        </div>
      </section>
      </>);
}else if(changestatus==='two')
return ( <>
  <section className="bg-slate-700 h-screen w-screen    absolute top-0 left-0 ">
      <div className=" flex flex-row  bg-white rounded-lg h-[40rem] w-[60rem] relative top-20 left-[400px] z-10 ">
          <div className="bg-white rounded-t-lg rounded-b-lg w-[30rem]">
          <form className="" onSubmit={verificationhandler}>
              <legend className="mt-[170px] ml-[120px] text-pink-500 text-3xl font-bold">
                Verification
              </legend>
              <br />
              <br />

              <input
              type="text"
              pattern="\d*"
              maxLength="6"
              className="bg-slate-200 opacity-50 ml-[110px] w-[260px] h-10 outline-cyan-500"
              placeholder="verification"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="verification"
              value={formik.values.verification}
              />

              {formik.errors.verification && formik.touched.verification ? <div className="text-red-400 ml-[110px]">{formik.errors.verification}</div> :''}
              <button type="submit" className="ml-[180px] mt-4 bg-pink-600 hover:bg-pink-900 rounded-full text-white block px-[45px] py-1 focus:bg-white focus:border-[1px] focus:border-pink-500 focus:text-black ">
                Verify
              </button>
          </form>
          </div>
          <div className="bg-gradient-to-r from-pink-500 to-yellow-500 rounded-r-lg  w-[30rem]">
          <div className="mt-[220px]">
              <Fade right>
              <h1 className="text-white text-[30px] text-bold ml-36">
                  <Typewriter
                  className
                  onInit={(typewriter) => {
                      typewriter
                      .typeString("Forgot")
                      .pauseFor(2000)
                      .deleteAll()
                      .typeString("Password Thank you")
                      .start();
                  }}
                  />
              </h1>
              </Fade>
              <Fade left>
              <p className="text-white text-justify w-96 ml-16">
                  A good example of a paragraph contains a topic sentence, details
                  and a conclusion. 'There are many different kinds of animals
                  that live in China. Tigers and leopards are animals that live in
                  China's forests in the north
              </p>
              </Fade>
          </div>
          </div>
      </div>
  </section>
</>)
};

export default Signup;
