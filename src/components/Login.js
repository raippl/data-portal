import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';

const mapStateToProps = state => ({
  appName: state.appName
});

class Login extends React.Component {
  render() {
    return (
      <div>
        <Header appName={this.props.appName} />
        <h2>LOGIN PAGE</h2>
      </div>
    );
  }
}

export default connect(mapStateToProps, () => ({}))(Login);
