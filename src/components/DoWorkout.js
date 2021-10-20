import React, {useState} from 'react';
import likesService from '../services/getWorkout.js';
import progressWeightExercise from '../services/progressWeightExercise.js';
import progressCardioExercise from '../services/progressCardioExercise.js';
const DoWorkout=({Ouruser, workout, setWorkout})=>{
    //const [dummyWorkout, setDummyWorkout]=useState()
    let tempWorkout=workout
    //const [temp, setTemp]=useState(null)
    const progressWeight=(exercise, workout)=>{
        //const dummyWorkout=workout;
        /**/
        
        const tempWorkout=workout
        for(let i=0; tempWorkout.weightExercises.length; i++){
            if(tempWorkout.weightExercises[i].id===Number(exercise.id)){
                tempWorkout.weightExercises[i].repetitions+=3;
                break;
            }
        }
        //setTemp(tempWorkout)
        progressWeightExercise.progressWeightExercise(tempWorkout, Ouruser)
        .then(data=>
            console.log("Progression made", data)
        )
        .catch(error=>console.log(error))
        console.log(tempWorkout)
        //setDummyWorkout(temp)
        //console.log("state", dummyWorkout)
    }
    const progressCardio=(exercise, workout)=>{
        const tempWorkout=workout
        for(let i=0; tempWorkout.cardioExercises.length; i++){
            if(tempWorkout.cardioExercises[i].id===Number(exercise.id)){
                tempWorkout.cardioExercises[i].time+=10;
                break;
            }
        }
        //setTemp(tempWorkout)
        console.log(tempWorkout)
        progressCardioExercise.progressCardioExercise(tempWorkout, Ouruser)
        .then(data=>
            console.log("Progression made", data)
        )
        .catch(error=>console.log(error))
        /*const dummyWorkout=workout;
        console.log("clicked")
        progressCardioExercise.progressCardioExercise(exercise, dummyWorkout, Ouruser)
        .then(data=>
            console.log("Progression made", data)
        )
        .catch(error=>console.log(error))*/
        //const temp=dummyWorkout
        /*for(let i=0; tempWorkout.weightExercises.length; i++){
            if(tempWorkout.cardioExercises[i].id===Number(exercise.id)){
                tempWorkout.cardioExercises[i].time+=10;
                break;
            }
        }*/
        //setDummyWorkout(temp)
        /*console.log("temp", tempWorkout)
        return(tempWorkout)*/
    }
    
    if(Ouruser){
        
        likesService.getWorkout({Ouruser})
        .then(data=>{
                setWorkout(data)
                
        })
        if(workout){
           return(
           <div>
            <h1>{workout.workoutName}</h1>
            <p>The goal of the workout is to {workout.goalText}</p>
            <p>This will time {workout.time} minutes.</p>
            <p>You should perform this workout {workout.frequency} times a week.</p>
            <h2>Warmup</h2>
            <p>perform {workout.warmUp.exercise} for {workout.warmUp.time} seconds.</p>
            <h2>Weights exercises</h2>
            {workout.weightExercises.map(exercises=>
                <ul key={exercises.id}>
                    <li>Name: {exercises.name}</li>
                    <li>{exercises.sets} sets of {exercises.repetitions} repetitions.</li>
                    <li>Rest {exercises.rest} seconds between sets.</li>
                    <li>Description: {exercises.description}</li>
                    <li>If you want to progress, do the following: {exercises.progression}</li>
                    <button onClick={()=>progressWeight(exercises, workout, tempWorkout)}>Progress</button>
                </ul>
            )
            }
            <h2>Cardio exercises</h2>
            {workout.cardioExercises.map(exercises=>
                <ul key={exercises.id}>
                    <li>Name: {exercises.name}</li>
                    <li>{exercises.sets} sets for {exercises.time} seconds.</li>
                    <li>Rest {exercises.rest} seconds between sets.</li>
                    <li>Description: {exercises.description}</li>
                    <li>If you want to progress, do the following: {exercises.progression}</li>
                    <button onClick={()=>progressCardio(exercises, workout, tempWorkout)}>Progress</button>
                </ul>
            )
            }
            <h2>Warmdown</h2>
            <p>perform {workout.warmDown.exercise} for {workout.warmDown.time} seconds.</p>
           </div>
            ) 
        }
        else{
           return(
            <p>No workouts have been planned</p>
        ) 
        }
        
    }
    else{
        return(
            <p>Sign in to do a workout</p>
        )
    }
}
export default DoWorkout