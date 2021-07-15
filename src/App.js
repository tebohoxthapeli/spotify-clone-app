import './App.css';
import Login from './Login';
import React, { useEffect, useState } from 'react';
import { getTokenFromUrl } from './spotify';

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    document.title = 'Spotify Clone';
  });

  useEffect(() => {
    const hash = getTokenFromUrl();
    const _token = hash.access_token;
    window.location.hash = '';

    if (_token) {
      setToken(_token);
    }
  });

  return (
    <div className="app">
      { token ? <h1>I am logged in</h1> : <Login /> }
      <Login />
    </div>
  );
}

export default App;
