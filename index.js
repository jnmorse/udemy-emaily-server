const PORT = process.env.PORT || 5000;

// Require Express
const express = require('express');
require('./services/passport');

// Set App Variable
const app = express();

require('./routes/authRoutes')(app);

app.listen(PORT);
