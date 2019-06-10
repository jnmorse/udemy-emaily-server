import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
    return (
      <BrowserRouter>
        <main className="container">
          <header><h1 className="hide">Emaily</h1></header>
          <Header />
          <Route exact path="/" component={Landing} />
          <Switch>
            <Route exact path="/surveys" component={Dashboard} />
            <Route exact path="/surveys/new">
              <SurveyNew />
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
