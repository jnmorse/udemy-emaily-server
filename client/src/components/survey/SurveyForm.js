import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import SurveyField from './SurveyField';

const FIELDS = [
  { label: 'Survey Title', name: 'title', autoFocus: true },
  { label: 'Subject Line', name: 'subject' },
  { label: 'E-Mail body', name: 'body' },
  { label: 'Recipient List', name: 'recipients' },
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
  
  if (!values.title) {
    errors.title = 'You must provide a title';
  }
  
  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm'
})(SurveyForm);