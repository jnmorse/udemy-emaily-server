import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions';

import Header from './components/Header';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import SurveyNew from './components/survey/New';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  
  render() {
    return(
      <BrowserRouter>
        <div className="container">
          <Header />
          <Route exact path="/" component={ Landing } />
          <Route exact path="/surveys" component={ Dashboard } />
          <Route path="/surveys/new" component={ SurveyNew } />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
