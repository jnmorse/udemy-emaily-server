const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user);
    });
});

passport.use(
  new GoogleStrategy(
    Object.assign(keys.google, { callbackURL: '/auth/google/callback' }),
    (accessToken, refreshToken, profile, done) => {
      var google = { googleId: profile.id };

      User.findOne(google)
        .then((existingUser) => {
          if (existingUser) {
            done(existingUser);
          } else {
            new User(google)
              .save()
              .then(user => done(null, user));
          }
        });
    }
  )
);
