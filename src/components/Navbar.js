import React from 'react';
import './Navbar.css'; // Import CSS for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">StreamList</div>
      <div className="navbar-menu">
        <div className="dropdown">
          <button className="dropdown-button">Menu</button>
          <div className="dropdown-content">
            <a href="/about">About</a>
            <a href="/cart">Cart</a>
            <a href="/movies">Movies</a>
            <a href="/streamlist">Streamlist</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
