# Deployed Application:
https://powerful-scrubland-03851.herokuapp.com/

# Developer information:
This project is built as a React application, axios is used to send and receive requests to the API running on an express server, and MongoDB is used as the database. A skeleton framework is also used.
To start future development, pull the project from Github or access a copy of the source code. Run 'npm install' in the root directory, this will install the required packages as specified in "package.json". To run a development version of the application, use 'npm start' to run the application and frontend, then use 'npm run server' to start the server and connect to MongoDB. Nodemon has been installed so changes in the code will be automatically reflected in the running application.
The project has been deployed using Heroku. Heroku only allows one application to be deployed at a time on the free tier of the service. To deploy the application to Heroku, first run 'npm run build' to create the production build of the application, and 'got add .' and 'git commit -m""' to push to Github the latest project changes. Log in to Heroku in the terminal using 'heroku login'. Run 'heroku create' to create a Heroku application if it is the first time. Run 'git push heroku master' if the application already exists in Heroku.

## Test account details:
Email: example@example.com
Password: Pak12345!
These credentials can be used to log into the test account used for development. This account does not contain any personally identifying information. This account can be used to test how the application works. Use these details in Auth0 after clicking "login" on the login page.

# Continuous integration:
No continuous or automatic integration was used. All code was pushed directly to the main branch of the Github repository. This was done due to team members being unfamiliar with effective use of Github. When someone wants to push an edited file, they would send a message on Slack informing the other team members what they have changed and when they have pushed the code. This informs others to pull from the repository before pushing their local copy, or before starting new changes, in order to have the most up-to-date copy of the application. This is admittedly a less effective method of development compared to using other branches for different application functionalities. This is a manual method and has proven prone to merging issues, but was adequate for a project of this size when enough communication occurs.