import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import StreamList from './components/StreamList';
import Navbar from './components/Navbar';
import PopularMovies from './components/PopularMovies';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <header className="App-header">
          <h1 className="App-title">Welcome to StreamList</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<StreamList />} />
            <Route path="/popular-movies" element={<PopularMovies />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
