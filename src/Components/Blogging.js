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
        if(response.data.message==='New Post has been created...'){
        //use navigate to login
        navigate('/Blogging')
        }
      })
      .catch(error => 
        {
          console.log(error)
        alert("Something went wrong!")
      })
  }
    


  return (
    <div className='mt-2 fw-bold'>
      <p className="display-3  text-secondary fw-bold">CONTENT</p>
     <hr />

      <div className="row mx-auto">
        <div className=" col-11 col-sm-8 col-md-6 mx-auto ">
          <form className='bg-warning p-5' onSubmit={handleSubmit(onFormSubmit)}>
            {/* title */}
            <div className="mb-3">
              <label htmlFor="un">Title</label>
              <input type="text" id="un" className="form-control" placeholder='Enter Title' {...register("username", { required: true })} />
              {/* validation error on username */}
              {errors.username?.type === 'required' && <p className='text-danger fw-bold'>* Username required</p>}
            </div>

            {/* body */}
            <div className="mb-3">
              <label htmlFor="ad">Body</label>
              <textarea id="ad" rows={3} className="form-control" placeholder='Enter details'{...register("address", { required: true })} ></textarea>
              {/* validation error on address */}
              {errors.address?.type === 'required' && <p className='text-danger fw-bold'>* Address required</p>}
            </div>

            {/* tags */}
            <div className="mb-3">
              <label htmlFor="un">Tags</label>
              <input type="text" id="un" className="form-control" placeholder='Enter tags' {...register("tags", { required: true })} />
              {/* validation error on username */}
              {errors.username?.type === 'required' && <p className='text-danger fw-bold'>* Username required</p>}
            </div>

            
            
            {/* submit */}
            <button className="btn btn-success d-block  w-100">Post</button>
          </form>
          <br />
        </div>
      </div>


    </div>
  )
}

export default Signup;