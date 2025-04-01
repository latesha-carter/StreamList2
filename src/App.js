import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import StreamList from './components/StreamList';
import PopularMovies from './components/PopularMovies';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <h1 className="App-title">Welcome to StreamList</h1>
      </header>
      <main className="App-main">
        <Routes>
          <Route path="/" element={<StreamList />} />
          <Route path="/popular-movies" element={<PopularMovies />} />
        </Routes>
        <div>
          <label htmlFor="dropdown1">Dropdown 1:</label>
          <select id="dropdown1">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
        </div>
        <div>
          <label htmlFor="dropdown2">Dropdown 2:</label>
          <select id="dropdown2">
            <option value="optionA">Option A</option>
            <option value="optionB">Option B</option>
          </select>
        </div>
      </main>
    </div>
  );
}

export default App;
