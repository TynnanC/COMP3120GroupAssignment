import { useAuth0 } from "@auth0/auth0-react";
const Auth0Login = () => {

      const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
      return (
            <div>
                  {!isAuthenticated && (
                        <div>
                              <strong>Login Or Sign Up</strong> 
                        <button onClick={() => loginWithRedirect()} >Log In</button>
                        </div>
                  )}
                  {isAuthenticated && (
                        <>
                              <button onClick={() => logout()}>Log Out</button><div>
                                    <p>Welcome {user.name}</p>
                                   
                              </div></>

                  )}
            </div>

      )
};

export default Auth0Login;