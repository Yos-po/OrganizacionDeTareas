import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <h4>John's Blog</h4>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;


