import axios from 'axios'
import React from 'react'
import { user_action } from '../store';

const VerifiedThunk = (obj,navigate) => {
  return async (dispatch)=>{
    const verify= async ()=>{
        const response=await axios.post('http://localhost:8000/verify-account',obj);
        
        if(response.data.status==='one'){
            dispatch(user_action.setchangestatus('one'))
            navigate('/');
        }

    }
    verify();
  }
}

export default VerifiedThunk