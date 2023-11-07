import { MovieStructure } from "../../../store/movies/types";

interface MovieCardProps {
  movie: MovieStructure;
}

const MovieCard = ({
  movie: { title, director, year },
}: MovieCardProps): React.ReactElement => {
  return (
    <article className="movie-card">
      <div className="movie-card__data">
        <h2 className="movie-card__title">{title}</h2>
        <dl className="movie-card__info-container">
          <dt className="movie-card__title-info">Director</dt>
          <dd className="movie-card__info">{director}</dd>
          <dt className="movie-card__title-info">Year</dt>
          <dd className="movie-card__info">{year}</dd>
        </dl>
      </div>
    </article>
  );
};

export default MovieCard;
