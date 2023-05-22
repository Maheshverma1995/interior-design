import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './Component/Navbar/Navbar';
import {Home} from './Component/Home/Home';
import { About } from './Component/About/About';
import { Services } from './Component/Services/Services';
import { Portfolio } from './Component/Portfolio/Portfolio';
import { Blog } from './Component/Blog/Blog';
import { Contact } from './Component/Contact/Contact';
import { Studio } from './Component/Studio/Studio';


function App() {
  return (
  <Router>
  <Navbar />
  <Routes>
    <Route path="/" element={<Home/>} />
<Route path="/about" element={<About/>}/>
<Route path="/services" element={<Services/>}/>
<Route path="/portfolio" element={<Portfolio/>}/>
<Route path="/studio" element={<Studio/>}/>
<Route path="/blog" element={<Blog/>}/>
<Route path="/contact" element={<Contact/>}/>
  </Routes>

  </Router>    
  );
}

export default App;
