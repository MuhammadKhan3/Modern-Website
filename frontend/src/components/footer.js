import React from 'react'

const Footer = () => {
  return (
  <>
    <hr/>
    <section className='font-serif static h-80 bg-gradient-to-r shadow-lg shadow-blue-300 from-green-500  via-purple-600 to-purple-500'>
      <div className='flex flex-row space-x-[30px] ml-24 relative top-16 '>
        <div className=' text-white font-serif text-[17px]'>
         <ul className='flex flex-col'>
          <h1 className='text-[20px]'>Plays+info</h1>
            <li>Current season</li>
            <li>Curicularam</li>
            <li>Buy Tickets</li>
            <li>About Us</li>
            <li>Staff Security</li>
          </ul>
        </div>
        <div className=' text-white font-serif text-[17px]'>
         <ul className='flex flex-col'>
          <h1 className='text-[20px]'>Contact us</h1>
            <li>Current season</li>
            <li>Curicularam</li>
            <li>Buy Tickets</li>
            <li>About Us</li>
            <li>Staff Security</li>
          </ul>
        </div>
        <div className=' text-white font-serif text-[17px]'>
         <ul className='flex flex-col'>
          <h1 className='text-[20px]'>Need Help</h1>
            <li>Current season</li>
            <li>Curicularam</li>
            <li>Buy Tickets</li>
            <li>About Us</li>
            <li>Staff Security</li>
          </ul>
        </div>
        <div className=' text-white font-serif text-[17px]'>
         <ul className='flex flex-col'>
          <h1 className='text-[20px]'>Visit Us</h1>
            <li>Current season</li>
            <li>Curicularam</li>
            <li>Buy Tickets</li>
            <li>About Us</li>
            <li>Staff Security</li>
          </ul>
        </div>
        <div className=' text-white font-serif text-[17px]'>
         <ul className='flex flex-col'>
          <h1 className='text-[20px]'>Support</h1>
            <li>Current season</li>
            <li>Curicularam</li>
            <li>Buy Tickets</li>
            <li>About Us</li>
            <li>Staff Security</li>
          </ul>
        </div>
        <div className='w-[430px] text-white font-serif text-[17px]'>
         <h1 className='text-[20px]'>Stay Connected</h1>
         <p >
         With it installed in the code editor you are using, you can type “lorem” and then tab and it will expand into a paragraph of Lorem Ipsum placeholder text. But it can  type of the conclusion
         </p>
          
          <div className='mt-2'>
            <input type='search' placeholder='Enter Email' className='text-black opacity-50 rounded-lg p-1 outline-blue-300 hover:opacity-100'/>
            <button className='bg-blue-500  shadow-sm ml-2 p-0.5 rounded-lg hover:bg-white hover:text-purple-600'>
              signup
            </button>
          </div>
         <div className='flex flex-row mt-2 space-x-2'>
         <img src={require('../assets/facebook.png')}   className='w-10 hover:scale-[1.1]' alt='facebook'/>
         <img src={require('../assets/twitter.png')}    className='w-10 hover:scale-[1.1]' alt='facebook'/>
         <img src={require('../assets/linkedin.png')}   className='w-10 hover:scale-[1.1]' alt='facebook'/>
         <img src={require('../assets/youtube.png')}    className='w-10 hover:scale-[1.1]' alt='facebook'/>
         <img src={require('../assets/instagram.png')}  className='w-10 hover:scale-[1.1]' alt='facebook'/>

         </div>
        </div>
      </div>
    </section>
  </>
  )
}
export default Footer