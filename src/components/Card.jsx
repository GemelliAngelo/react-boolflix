export default function Card({ program }) {
  return (
    <div className="card">
      <div className="card-poster">
        <img src={"https://image.tmdb.org/t/p/w342" + program.poster} />
      </div>
      <div className="card-info">
        <span>
          <strong>Titolo: </strong>
          {program.title}
        </span>
        <span>
          <strong>Titolo Originale: </strong>
          {program.originalTitle}
        </span>
        <figure>
          <img src={"https://flagcdn.com/24x18/" + program.language + ".png"} />
        </figure>
        <strong>Voto: {program.vote}</strong>
        <p className="overview">
          <strong>Overview: </strong>
          {program.description}
        </p>
      </div>
    </div>
  );
}
