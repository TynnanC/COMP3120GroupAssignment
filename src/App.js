import React from "react";
import "react-toastify/dist/ReactToastify.css";
import "./styles/App.css";
import Auth0Login from "./components/Auth0Login.js";
import { useAuth0 } from "@auth0/auth0-react";
import MainView from "./components/MainView";
import { Provider } from "./context";
import { ToastContainer } from "react-toastify";

//The main application component.
const App = () => {
  //Auth0 hook tracks if a user is authenticated or not.
  const { isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    return <Auth0Login />;
  }

  return (
    <Provider>
      <MainView />
      <ToastContainer />
    </Provider>
  );
};

export default App;
