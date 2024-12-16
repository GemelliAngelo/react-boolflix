import { useGlobalContext } from "../context/GlobalContext";

export default function Navbar() {
  const { query, setQuery, fetchMovies } = useGlobalContext();

  const handleFormData = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmitData = (e) => {
    e.preventDefault();
    fetchMovies(query);
    console.log(query);
  };

  return (
    <nav className="navbar">
      <h1>BOOLFLIX</h1>
      <form onSubmit={handleSubmitData}>
        <input onChange={handleFormData} type="text" />
        <button>CERCA</button>
      </form>
    </nav>
  );
}
