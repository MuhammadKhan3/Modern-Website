import { Splide, SplideSlide,SplideTrack } from '@splidejs/react-splide';
import React, { useEffect, useState } from 'react'
import '@splidejs/react-splide/css';

// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';

const Slider = (props) => {
     const [width,setwidth]=useState(0);
     const [heigth,setheigth]=useState(0); 

     useEffect(()=>{
      // if(window.innerWidth>400 && window.innerWidth<700){
        setwidth(150);
        setheigth(100);
      //  }
     },[])

      var thumbnails = {
        type:'loop',
        rewind          : true,
        fixedWidth      :width,
        fixedHeight     : heigth,
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
            fixedWidth  : width,
            fixedHeight :heigth,
          },
        },
      } ;
      
    //   main.sync(  );
    //   main.mount();
    //   thumbnails.mount();
      
      
 return (
<>
    


<h1 className='ml-[300px] text-pink-500 xl:ml-[630px] sm:ml-[240px] text-[35px] font-serif md:ml-[200px]' >Sponsor</h1>
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