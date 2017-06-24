import MainView from './MainView';
import React from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';

//const Promise = global.Promise;

const mapStateToProps = state => ({
  appName: state.appName
});

const mapDispatchToProps = dispatch => ({
  onLoad: (payload) =>
    dispatch({ type: 'LOAD', payload }),
  unLoad: () =>
    dispatch({ type: 'UNLOAD' }),
    
});

class Dataset extends React.Component {
  componentWillMount() {
    console.log('componentWillMount');
    //this.props.onLoad(agent.Articles.all());
  }

  loadComponent() {
    console.log('load component');
    this.props.onLoad(agent.Articles.all());
  }

  unloadComponent() {
    console.log('load component');
    this.props.unLoad();
  }

  render() {
    return (
        <div className="container">
            <form className="Form Form--spaced u-padding-all-xl u-text-r-xs">
              <div className='sectionTitle'>
                <h2>Cerca Dataset</h2>
              </div>
              <div className='sectionSubTitle'>
                <p>Funzione di ricerca dataset nel DAF</p>
              </div>
              <input className="form-control" id="searchtext" />
              <input type="button" value="Cerca" onClick={() => this.loadComponent()}/>
              <input type="button" value="Pulisci" onClick={() => this.unloadComponent()}/>
              <MainView/>
            </form>
           </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dataset);
