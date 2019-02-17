import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';

import Greeting from './Greeting/Greeting';
import SignIn   from './Auth/SignIn_Container';
import SignUp   from './Auth/SignUp_Container';
import Main     from './Main/Main_Container';

const App = () => (
  <div>
    <Switch>
      <ProtectedRoute exact path="/notes" component={ Main } />
      <AuthRoute exact path="/signin" component={ SignIn } />
      <AuthRoute exact path="/signup" component={ SignUp } />
      <AuthRoute exact path="/" component={ Greeting } />
    </Switch>
  </div>
);

export default App;
