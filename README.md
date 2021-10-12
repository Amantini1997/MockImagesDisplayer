# How to run
Before running the application, be sure to have Angular `11.x.x` and Node `14.x.x` installed.

Navigate to the folder containing the project and run `npm i` to install all the node modules necessary.

Upon completion, run `npm start` to start the application which will be available at http://localhost:4200/.


# Fix registration POST request
The server used to test the application is not shipped with it. 

This application currently points to a the server `http://localhost:3000/` to make its POST requests (registration form), 

to change it, navigate to `environments > environments.prod.ts` and update the value of `serverUrl` to point to 

the right server url.
