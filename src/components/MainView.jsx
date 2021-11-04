import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Highlights from "./Highlights";
import "../styles/mainview.css";
import WorkoutView from "./WorkoutView";
const MainView = () => {
  return (
    // display flex col
    // con 2 display flex row
    <div className="main-mainview-container">
      <Header />
      <div className="flex-con">
        <Sidebar />
        <div className="content">
          <Highlights />
          <WorkoutView />
        </div>
      </div>
    </div>
  );
};

export default MainView;
