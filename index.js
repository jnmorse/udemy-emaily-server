const PORT = process.env.PORT || 5000;

// Require Express
const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

// Set App Variable
const app = express();

passport.use(new GoogleStrategy(
  Object.assign(keys.google, { callbackURL: '/auth/google/callback'}),
  (accessToken, refreshToken, profile, done) => {
    console.log('access token', accessToken);
    console.log('refresh token', refreshToken);
    console.log('profile', profile);
  }
));

// app.get('/', (req, res) => {});
app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

app.get('/auth/google/callback', passport.authenticate('google'));

app.listen(PORT);
