const axios = require('axios');
const BASE_URL = "https://api-sandbox.bookingkit.de/v3";

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';

axios.interceptors.request.use(function (config) {

  if (config.url === '/oauth/token') {
    config.baseURL = "https://api-sandbox.bookingkit.de"
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});

module.exports = axios;
