import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';
import * as actions from '../../actions';

import formFields from './form-fields';

const SurveyReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = _.map(formFields, ({ name, label }) => (
    <section key={name}>
      <header>
        <label>{label}</label>
      </header>
      
      <p>
        {formValues[name]}
      </p>
    </section>
  ));
  
  return(
    <section>
      <header>
        <h1>Please confirm your entries</h1>
      </header>
      
      {reviewFields}
      
      <footer>
        <button
          onClick={onCancel}
          className={"yellow darken-3 btn-flat white-text"}
        >
          {'Back'}
        </button>
        
        <button
          className={'green btn-flat right white-text'}
          onClick={() => submitSurvey(formValues, history)}
        >
          {'Send Survey'}
          <i className={'material-icons right'}>{'email'}</i>
        </button>
      </footer>
    </section>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyReview));