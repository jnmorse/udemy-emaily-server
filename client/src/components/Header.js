import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
  renderContent() {
    switch(this.props.auth) {
    case null:
      return;
    case false:
      return(
        <li><a href={"/auth/google"}>{'Login With Google'}</a></li>
      );
    default:
      return [
        <li key={'payments'}><Payments /></li>,
        <li key={'credits'} style={{ margin: '0 10px'}}>
          {`Credits: ${this.props.auth.credits}`}</li>,
        <li key={'logout'}><a href={"/api/logout"}>{'Logout'}</a></li>,
      ];
    }
  }
  
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <header>
            <h1 style={{ margin: 0 }}>
              <Link
                to={this.props.auth ? '/surveys' : '/'}
                className="left brand-logo"
                style={{ padding: "0 10px" }}
              >
                E-Maily
              </Link>
            </h1>
          </header>
          
          <ul id="nav-mobile" className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
