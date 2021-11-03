import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable';
import 'core-js';
import './polyfill'

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './i18n';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
