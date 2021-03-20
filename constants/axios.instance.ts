import axios from  'axios';

// creating instance
export const axiosInstance = axios.create({
  baseURL : "https://api.themoviedb.org/3/movie"
});
