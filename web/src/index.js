import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import * as serviceWorker from './serviceWorker';
import './index.css';

const App = () => (
  <Router>
    <React.Fragment>
      <Route exact path="/" component={Login} />
      <Route path="/register" component={Register} />
    </React.Fragment>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
