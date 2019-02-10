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

import Greeting from './Greeting/Greeting_Container.jsx';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Greeting} />
    </Switch>

  </div>
);

export default App;
