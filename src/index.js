import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'

//import registerServiceWorker from './registerServiceWorker';
import Home from './components/Home';
import Login from './components/Login';
import IngestionForm from './ingestion-form/IngestionForm'
import WizardForm from './components/wizard-ingestion/WizardForm'
import store from './store';

const showResults = values =>
  new Promise(resolve => {
    setTimeout(() => {
      // simulate server latency
      window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
      resolve()
    }, 500)
  })

ReactDOM.render((
  <Provider store={store}>
    <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/ingestion" component={IngestionForm}/>
          <Route path="/ingestion-wizard" component={WizardForm} />
        </div>
      </Router>
  </Provider>
), document.getElementById('root'));
//registerServiceWorker();
