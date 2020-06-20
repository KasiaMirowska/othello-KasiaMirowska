import React from 'react';
import { Link, Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/Homepage';
import Game from './pages/Game/Game';

function App() {
  
  return (
    <div className="App">
      <Header />
      
      <Route path='/' component={HomePage} />
      <Route exact path='/game' component={Game} />
    </div>
  );
}

export default App;
