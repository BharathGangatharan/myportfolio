import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import LOGO from '../image/logo_2.png';
import "./Navbar.css";

function NewNavbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="nnavbar">
        <div className="nnav-container">
          <NavLink exact to="/" className="nnav-logo">
            <img src={LOGO} alt=''/>
          </NavLink>

          <ul className={click ? "nnav-menu active" : "nnav-menu"}>
            <li className="nnav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nnav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nnav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nnav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nnav-item">
              <NavLink
                exact
                to="/skills"
                activeClassName="active"
                className="nnav-links"
                onClick={handleClick}
              >
                Skills
              </NavLink>
            </li>
            <li className="nnav-item">
              <NavLink
                exact
                to="/projects"
                activeClassName="active"
                className="nnav-links"
                onClick={handleClick}
              >
                Projects
              </NavLink>
            </li>
            <li className="nnav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nnav-links"
                onClick={handleClick}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="nnav-icon" onClick={handleClick}>
             {click ? <CloseIcon/> :<MenuIcon/>}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NewNavbar;
































































// import React,{useState} from 'react';
// import {Link} from 'react-router-dom'
// import './Navbar.css'
// import MenuIcon from '@material-ui/icons/Menu';
// import CloseIcon from '@material-ui/icons/Close';

// const Navbar = () => {

//   const [isMobile, setIsMobile] = useState(false);

//   return (
//       <div className='nav-fix'>
//         <nav className='navbar'>
//             <div className='flex-logo'>
//             <h3 className='logo'>Bharath</h3>
//             </div>
//             <div className='flex'>
//             <ul className={isMobile ? "nav-links-mobile" :"Nav-links"}
//                 onClick={()=> setIsMobile(false)}
//             >
//                 <Link to='/' className='home'>
//                     <li>Home</li>
//                 </Link>
//                 <Link to='/about' className='about'>
//                     <li>About</li>
//                 </Link>
//                 <Link to='/skills' className='skills'>
//                     <li>Skills</li>
//                 </Link>
//                 <Link to='/projects' className='projects'>
//                     <li>Projects</li>
//                 </Link>
//                 <Link to='/contact' className='contact'>
//                     <li>Contact</li>
//                 </Link>
//             </ul>
//             </div>
//             <button className='mobile-menu-icon'
//                 onClick={()=>setIsMobile(!isMobile)}
//             >
//                 {
//                     isMobile ? <CloseIcon className='close'/>:<MenuIcon className='menu' />
//                 }

//             </button>
//         </nav>
//         </div>
//   )};

// export default Navbar;





























