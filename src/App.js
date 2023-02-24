import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import netlifyIdentity from 'netlify-identity-widget';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const user = netlifyIdentity.currentUser();

  useEffect(() => {
    netlifyIdentity.init();
    netlifyIdentity.on('init', (user) => {
      console.log('init', user);
      setCurrentUser(user);
    });
    netlifyIdentity.on('login', (user) => {
      console.log('login', user);
      setCurrentUser(user);
    });
    netlifyIdentity.on('logout', () => {
      console.log('Logged out', user);
      setCurrentUser(user);
    });
    netlifyIdentity.on('error', (err) => console.error('Error', err));
    netlifyIdentity.on('open', () => console.log('Widget opened'));
    netlifyIdentity.on('close', () => console.log('Widget closed'));
    // eslint-disable-next-line
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
        {currentUser && <p>state says logged in</p>}
      </header>
    </div>
  );
}

export default App;
