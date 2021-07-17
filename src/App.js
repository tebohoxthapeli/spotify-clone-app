import './App.css';
import Login from './Login';
import Player from './Player';
import React, { useEffect } from 'react';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    document.title = 'Spotify Clone';
  }, []);

  useEffect(() => {
    const hash = getTokenFromUrl();
    const _token = hash.access_token;
    window.location.hash = '';

    if (_token) {

      dispatch({
        type: 'SET_TOKEN',
        token: _token
      });

      spotify.setAccessToken(_token);

      // returns a promise
      spotify.getMe()
      .then(user => {
        dispatch({ type: 'SET_USER', user });
      })
      .catch(err => {
        console.error('There was an error retrieving the user.');
      });
    }
  }, [dispatch]);

  console.log('user', user);
  console.log('token', token);

  return (
    <div className="app">
      { token ? <Player /> : <Login /> }
    </div>
  );
}

export default App;
