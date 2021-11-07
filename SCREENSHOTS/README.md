# loginScreen
This screen is the first screen a user will encounter while using the application. At the top is a sample logo to show how branding can be incorporated into the page. A login button is in the middle, when clicked this will take the user to an Auth0 login screen (Auth0LoginScreen.jpeg). There is a message below asking a user to speak to a trainer if they don't have an account. This is because no functionality has been included to allow a new user to create an account.

# Auth0LoginScreen
This screen is shown when the user clicks the login button on the login screen (loginScreen.jpeg). From here a user can enter their email and password, and they will be logged in if these credentials are correct. If they don't match, they will be warned of an incorrect username or password (Auth0LoginScreenIncorrectCredentials.jpeg). If the users details are correct, they taken to the landing page (landingPage.jpeg).

# Auth0LoginScreenIncorrectCredentials
This screen shows what is displayed to a user when they enter incorrect credentials to Auth0. A warning is provided to indicate they used invalid credentials.

# landingPage
This screen is the landing page for a user. In the top left the company name, EZIFIT, is displayed. A welcome message displayed containing the users name is centrally located along the top of the screen, with a logout button displayed on the top right. These three elements are displayed on every page a user can see once they log in.  
On the left is a navigation bar. This contains links to the landing page on top (landingPage.jpeg), in the middle is a link to the user profile (clientProfile.jpeg), and on the bottom is a link to a settings page (proof of concept, doesn't work but would be a standard feature in most professional applications).  
Centrally on the screen, the workout a user can do is displayed.  
Four dark grey boxes are near the top. The first contains an estimate of how many calories the workout would burn (proof of concept, not a calculated number). The amount of time the workout should take is in the second. The third is an indicator of how many exercises from the workout have been completed (workoutMidwayComplete.jpeg). The final box is a button that turns green when hovered over that allows a user to indicate they have completed a workout when clicked (workoutComplete.jpeg). This fourth box/button also turns green if all exercises have been marked as complete (workoutComplete.jpeg).  
The name of the workout is displayed below four dark grey boxes. Below the name is the workout itself. This contains a section containing what a user should do for a warmup, the body of the workout, and a section for what a user should for a warmdown.  
The warmup and warmdown are single exercises, the name of the exercise is displayed followed by an indication for how long this should occur for.  
The body of the workout contains each exercise the user should do, listed vertically down the screen. The name of the exercise, how many sets, and how many repetitions are displayed. Next to this is a box. When this box is clicked, the exercise is indicated as completed, meaning the user successfully completed all sets and repetitions as required for the exercise. Each time a box is clicked, the dark grey box showing completed exercises is incremented (workoutMidwayComplete.jpeg). When all exercises in the workout are completed, the "completed" box will turn green and allow the user to click it (workoutComplete.jpeg)

# workoutComplete
This shows how the "completed" button will automatically change colour to green to indicate a user has successfully completed all exercises specified in the workout. This also acts as a indicator for where a user should click next in order to formally "complete" their workout.

# workoutMidwayComplete
This shows how a user can click the box next to an exercise to indicate they have completed it. This also shows the exercises use different styles when the box next to them is clicked. The tick mark and line through the text indicates they do not need to do that exercise any more in the workout.

# landingPageNoWorkout
This shows what the user will see if they log in but don't have a workout to complete. A basic message is shown informing the client that there are no more workouts in the database for them to complete.

# clientProfile
This page contains the basic details of the logged in user and their completed workouts.  
In the white box, the users details are displayed. This includes their name, email, and a profile picture.  
The grey box with the title "Completed Workouts" shows the completed workouts a user has done. This will display some basic information from the workout such as the name of it, how many calories they burned (proof of concept), and how long the workout took (based on the time the workout should take as displayed on the landing page).

# landingPageProfileHover, landingPageHomeDashboardHover, landingPageSettingsHover
These photos show some of the finer details of the page. These show that when the user hovers over these links, the little box containing the title of the page has also been customised. These show "Profile" when hovering over the user profile link, "Settings" when hovering over the settings link, and "Dashboard" when hovering over the landing page link. Although these details are not critical to the functionality of the application, these add to the professionalism and attention to detail that would be expected by a professional application.  
These also show how the URL has been changed to incorporate the EziFit name and changed the title of the browser tab.