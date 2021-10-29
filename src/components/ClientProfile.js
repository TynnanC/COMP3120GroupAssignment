import { useAuth0 } from "@auth0/auth0-react";
import unitApi from "../services/uiApi";
import ListCompWorkouts from "./ListCompWorkouts" 

//Provides the information about an authenticated user, or a general login message if they are unauthenticated.
const ClientProfile = ({ setourUser, Ouruser , completedWO, setCompWO }) => {
  const { user } = useAuth0();
  //If a user isn't logged in, they are given a call to action.
  if (!user) {
    return <p>Login Please</p>
  }
  //If the user has been authenticated, the Ouruser state is updated to contain their details.
  if (!Ouruser) {
    unitApi.getClientById(user.email).then((data) => {
      setourUser(data);
    });
  }
  //Displays general account details for the authenticated user.
  if (Ouruser) {
    return (
      <div>
        <div className="row">
          <div className="twelve columns">
            <div className="profile">
              <h4>Welcome: {Ouruser.name}</h4>
              <h4>Your Trainer Id {Ouruser.trainerId}</h4>
              <div>
                  <img  className = "profileimage" src="https://robohash.org/SOMETHING" alt="Someone" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className = "workoutheadings">Workouts</h3>
        </div>
          <div>
            <ListCompWorkouts Ouruser = {Ouruser} completedWO= {completedWO} setCompWO = {setCompWO}/>
          </div>
      </div>
    );
  //If the user isn't logged in, they are given a call to action. Adds a layer of redundancy in the situation the user and Ouruser states do not match.
  }
  else {
    return (
      <div>
        {" "}
        <p> Please log in to see your information </p>
      </div>
    );
  }
};

export default ClientProfile;
