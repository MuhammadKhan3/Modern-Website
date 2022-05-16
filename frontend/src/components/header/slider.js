import { Splide, SplideSlide,SplideTrack } from '@splidejs/react-splide';
import React from 'react'
import '@splidejs/react-splide/css';

// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';

const Slider = () => {
    
      var thumbnails = {
        type:'loop',
        rewind          : true,
        fixedWidth      : 190,
        fixedHeight     : 188,
        isNavigation    : true,
        gap             : 10,
        focus           : 'center',
        pagination      : false,
        cover           : true,
        autoplay:true,
        dragMinThreshold: {
          mouse: 4,
          touch: 10,
        },
        breakpoints : {
          640: {
            fixedWidth  : 66,
            fixedHeight : 38,
          },
        },
      } ;
      
    //   main.sync(  );
    //   main.mount();
    //   thumbnails.mount();
      
      
 return (
<>
    


<h1 className='text-pink-500 ml-[630px] text-[35px] font-serif'>Sponsor</h1>
<Splide hasTrack={ false } options={thumbnails}
//   {
//     type:'loop',
//     rewind: true,
//     autoplay:true,

//     gap   : '1rem',
//   } 
  aria-label="...">
  <div className="custom-wrapper">
    <SplideTrack>
      {/* <SplideSlide>...</SplideSlide> */}
      <SplideSlide>
      <img src={require('../../assets/course1.png')} alt="course1"/>
    </SplideSlide>
    <SplideSlide>
    <img src={require('../../assets/course2.png')} alt="course1"/>
    </SplideSlide>
    <SplideSlide>
    <img src={require('../../assets/course3.png')} alt="course1"/>
    </SplideSlide>
    <SplideSlide>
    <img src={require('../../assets/course4.jpg')} alt="course1"/>
    </SplideSlide>
    <SplideSlide>
    <img src={require('../../assets/course5.png')} alt="course1"/>
    </SplideSlide>
    <SplideSlide>
    <img src={require('../../assets/course6.png')} alt="course1"/>
    </SplideSlide>
    <SplideSlide>
    <img src={require('../../assets/course7.PNG')} alt="course1"/>
    </SplideSlide>
    </SplideTrack>

    <div className="splide__arrows" />
  </div>
</Splide>  
 </>
  )
}

export default Slider