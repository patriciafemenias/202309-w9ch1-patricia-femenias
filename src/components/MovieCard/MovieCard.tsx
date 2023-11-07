import { MovieStructure } from "../../store/movies/types";
import MovieCardStyled from "./MovieCardStyled";

interface MovieCardProps {
  movie: MovieStructure;
}

const MovieCard = ({
  movie: { title, director, year, picture },
}: MovieCardProps): React.ReactElement => {
  return (
    <MovieCardStyled className="movie-card">
      <div className="movie-card__data">
        <img
          className="movie-card__image"
          src={picture}
          alt={picture}
          width="250"
          height="400"
        />
        <h2 className="movie-card__title">{title}</h2>
        <dl className="movie-card__info-container">
          <dt className="movie-card__title-info">Director</dt>
          <dd className="movie-card__info">{director}</dd>
          <dt className="movie-card__title-info">Year</dt>
          <dd className="movie-card__info">{year}</dd>
        </dl>
      </div>
    </MovieCardStyled>
  );
};

export default MovieCard;
