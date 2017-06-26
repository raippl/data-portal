import { Link } from 'react-router-dom';
import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div>
        <h2>Header App: {this.props.appName}</h2>
      </div>
    );
  }
}

export default Header;
