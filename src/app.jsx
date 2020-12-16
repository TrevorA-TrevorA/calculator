import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from './calculator.jsx';
import './calculator.css';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Calculator />, document.querySelector("#root"))
})
