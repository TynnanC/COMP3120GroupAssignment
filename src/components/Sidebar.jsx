import React from "react";
import "../styles/sidebar.css";
import homeIcon from "../assets/homeIcon.svg";
import plusIcon from "../assets/plusIcon.svg";
import settingsIcon from "../assets/settingsIcon.svg";
import profileIcon from "../assets/profileIcon.svg";

import { Link, BrowserRouter as Router } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="main-sidebar">
      <Link exact to="/" className="sidebar-btn" title="Dashboard">
        <img className="btn" src={homeIcon} alt="" />
      </Link>
      <Link to="/profile" className="sidebar-btn" title="Add Workout">
        <img className="btn" src={profileIcon} alt="AddWorkout" />
      </Link>
      <Link to="/" className="sidebar-btn" title="Settings">
        <img className="btn" src={settingsIcon} alt="" />
      </Link>
    </div>
  );
};

export default Sidebar;
