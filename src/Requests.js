const API_KEY = "b93a64480573ce5248c28b200d79d029";

const requests = {
  fetchTrending: `/trending/all/week/?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchAnimation: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  fetchScifi: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  fetchMystery: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchUpcomingMovies: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
  fetchNowPlaying: `/movie/now_playing?api_key=${API_KEY}&language=en-US`,
  fetchTv: `/tv/popular?api_key=${API_KEY}&language=en-US`,
  fetchTopRatedTv: `/tv/airing_today?api_key=${API_KEY}&language=en-US`,
  fetchTeluguMovies: `/discover/movie?api_key=${API_KEY}&with_original_language=te&year=2019`,
  fetchActionTeluguMovies: `/discover/movie?api_key=${API_KEY}&with_original_language=te&year=2020`,
  fetchHindiMovies: `/discover/movie?api_key=${API_KEY}&with_original_language=hi&year=2019`,
  fetchHindiLatest: `/discover/movie?api_key=${API_KEY}&with_original_language=hi&year=2021`,
  fetchKannadaMovies: `/discover/movie?api_key=${API_KEY}&with_original_language=kn&year=2021`,
  fetchKannadaAction: `/discover/movie?api_key=${API_KEY}&with_original_language=kn&year=2018`,
  fetchTamilMovies: `/discover/movie?api_key=${API_KEY}&with_original_language=ta&year=2020`,
  fetchMalayalamMovies: `/discover/movie?api_key=${API_KEY}&with_original_language=ml&year=2021`,
  fetchKannadaBlock: `/discover/movie?api_key=${API_KEY}&with_original_language=kn&year=2015`,
  fetchAll: [
    `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  ],
};

export default requests;
