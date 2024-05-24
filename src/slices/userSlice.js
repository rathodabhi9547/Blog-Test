import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//make http post req for login user
export const userLogin= createAsyncThunk('loginuser',async(userCredObj,thunkApi)=>{
    let response=await axios.post('/user-api/login',userCredObj);
    let data=response.data;
    if(data.message==='successful'){
      //store token in local storage
      localStorage.setItem("token",data.payload);
      return data.userObj;

    }
    if(data.message==='User is invalid.!! (or) Plzz SIGNUP first.!!' || data.message==='Password is invalid.!!'){
      return thunkApi.rejectWithValue(data)
    }

})


let userSlice=createSlice({
    name:'user',
    initialState:{
        userObj:{},
        isError:false,
        isSuccess:false,
        isLoading:false,
        errMsg:''
    },
    reducers:{
        clearLoginStatus:(state)=>{
            state.isSuccess=false;
            state.userObj=null;
            state.isError=false;
            state.errMsg='';
            return state;
        }    
    },
    extraReducers:{
         //track life cycle of primose returned by createAsyncThunk function
    [userLogin.pending]:(state,action)=>{
        state.isLoading=true;
      },
      [userLogin.fulfilled]:(state,action)=>{
        state.userObj=action.payload;
        state.isLoading=false;
        state.isError=false;
        state.isSuccess=true;
        state.errMsg=''
      },
      [userLogin.rejected]:(state,action)=>{
        state.isError=true;
        state.isLoading=false;
        state.isSuccess=false;
        state.errMsg=action.payload.message;
      }
    }

})


//export action creators
export const {clearLoginStatus}=userSlice.actions;
//export reducers
export default userSlice.reducer