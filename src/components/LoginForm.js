/* eslint-disable react/prop-types */
import React, {useState} from 'react'
import likesService from '../services/login.js'
import getTrainer from '../services/getTrainer.js'

const LoginForm = ({user, setUser, setTrainer, trainer, errorMessage, setErrorMessage}) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const formHandler = (event) => {
      event.preventDefault()
      console.log("form submitted" , username , password)
      likesService.login({username, password})
      
        .then(data => {
            //I don't know why trainer needs to be set here to work on line 30. Comment out line 18 and trainer remains null despite line 30 being used.
            setTrainer(data)
            console.log("Success:", data)
            setUser(data)
            setErrorMessage('')
        })
        .catch(error => {
            console.log("Error:", error)
            setErrorMessage("Invalid Username or Password")
        })
    }
    if(user){
       const trainerId=user.trainerId
       getTrainer.getTrainer({trainerId})
       .then(data=>{
           setTrainer(data)
       })
       .catch(error=>{
           console.log(error)
       })
    }
    
    //Sets user to  null of  Lougout is  clicked
    const logoutHandler = (event)=>{
        event.preventDefault()
        console.log("Log me out")
        setUser(null)
    }
    //A logout button that dsplays if user is  logged in (sets  users to null if pressed)
    if (user) {
        return (
            <div className="row">
                <form onSubmit={logoutHandler}>
                <p>Logged in {user.name}</p>
                <button type= "submit"> Log Me Out</button>
                </form>
            </div>
        )
    } else {
        return (
            <div>
                <form onSubmit={formHandler}>
                    <div className="row">
                        <div className="four columns">
                            <label htmlFor="username">Username</label>
                            <input id="username" type="text" name="username" onChange={e => setUsername(e.target.value)} />
                        </div>
                        <div className="four columns">
                            <label htmlFor="password">Password</label>
                            <input id="password" name="password" type="password" onChange={e => setPassword(e.target.value)} />
                        </div>
                        <div className="three columns">
                            <input type="submit" value="Login"/>
                        </div>
                    </div>
            </form>
            <p>{errorMessage}</p>
            </div>
            
            
            )
    }
}

  export default LoginForm