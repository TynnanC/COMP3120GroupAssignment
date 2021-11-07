# Group Q application.

# Members:  
## Eric Korhonen  
## Tynnan Conquit  
## Ali Kazim  
## Lachlan Terrey

# Deployed application:
https://ezifit.herokuapp.com/

# App Description:
EziFit provides you the client with the connection to your trainer when not actually doing a workout with them. It records your workouts and will provide you new workouts to complete. You can also request a new workout. Your trainer is able to see the workouts you have completed to allow them to watch you progress.
EziFit can show you all your workouts completed in one place and provide you with information like Calories Burnt during training. EziFit can also help you with workout progression.

# Proposed Application Outline:
The application we propose to build will be for use by a personal trainer and their clients for training in the gym environment. The application is mostly form based providing training plans, client profiles, and trainer profiles. If the minimal viable product was met, an Apex charts API in conjunction with mongodb could be included to allow for the graphing of progress. Optionally it could be used by multiple personal trainers and multiple clients.  
The app will have progression built in, each session you can choose whether or not to accept the progression. This can be implemented using buttons, and use JavaScript to offer a pre-determined progression.  
The target users are clients who require a trainer to create workouts for them. The workouts, initially pre-made, in theory are uploaded by trainers for their clients to follow, and provide a degree of self-regulation through the progression functionalities the client can control. The trainers are a secondary target of the application. Although they don't have login functionalities, they could upload workouts to MongoDB to manage what their clients are doing. This can move away from less organised pen and paper, or spreadsheet based workout management.  
The data is stored in MongoDB. This allows the data to be persistent even if the application stops, which may occur temporarily when using Heroku.

# Second Github repository:
None.

# Minimal viable product:
The minimal viable product has been mostly achieved but with some variation from the project proposal. The application allows a client to login. Once logged in, they are able to view a workout to complete. The progression functionality has not been implemented as initially planned. Instead, each exercise can be ticked off, indicating that exercise has been completed in the workout. This functionality had been furthered by enabling clients to "complete" a workout by pressing a completion button. This stores the workout completed, and can show basic information resulting from that workout in the clients profile page, creating a history of completed workouts. The user can also see their details that is stored by the application. This is all accessible from the side navigation bar, and they can also log out of the application on the top navigation bar. No information regarding their trainer has been incorporated as initially planned.   
## MileStones:
### Week 9:
We were able to create the figma mockup of a dashboard representing the homepage of application. Although the exact design was not used, the dashboard concept was maintained. The Github was initiallised along with adding the basic elements for the project such as an Express server and a basic React application. This was done using a pre-existing project to build off something rather then start from complete scratch.  
The initial JSON structure was created along with some sample data for basic testing. This structure changed over the weeks, but many of the fields and their data types were consistent throughout development.  
The initial server API was created (located in ./server/app.js) that contains all of the HTTP requests and responses being utilised for the application.  
The app capabilities we wanted to include were discussed and started, though this was not an assured list and changed over the weeks.
A default README is created by the React application, though this was edited to contain the group members names and some basic details.  
### Week 10:
The most of the components used for the frontend were started. These were developed to the point of being functional though many required future changes and had no major CSS applied.  
Skeleton UI was installed as a framework in anticipation of the applications design to be worked on. A little bit of cleaning for the home page was done, but this was largely untouched as the application was not far enough developed for design to be a concern.  
The decision and implemention of a database was planned for this week but wasn't completely achieved. There was debate over the use of MongoDB and if it would un-necessary for a gym trainer's use, but the decision was made as it is needed for persistent data. This was done at some point between Week 10 and Week 11.
### Week 11:
The milestones set were mostly not met. Testing wasn't able to be done as development isn't up to that stage yet. User roles was not achieved as the decision was made to abandon that idea. We did not have enough time to fully implement this functionality, and we want to focus on a better quality minimum viable product rather then one with more quantity that sacrifices on quality. Authentication was completed over week 10 and 11, Auth0 is now used instead of JWT. This enables users to use their personal emails to sign into the application, a functionality that is common in other real world applications.  
Tasks not in the milestones though were accomplished. The design of the application was worked on, providing a nicer looking login screen, a proof of concept logo supporting gym branding, a redesigned navigation bar, and an overhauled design of the workout and client pages. The client page was changed to display the previous workouts a user has completed, this was made possible by enabling a workout to be marked as completed. MongoDB was mostly incorporated into the application, enabling data to be sourced from a database rather than hardcoded in a JSON object. An initial production build was also created, the routes used by the API were updated and the remaining development can focus on the production build's requirements.  
### Week 12:
The milestones for this week were partially not met, though this is to be expected as the projects development has changed from when the milestones were made. No testing has been done, so the final test can't be achieved. The UI fit and finish was partially accomplished. The rest of the application has been updated to follow a similar design as the one started in week 11. So although not finished, it has progressed. The documentation was not completed. It is an ongoing process that will require the project to be completed before items like the photos and photo descriptions can be detailed. The documentation though is an ongoing process which did see updates during this week.  
Other tasks were started this week, including deploying the application to enable development to be targetted towards a deployed version. This uncovered multiple errors that have started to be addressed, especially relating to the URLs being used in requests. The database had further improvement and is closer to being fully functional. A decision was made to change what would be the "home" screen once the user logs in and direct the user straight to their profile page as the original "home" page didn't contribute enough to the user experience. The code base also experienced major refactoring and improvements, removing unnecessary code and adding comments for developers.

# Source code guide:
## Front end:
Within 'src' is all the frontend code and components. App.js is the application running within index.js.  
All of the components for the frontend are within the 'components' folder, these are used to produce the outputs for what a user should see based on the page they are on and if they are logged in or not.  
The 'components' folder and 'context' both contain some functions that utilise axios to send requests to the API. These are called by, and respond to, files and functions within the 'components' folder.  
The 'styles' folder contains some of the CSS file for the App.js file.  
The index.js file renders what has been developed using React.
Authorisation settings are maintained in the "Auth_config.json" file in the "src" folder, and the authorisation component is in the "components" folder.  
## Back end:
Within 'server' is the code for testing, the API, server and models. The server and API files are within the 'server' folder itself.  
The 'models' folder contains the models used to define the data stored in MongoDB. This is used for any data received from MongoDB such as the clients, the trainers, and the workouts.  
The 'tests' folder contains the API testing required to ensure the requests are functioning as expected, and the correct response or outcome is achieved.   
The 'routes' contains the routes and requests used by different components of the application. These contain some processing for the data before being sent to received from the database.  
## Other:
Files such as the README, packages.json, the environment, gitignore, and Proclife are all in the root directory of the project as they are necessary for the project to run and operate entirely. The screenshots and respective README is in the "SCREENSHOTS" folder.

# Next steps:
The next steps for this application would build upon what has already been started. The most important is testing. Time constraints has meant testing of neither the front or back end has been conducted. This must be the first step for future developers, as building upon a faulty application would create future set backs, and ensuring any bugs exposing user data must be addressed before a public release.
Next, developers should allow users to record exactly what they have done in each workout. This would include typing in how many sets, repetitions, or time they completed for each exercise. This can enable more fine tuned control of the user's workout plan, and could lead to further functionalities such as displaying what a user did last time they did that exercise, acting as a target to reach.  
The next development would be the inclusion of trainer accounts. These accounts can give the trainers control over who their clients are, what workouts they should do, and provide their clients with further details about them such as contact details. A further expansion on this would be to include the ability to create a workout. The trainer could fill out a form, select the client it is for, and potentially have access to a list of the client's completed workouts in order to custom make a workout for a specific client.  
The next step is to include better management of unexpected events. This would include adding more checks of what users have data already stored about them, if a user has any future workouts, checks if their trainer is still training them etc. There are many scenarios in the real world that would cause problems for the application. This would be similar to error handling, but more geared towards anomaly handling and dealing with situation that are possible but are not "errors".  
The final step is considering a relational database. MongoDB is adequate for the purpose of creating a functional application, but a relational database would make establihsing the connections between clients, trainers, and workouts much easier. An example relational database could be MySQL.

# Team roles and contributions:

## Eric Korhonen 44828225 
Initiated project.
Initial github setup.
Setup a slack space for communication.
Heroku deployment.
Tried to a bit of project management. Organised to get people to talk on zoom. Presented Sprint reports, demo where we were.

## Tynnan Conquit 45898723
My main role was generally on the frontend and developer documentation aspects of the project.
I made the initial data structure though it largely changed over time, many variables though remained. I created the basic components for the client and trainer profiles, these were changed over time and the trainer profile removed, but maintained multiple elements I incorporated such as the basic structure each workout would contain and how the data was organised on the page for a user to read. I started the workout component but got stuck and Lachlan took over to help, though I helped establish what the component would contain. I started on the styling though most of it was overhauled, but some elements remained such as the horizontal display for a workout on the workout page. I helped add comments throughout the code to increase readability. I contributed the README and DEPLOYMENT md files, and the screenshots folder and README file to describe the screenshots. Like each member, I also did small batches of refactoring throughout development.
## Ali Kazim
I started out with backend development by writing the server APIs and initial services with axois, then i moved towards authentication with jwt and got  it working with a login form component, the jwt authentication was abandoned since we decided that tha auth0 authentication is much more effecient and reliable. i worked on auth0 and got it integrated with the app. towards the end to project i worked on the front end of client profile and displaying the completed workouts. along the way i worked on styling the front end components a bit. and worked on user validation with auth0 but didnot impliment it in the backend routes further explained below in section #usr validation 
## Lachlan Terrey

# Project management and team communication:
The bulk of the communication was done through Slack. This enabled communication to happen much quicker and more in a more casual manner than using the discussion forum provided initially. Zoom was also utilised in order to discuss what the next steps of the project were and organise what was happening for each Weeks Sprint Report.  
Github was the primary tool used to share code and keep track of the completed sections. Commits were mostly used as expected, highlighting what has been completed, though it was also used to share code that a member was stuck on, or refactor and clean code. The main branch was the only branch used. This was due to members being generally unsure of how to use Github to it's full extent. Members made a point of messaging in Slack each time they pushed their work so other members could be aware that merge problems may occur if they also try to push, and as a reminder to pull from Github the next time they work on the project.

# Problems with the project:
## Lack of testing.
The first major problem is the lack of testing. This is addressed in the section for next steps for developers. There is likely errors throughout the code that is a natural result of the time limit. Testing should always be done before deploying an application, this has not happened though due to the time constraints of the project. Testing could have also happened alongside development, but the agile nature of the development and the project changing majorly multiple times would have made this difficult and consume more of the already limited time.

## Inability to handle new users.
The second problem is the inability to handle new users. This problem is worked around by requesting users to speak to a trainer to create an account. Ideally, they should be able to create an account on the app and the trainers can select what clients are theirs. This should be added, as currently the app serves no purpose to unregistered clients, and provides little in terms of details for them to go and get registered. This may also include a bit of information regarding how user can actually get into contact with trainers, the gym etc.

## Trainer account
Currently there is no ability for a trainer to log in and have their own specified content or functionalities. This should be included as the app requires clients to complete workouts made by these trainers. Currently the trainer must log into MongoDB and manually enter the workout for a client. This is inefficient. Trainers, when logged in, may have mostly the same features, but the main difference is instead of completing a workout, they can design one for a client. An additional route should also be added to allow trainers to select what clients are theirs, and add a component for a client to view their trainers information, or possibly get in contact with them.

## Scalability and cost.
These two problems are correlated. As the application expands and more users are added, using MongoDB will become difficult to effectively manage what clients are assigned to what trainers. Using a relational database is the best solution for this, as manually assigning these identifiers is ineffective as more users are added, and requires additional overhead and processing. This would create a direct relationship between client and trainer, linking them in the database. Similar to this, Heroku will become a less viable option as the application expands. Heroku already can be a slow when handling requests if the application has not been used in 30 minutes. Further, Heroku free tier only allows for a maximum of 550 dyno hours a month. The more users using the application, the more the dyno hours are used, and eventually the business will require upgrading, at a cost, to keep the application deployed. This may require other hosting services to be compared for price and performance.

## No new workouts
Currently the application does not include any way for brand new workouts to be generated or added within the application. New workouts must be made by manually creating them in MongoDB. This ideally should be changed to allow generic randomised workouts to be made if pre-made trainer designed workouts have been exhausted, or allow a trainer to make these workouts directly on the app. As it stands, once the last workout is completed, no more workouts can be done until a new one to MongoDB is added.

## User validation:
the user validation with auth0 is set up on the front end and back end but due the format not matching its not implimented yet in the server APIs.
the bearer token is attached awith the request from the front end but the jwsk mechanism is not verifying it for some reason. so it is left un implimented du to lack of time. 