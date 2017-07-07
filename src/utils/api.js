import axios from 'axios';

var id = 'YOUR_CLIENT_ID';
var sec = 'YOUR_SECRET_ID';
var params = '?client_id=' + id + '&client_secret' + sec;

export function fetchPopularRepos (language) {
  var encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:'+ language + '&sort=stars&order=desc&type=Repositories');
  return axios.get(encodedURI)
    .then( response => response.data.items );
}

function getProfile (username) {
  return axios.get('https://api.github.com/users/' + username + params)
    .then( (user) => user.data );
}

function getRepos (username) {
  return axios.get('https://api.github.com/users/' + username + '/repos' + params + '&per_page=100')
    .then( (repos) => repos.data );
}

function getStarsCount (repos) {
  return repos.data.reduce( (count, repo) => count + repo.stargazers_count , 0)
}

function calculateScore (profile, repos) {
  var followers = profile.followers;
  var totalStarts = getStarsCount(repos);

  return (followers * 3) + totalStarts;
}

function handleError (error) {
  console.warn(error);
  return null;
}

function getUserData (player) {
  return axios.all([
    getProfile(player),
    getRepos(player)
  ]).then( (data) => ({
    profile: data[0],
    score: calculateScore(data[0], data[1])
  }));
}

function sortPlayers (players) {
  return players.sort ( (a, b) => b.score - a.score )
}

export function battle (players) {
  
}