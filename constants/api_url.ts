
const API_KEY = "62b65a3f2dba73077152c6b19f9ca47c"
const POPULAR_MOVIE_API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
const TOP_RATED_MOVIE_API_URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
const UPCOMING_MOVIE_API_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
const NOW_PLAYING_MOVIE_API_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`


export {
  API_KEY,
  POPULAR_MOVIE_API_URL,
  TOP_RATED_MOVIE_API_URL,
  UPCOMING_MOVIE_API_URL,
  NOW_PLAYING_MOVIE_API_URL
}