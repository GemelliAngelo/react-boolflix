import { createContext, useContext, useState, useEffect } from "react";

const GlobalContext = createContext();

const apiUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${apiKey}`,
  },
};

export const GlobalContextProvider = ({ children }) => {
  const [movies, setMovies] = useState();
  const [query, setQuery] = useState();

  const fetchMovies = (query) => {
    fetch(`${apiUrl}?query=${query}`, options)
      .then((res) => res.json())
      .then((data) => {
        const moviesList = data.results.map((movie) => ({
          id: movie.id,
          title: movie.title,
          originalTitle: movie.original_title,
          language: movie.original_language,
          vote: movie.vote_average,
        }));
        setMovies(moviesList);
      });
  };

  const globalData = {
    movies: movies,
    query,
    setQuery,
    fetchMovies,
  };

  return (
    <GlobalContext.Provider value={globalData}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
