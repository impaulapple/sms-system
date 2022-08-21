import 'core-js';
import React from 'react';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Loading from './components/Loading';
import Layout from './containers/Layout';
import { AuthProvider } from './contexts/AuthContext';
import './i18n';
import './index.css';
import LoginPage from './modules/Login_Module/index';
import './polyfill';

ReactDOM.render(
  <AuthProvider>
    <Router>
      <React.Suspense fallback={<Loading />}>
        <Switch>
          <Route path="/Login" exact name="Login" render={props => <LoginPage />} />
          <Route path="/" name="Home" render={props => <Layout {...props} />} />
        </Switch>
      </React.Suspense>
    </Router>
  </AuthProvider>,
  document.getElementById('root')
);
