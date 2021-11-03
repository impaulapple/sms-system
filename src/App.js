import React from 'react'
import Layout from './containers/Layout'
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Loading from './components/Loading';
import LoginPage from './modules/Login_Module/index';
import { AuthProvider } from './contexts/AuthContext';

const App = () => {

  return (
    <AuthProvider>
      <Router>
        <React.Suspense fallback={<Loading />}>
          <Switch>
            <Route path="/Login" exact name="Login" render={props => <LoginPage />} />
            <Route path="/" name="Home" render={props => <Layout {...props} />} />
          </Switch>
        </React.Suspense>
      </Router>
    </AuthProvider>
  );
}

export default App;
