import React from 'react';

import './Button.css';
// import styled from 'styled-components';



const Button = props => {

  return (
    <button type={props.type} className="button" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
