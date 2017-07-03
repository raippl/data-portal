import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'

//import registerServiceWorker from './registerServiceWorker';
import Header from './components/Header';
import Menu from './components/Menu';
import Home from './container/Home';
import Login from './container/Login';
import IngestionForm from './container/IngestionForm'
import Dataset from './container/Dataset';
import DatasetDetail from './components/Dataset/DatasetDetail';
<<<<<<< HEAD
import WizardContainer from './components/wizard-ingestion/WizardContainer'
=======
import WizardForm from './container/WizardForm'
>>>>>>> 2f5950daae842dc0f8984b9949fd4e1256d7844e
import MegaHeader from './components/MegaHeader/MegaHeader'
import configureStore from './configureStore'

import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'

<<<<<<< HEAD

=======
const store = configureStore();
>>>>>>> 2f5950daae842dc0f8984b9949fd4e1256d7844e

ReactDOM.render((
  <Provider store={store}>
    <Router>
        <div>
          <MegaHeader/>
          <Header/>
          <Menu/>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/ingestion" component={IngestionForm}/>
          <Route path="/ingestion-wizard" component={WizardContainer} />
          <Route path="/dataset" component={Dataset}/>
          <Route path="/datasetdetail/:dataset" component={DatasetDetail}/>
        </div>
      </Router>
  </Provider>
), document.getElementById('root'));

//registerServiceWorker();
