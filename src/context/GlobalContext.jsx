import { createContext, useContext, useState, useEffect } from "react";

const GlobalContext = createContext();

const apiMovieUrl = import.meta.env.VITE_API_MOVIE_URL;
const apiSeriesUrl = import.meta.env.VITE_API_SERIES_URL;
const apiKey = import.meta.env.VITE_API_KEY;
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${apiKey}`,
  },
};

export const GlobalContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [query, setQuery] = useState("");

  const langToFlag = (lang) => {
    if (lang === "en") {
      return "us";
    }
    if (lang === "ja") {
      return "jp";
    }

    return lang;
  };

  const voteToStars = (vote) => {
    const fullStars = parseInt(Math.round(vote / 2));
    const starsId = [];
    for (let i = 1; i <= fullStars; i++) {
      starsId.push(i);
    }
    if (!starsId.length) {
      return <i className="fa-light fa-star" />;
    }
    return starsId.map((id) => <i key={id} className="fa-solid fa-star" />);
  };

  const fetchMovies = (query) => {
    fetch(`${apiMovieUrl}?query=${query}`, options)
      .then((res) => res.json())
      .then((data) => {
        const moviesList = data.results.map((movie) => ({
          id: movie.id,
          title: movie.title,
          originalTitle: movie.original_title,
          description: movie.overview,
          language: langToFlag(movie.original_language),
          poster: movie.poster_path,
          vote: voteToStars(movie.vote_average),
        }));
        setMovies(moviesList);
      });
  };

  const fetchSeries = (query) => {
    fetch(`${apiSeriesUrl}?query=${query}`, options)
      .then((res) => res.json())
      .then((data) => {
        const seriesList = data.results.map((serie) => ({
          id: serie.id,
          title: serie.name,
          originalTitle: serie.original_title,
          description: serie.overview,
          language: langToFlag(serie.original_language),
          poster: serie.poster_path,
          vote: voteToStars(serie.vote_average),
        }));
        setSeries(seriesList);
      });
  };

  const globalData = {
    movies,
    fetchMovies,
    series,
    fetchSeries,
    query,
    setQuery,
  };

  return (
    <GlobalContext.Provider value={globalData}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
