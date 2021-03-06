import _ from 'lodash';

// eslint-disable-next-line max-len
const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default emails => {
  const invalidEmails = _.map(emails.split(','), email => email.trim())
    .filter(email => {
      if (re.test(email) === false && email !== '') {
        return true;
      } else {
        return false;
      }
    });
  
  if (invalidEmails.length) {
    return `These emails are invalid ${invalidEmails}`;
  }
  
  return;
};