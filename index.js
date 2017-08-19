const PORT = process.env.PORT || 5000;
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys.js');
require('./models/User');
require('./services/passport');

mongoose.Promise = global.Promise; // Gets rid of other deprecation warning

mongoose.connect(
  keys.mlab.uri,
  { ...keys.mlab.options, useMongoClient: true }
);

// Set App Variable
const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

app.listen(PORT);
