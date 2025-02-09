import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
import StreamList from './components/StreamList';
import Movies from './components/Movies';
import Cart from './components/Cart';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">StreamList</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/movies">Movies</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={StreamList} />
          <Route path="/movies" component={Movies} />
          <Route path="/cart" component={Cart} />
          <Route path="/about" component={About} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
