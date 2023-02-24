import { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import netlifyIdentity from 'netlify-identity-widget';

function App() {
  useEffect(() => {
    netlifyIdentity.init();
    console.log('hi');
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div data-netlify-identity-menu></div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button
          onClick={() => {
            netlifyIdentity.open();
          }}
        >
          Login
        </button>
      </header>
    </div>
  );
}

export default App;
