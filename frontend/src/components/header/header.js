import React from 'react'
import Slider from './slider'

const Header = () => {
  return (
  <main className=' '>
    <header className='bg-gradient-to-r h-[32rem] from-pink-500 to-yellow-500  '>
        <nav  className=' flex'>
      <div className=''>
          <ul className='flex space-x-4  font-serif text-xl cursor-pointer    divide-white divide-x-2  '>
              <li className='text-white mt-4  hover:shadow-lg hover:shadow-lime-100 pl-2'>Home</li>
              <li className='text-white mt-4 hover:shadow-lg hover:shadow-lime-100 pl-2'>Products</li>
              <li className='text-white mt-4 hover:shadow-lg hover:shadow-lime-100 pl-2'>Servis</li>
              <li className='text-white mt-4 hover:shadow-lg hover:shadow-lime-100 pl-2'>Contact</li>
              <li className='text-white mt-4 hover:shadow-lg hover:shadow-lime-100 pl-2'>Login</li>
          </ul>
      </div>
      <div >
        <input type='search' placeholder='search' className='ml-[700px] bg-white opacity-60   w-48 h-9 rounded-lg mt-4 outline-white focus: focus: outline-offset-2 focus: outline-1 focus:opacity-100 '/>
      </div>
      </nav>
    <div className='flex'>
      <div className=' flex-1'>
        <h1 className='text-[40px] w-96 mt-20 ml-4 font-serif text-white'>
          Beautiful Innoviate
          Effective websites
        </h1>
        <p className='w-72  text-white text-23 ml-10 font-serif'>
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
        <img src={require('../../assets/slider2.jpg')} className='rounded-full w-[826px] h-[380px] ' alt='slider'/>
      </div>

    </div>
</header>
 <section className='bg-slate-50 font-serif'>
   <h1 className='text-pink-500 ml-[630px] text-[35px] font-serif'>Courses</h1>
    <div className='flex ml-6 mt-3'>
      <div className=' border-2 ml-8 shadow-lg shadow-pink-300 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-[400px] h-82 text-center hover:scale-[1.1] '>
        <h1 className='text-white font-serif text-[25px] ml-0 p-0'>Database Project</h1>
        <img src={require('../../assets/course1.png')} className='rounded-full w-[100px] h-[100px] ml-[120px] mt-[20px] ' alt='cousepic'/>
        <p className='text-white font-serif text-justify p-5'>The lorem ipsum is a placeholder text used in publishing and graphic design. This filler text is a short paragraph that contains all the letters of the alphabet. The characters are spread out evenly so that the reader's attention is focused on the layout of the text instead of its content</p>
        <button className='bg-blue-600 p-1 rounded-lg text-[17px]  text-white hover:text-black hover:bg-white'>Read More</button>
      </div>
      <div  className='border-2 ml-8 rounded-lg shadow-lg shadow-cyan-500/50  bg-gradient-to-r from-green-500 via-blue-400 to-purple-600 w-[400px] h-96 text-center hover:scale-[1.1]'>
        <h1 className='text-white font-serif text-[25px] ml-0 p-0'>Mern Stack</h1>
        <img src={require('../../assets/course2.png')} className='rounded-full w-[100px] h-[100px] ml-[120px] mt-[20px]' alt='course2'/>
        <p className='text-white font-serif text-justify p-5'>The lorem ipsum is a placeholder text used in publishing and graphic design. This filler text is a short paragraph that contains all the letters of the alphabet. The characters are spread out evenly so that the reader's attention is focused on the layout of the text instead of its content</p>
        <button className='bg-green-500 p-1 rounded-lg text-[17px]  text-white  hover:text-black hover:bg-white'>Read More</button>
      </div>
      <div  className='border-2 ml-8 rounded-lg shadow-lg shadow-cyan-500/50 bg-gradient-to-r from-yellow-400 via-green-500 to-purple-500  w-[400px] h-82 text-center hover:scale-[1.1]'>
        <h1 className='text-white font-serif text-[25px] ml-0 p-0'>React js</h1>
        <img src={require('../../assets/course3.png')} className='rounded-full w-[100px] h-[100px] ml-[120px] mt-[20px]' alt='course3'/>
        <p className='text-white font-serif text-justify p-5'>The lorem ipsum is a placeholder text used in publishing and graphic design. This filler text is a short paragraph that contains all the letters of the alphabet. The characters are spread out evenly so that the reader's attention is focused on the layout of the text instead of its content</p>
        <button className='bg-purple-600 p-1 rounded-lg text-[17px]  text-white hover:text-black hover:bg-white'>Read More</button>
      </div>
    </div>
    <div className='mt-10'>

      <Slider/>
    </div>
  </section>
  <hr/>
  </main>

  )
}

export default Header