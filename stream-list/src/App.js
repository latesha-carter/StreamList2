// filepath: /Users/lateshabrewer-carter/stream-list/stream-list/src/App.js
// /stream-list/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import StreamList from './components/StreamList';
import Movies from './components/Movies';
import Cart from './components/Cart';
import About from './components/About';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="dropdown">
            <button className="dropbtn">Profile</button>
            <div className="dropdown-content">
              <a href="#">Profile 1</a>
              <a href="#">User Information</a>
            </div>
          </div>
          <h1 className="App-title">Welcome to StreamList</h1>
          <div className="dropdown" style={{ float: 'right' }}>
            <button className="dropbtn">Menu</button>
            <div className="dropdown-content">
              <Link to="/about">About</Link>
              <Link to="/cart">Cart</Link>
              <Link to="/movies">Movies</Link>
              <Link to="/">StreamList</Link>
            </div>
          </div>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<StreamList />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
