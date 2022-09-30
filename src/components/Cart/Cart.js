import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Cart.css";
import logo from "../../pictures/logo.jpg";

const Cart = ({ cart }) => {
  const [breakTime, setBreakTime] = useState([]);
  useEffect(() => {}, [breakTime]);
  const addLocalStorage = (Time) => {
    localStorage.setItem("break", Time);
    setBreakTime(Time);
  };
  const getLocalStorageItem = localStorage.getItem("break");

  const notify = () => toast("Great, You've Completed");

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
          <button onClick={(e) => addLocalStorage(e.target.innerText)}>
            10
          </button>
          <button onClick={(e) => addLocalStorage(e.target.innerText)}>
            20
          </button>
          <button onClick={(e) => addLocalStorage(e.target.innerText)}>
            30
          </button>
          <button onClick={(e) => addLocalStorage(e.target.innerText)}>
            40
          </button>
        </div>
      </div>
      <div className="course-details">
        <h3>Course Details</h3>
        <div className="required-time">
          <p>Required Time:</p>
          <p>
            <span>{cart}</span> Hours
          </p>
        </div>
        <div className="required-time">
          <p>Break Time:</p>
          <p>
            <span>{getLocalStorageItem}</span> Minutes
          </p>
        </div>
      </div>
      <div>
        <button onClick={notify} className="btn-completed">
          Course Completed
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Cart;
