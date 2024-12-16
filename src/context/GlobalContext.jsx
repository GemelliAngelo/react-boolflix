import { createContext, useContext, useState, useEffect } from "react";

const GlobalContext = createContext();

const apiUrl = import.meta.env.VITE_API_URL;
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: import.meta.env.VITE_API_KEY,
  },
};

export const GlobalContextProvider = ({ children }) => {
  const [moviesList, setMoviesList] = useState();

  useEffect(() => fetchData(), []);

  const fetchData = () => {
    fetch(`${apiUrl}?`)
      .then((res) => res.json())
      .then((data) => {
        setMoviesList(data);
      });
  };

  const globalData = {
    movies: moviesList,
  };

  return (
    <GlobalContext.Provider value={globalData}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
