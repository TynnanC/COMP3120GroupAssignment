import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {Auth0Provider} from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
  domain="dev-d-ju3bdt.us.auth0.com"
  clientId="lDXFwHUEntIE0a8EoV6Mft6X5UaIVK0N"
  redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
