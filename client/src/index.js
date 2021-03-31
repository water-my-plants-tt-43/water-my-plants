import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import {ThemeContext, theme} from './context/ThemeContext'


ReactDOM.render(
  <Router>
    <ThemeContext.Provider value={theme}>
    <App />
    </ThemeContext.Provider>
  </Router>,
  document.getElementById('root')
);
