import React from "react";
import "./Milestones.css";

const Milestones = (props) => {
  const { name, details, img, time } = props.milestone;
  return (
    <div className="milestone">
      <img src={img} alt="" />
      <div className="milestone-info">
        <p className="milestone-name">{name}</p>
        <p>{details}</p>
        <p>
          <small>Required Time: {time} Hr</small>
        </p>
      </div>
      <button onClick={() => props.requiredTime({time})} className="btn-add">
        <p>Add To List</p>
      </button>
    </div>
  );
};

export default Milestones;
