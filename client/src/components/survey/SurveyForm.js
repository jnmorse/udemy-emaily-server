import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import SurveyField from './Survey-Field';
import validateEmails from '../../utils/validate-emails';
import formFields from './form-fields';

class SurveyForm extends Component {
  renderFields() {
    return _.map(formFields, field => (
      <Field key={field.name} component={SurveyField} {...field} />
    ));
  }
  
  render() {
    return(
      <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
        <header><h1>Survey Form</h1></header>
        
        {this.renderFields()}
        
        <footer>
          <Link to="/surveys" className="red btn-flat white-text">
            Cancel
          </Link>
          
          <button type="submit" className="btn-flat teal right white-text">
            Next
            <i className="material-icons right">navigate_next</i>
          </button>
        </footer>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};
  
  errors.recipients = validateEmails(values.recipients || '');
  
  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm);