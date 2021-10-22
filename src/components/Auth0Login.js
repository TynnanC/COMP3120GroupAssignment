import { useAuth0 } from "@auth0/auth0-react";

//Component to login using Auth0.
const Auth0Login = () => {
      const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
      //Provides the view returned to the user.
      return (
            <div>
                  {/*Checks if the user is authenticated or not. If the user is not authenticated, they are directed to an Auth0 login screen to enter their name and email.*/}
                  {!isAuthenticated && (
                        <div>
                              <strong>Login Or Sign Up</strong> 
                              <button onClick={() => loginWithRedirect()} >Log In</button>
                        </div>
                  )}
                  {isAuthenticated && (
                        <>
                              <button onClick={() => logout()}>Log Out</button>
                              <div>
                                    <p>Welcome {user.name}</p> 
                              </div>
                        </>
                  )}
            </div>
      )
};

export default Auth0Login;