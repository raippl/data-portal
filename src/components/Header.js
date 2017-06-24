import { Link } from 'react-router-dom';
import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div>
        <h2>Header App: {this.props.appName}</h2>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/ingestion">Ingestion</Link></li>
          <li><Link to="/ingestion-wizard">IngestionWizard</Link></li>
        </ul>
      </div>
    );
  }
}

export default Header;
