// import React from 'react'
// import { Link } from 'react-router-dom'
// import ".//Navbar.css";
// export const Rightnav = () => {
 // 
//  return (
//     <ul>
//         <li className="nav-item">
//           <Link className="nav-link" to="">
//             Home
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="about">
//             About Us
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="services">
//             Services
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="portfolio">
//             Portfolio
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="studio">
//             Studio
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="blog">
//             Blog
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="contact">
//             Contact
//           </Link>
//         </li>
//       </ul>
//   )
// }
import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="navbar">
        <input type="checkbox" id="menu-toggle" checked={isOpen} onChange={toggleMenu} />
        <label htmlFor="menu-toggle" className="menu-button">
          <span className="hamburger-icon"></span>
          <span className="cross-icon"></span>
        </label>
        <ul className={`menu ${isOpen ? 'open' : ''}`}>
        <li className="nav-item">
      <Link className="nav-link" to="">
        Home
      </Link>
    </li>        
    <li className="nav-item">
         <Link className="nav-link" to="about">
           About Us
         </Link>
       </li>
       <li className="nav-item">
         <Link className="nav-link" to="services">
           Services
         </Link>
       </li>
       <li className="nav-item">
         <Link className="nav-link" to="portfolio">
           Portfolio
         </Link>
       </li>
       <li className="nav-item">
         <Link className="nav-link" to="studio">
           Studio
         </Link>
       </li>
       <li className="nav-item">
         <Link className="nav-link" to="blog">
           Blog
         </Link>
       </li>
       <li className="nav-item">
         <Link className="nav-link" to="contact">
           Contact
         </Link>
       </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
