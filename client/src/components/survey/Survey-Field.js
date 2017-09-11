import React, { Component } from 'react';

class SurveyField extends Component {
  componentDidMount() {
    this.input.addEventListener('invalid', this.setValidity());
    this.input.addEventListener('input', this.clearValidity());
  }
  
  componentWillUnmount() {
    this.input.removeEventListener('invalid', this.setValidity());
    this.input.removeEventListener('input', this.clearValidity());
  }
  
  setValidity() {
    return event => {
      const message = this.props.invalidMessage || '';
      
      event.target.setCustomValidity(message);
    };
  }
  
  clearValidity() {
    return event => {
      event.target.setCustomValidity('');
    };
  }
  
  showErrors() {
    const { meta: { touched, error}} = this.props;
    
    if (touched && error) {
      return(
        <div>
          {error}
        </div>
      );
    } else {
      return null;
    }
  }
  
  render() {
    const {
      label,
      input,
      autoFocus,
      required
    } = this.props;
    
    return(
      <div>
        <label onClick={() => this.input.focus()}>{label}</label>
        <input
          ref={input => this.input = input}
          autoFocus={autoFocus}
          required={required}
          {...input}
        />
        {this.showErrors()}
      </div>
    );
  }
}

export default SurveyField;
