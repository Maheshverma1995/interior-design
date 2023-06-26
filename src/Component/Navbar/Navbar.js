import React from "react";
import ".//Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Rightnav } from "./Rightnav";
import "bootstrap/dist/js/bootstrap.bundle.js";
export const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="row bg-dark">

          <div >Navbar
          <Rightnav />
          </div>
           
        </div>
      </div>
    </nav>
  );
};
