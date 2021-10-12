# How to run
Before running the application, be sure to have Angular `11.x.x` and Node `14.x.x` installed.
Navigate to the folder containing the project and run `npm i` to install all the node modules necessary.
Upon completion, run `npm start` to start the application which will be available at http://localhost:4200/.


# Fix registration POST request
The server currently used is not shipped with this application. 
This application points to a server used for its production, that is `http://localhost:3000/`, 
to change it, navigate to `environments > environments.prod.ts` and change the value of `serverUrl` to point to 
the right server url.
