import React from 'react';
import Header from './components/Header';
import { BrowserRouter, Route } from 'react-router-dom';

const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;

const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Route exact path="/" component={ Landing } />
      <Route exact path="/surveys" component={ Dashboard } />
      <Route path="/surveys/new" component={ SurveyNew } />
    </div>
  </BrowserRouter>
);

export default App;
