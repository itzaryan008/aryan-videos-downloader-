const axios = require('axios');

const apiBaseUrl = 'https://aryan-video-downloader.vercel.app/';

module.exports = {
  ndown: createRequest('ndown'),
  instagram: createRequest('instagram'),
  tikdown: createRequest('tikdown'),
  ytdown: createRequest('ytdown'),
  threads: createRequest('threads'),
  twitterdown: createRequest('twitterdown'),
  fbdown2: createRequest('fbdown2', (url, key) => ({ url, key })),
  GDLink: createRequest('GDLink'),
  pintarest: createRequest('pintarest'),
  capcut: createRequest('capcut'),
  likee: createRequest('likee'),
  alldown: createRequest('alldown'),
  spotifySearch: createRequest('spotify-search', (name, limit) => ({ name, limit })),
  soundcloudSearch: createRequest('soundcloud-search', (name, limit) => ({ name, limit })),
  spotifyDl: createRequest('spotifyDl', (url) => ({ url })),
  soundcloud: createRequest('soundcloud', (url) => ({ url })),
  terabox: createRequest('terabox', (url) => ({ url })),

};

function createRequest(endpoint, formatData) {
  return (url, key) => {
    return new Promise(async (resolve) => {
      try {
        const params = formatData ? formatData(url, key) : { url };
        const response = await axios.get(`${apiBaseUrl}${endpoint}`, { params });
        resolve(response.data);
      } catch (error) {
        resolve({
          developer: 'ArYAN AHMED RUDRO',
          status: false,
          msg: `${capitalize(endpoint.replace(/^\w/, c => c.toUpperCase()))} API error`,
        });
      }
    });
  };
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
