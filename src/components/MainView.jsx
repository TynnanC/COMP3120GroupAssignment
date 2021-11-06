import React, { useContext } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Highlights from "./Highlights";
import "../styles/mainview.css";
import WorkoutView from "./WorkoutView";
import Context from "../context";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserProfile from "../pages/UserProfile";
const MainView = () => {
  const { workout } = useContext(Context);
  return (
    <Router>
      <div className="main-mainview-container">
        <Header />
        <div className="flex-con">
          <Sidebar />
          <Switch>
            <Route exact path="/">
              {workout.length > 0 && (
                <div className="content">
                  <Highlights />
                  <WorkoutView />
                </div>
              )}
            </Route>
            <Route path="/profile" component={UserProfile}></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default MainView;
