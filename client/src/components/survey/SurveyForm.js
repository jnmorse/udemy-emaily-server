import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validate-emails';

const FIELDS = [
  {
    label: 'Survey Title',
    name: 'title',
    autoFocus: true,
    noValueError: 'You must provide a title'
  },
  {
    label: 'Subject Line',
    name: 'subject',
    noValueError: 'You must include a subject'
  },
  {
    label: 'E-Mail body',
    name: 'body',
    noValueError: 'Must provide the email body message'
  },
  {
    label: 'Recipient List',
    name: 'recipients',
    noValueError: 'Must include a comma seperated list of recipients'
  },
];

class SurveyForm extends Component {
  renderFields() {
    return _.map(FIELDS, field => (
      <Field key={field.name} component={SurveyField} {...field} />
    ));
  }
  
  render() {
    return(
      <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
        <header><h1>Survey Form</h1></header>
        
        {this.renderFields()}
        
        <Link to="/surveys" className="red btn-flat white-text">
          Cancel
        </Link>
        
        <button type="submit" className="btn-flat teal right white-text">
          Next
          <i className="material-icons right">navigate_next</i>
        </button>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};
  
  errors.recipients = validateEmails(values.recipients || '');
  
  _.forEach(FIELDS, ({ name, noValueError }) => {
    if (!values[name]) {
      errors[name] = noValueError;
    }
  });
  
  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm'
})(SurveyForm);