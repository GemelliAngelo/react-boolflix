import { useGlobalContext } from "../context/GlobalContext";

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
                <img src={"https://image.tmbd.org/t/p/w342" + movie.poster} />
              </div>
              //   <ul key={movie.id}>
              //     <li>TITLE: {movie.title}</li>
              //     <li>ORIGINAL TITLE: {movie.originalTitle}</li>
              //     <img
              //       src={"https://flagcdn.com/24x18/" + movie.language + ".png"}
              //     />
              //     <li>RATING {movie.vote}</li>
              //   </ul>
            ))}
          </section>
        )}
        <h2>TV SERIES</h2>
        {series && (
          <section className="series">
            {series.map((serie) => (
              <div key={serie.id} className="card">
                <img src={"https://image.tmbd.org/t/p/w342" + serie.poster} />
              </div>
              //   <ul key={serie.id}>
              //     <li>TITLE: {serie.title}</li>
              //     <li>ORIGINAL TITLE: {serie.originalTitle}</li>
              //     <li>
              //       <img
              //         src={"https://flagcdn.com/24x18/" + serie.language + ".png"}
              //       />
              //     </li>
              //     <li>RATING {serie.vote}</li>
              //   </ul>
            ))}
          </section>
        )}
      </div>
    </main>
  );
}
