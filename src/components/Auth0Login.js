import { useAuth0 } from "@auth0/auth0-react";
import exampleLogo from "../assets/exampleLogo.png";
import sendLogin from "../services/sendData.js";

//Component to login using Auth0.
const Auth0Login = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  //Provides the view returned to the user.
  if (isAuthenticated) {
    console.log("User Details:", user);
    sendLogin(user.email);
  }
  return (
    <div>
      {/*Checks if the user is authenticated or not. If the user is not authenticated, they are directed to an Auth0 login screen to enter their name and email.*/}
      <div className="login">
        <div>
          <img src={exampleLogo} alt="Logo"/>
        </div>
        <strong> Login </strong>
        <div>
          <button onClick={() => loginWithRedirect()}> Log In </button>
        </div>
        <p> No account ? Speak with a trainer to get started! </p>
      </div>
      )
      {/*If a user is authenticated, a welcome message is displayed, and a logout button is displayed*/}
      {isAuthenticated && (
        <>
          <div className="four columns">
            <p className="welcomeMessage"> Welcome {user.name}! </p>
          </div>
          <button onClick={() => logout()} className="two columns">
            Log Out
          </button>
        </>
      )}
    </div>
  );
};

export default Auth0Login;
