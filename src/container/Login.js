import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';

const mapStateToProps = state => ({
  appName: state.appName
});

class Login extends React.Component {
  render() {
    return (
      <div>
        <h2>LOGIN PAGE</h2>
      </div>
    );
  }
}

export default connect(mapStateToProps, () => ({}))(Login);
