import { useAuth0 } from "@auth0/auth0-react";
import unitApi from "../services/uiApi";

//Provides the information about an authenticated user, or a general login message if they are unauthenticated.
const ClientProfile = ({ setourUser, Ouruser }) => {
    const { user } = useAuth0()
    if (!Ouruser) {
        unitApi.getClientById(user.email)
            .then(data => {
                setourUser(data)
            })
    }
    if (Ouruser) {
        return (
            <div>
                <h1>{Ouruser.name}</h1>
                <h2>Trainer ID: {Ouruser.trainerId}</h2>
            </div>
        )
    }
    else {
        return (
            <div><p>Please log in to see your information</p></div>
        )
    }
}
export default ClientProfile