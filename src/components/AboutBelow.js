import React from 'react';
import './AboutBelow.css'
import HomeIcon from '@material-ui/icons/Home';


const AboutBelow = () => {
  return (
    <div className='about_main_container'>
        <div className='aboutCont'>
        <h2><a href='/'>Home</a></h2>
        <HomeIcon/> 
        <h1>/</h1>
        <h2>About</h2>
        </div>
    </div>
  )};

export default AboutBelow;
