import React from 'react';
import { useForm } from 'react-hook-form'
import { VscAccount } from "react-icons/vsc";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Signup() {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const navigate=useNavigate()
  const onFormSubmit = (userObj) => {
    axios.post('http://localhost:8000/user-api/create-user',userObj)
      .then(response => {
        alert(response.data.message);
        //if user is created only
        if(response.data.message==='New user has been created...'){
        //use navigate to login
        navigate('/login')
        }
      })
      .catch(error => 
        {
          console.log(error)
        alert("Something went wrong in creating user")
      })
  }
    


  return (
    <div className='mt-2 fw-bold'>
      <p className="display-3  text-secondary fw-bold">SIGN UP <VscAccount/></p>
     <hr />

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

            {/* date of birth */}
            <div className="mb-3">
              <label htmlFor="dob">Date of birth</label>
              <input type="date" id="dob" className="form-control" {...register("dob", { required: true })} />
              {/* validation error on dob */}
              {errors.dob?.type === 'required' && <p className='text-danger fw-bold'>* Date of birth required</p>}
            </div>

            {/* password */}
            <div className="mb-3">
              <label htmlFor="pwd">Password</label>
              <input type="password" id="pwd" className="form-control" placeholder='Enter Password' {...register("pwd", { required: true })} />
              {/* validation error on email */}
              {errors.pwd?.type === 'required' && <p className='text-danger fw-bold'>* Password required</p>}
            </div>

            {/* email */}
            <div className="mb-3">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" className="form-control" placeholder='Enter E-Mail'{...register("email", { required: true })} />
              {/* validation error on email */}
              {errors.email?.type === 'required' && <p className='text-danger fw-bold'>* Email required</p>}
            </div>

            {/* address */}
            <div className="mb-3">
              <label htmlFor="ad">Address</label>
              <textarea id="ad" rows={3} className="form-control" placeholder='Enter Address'{...register("address", { required: true })} ></textarea>
              {/* validation error on address */}
              {errors.address?.type === 'required' && <p className='text-danger fw-bold'>* Address required</p>}
            </div>
            
            {/* submit */}
            <button className="btn btn-success d-block  w-100">SignUp</button>
          </form>
          <br />
        </div>
      </div>


    </div>
  )
}

export default Signup;