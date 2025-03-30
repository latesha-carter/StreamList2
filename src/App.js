import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import StreamList from './components/StreamList';

function App() {
  const handleMenuChange = (event) => {
    const selectedOption = event.target.value;
    if (selectedOption) {
      // Navigate to the selected page
      window.location.href = `/${selectedOption.toLowerCase()}`;
    }
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to StreamList</h1>
          <p className="App-subtitle">
            This is your go-to app for managing and exploring your favorite movies and shows.
          </p>
          <div className="dropdown-container">
            <label htmlFor="menu">Navigate:</label>
            <select id="menu" onChange={handleMenuChange} defaultValue="">
              <option value="" disabled>Select an option</option>
              <option value="streamlist">StreamList</option>
              <option value="movies">Movies</option>
              <option value="cart">Cart</option>
              <option value="about">About</option>
            </select>
          </div>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<StreamList />} />
            <Route path="/streamlist" element={<StreamList />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
