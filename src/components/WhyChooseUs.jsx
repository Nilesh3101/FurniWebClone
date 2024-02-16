import React from 'react'
import choose_us from "../assets/why-choose-us-img.jpg";
import dots_yellow from "../assets/dots-yellow.svg";
import truck from "../assets/truck.svg";
import bag from "../assets/bag.svg";
import returns from "../assets/return.svg";
import support from "../assets/support.svg";


const WhyChooseUs = () => {
  return (
    <div>
        <div className="third-container">
        <div className="left-t-container">
          <h2>Why Choose Us</h2>
          <p>
            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
            velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
          </p>
          <div className="inner-left-t-container">
            <div className="choose-benefits">
                <div>
                    <img src={truck} alt="" />
                </div>
                <h6> 
                Fast & Free Shipping
                </h6>
                <p>
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.
                </p>
            </div>
            <div className="choose-benefits">
                <div>
                    <img src={bag} alt="" />
                </div>
                <h6> 
                Easy to Shop
                </h6>
                <p>
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.
                </p>
            </div>
            <div className="choose-benefits">
                <div>
                    <img src={support} alt="" />
                </div>
                <h6> 
                24/7 Support
                </h6>
                <p>
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.
                </p>
            </div>
            <div className="choose-benefits">
                <div>
                    <img src={returns} alt="" />
                </div>
                <h6> 
                Hassle Free Returns
                </h6>
                <p>
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.

                </p>
            </div>
          </div>
        </div>
        <div className="right-t-container">
          <img src={dots_yellow} alt="" />
          <div>
            <img src={choose_us} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs