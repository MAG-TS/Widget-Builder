const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require("passport");
const session = require("express-session");
const sessionSecret = process.env.SESSION_CONF || require('./config/sessionConfig').secret;
const cookieParser = require("cookie-parser");
const path = require('path')
// Require routes
const users = require('./routes/users');
const widgetBuilder = require('./routes/widget-builder')
const coWorkers = require('./routes/co-workers');

require('dotenv').config();

app.use(express.json());

const uri = process.env.ATLAS_URI;

// Connect to MongoDB
mongoose.connect(uri, {
    useNewUrlParser: true, 
    useFindAndModify: false,
    useCreateIndex: true, 
    useUnifiedTopology: true
});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ADD this url if uploading: https://widget-builder-ba-project.herokuapp.com/
app.use(
  cors({
    origin: "https://widget-builder-ba-project.herokuapp.com", // <-- location of the react app were connecting to (http://localhost:3000)
    credentials: true,
  })
);
app.use(
  session({
    secret: sessionSecret,
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser(sessionSecret));
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

// Serve on specified port
const port = process.env.PORT || 5000;
// Routes
app.use('/users', users);
app.use('/widget-builder', widgetBuilder);
app.use('/co-workers', coWorkers);

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('../client/build'));

  app.get('*', (req, res) => {
     var reqPath = path.join(__dirname, '../'); 
     res.sendFile(path.resolve(reqPath, "client", "build", "index.html"))
  });
}



app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
});