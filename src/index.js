import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'

//import registerServiceWorker from './registerServiceWorker';
import Header from './components/Header';
import Menu from './components/Menu';
import Home from './components/Home';
import Login from './components/Login';
import IngestionForm from './ingestion-form/IngestionForm'
import Dataset from './components/Dataset';
import DatasetDetail from './components/Dataset/DatasetDetail';
import WizardContainer from './components/wizard-ingestion/WizardContainer'
import MegaHeader from './components/MegaHeader/MegaHeader'
import MainView from './components/Dataset/MainView'
import store from './store';




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
          <MainView/>
        </div>
      </Router>
  </Provider>
), document.getElementById('root'));

//registerServiceWorker();
