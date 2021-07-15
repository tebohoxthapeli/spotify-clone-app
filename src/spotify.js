// https://developer.spotify.com/
// documentation/web-playback-sdk/quick-start/#

export const authEndpoint = 'https://accounts.spotify.com/authorize';
const redirectUri = 'http://localhost:3000/';
const clientId = '524e49e84a134ef299e0ee12252f0d47';

// permissions to do stuff in the app:
const scopes = [
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-read-playback-state',
    'user-top-read',
    'user-modify-playback-state'
];

export const getTokenFromUrl = () => {
   return window.location.hash.substring(1).split('&').reduce((initial, item) => {
        let parts = item.split('=');

        // add a new property to the object:
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
    }, {});
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scopes=${scopes.join('%20')}&response_type=token&show_dialog=true`;