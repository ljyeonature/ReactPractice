// components/ Movies.js

import "../css/Movie.css";

function Movie(props) {
  return (
    <div>
      <div>
        <h3 className="movie__title">{props.title}</h3>
        <h6 className="movie__year">{props.year}</h6>
      </div>
      <img src={props.poster} title={props.title} alt={props.title} />
      <p>{props.summary.slice(0, 50)}</p>
      {props.genre.map((genre) => {
        return <span className="movie__genres">{genre}&nbsp;</span>;
      })}
    </div>
  );
}

export default Movie;
