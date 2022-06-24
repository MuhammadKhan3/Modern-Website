import { configureStore } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  flag:true,data:'',emailstatus:'one',email:'',changestatus:'one',errors:[]
}

export const userSlice = createSlice({
    name: 'userslice',
    initialState,
    reducers: {
      setflag:(state,action)=>{
        state.flag=action.payload;
      },
      setdata:(state,action)=>{
        state.data=action.payload;
      },
      setemailstatus:(state,action)=>{
        state.emailstatus=action.payload;
      },
      setemail:(state,action)=>{
        state.email=action.payload;
      },
      setchangestatus:(state,action)=>{
        state.changestatus=action.payload;
      },
      seterrors:(state,action)=>{
        state.errors=action.payload;
      }
    },
})

export const user_action=userSlice.actions;

export const store = configureStore({
  reducer: {
      userSlice:userSlice.reducer
  },
})