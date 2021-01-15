const localStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const User = require('../models/user.model');

module.exports = function(passport) {
    passport.use(
        new localStrategy({ usernameField: 'email' }, (email, password, done) => {
            User.findOne({ email: email })
                .then(user => {
                    if (!user) {
                        return done(null, false, { error: 'Invalid credentials' });
                    }

                    bcrypt.compare(password, user.password, (err, passwordsMatch) => {
                        if (err) throw err;
                        if (passwordsMatch) {
                            return done(null, user);
                        } else {
                            return done(null, false, { error: 'Invalid credentials' });
                        }
                    });
                });
        })
    );
    
    passport.serializeUser((user, cb) => {
        cb(null, user.id);
      });

      passport.deserializeUser((id, cb) => {
          console.log(id);
        User.findOne({ _id: id }, (err, user) => {
            console.log(id);
          cb(err, user);
        });
      });
}