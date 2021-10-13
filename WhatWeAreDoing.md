This is a bit of a what we are doing

We currently hae trainer and client profiles implemented in their basic form. Authentication is working using jwt. 

The app will have front end written in react with components for 

    Trainer
    Client
    Workout
    Login

Login will hopefully be done using auth0 - Ali is looking at this
Workout is a component that will produce a form that
      will have data populated from the backend express server - Tynan is looking at this
The json object model is being reviewed by Lachlan

Currenlty we will not have a persistent store. Objects live for the life of the express server. We can add mongodb once we
have the frontend worked out get and post/putting data to/from express.

sample data will be the initial source of workouts. When a workout is called by the frontend this will be put into a usestate variable. Once the workout is complete the frontend will mark the state as complete and the object is posted back to express with the workout id incremented.

Eric will add some css to make it look a bit better and will do a bit of project management. Will also start to look at the mongodb connection once the express stuff is done.
