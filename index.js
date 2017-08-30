const PORT = process.env.PORT || 5000;
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys.js');
require('./models/User');
require('./models/Survey');
require('./services/passport');

mongoose.Promise = global.Promise; // Gets rid of other deprecation warning

mongoose.connect(keys.mlab.uri, { ...keys.mlab.options, useMongoClient: true });

// Set App Variable
const app = express();

app.use(bodyParser.json());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/auth-routes')(app);
require('./routes/billing-routes')(app);
require('./routes/survey-routes')(app);

// Only use in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`);
  });
}

app.listen(PORT);
