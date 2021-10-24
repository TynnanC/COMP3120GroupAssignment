import { useAuth0 } from "@auth0/auth0-react";
import exampleLogo from '../assets/exampleLogo.png'

//Component to login using Auth0.
const Auth0Login = () => {
      const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
      //Provides the view returned to the user.
      return (
            <div>
                  {/*Checks if the user is authenticated or not. If the user is not authenticated, they are directed to an Auth0 login screen to enter their name and email.*/}
                  {!isAuthenticated && (
                        <div id="login">
                              <div>
                                  <img src={exampleLogo}/>  
                              </div>
                              <strong>Login</strong>                      
                              <div>
                                    <button onClick={() => loginWithRedirect()}>Log In</button>
                              </div>
                              <p>No account? Speak with a trainer to get started!</p>
                        </div>
                  )}
                  {isAuthenticated && (
                        <>                           
                              <div class="four columns" id="welcomeMessage">
                                    <p>Welcome {user.name}!</p> 
                              </div>
                              <button onClick={() => logout()} class="two columns">Log Out</button>
                        </>
                  )}
            </div>
      )
};

export default Auth0Login;