import React from 'react';

import './App.css';
import logo from './logo-sass.svg';

function App() {
  return (
    <div className="app">
      <img src={logo} className="app__logo" alt="Sass logo" />
      <h1 className="app__title">
        Introduction to advanced Sass.
      </h1>
    </div>
  );
}

export default App;
