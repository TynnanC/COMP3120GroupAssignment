import React, { useContext } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Highlights from "./Highlights";
import "../styles/mainview.css";
import WorkoutView from "./WorkoutView";
import Context from "../context";
const MainView = () => {
  const { workout } = useContext(Context);
  console.log({ workout });
  return (
    <div className="main-mainview-container">
      <Header />
      <div className="flex-con">
        <Sidebar />
        {workout.length > 0 && (
          <div className="content">
            <Highlights />
            <WorkoutView />
          </div>
        )}
      </div>
    </div>
  );
};

export default MainView;
