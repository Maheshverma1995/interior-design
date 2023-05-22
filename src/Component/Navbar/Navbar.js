import React from "react";
import ".//Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Rightnav } from "./Rightnav";
// import "bootstrap/dist/js/bootstrap.bundle.js";
export const Navbar = () => {
  return (
    <nav>
      <div className="logo">Navbar</div>
      
        <Rightnav/>
    </nav>
  );
};
