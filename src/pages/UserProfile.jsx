import React from "react";
import ClientProfile from "../components/ClientProfile";
import ListCompleteWorkout from "../components/ListCompleteWorkout";
import "../styles/userProfilePage.css";
const UserProfile = () => {
  return (
    <div className="main-user-profile-page">
      <ClientProfile />
      <ListCompleteWorkout />
    </div>
  );
};

export default UserProfile;
