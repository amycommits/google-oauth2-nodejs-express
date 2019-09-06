const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const google = require('googleapis').google;
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');



const app = express()
const port = 8080

app.use(cookieParser());

// Google's OAuth2 client
const OAuth2 = google.auth.OAuth2;

// Including our config file
const CONFIG = require('./config');

// Setting up Views
app.set('view engine', 'ejs');
app.set('views', __dirname);


app.use(bodyParser.json())
app.use(cors({
  origin: 'http://localhost:3002'
}));

app.get('/', function (req, res) {
  // Create an OAuth2 client object from the credentials in our config file
  const oauth2Client = new OAuth2(CONFIG.oauth2Credentials.client_id, CONFIG.oauth2Credentials.client_secret, CONFIG.oauth2Credentials.redirect_uris[0]);

  // Obtain the google login link to which we'll send our users to give us access
  const loginLink = oauth2Client.generateAuthUrl({
    access_type: 'offline', // Indicates that we need to be able to access data continously without the user constantly giving us consent
    scope: CONFIG.oauth2Credentials.scopes // Using the access scopes from our config file
  });
  return res.render("index", { loginLink: loginLink });
});

app.get('/get_some_data', function (req, res) {
  console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
  const isValid = req.cookies.cookie_name
  console.log(isValid)
  console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
  return res.render("data", {data: isValid});
});


app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})