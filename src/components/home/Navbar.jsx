import React, { useState } from "react";
import user from "../../assets/user.svg";
import cart from "../../assets/cart.svg";
import { List } from "phosphor-react";
import "./navbar.css";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  function openNav() {
    if (toggle) {
      setToggle(false);
      console.log(toggle);
    } else {
      setToggle(true);
      console.log(toggle);
    }
  }
  return (
    <div>
      <div className="navbar">
        <div className="left text-white">
          <h2>Furni.</h2>

          <span onClick={openNav} className="nav-btn"><List size={32} /></span>
        </div>
        <div className={` right animate  ${toggle ? "nav-open" : "nav-close"} `}>
          <ul >
            <li className="text-white fix">Home</li>
            <li className="hover">Shop</li>
            <li className="hover">About us</li>
            <li className="hover">Services</li>
            <li className="hover">Blog</li>
            <li className="hover">Contact us</li>
          </ul>
          <div className="d-flex gap-4">

          <div>
            <img src={user} alt="" />
          </div>
          <div>
            <img src={cart} alt="" />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
