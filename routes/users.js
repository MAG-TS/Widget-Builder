const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs");
const passport = require("passport");
const axios = require('axios');
// Require Models
const User = require('../models/user.model');

// GET
// Logout
router.get('/logout', (req, res) => {
    console.log("logged out");
    req.logout(); // removes the req.user property and clear the login session (if any).
    req.session.destroy();
});

// GET
// Get users
router.get('/', (req, res) => {
    User.find({}, (err, users) => {
        err ? res.send('No users found.') : res.send(users);
    });
});

// GET
// Get current user 
router.get("/user", (req, res) => {
    console.log(req.user)
  res.send(req.user); // The req.user stores the entire user that has been authenticated inside of it.
});

// GET
// Get single user by its id
router.get('/:id', (req, res) => {
    User.findById(req.params.id, (err, user) => {
        err ? res.send('User not found.') : res.send(user);
    });
});

// POST
// Register new user
router.post("/register", (req, res) => {
    User.findOne({ email: req.body.email }, async (err, doc) => {
      if (err) throw err;
      if (doc) res.send("User Already Exists");
      if (!doc) {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
  
        const newUser = new User({
          email: req.body.email,
          password: hashedPassword,
          jobTitle: req.body.jobTitle
        });
        await newUser.save();
        res.send("User Created");
      }
    });
  });

// POST
// Login
router.post("/login", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
      if (err) throw err;
      if (!user) res.send("No User Exists");
      else {
        req.logIn(user, (err) => {
          if (err) throw err;
          res.send("Successfully Authenticated");
          console.log(req.user);
        });
      }
    })(req, res, next);
  });


router.get('/register-step-two/get-all-jira-users', (req, res) => {
    const config = {
      headers: {
          'Authorization': `Basic ${Buffer.from(
          'widget.builder.ba.project@gmail.com:Xd9Rwk5kyrRstNo4bliI5806'
        ).toString('base64')}`,
        'Accept': 'application/json'
      }
    }
    axios.get('https://widget-builder-ba-project-19.atlassian.net/rest/api/3/users/search', config)
            .then((response) => {
                res.send(response.data);
            })
            .catch(err => console.log(err));
});

router.put("/register-step-two/link-jira-account", (req, res) => {
  
    User.findOne({email: req.body.email}).then(user => 
      {
        user.jiraId = req.body.jiraId,
        user.name = req.body.name
        user.save()
        .then(() => res.json('Account Linked'))
        .catch(err => res.status(400).json('Error ' + err));
      }
    ).catch(err => res.status(400).json('Error ' + err));
  }
);


module.exports = router;