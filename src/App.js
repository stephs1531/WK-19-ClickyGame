import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import Game from './components/gameGrid'

function App() {
  return (
    <div>
      <Header />
      <div className = "container">
        <Game />
      </div>
    </div>
  );
}

export default App;
