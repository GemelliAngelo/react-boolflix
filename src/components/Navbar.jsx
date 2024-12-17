import { useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";

export default function Navbar() {
  const { query, setQuery, fetchMovies, fetchSeries } = useGlobalContext();

  const handleFormData = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmitData = (e) => {
    e.preventDefault();
    fetchMovies(query);
    fetchSeries(query);
    setQuery("");
  };

  return (
    <nav className="navbar">
      <h1>BOOLFLIX</h1>
      <form onSubmit={handleSubmitData}>
        <input value={query} onChange={handleFormData} type="text" />
        <button>CERCA</button>
      </form>
    </nav>
  );
}
