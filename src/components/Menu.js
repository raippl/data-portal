import { Link } from 'react-router-dom';
import React from 'react';

class Menu extends React.Component {
  render() {
    return (
    <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/ingestion">Ingestion</Link></li>
          <li><Link to="/dataset">Dataset</Link></li>
        </ul>
    </div>
    );
  }
}

export default Menu;
