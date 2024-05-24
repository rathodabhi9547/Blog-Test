import React from 'react' 
import Imageone from '../Imgs/img1.jpg'
//import ImageSignup from '../Imgs/signup1.png'
import {useNavigate} from 'react-router-dom'
import '../Styless/Home.css'
function Home() {

  const navigate=useNavigate()

  return (
    <div className=' text-center'>
    <div className='Home'style={{backgroundImage:`url(${Imageone})`}}>
    <p className='display-5 fw-bold text-white'>BOL-BANJARA</p>
      <div className='headerContainer '>
      <p>LOGIN TO JOIN US.!!</p>
    {/*
        <div className='rightSide' style={{backgroundImage:`url(${ImageSignup})`}}>*/}
          <button className=" btn " onClick={()=>navigate('/Login')}>LOGIN</button>

        </div>
    </div>
    </div>
  );
}

export default Home;
