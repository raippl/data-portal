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
      <div>
        <div className="u-background-50 u-textCenter u-padding-r-all u-textCenter u-padding-bottom-xxl">
            <form className="Form">
            <div className="Form-field Form-field--withPlaceholder Grid u-background-white u-color-grey-30 u-borderRadius-s" role="search">
              <input className="Form-input Form-input--ultraLean Grid-cell u-sizeFill u-text-r-s u-color-black u-text-r-xs u-borderRadius-s" required id="searchtext" />
              <label className="Form-label u-color-grey-50 u-text-r-xxs" htmlFor="cerca">cerca nel sito</label>
              <input type="button" value="Cerca" onClick={() => this.loadComponent()}/>
              <input type="button" value="Pulisci" onClick={() => this.unloadComponent()}/>

             </div>
           </form>
       </div>
       </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dataset);
