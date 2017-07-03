import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';

const mapStateToProps = state => ({
  appName: state.appName
});

class Home extends React.Component {
  render() {
    return (
      <div>
        <h2>HOME PAGE</h2>
      </div>
    );
  }
}

export default connect(mapStateToProps, () => ({}))(Home);
