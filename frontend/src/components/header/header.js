import React, { useEffect, useState } from 'react';
import Slider from './slider';
import '../humburgermenu/buger.css';
import Typewriter from "typewriter-effect";
import { Cookies } from 'react-cookie';
import Slide from 'react-reveal/Slide'
import { Link, useNavigate } from 'react-router-dom';
const Header = () => {
  const cookie=new Cookies();
  const navigate=useNavigate();

  const [burgerflag,setflag]=useState("");
  const [burger,setburger]=useState('');
  const [screensize,setscreen]=useState(0);
  const burgermenuhandler=(value)=>{
    if(burgerflag===""){
      setflag('block');
      setburger('change');
      console.log(burgerflag);
    }else{
      console.log(burgerflag);
      setflag("hidden")
      setburger('');
    }
  }

  //logout  handler
  const logouthandler=()=>{
    console.log('logout')
    cookie.remove('token');
    cookie.remove('userId');
    navigate('/signup')

  }
  // useEffect(()=>{
  //   function display(){
  //     setscreen(window.innerWidth)
  //   }
  //   window.addEventListener('resize',display);
  //   return ()=>{ window.removeEventListener('resize',display)};
  // },[])

  return (
  <main className='w-auto xl:w-[99rem] sm:w-auto  md:w-auto '>
    <header className='bg-gradient-to-r h-auto w-auto  xl:w-[98.5rem] from-pink-500 to-yellow-500 mobile:h-[40rem]  ' >
        <nav  className=' flex z-50 '>

      <div  className={` bg-${burgerflag==='block' ? "white":""}   w-30 h-40`}> 
        <div onClick={()=>{burgermenuhandler('hidden')}} className={`ml-5 mt-3   h-16  hidden  sm:block mobile:block tablet:block w-20   ${burger}`} >
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
        </div>
        
        <div className={`h-[40rem] mt-10 sm:transition sm:delay-700 sm:duration-300 sm:ease-in-out xl:hidden w-44     absolute z-50 bg-white hidden   sm:h-[33.8rem] top-3  sm:${burgerflag}   mobile:${burgerflag} tablet:${burgerflag}`}>
            <ul className='flex flex-col space-y-0  font-serif  cursor-pointer     xl:text-xl m-0 sm:text-sm mobile:text-sm  '>
                <li className='text-pink-400 mt-4  hover:bg-pink-400 hover:text-white  text-center p-2'>Home</li> 
                 <li className='text-pink-400 mt-4  hover:bg-pink-400 hover:text-white  text-center p-2'>Products</li>
                <li className='text-pink-400 mt-4  hover:bg-pink-400 hover:text-white  text-center p-2'>Servis</li>
                <li className='text-pink-400 mt-4  hover:bg-pink-400 hover:text-white  text-center p-2'>Contact</li>
                
                 <li className='text-pink-400 mt-4  hover:bg-pink-400 hover:text-white  text-center p-2'> Login</li>
          
            </ul>
        </div>
      </div>          


      <div className='hidden md:block xl:block  z-50 '>
          <ul className='flex space-x-4  font-serif  cursor-pointer    divide-white divide-x-2 xl:text-xl sm:text-sm   '>
              <li className='text-white mt-4  hover:shadow-lg hover:shadow-lime-100 pl-2'>Home</li>
              <li className='text-white mt-4 hover:shadow-lg hover:shadow-lime-100 pl-2'>Products</li>
              <li className='text-white mt-4 hover:shadow-lg hover:shadow-lime-100 pl-2'>Servis</li>
              <li className='text-white mt-4 hover:shadow-lg hover:shadow-lime-100 pl-2'>Contact</li>
              {!cookie.get('token') &&
              <Link to="/login">
                 <li className='text-white mt-4 hover:shadow-lg hover:shadow-lime-100 pl-2'>Login</li>
              </Link>
               }
               {cookie.get('token') &&
              <li className='text-white mt-4 hover:shadow-lg hover:shadow-lime-100 pl-2' onClick={logouthandler}>Logout</li>
               }
          </ul>
      </div>
      <div className='ml-10px  xl:ml-[800px] md:ml-[250px] sm:ml-[120px] '>
        <input type='search' placeholder='search' className='bg-white opacity-60   w-60 h-12 rounded-lg mt-4 outline-white focus: focus: outline-offset-2 focus: outline-1 focus:opacity-100  xl:w-40 xl:h-10'/>
      </div>
      </nav>
    <div className='w-auto flex  relative z-30 '>
      <div className=' flex-1'>
        <h1 className='text-[35px] lg:text-2xl sm:text-lg xl:text-[40px] w-96 mt-2 ml-4 font-serif text-white'>

             <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Beautiful Innoviate")
                    .pauseFor(2000)
                    .start();
                }}
              />
             <Typewriter
                onInit={(typewriter) => {
                  typewriter
                  .pauseFor(2000)
                    .typeString("Effective Website")

                    .start();
                }}
              />

        </h1>
        
        <p className=' text-[18px] lg:text-sm md:text-sm xl:text-sm    xl:w-72 sm:text-xs  text-white text-23 ml-10 font-serif'>
          Lorem ipsum, in graphical and textual context,
          refers to filler text that is placed in a document
          or visual presentation. Lorem ipsum is derived 
          from the Latin "dolorem ipsum" roughly translated as "pain itself
          <button className='border-2 ml-12 text-white border-white hover:bg-white hover:text-pink-400'>
          Read more
        </button>
        </p>
      </div>
      <div className=' mt-[50px] flex-1'>
        <img src={require('../../assets/slider2.jpg')} className='rounded-full w-[200px] h-[200px] hidden tablet:block sm:block xl:w-[826px] xl:h-[380px] lg:w-[826px] lg:h-[380px] md:w-[826px] md:h-[380px] ' alt='slider'/>
      </div>

    </div>
</header>
 <section className='bg-slate-50 font-serif '>

<Slide top>

   <h1 className='text-pink-500 ml-[220px] xl:ml-[630px] sm:ml-[230px] text-[35px] font-serif'>Courses</h1>
    <div className='flex flex-col xl:ml-[12.68rem] sm:flex sm:flex-col sm:ml-36  lg:ml-4  md:flex  xl:flex lg:flex md:flex-row lg:flex-row xl:flex-row '>
      <div className=' h-auto  w-auto text-[22px] border-2 ml-8  shadow-lg shadow-pink-300 rounded-lg    bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500   text-center hover:scale-[1.1] lg:w-[25rem]   sm:h-[24rem] sm:w-[28rem]  xl:text-lg xl:h-auto'>
        <h1 className='mobile:text-[30px]  text-white font-serif text-[25px] ml-0 p-0'>Database Project</h1>
        <img src={require('../../assets/course1.png')} className=' ml-[120px] rounded-full w-[100px]  h-[100px] xl:ml-[120px] sm:ml-[160px]  mt-[20px] ' alt='cousepic'/>
        <p className='text-white overflow-hidden font-serif text-justify p-5'>The lorem ipsum is a placeholder text used in publishing and graphic design. This filler text is a short paragraph that contains all the letters of the alphabet. The characters are spread out evenly so that the reader's attention is focused on the layout of the text instead of its content</p>
        <button className='bg-blue-600 p-1 rounded-lg text-[17px]  text-white hover:text-black hover:bg-white '>Read More</button>
      </div>
      <div  className=' h-auto  w-auto text-[22px] border-2 ml-8 rounded-lg shadow-lg shadow-cyan-500/50  bg-gradient-to-r from-green-500 via-blue-400 to-purple-600  text-center hover:scale-[1.1] lg:w-[25rem] sm:h-[24rem] sm:w-[28rem] xl:text-lg xl:h-auto'>
        <h1 className='mobile:text-[30px] text-white font-serif text-[25px] ml-0 p-0'>Mern Stack</h1>
        <img src={require('../../assets/course2.png')} className='rounded-full w-[100px] h-[100px] ml-[120px]  mt-[20px] sm:ml-[160px]' alt='course2'/>
        <p className='text-white font-serif text-justify p-5'>The lorem ipsum is a placeholder text used in publishing and graphic design. This filler text is a short paragraph that contains all the letters of the alphabet. The characters are spread out evenly so that the reader's attention is focused on the layout of the text instead of its content</p>
        <button className='bg-green-500 p-1 rounded-lg text-[17px]  text-white  hover:text-black hover:bg-white'>Read More</button>
      </div>
      <div  className=' h-auto  w-auto text-[22px]  border-2 ml-8 rounded-lg shadow-lg shadow-cyan-500/50 bg-gradient-to-r from-yellow-400 via-green-500 to-purple-500   text-center hover:scale-[1.1] lg:w-[25rem] sm:h-[24rem] sm:w-[28rem] xl:text-lg xl:h-auto'>
        <h1 className='text-white font-serif text-[25px] ml-0 p-0'>React js</h1>
        <img src={require('../../assets/course3.png')} className='rounded-full w-[100px] h-[100px] ml-[120px] mt-[20px] sm:ml-[160px]' alt='course3'/>
        <p className='text-white font-serif text-justify p-5'>The lorem ipsum is a placeholder text used in publishing and graphic design. This filler text is a short paragraph that contains all the letters of the alphabet. The characters are spread out evenly so that the reader's attention is focused on the layout of the text instead of its content</p>
        <button className='bg-purple-600 p-1 rounded-lg text-[17px]  text-white hover:text-black hover:bg-white'>Read More</button>
      </div>
    </div>  
    </Slide>
 
    <div className='mt-10'>
      <Slider screensize={screensize}/>
    </div>
  </section>

  <hr/>
  </main>

  )
}

export default Header