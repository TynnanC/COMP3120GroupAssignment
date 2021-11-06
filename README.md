# Group Q application.

# Members:  
## Eric Korhonen  
## Tynnan Conquit  
## Ali Kazim  
## Lachlan Terrey

# Deployed application:
https://powerful-scrubland-03851.herokuapp.com/

# Outline:
The application we propose to build will be for use by a personal trainer and their clients for training in the gym environment. The application is mostly form based providing training plans, client profiles, and trainer profiles. If the minimal viable product was met, an Apex charts API in conjunction with mongodb could be included to allow for the graphing of progress. Optionally it could be used by multiple personal trainers and multiple clients.  
The app will have progression built in, each session you can choose whether or not to accept the progression. This can be implemented using buttons, and use JavaScript to offer a pre-determined progression.  
The target users are clients who require a trainer to create workouts for them. The workouts, initially pre-made, in theory are uploaded by trainers for their clients to follow, and provide a degree of self-regulation through the progression functionalities the client can control. The trainers are a secondary target of the application. Although they don't have login functionalities, they could upload workouts to MongoDB to manage what their clients are doing. This can move away from less organised pen and paper, or spreadsheet based workout management.  
The data is stored in MongoDB. This allows the data to be persistent even if the application stops, which may occur temporarily when using Heroku.

# Second Github repository:
None.

# Minimal viable product:
The minimal viable product has been mostly achieved but with some variation from the project proposal. The application allows a client to login. Once logged in, they are able to view a workout to complete. The results can't be recorded as initially proposed. Instead, a progress functionality has been implemented, which allows an incremental change to occur to the repetitions or time of an exercise. This allows an exercise to be made harder if it is too easy for the client, providing a degree of self-regulation. This functionality had been furthered by enabling clients to "complete" a workout by pressing a button. This stores the workout completed, and requests a new workout that has a date to be completed in 1 week's time, which is a further expansion on the project. The user can also see their details that is stored by the application, and can see a history of their completed workouts which was not initially proposed. The user can see some basic details about the trainer that has been assigned to them. This is all accessible from the navigation bar, where they can also log out of the application.  
## MileStones:
### Week 9:
We were able to create the figma mockup of a dashboard representing the homepage of application. Although the exact design was not used, the dashboard concept was maintained. The Github was initiallised along with adding the basic elements for the project such as an Express server and a basic React application. This was done using a pre-existing project to build off something rather then start from complete scratch.  
The initial JSON structure was created along with some sample data for basic testing. This structure changed over the weeks, but many of the fields and their data types were consistent throughout development.  
The server API was created (located in ./server/app.js) that contains all of the HTTP requests and responses being utilised for the application.  
A default README is created by the React application, though this was edited to contain the group members names and some basic details.  
### Week 10:
The most of the components used for the frontend were created. These were developed to the point of being functional though many required future changes and had no major CSS applied.  
Skeleton UI was installed as a framework in anticipation of the applications design to be worked on. A little bit of cleaning for the home page was done, but this was largely untouched as the application was not far enough developed for design to be of a concern.  
The decision and implemention of a database was planned for this week but wasn't completely achieved. There was debate over the use of MongoDB and if it would un-necessary for a gym trainer's use, but the decision was made as it is needed for persistent data. This was done at between Week 10 and Week 11.
### Week 11:
The milestones set were mostly not met. Testing wasn't able to be done as development isn't up to that stage yet. User roles was not achieved as the decision was made to abandon that idea. We did not have enough time to fully implement this functionality, and we want to focus on a better quality minimum viable product rather then one with more quantity that sacrifices on quality. Authentication was completed over week 10 and 11, Auth0 is now used instead of JWT. This enables user's to use their personal emails to sign into the application, a functionality that is common in other real world applications.  
Tasks not in the milestones though were accomplished. The design of the application was worked on, providing a nicer looking login screen, a proof of concept logo supporting gym branding, a redesigned navigation bar, and an overhauled design of the workout and client pages. The client page was changed to display the previous workouts a user has completed, this was made possible by enabling a workout to be marked as completed. MongoDB was mostly incorporated into the application, enabling data to be sourced from a database rather than hardcoded in a JSON object. An initial production build was also created, the routes used by the API were updated and the remaining development can focus on the production build's requirements.  
### Week 12:
The milestones for this week were partially not met, though this is to be expected as the projects development has changed from when the milestones were made. No testing has been done, so the final test can't be achieved. The UI fit and finish was partially accomplished. The rest of the application has been updated to follow a similar design as the one started in week 11. So although not finished, it has progressed. The documentation was no completed. It is an ongoing process that will require the project to be completed before items like the photos and photo descriptions can be detailed. The documentation though is an ongoing process which did see updates during this week.  
Other tasks were started this week, including deploying the application to enable development to be targetted towards a deployed version. This uncovered multiple errors that have started to be addressed, especially relating to the URLs being used in requests. The database had further improvement and is closer to being fully functional. A decision was made to change what would be the "home" screen once the user logs in and direct the user straight to their profile page as the original "home" page didn't contribute enough to the user experience. The code base also experienced major refactoring and improvements, removing unnecessary code and adding comments for developers.

# Source code guide:
## Front end:
Within 'src' is all the frontend code and components. App.js is the application running within index.js.  
All of the components for the frontend are within the 'components' folder, these are used to produce the outputs for what a user should see based on the page they are on and if they are logged in or not.  
The 'services' folder contains the functions that utilise axios to send requests to the API. These are called by, and respond to, files and functions within the 'components' folder.  
The 'styles' folder contains some of the CSS file for the App.js file.  
The index.js file renders what has been developed using React.  
## Back end:
Within 'server' is the code for testing, the API and server, models, and authrorisation necessities. The server, API, and authentication files are within the 'server' file itself.  
The 'models' folder contains the models used to define the data stored in MongoDB. This is used for any data received from MongoDB such as the clients, the trainers, and the workouts.  
The 'Requests' folder contains REST requests that can be used to check if requests are functioning as expected.  
The 'tests' folder contains the API testing required to ensure the requests are functioning as expected, and the correct response or outcome is achieved.  
The 'utils' folder contains the configuration file for the project, this imports the MongoDB address and PORT number from the environment so it be used in the server.  
The 'routes' contains the routes and requests used by different components of the application. These contain some processing for the data before being sent to received from the database.  
Files such as the README, packages.json, the environment, gitignore, and Proclife are all in the root directory of the project as they are necessary for the project to run and operate entirely.

# Next steps:
The next steps for this application would build upon what has already been started. The most important is testing. Time constraints has meant testing of neither the front or back end has been conducted. This must be the first step for future developers, as building upon a faulty application would create future set backs, and ensuring any bugs exposing user data must be addressed before a public release.
Next, developers should allow users to record exactly what they have done in each workout. This would include typing in how many sets, repetitions, or time they completed for each exercise. This could also be achieved using check boxes. This can enable more fine tuned control of the user's workout plan, and could lead to further functionalities such as displaying what a user did last time they did that exercise, acting as a target to reach.  
The next development would be the inclusion of trainer accounts. These accounts can give the trainers control over who their clients are, what workouts they should do, and provide their clients with further details about them such as contact details. A further expansion on this would be to include the ability to create a workout. The trainer could fill out a form, select the client it is for, and potentially have access to a list of the clients completed workouts in order to custom make a workout for a specific client.  
The next step is to include better management of unexpected events. This would include adding more checks of what users have data already stored about them, if a user has any future workouts, checks if their trainer is still training them etc. There are many scenarios in the real world that would cause problems for the application. This would similar to error handling, but more geared towards anomaly handling and dealing with situation that are possible but are not "errors".  
The final step is considering a relational database. MongoDB is adequate for the purpose of creating a functional application, but a relational database would make establihsing the connections between clients, trainers, and workouts much easier. An example relational database could be MySQL.

# Team roles and contributions:
*To be done at end*
## Project management and team communication:
The bulk of the communication was done through Slack. This enabled communication to happen much quicker and more casual manner than using the discussion forum provided initially. Zoom was also utilised in order to discuss what the next steps of the project were and organise what was happening for each Weeks Sprint Report.
Github was the primary tool used to share code and keep track of the completed sections. Commits were mostly used as expected, highlighting what has been completed, though it was also used to share code that a member was stuck on, or refactor and clean code. The main branch was the only branch used. This was due to members being generally unsure of how to use Github to it's full extent. Members made a point of messaging in Slack each time they pushed their work so other members could be aware that merge problems may occur if they also try to push, and as a reminder to pull from Github the next time they work on the project.

# Problems with the project:
*To be done at end*
The first major problem is the lack of testing. This is addressed on in the section for next steps for developers. There is likely errors throughout the code that is a natural result of the time limit. Testing should always be done before deploying an application, this has not happened though due to the time constraints of the project. Testing could have also happened alongside development, but the agile nature of the development and the project changing majorly multiple times would have made this difficult and consume more of the already limited time.
*May talk about some partially redundant code*
*May talk about new users and how they are handled*
*May talk about problems with Mongo and Heroku i.e. not relational, can be expensive as the user base grows etc*