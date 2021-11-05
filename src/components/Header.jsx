import React from "react";
import "../styles/header.css";
import { useAuth0 } from "@auth0/auth0-react";
const Header = () => {
  const { logout } = useAuth0();
  return (
    <div className="main-header-container">
      <div className="grid-container">
        <div></div>
        <div className="main-welcome-heading">Welcome</div>
        <div className="text-right">
          <button className="mt-1 mr-2" onClick={logout}>
            Log out
          </button>
        </div>
      </div>
      <div className="main-logo">EZIFIT</div>
    </div>
  );
};

export default Header;
