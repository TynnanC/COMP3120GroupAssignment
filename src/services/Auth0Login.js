import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Auth0Login = () => {

const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  return(
        <div>
        {!isAuthenticated && (
             <button onClick={() => loginWithRedirect()}>Log In</button>
        )}
        {isAuthenticated && (
            <><button onClick={() => logout()}>Log Out</button><div>
                  <p>{user.name}</p>
                  <p>{user.email_verified}</p>
                  <p>{user.picture}</p>
              </div></>
            
        )}
        </div>
 
  )};

export default Auth0Login;