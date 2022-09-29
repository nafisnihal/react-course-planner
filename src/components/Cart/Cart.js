import React from "react";
import "./Cart.css";
import logo from "../../pictures/logo.jpg";

const Cart = () => {
  return (
    <div className="cart">
      <div className="name">
        <img src={logo} alt="" />
        <div className="name-info">
          <h3>Nafis Nihal</h3>
          <p>Dhaka, Bangladesh</p>
        </div>
      </div>
      <div className="break">
        <p className="break-title">Select Minutes of Break Time</p>
        <div className="minutes">
          <button>10</button>
          <button>20</button>
          <button>30</button>
          <button>40</button>
        </div>
      </div>
      <div className="course-details">
        <h3>Course Details</h3>
        <div className="required-time">
          <p>Required Time:</p>
          <p>
            <span>00</span> Hours
          </p>
        </div>
        <div className="required-time">
          <p>Break Time:</p>
          <p>
            <span>00</span> Minutes
          </p>
        </div>
      </div>
      <div>
        <button className="btn-completed">Course Completed</button>
      </div>
    </div>
  );
};

export default Cart;
