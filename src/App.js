import {Routes, Route} from 'react-router-dom'
import Home from './Components/Home';
import Footer from './Components/Footer';
import Navbar from './Components/Header';
import Blogging from './Components/Blogging';
import React  from 'react';
import './App.css';
function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Blogging" element={<Blogging />}/>
    
      </Routes>

      <Footer />
      </div>
  );
}

export default App;
