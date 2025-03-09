import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Jira Clone</Link>
        <div className="navbar-nav">
          <Link className="nav-link" to="/projects">Projects</Link>
          <Link className="nav-link" to="/login">Login</Link>
          <Link className="nav-link" to="/signup">Signup</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;