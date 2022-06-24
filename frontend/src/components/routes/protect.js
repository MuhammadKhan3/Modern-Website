import React, { useEffect } from 'react'
import {Cookies} from 'react-cookie'
import { useNavigate } from 'react-router-dom';
const cookie=new Cookies();

const Protect = (props) => {
    const Component=props.Component;
    
    const navigate=useNavigate();
    useEffect(()=>{
        if(cookie.get('token') && cookie.get('userId')){
            navigate('/');
        }    
    },[])
    const token=cookie.get('token');
  return (
    <>
      {token && <Component/>}
    </>
  )
}

export default Protect