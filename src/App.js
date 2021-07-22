import './App.css';
import Login from './Login';
import Player from './Player';
import React, { useEffect } from 'react';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useDataLayerValue();

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

      async function getSpotifyUser() {
        try {
          const user = await spotify.getMe();
          dispatch({ type: 'SET_USER', 
          user });
        }
        catch(err) {
          console.error(err);
        }
      }
      getSpotifyUser();

      async function getSpotifyPlaylists() {
        try {
          const playlists = await spotify.getUserPlaylists();
          dispatch({
            type: 'SET_PLAYLISTS',
            playlists
          });
          console.log(playlists);
        }
        catch(err) {
          console.error(err);
        }
      }
      getSpotifyPlaylists();

      async function getDiscoverWeekly() {
        try {
          const discover_weekly = await spotify.getPlaylist('37i9dQZEVXcHrEzzkFatKp');
          dispatch({
            type: 'SET_DISCOVER_WEEKLY',
            discover_weekly
          });
        }
        catch(err) {
          console.error(err);
        }
      }
      getDiscoverWeekly();
    }
  }, [dispatch]);

  return (
    <div className="app">
      { token ? <Player spotify={spotify} /> : <Login /> }
    </div>
  );
}

export default App;