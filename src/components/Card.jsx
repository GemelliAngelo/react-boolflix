export default function Card({ program }) {
  return (
    <div className="card-poster">
      <img src={"https://image.tmdb.org/t/p/w342" + program.poster} />
    </div>
  );
}
