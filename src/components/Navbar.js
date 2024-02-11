import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <li style={liStyle}>
          <Link style={linkStyle} to="/">Home</Link>
        </li>
        <li style={liStyle}>
          <Link style={linkStyle} to="/treemap">Treemap</Link>
        </li>
      </ul>
    </nav>
  );
};

const navStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
};

const ulStyle = {
  listStyle: 'none',
  display: 'flex',
  justifyContent: 'center',
  padding: '0',
};

const liStyle = {
  padding: '10px',
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
};

export default Navbar;
