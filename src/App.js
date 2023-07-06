import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from './components/pages/Home';
import About from './components/pages/About'
import Projects from './components/pages/Projects'
import Skills from './components/pages/Skills'
import Contact from './components/pages/Contact'
import ScrollTop from './components/pages/ScrollTop'



function App() {

  return (
    <div className='app'>
      <Router>
        <ScrollTop/>
        <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
