import React from 'react';

export default (props) => {
  const error = () => {
    if (props.meta.touched && props.meta.error) {
      return(
        <div
          className={'red-text text-darken-4'}
          style={{ marginBottom: 10 }}
        >
          {props.meta.error}
        </div>
      );
    }
    
    return null;
  };
  
  return(
    <div>
      <label>{props.label}</label>
      <input
        {...props.input}
        autoFocus={props.autoFocus}
      />
      {error()}
    </div>
  );
};
