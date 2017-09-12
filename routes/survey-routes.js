const mongoose = require('mongoose');
const requireLogin = require('../middleware/require-login');
const requireCredits = require('../middleware/require-credits');
const Mailer = require('../services/Mailer');
// const _ = require('lodash');
const map = require('lodash/fp/map');
const flow = require('lodash/fp/flow');
const forEach = require('lodash/fp/forEach');
const compact = require('lodash/fp/compact');
const uniqBy = require('lodash/uniqBy');
const pathParser = require('path-parser');
const { URL } = require('url');
const surveyTemplate = require('../services/emailTemplates/survey-template');

const Survey = mongoose.model('surveys');

module.exports = app => {
  app.get('/api/surveys/:surveyId/:choice', (req, res) => {
    res.send('Thanks for voting!');
  });
  
  app.post('/api/surveys/webhooks', (req, res) => {
    const p = new pathParser('/api/surveys/:surveyId/:choice');
    
    const updateSurveys = flow(
      map(({email, url}) => {
        const pathname = new URL(url).pathname;
        const match = p.test(pathname);
        
        if (match) {
          return { email, surveyId: match.surveyId, choice: match.choice };
        }
      }),
      compact,
      event => uniqBy(event, 'email', 'surveyId'),
      forEach(({surveyId, email, choice }) => {
        Survey.updateOne({
          _id: surveyId,
          recipients: {
            $elemMatch: { email, responded: false }
          }
        }, {
          $inc: { [choice]: 1 },
          $set: { 'recipients.$.responded': true },
          lastResponed: new Date()
        }).exec();
      })
    );
    
    updateSurveys(req.body);
    
    res.send('Okay');
  });

  app.post(
    '/api/surveys',
    requireLogin(),
    requireCredits(),
    async (req, res) => {
      const { title, subject, body, recipients } = req.body;

      const survey = new Survey({
        title,
        subject,
        body,
        recipients: recipients
          .split(',')
          .map(email => ({ email: email.trim() })),
        _user: req.user.id,
        dateSent: Date.now()
      });

      const mailer = new Mailer(survey, surveyTemplate(survey));

      try {
        await mailer.send();
        await survey.save();

        req.user.credits -= 1;
        const user = await req.user.save();

        res.send(user);
      } catch (err) {
        res.status(422).send(err);
      }
    }
  );
  
  app.get('/api/surveys', requireLogin(), async (req, res) => {
    const surveys = await Survey.find({ _user: req.user.id })
      .select({
        recipients: false
      });
    
    res.send(surveys);
  });
};
