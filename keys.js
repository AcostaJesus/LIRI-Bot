// Spotify web API
var SpotifyApi = require('node-spotify-api');

var spotifyKeys = {
  id: '6c014646f957407d94e28a7dd28c1b10',
  secret: '26ebe83600fa40219759b5d1e5b6a76d'

};


// OMDB API
var omdbapiKey = {
	apiKey:"71a19d15"
};

// Export keys
module.exports = {
  // Spotify keys:
  spotifyKeys: spotifyKeys,
  // OMDB key:
  omdbapiKey: omdbapiKey

};