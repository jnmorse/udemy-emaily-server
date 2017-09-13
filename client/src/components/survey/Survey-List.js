import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';
import map from 'lodash/map';
import orderBy from 'lodash/orderBy';

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }
  
  renderSurveys() {
    const surveys = orderBy(this.props.surveys, ['dateSent'], 'desc');
    
    return map(surveys, survey => (
      <section className="card blue-grey darken-1" key={survey._id}>
        <div className="card-content white-text">
          <header className="card-title">{survey.title}</header>
          
          <p>{survey.body}</p>
          
          <p className="right">
            {`Sent On: ${new Date(survey.dateSent).toLocaleDateString()}`}
          </p>
        </div>
        
        <footer className="card-action">
          <span
            className="orange-text text-accent-2" style={{ marginRight: 24 }}
          >
            {`Yes: ${survey.yes}`}
          </span>
          
          <span
            className="orange-text text-accent-2" style={{ marginRight: 24 }}
          >
            {`No: ${survey.no}`}
          </span>
        </footer>
      </section>
    ));
  }
  
  render() {
    return(
      <div>
        {this.renderSurveys()}
      </div>
    );
  }
}

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);