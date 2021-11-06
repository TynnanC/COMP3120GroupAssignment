import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../styles/clientprofile.css";

const ClientProfile = () => {
  const { user } = useAuth0();
  return (
    <div className="main-client-profile-container">
      <div className="main-client-profile-content">
        <img className="client-picture" src="https://robohash.org/a" alt="" />
        <div className="main-client-data-container">
          <h1>Your Details:</h1>
          <p>EMAIL: {user.email}</p>
          <p>FIRST NAME: {user.name}</p>
        </div>
      </div>
    </div>
  );
};

export default ClientProfile;
