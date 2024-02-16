import React from "react";
import "./design.css";
// import dots_green from "../../assets/dots-green.svg";
import img_grid_1 from "../../assets/img-grid-1.jpg";
import img_grid_2 from "../../assets/img-grid-2.jpg";
import img_grid_3 from "../../assets/img-grid-3.jpg";


const Design = () => {
  return (
    <div>

   
    <div className="design-container container-fluid m-0 px-4"  >
      <div className="left-design-photo">
        <div className="design-img1">

        <img  src={img_grid_1} alt="" />
        </div>
        <div className="design-img2">

        <img src={img_grid_2} alt="" />
        </div>
        <div className="design-img3">

        <img src={img_grid_3} alt="" />
        </div>
      </div>
      <div className="right-design-details ">
        <h2>We Help You Make Modern Interior Design</h2>
        <p>
          Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis
          nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate
          velit imperdiet dolor tempor tristique. Pellentesque habitant morbi
          tristique senectus et netus et malesuada
        </p>
        <ul>
            <li>Donec vitae odio quis nisl dapibus malesuada</li>
            <li>Donec vitae odio quis nisl dapibus malesuada</li>
            <li>Donec vitae odio quis nisl dapibus malesuada</li>
            <li>Donec vitae odio quis nisl dapibus malesuada</li>
        </ul>
        <button className="btn-class btn-black w-25">Explore</button>
      </div>
    </div>
    
    </div>
  );
};

export default Design;
