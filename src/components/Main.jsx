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
              <div key={movie.id} className="card">
                <Card program={movie} />
                <div className="card-info">
                  <span>
                    <strong>Titolo: </strong>
                    {movie.title}
                  </span>
                  <span>
                    <strong>Titolo Originale: </strong>
                    {movie.originalTitle}
                  </span>
                  <figure>
                    <img
                      src={
                        "https://flagcdn.com/24x18/" + movie.language + ".png"
                      }
                    />
                  </figure>
                  <strong>Voto: {Math.floor(movie.vote / 2)}</strong>
                  <p className="overview">{movie.description}</p>
                </div>
              </div>
            ))}
          </section>
        )}
        <hr />
        <h2>TV SERIES</h2>
        {series && (
          <section className="series">
            {series.map((serie) => (
              <Card program={serie} key={serie.id} />
              //   <ul key={serie.id}>
              //     <li>TITLE: {serie.title}</li>
              //     <li>ORIGINAL TITLE: {serie.originalTitle}</li>
              //     <li>
              //       <img
              //         src={"https://flagcdn.com/24x18/" + serie.language + ".png"}
              //       />
              //     </li>
              //     <li>RATING: {serie.vote}</li>
              //   </ul>
            ))}
          </section>
        )}
      </div>
    </main>
  );
}
