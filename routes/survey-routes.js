const requireLogin = require('../middleware/require-login');

module.exports = app => {
  app.post('/api/surveys', requireLogin(), (req, res) => {});
};
