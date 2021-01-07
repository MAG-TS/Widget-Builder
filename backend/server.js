const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require("passport");
const session = require("express-session");
const sessionSecret = process.env.SESSION_CONF || require('./config/sessionConfig').secret;
const cookieParser = require("cookie-parser");

// Require routes
const users = require('./routes/users');
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
app.use(
  cors({
    origin: "http://localhost:3000", // <-- location of the react app were connecting to
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

// Routes
app.use('/users', users);

// Serve on specified port
const port = process.env.PORT || 5000;
app.use('/co-workers', coWorkers);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
});