// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import MenuIcon from '@material-ui/icons/Menu';
// import CloseIcon from '@material-ui/icons/Close';
// import "./NewNavbar.css";

// function NewNavbar() {
//   const [click, setClick] = useState(false);

//   const handleClick = () => setClick(!click);
//   return (
//     <>
//       <nav className="nnavbar">
//         <div className="nnav-container">
//           <NavLink exact to="/" className="nnav-logo">
//             Bharath
//             <i className="fas fa-code"></i>
//           </NavLink>

//           <ul className={click ? "nnav-menu active" : "nnav-menu"}>
//             <li className="nnav-item">
//               <NavLink
//                 exact
//                 to="/"
//                 activeClassName="active"
//                 className="nnav-links"
//                 onClick={handleClick}
//               >
//                 Home
//               </NavLink>
//             </li>
//             <li className="nnav-item">
//               <NavLink
//                 exact
//                 to="/about"
//                 activeClassName="active"
//                 className="nnav-links"
//                 onClick={handleClick}
//               >
//                 About
//               </NavLink>
//             </li>
//             <li className="nnav-item">
//               <NavLink
//                 exact
//                 to="/blog"
//                 activeClassName="active"
//                 className="nnav-links"
//                 onClick={handleClick}
//               >
//                 Skills
//               </NavLink>
//             </li>
//             <li className="nnav-item">
//               <NavLink
//                 exact
//                 to="/project"
//                 activeClassName="active"
//                 className="nnav-links"
//                 onClick={handleClick}
//               >
//                 Projects
//               </NavLink>
//             </li>
//             <li className="nnav-item">
//               <NavLink
//                 exact
//                 to="/contact"
//                 activeClassName="active"
//                 className="nnav-links"
//                 onClick={handleClick}
//               >
//                 Contact
//               </NavLink>
//             </li>
//           </ul>
//           <div className="nnav-icon" onClick={handleClick}>
//             {className={click ? <MenuIcon/> : <CloseIcon/>}}
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default NewNavbar;