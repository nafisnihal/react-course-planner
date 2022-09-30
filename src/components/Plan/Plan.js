import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Milestones from "../Milestones/Milestones";
import "./Plan.css";

const Plan = () => {
  const [milestones, setMilestones] = useState([]);

  useEffect(() => {
    fetch("milestone.json")
      .then((res) => res.json())
      .then((data) => setMilestones(data));
  }, []);

  const [time, setTime] = useState(0);

  const requiredTime = (Time) => {
    setTime(time + Time);
  };

  return (
    <div className="plan-container">
      <div className="milestone-container">
        {milestones.map((milestone) => (
          <Milestones
            key={milestone.id}
            milestone={milestone}
            requiredTime={requiredTime}
          ></Milestones>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart = {time}></Cart>
      </div>
    </div>
  );
};

export default Plan;
