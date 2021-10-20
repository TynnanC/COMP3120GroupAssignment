This is the app that is being created by group q

Members are 

     Eric Korhonen
     Tynnan Conquit
     Ali Kazim
     Lachlan Terrey

Outline: The application we propose to build will be for use by a personal trainer and their clients for training in the gym environment. The application is mostly form based providing training plans, client profiles, and trainer profiles. If the minimal viable product was met, an Apex charts API in conjunction with mongodb could be included to allow for the graphing of progress. Optionally it could be used by multiple personal trainers and multiple clients.
The app will have progression built in, each session you can choose whether or not to accept the progression. This can be implemented using buttons, and use JavaScript to offer a pred-determined progression.
The target users are clients who require a trainer to create workouts for them. The workouts, initially pre-made, in theory are uploaded by trainers for their clients to follow, and provide a degree of self-regulation through the progression functionalities. The trainers are a secondary target of the application. Although they don't have login functionalities, they could upload workouts to MongoDB to manage what their clients are doing. This can move away from less organised pen and paper, or spreadsheet based workout management.
The data is stored in MongoDB using a model. This allows the data to be persistent even if the application stops, which may occur temporarily when using Heroku.  *More to needs to be added for data sources.*

Second Github repository: None.

Minimal viable product: The minimal viable product has been mostly achieved but with some variation from the project proposal. The application allows a client to login. Once logged in, they are able to view a workout to complete. The results can't be recorded as initially proposed. Instead, a progress functionality has been implemented, which allows an incremental change to occur to the repetitions or time of an exercise. This allows an exercise to be made harder if it is too easy for the client, providing a degree of self-regulation. The, using MongoDB, is persistent.
MileStone:
Week 9- we were able to create the figma mockup of a dashboard representing the homepage of application. Although the exact design was not used, the dashboard concept was maintained. The Github was initiallised along with adding the basic elements for the project such as an Express server and a basic React application. This was done using a pre-existing project to build off something rather then start from complete scratch.
The initial JSON structure was created along with some sample data for basic testing. This structure changed over the weeks, but many of the fields and their data types were consistent throughout development.
The server API was created (located in ./server/app.js) that contains all of the HTTP requests and responses being utilised for the application.
A default README is created by the React application, though this was edited to contain the group members names and some basic details.
Week 10- The most of the components used for the frontend were created. These were developed to the point of being functional though many required future changes and had no major CSS applied.
Skeleton UI was installed as a framework in anticipation of the applications design to be worked on. A little bit of cleaning for the home page was done, but this was largely untouched as the application was not far enough developed for design to be of a concern.
The decision and implemention of a database was planned for this week but was achieved. There was debate over the use of MongoDB and if it would un-necessary for a gym trainer's use, but the decision was made it is needed for persistent data. This was done at some point between Week 10 and Week 11.
Week 11- Not yet.
Week 12- Not yet.

Source code guide:
Front end- within 'src' is all the frontend code and components. App.js is the application running within index.js.
All of the components for the frontend are within the 'components' folder, these are used to produce the outputs for what a user should see based on the page they are on and if they are logged in or not.
The 'services' folder contains the functions that utilise axios to send requests to the API. These are called by, and respond to, files and functions within the 'components' folder.
The 'styles' folder contains the CSS file for the App.js file.
Back end- Within 'server' is the code for testing, the API and server, models, and authrorisation necessities. The server, API, and authentication files are within the 'server' file itself.
The 'models' folder contains the models used to define the data stored in MongoDB. This is used for any data received from MongoDB such as the clients, the trainers, and the workouts.
The 'Requests' folder contains REST requests that can be used to check if requests are functioning as expected.
The 'tests' folder contains the testing used for the project to ensure each functionality works as expected and the correct outputs are produced.
The 'utils' folder contains the configuration file for the project, this imports the MongoDB address and PORT number from the environment so it be used in the server.
Files such as the REDME, packages.json, the environment, gitignore, and Proclife are all in the root directory of the project as they are necessary for the project to run and operate entirely.

Next steps: *Not yet*

Team roles: *Not yet*
Team contributions: *Not yet*
Project management and team communication: The bulk of the communication was done through Slack. This enabled communication to happen much quicker and in a more casual manner than using the discussion form provided initially. Zoom was also utilised in order to discuss what the next steps of the project were and organise what was happening for each Weeks Sprint Report.
Github was the primary tool used to share code and keep track of the completed sections. Commits were mostly used as expected, highlighting what has been completed, though it was also used to share code that a member was stuck on, or refactor and clean code. The main branch was the only branch used. This was due to members being generally unsure of how to use Github to it's full extent. Members made a point of messaging in Slack each time they pushed their work so other members could be aware that merge problems may occur if they also try to push, and as a reminder to pull from Github the next time they work on the project.
