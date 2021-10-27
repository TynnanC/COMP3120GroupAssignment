import React from "react"



const CompletedWorkout = ({compWork , Ouruser}) => {
   
  return (
      <div className = "four columns completedworkoutcontainer" > 
       <div>
          <h5>Congrats!<strong>  {Ouruser.name}</strong> on  completing <strong>{compWork.workoutName}</strong></h5>
          <h5 className = "completedworkout"> Goal </h5>
          <p> The goal of the workout was to {compWork.goalText} </p>
          <h5 className = "completedworkout" >Time</h5>
          <p>
            It took {compWork.time}
            minutes.
          </p>
          <h5 className = "completedworkout"> Warmup </h5>
          <p>
            performed {compWork.warmUp[0].exercise}
            for {compWork.warmUp[0].time}
            seconds.
          </p>
          <h5 className = "completedworkout"> Weights exercises</h5>  
          {compWork.Exercises.map((exercises) => (
            <ul key={exercises.id}>
              <p className="compWorkoutExerciseName"> Name: {exercises.name}</p>
            </ul>
          ))}
          <h5 className ="completedworkout"> Cardio exercise</h5>
          {compWork.Exercises.map((exercises) => (
            <ul key={exercises.id}>
              <p className="compWorkoutExerciseName"> Name: {exercises.name}</p>
            </ul>
          ))}
          <h5 className = "completedworkout"> Warmdown </h5>
          <p>
            performed {compWork.warmDown.exercise}
            for {compWork.warmDown.time}
            seconds.
          </p>
        </div>
      </div>

    )
  

}

export default CompletedWorkout