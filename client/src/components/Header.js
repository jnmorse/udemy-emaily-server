import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderContent() {
    switch(this.props.auth) {
      case null:
        return;
      case false:
        return(
          <a href="/auth/google">{'Login With Google'}</a>
        );
      default:
        return(
          <ul>
            <li>
              <Link to="/surveys">{'Dashboard'}</Link>
            </li>
            
            <li>
              <a href="/api/logout">{'Logout'}</a>
            </li>
          </ul>
        );
    }
  }
  
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="left brand-logo">
            E-Maily
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              {this.renderContent()}
            </li>
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
