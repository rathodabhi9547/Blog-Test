import React from 'react';
import {  NavLink } from 'react-router-dom';
import {useForm } from 'react-hook-form'
import { VscAccount } from "react-icons/vsc";
import  {userLogin}  from '../slices/userSlice';
import '../Styless/Login.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {

        const { register, handleSubmit, formState: { errors } } = useForm();
        //eslint-disable-next-line
        let {userObj, isError, isLoading, isSuccess, errMsg}=useSelector((state)=>state.user)


        const navigate=useNavigate()

        //get dispathc function to call action creator functions
        let dispatch=useDispatch();

        
        
      
        //form submit
        const onFormSubmit = async (userCredObj) => {
          dispatch(userLogin(userCredObj))
          axios.post('http://localhost:8000/user-api/login',userCredObj)
      .then(response => {
       alert(response.data.message);
        //if user is created only
        if(response.data.message==='successful'){
        //use navigate to login
        navigate('/Userprofile')
        }
      })
      .catch(error => 
        {
          console.log(error)
        alert("Something went wrong..!! Plz Signup first.!!")
      })
  
        };

         

  return (
    <div className='mt-2 fw-bold'>
      <p className="display-3  text-secondary fw-bold">LOGIN <VscAccount/></p>
     <hr />
     <br />

      <div className="row mx-auto">
        <div className=" col-11 col-sm-8 col-md-6 mx-auto ">
          <form className='bg-warning p-5' onSubmit={handleSubmit(onFormSubmit)}>
            {/* username */}
            <div className="mb-3">
              <label htmlFor="un">Username</label>
              <input type="text" id="un" className="form-control" placeholder='Enter Username' {...register("username", { required: true })} />
              {/* validation error on username */}
              {errors.username?.type === 'required' && <p className='text-danger fw-bold'>* Username required</p>}
            </div>
            
            {/* password */}
            <div className="mb-3">
              <label htmlFor="pwd">Password</label>
              <input type="password" id="pwd" className="form-control" placeholder='Enter Password' {...register("pwd", { required: true })} />
              {/* validation error on email */}
              {errors.pwd?.type === 'required' && <p className='text-danger fw-bold'>* Password required</p>}
              </div>
            {/* submit */}
            <button className="btn btn-success d-block  w-100">Login</button>
        
            <br />
            <p>Don't have an account?<NavLink to="/Signup" >SignUp</NavLink></p>
          </form>
        </div>
      </div>
    
      <br />
      <br />


    </div>
  );
}
export default Login;