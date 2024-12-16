import { useGlobalContext } from "../context/GlobalContext";

export default function Main() {
  const { movies, series } = useGlobalContext();

  return (
    <main>
      <div className="container">
        {movies && (
          <section className="movies">
            <h2>MOVIES</h2>
            {movies.map((movie) => (
              <ul key={movie.id}>
                <li>TITLE: {movie.title}</li>
                <li>ORIGINAL TITLE: {movie.originalTitle}</li>
                <img
                  src={"https://flagcdn.com/24x18/" + movie.language + ".png"}
                />
                <li>RATING {movie.vote}</li>
              </ul>
            ))}
          </section>
        )}
        {series && (
          <section className="series">
            <h2>TV SERIES</h2>
            {series.map((serie) => (
              <ul key={serie.id}>
                <li>TITLE: {serie.title}</li>
                <li>ORIGINAL TITLE: {serie.originalTitle}</li>
                <li>
                  <img
                    src={"https://flagcdn.com/24x18/" + serie.language + ".png"}
                  />
                </li>
                <li>RATING {serie.vote}</li>
              </ul>
            ))}
          </section>
        )}
      </div>
    </main>
  );
}
