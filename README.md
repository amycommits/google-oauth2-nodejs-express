# Purpose
An example of how to have a frontend api and a backend with google OAuth2

# console.developers.google.com
create a new project
create a new Oauth credential
add localhost:3002/auth_callback as the redirect uri
download credentials as JSON

# client setup
cd client
npm i
copy config.example.js to config.js and add your credentials from the step above
npm run start

# server setup
cd server
npm i
copy config.example.js to config.js and add your credentials from the step above
npm run start


# resources
https://aidanlovelace.com/2019/06/19/how-to-setup-google-oauth2-login-with-express/
https://github.com/AidanLovelace/Express-Google-OAuth2-Tutorial
