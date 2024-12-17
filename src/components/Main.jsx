import { useGlobalContext } from "../context/GlobalContext";
import Card from "./Card";

export default function Main() {
  const { movies, series } = useGlobalContext();

  return (
    <main>
      <div className="container">
        <h2>MOVIES</h2>
        {movies && (
          <section className="movies">
            {movies.map((movie) => (
              <Card program={movie} key={movie.id} />
            ))}
          </section>
        )}
        <hr />
        <h2>TV SERIES</h2>
        {series && (
          <section className="series">
            {series.map((serie) => (
              <Card program={serie} key={serie.id} />
            ))}
          </section>
        )}
      </div>
    </main>
  );
}
