import {Routes, Route} from 'react-router-dom'
import Home from './Components/Home';
import History from './Components/History';
import Language from './Components/Language';
import Dance from './Components/Dance';
import Signup from './Components/Signup';
import Culture from './Components/Culture';
import Footer from './Components/Footer';
import Login from './Components/Login'
import Navbar from './Components/Header';
import React  from 'react';
import { Navigate } from 'react-router-dom';
import Userprofile from './Components/Userprofile';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/History"  element={<History />}/>
        <Route path="" element={<Navigate to="/History" replace={true} />} />
        <Route path="/Language" element={<Language />}/>
        <Route path="/Dance" element={<Dance />}/>
        <Route path="/Culture" element={<Culture />}/>
        <Route path="/Login" element={<Login />}/>
        <Route path="/Signup" element={<Signup />}/>
        <Route path="/Userprofile" element={<Userprofile/>}/>
      </Routes>

      <Footer />
      </div>
  );
}

export default App;
