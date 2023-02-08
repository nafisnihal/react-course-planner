import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header">
      <h1 className="logo">Course Planner</h1>
      <div className="header">
        <a href="/">Milestones</a>
        <a href="/">Plan</a>
        <a href="/">About</a>
      </div>
    </nav>
  );
};

export default Header;
