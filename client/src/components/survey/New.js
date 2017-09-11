import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './Survey-Form';
import SurveyReview from './Survey-Review';

class SurveyNew extends Component {
  state = { showForm: true };
  
  showReview() {
    this.setState({ showForm: false });
  }
  
  showForm() {
    this.setState({ showForm: true });
  }
  
  render() {
    const { showForm } = this.state;
    
    if (showForm) {
      return(<SurveyForm onSurveySubmit={() => this.showReview()} />);
    } else {
      return (<SurveyReview onCancel={() => this.showForm()} />);
    }
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyNew);
