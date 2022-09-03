const { default: axios } = require("axios");
axios.defaults.baseURL = "https://imdb-api.com/en/API/MostPopularMovies";

export const http = {
  get: axios.get,
};
