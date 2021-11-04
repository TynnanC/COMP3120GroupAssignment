import React from "react";
import "../styles/sidebar.css";
import homeIcon from "../assets/homeIcon.svg";
import plusIcon from "../assets/plusIcon.svg";
import personIcon from "../assets/personIcon.svg";
import settingsIcon from "../assets/settingsIcon.svg";

// Sidebar will be placed into mainview
// todo change to react router
// Need to add mobile compatability

const Sidebar = () => {
  return (
    <div className="main-sidebar">
      <div className="sidebar-btn" title="Dashboard">
        <img className="btn" src={homeIcon} alt="" />
      </div>
      <div className="sidebar-btn" title="Add Workout">
        <img className="btn" src={plusIcon} alt="AddWorkout" />
      </div>
      <div className="sidebar-btn" title="Settings">
        <img className="btn" src={settingsIcon} alt="" />
      </div>
    </div>
  );
};

export default Sidebar;
