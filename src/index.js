import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import Auth_config from "./Auth_config.json"

ReactDOM.render(
  <Auth0Provider
    domain=  {Auth_config.domain}
    clientId={Auth_config.clientId}
    redirectUri={window.location.origin}
    audience={Auth_config.audience}
    scope={Auth_config.scope}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
