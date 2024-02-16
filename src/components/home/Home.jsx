import React from "react";
import "./home.css";
import Navbar from "./Navbar";

import { Plus } from "phosphor-react";

import couch from "../../assets/couch.png";
// import dots_light from "../../assets/dots-light.svg";
import product_1 from "../../assets/product-1.png";
import product_2 from "../../assets/product-2.png";
import product_3 from "../../assets/product-3.png";
import WhyChooseUs from "../WhyChooseUs";
import Design from "./Design";

const Home = () => {
  return (
    <div>
      <div className="first-container">
        <Navbar />
        <div className="inner-f-container">
          <div className="left-f-container">
            <h1>Modern Interior Design Studio</h1>      
            <p>
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </p>
            <div className="d-flex">
              <button className="btn-class yellow-btn">Shop Now</button>
              <button className="btn-class ">Explore</button>
            </div>
          </div>
          <div className="right-f-container">
            <div>
              <img src={couch} alt="" />
            </div>
            {/* <img src={dots_light} alt="" /> */}
          </div>
        </div>
      </div>
      <div className="second-container">
        <div className="left-s-container">
          <h3> Crafted with excellent material.</h3>
          <p>
            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
            velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
          </p>
          <button className="btn-class btn-black">Explore</button>
        </div>
        <div className="right-s-container">
          <div className="product-details">
            <div>
              <img src={product_1} alt="" />
            </div>
            <h6>Nordic Chair</h6>
            <h5>$50.00</h5>
            <span>
              <Plus size={32} />
            </span>
          </div>
          <div className="product-details">
            <div>
              <img src={product_2} alt="" />
            </div>
            <h6>Nordic Chair</h6>
            <h5>$50.00</h5>
            <span>
              <Plus size={32} />
            </span>
          </div>
          <div className="product-details">
            <div>
              <img src={product_3} alt="" />
            </div>
            <h6>Nordic Chair</h6>
            <h5>$50.00</h5>
            <span>
              <Plus size={32} />
            </span>
          </div>
        </div>
      </div>
      <WhyChooseUs />
      <Design />
      <div className="fifth-container">
        <div className="fifth-products">
          <div className="fifth-product-image">
            <img src={product_1} alt="" />
          </div>
          <div className="fifth-product-content">
            <h5>Nordiac Chair</h5>
            <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio</p>
            <h6>Read more</h6>
          </div>
        </div>
        <div className="fifth-products">
          <div className="fifth-product-image" >
            <img src={product_2} alt="" />
          </div>
          <div className="fifth-product-content">
            <h5>Kruzo Aero Chair</h5>
            <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio</p>
            <h6>Read more</h6>
          </div>
        </div>
        <div className="fifth-products">
          <div className="fifth-product-image">
            <img src={product_3} alt="" />
          </div>
          <div className="fifth-product-content">
            <h5>Ergonomic Chair</h5>
            <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio</p>
            <h6>Read more</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
