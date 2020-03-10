import React from 'react';
import Container from '@material-ui/core/Container';

import logo from './logo.svg';
import './App.css';
import Posts from './Posts';

function App() {
  return (
    <Container maxWidth="sm">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <section>
        <Posts />
      </section>
    </Container>
  );
}

export default App;
