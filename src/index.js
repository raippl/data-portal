import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'

import Home from './components/Home';
import Login from './components/Login';
import store from './store';

ReactDOM.render((
  <Provider store={store}>
    <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
        </div>
      </Router>
  </Provider>
), document.getElementById('root'));
