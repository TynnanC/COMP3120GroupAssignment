import { useAuth0 } from "@auth0/auth0-react";
import unitApi from "../services/uiApi";
import ListCompWorkouts from "./ListCompWorkouts" 

//Provides the information about an authenticated user, or a general login message if they are unauthenticated.
const ClientProfile = ({ setourUser, Ouruser , completedWO, setCompWO }) => {
  const { user } = useAuth0();
  if (!user) {
    return <p>Login Please</p>
  }
  if (!Ouruser) {
    unitApi.getClientById(user.email).then((data) => {
      setourUser(data);
    });
  }
  
  if (Ouruser) {
    return (
      <div>
        <div class="row">
                    <div className="twelve columns" id="profile">
                        <h4>Welcome: {Ouruser.name}</h4>
                        <h4>Your Trainer Id {Ouruser.trainerId}</h4>
                        <div>
                            <img  id = "profileimage" src="https://robohash.org/SOMETHING" alt="Someone" />
                        </div>
                        </div>
                    </div>
                    <div className = "row" >
                      <h3 id = "workoutheadings">Workouts</h3>
                    </div>
                    <div className = "row">
                      <ListCompWorkouts Ouruser = {Ouruser} completedWO= {completedWO} setCompWO = {setCompWO}/>
                      </div>
      </div>
    );
  
  } else {
    return (
      <div>
        {" "}
        <p> Please log in to see your information </p>
      </div>
    );
  }
};
export default ClientProfile;
