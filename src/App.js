import React from 'react';
import { Route, Link } from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header';
import Nav from './pages/Nav/Nav';
import Game from './pages/Game/Game';

function App() {

  return (
    <div className="App">
      <Link to='/'>
        <Header />
      </Link>
      <main>
        <Route exact path='/' component={Nav} />
        <Route exact path='/' component={Game} />
        <Route exact path='/game' component={Game} />
      </main>
    </div >
  );
}

export default App;
