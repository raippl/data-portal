import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
//import registerServiceWorker from './registerServiceWorker';

import Home from './components/Home';
import Login from './components/Login';
import IngestionForm from './ingestion-form/IngestionForm'
import store from './store';

ReactDOM.render((
  <Provider store={store}>
    <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/ingestion" component={IngestionForm}/>
        </div>
      </Router>
  </Provider>
), document.getElementById('root'));
//registerServiceWorker();
