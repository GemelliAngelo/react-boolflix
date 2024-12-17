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

  const langFlag = (lang) => {
    if (lang === "en") {
      return "gb";
    }
    if (lang === "ja") {
      return "jp";
    }

    return lang;
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
          language: langFlag(movie.original_language),
          poster: movie.poster_path,
          vote: movie.vote_average,
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
          language: langFlag(serie.original_language),
          poster: serie.poster_path,
          vote: serie.vote_average,
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
