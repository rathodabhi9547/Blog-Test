import React from 'react' 
import Imageone from '../Imgs/Banjara Logo.png';
//import ImageSignup from '../Imgs/signup1.png'
import {useNavigate} from 'react-router-dom';
import Img2 from '../Imgs/img2.jpg';
import '../Styless/Home.css'
function Home() {

  const navigate=useNavigate()

  return (
    <div className=' text-center'>
    <div className='Home'style={{backgroundImage:`url(${Img2})`}}>
    <p className='display-5 fw-bold text-black'>BLOGGING</p>
      <div className='headerContainer '>
      <p>LOGIN TO JOIN US.!!</p>
    {/*
        <div className='rightSide' style={{backgroundImage:`url(${ImageSignup})`}}>*/}
          <button className=" btn " onClick={()=>navigate('/Blogging')}>BLOG</button>

        </div>
    </div>
    </div>
  );
}

export default Home;
