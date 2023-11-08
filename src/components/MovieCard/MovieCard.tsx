import { useCallback } from "react";
import { useAppDispatch } from "../../store/hooks";
import { MovieStructure } from "../../store/movies/types";
import MovieCardStyled from "./MovieCardStyled";
import { toggleWatchMovieActionCreator } from "../../store/movies/moviesSlice";

interface MovieCardProps {
  movie: MovieStructure;
}

const MovieCard = ({
  movie: { id, title, director, year, picture, isWatched },
}: MovieCardProps): React.ReactElement => {
  const dispatch = useAppDispatch();

  const toggleStatus = useCallback(() => {
    dispatch(toggleWatchMovieActionCreator(id));
  }, [dispatch, id]);

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
        <label className="movie-card__checkbox">
          Already seen?
          <input
            className="movie-card__checkbox__input"
            type="checkbox"
            name=""
            id=""
            onChange={toggleStatus}
          />
        </label>
        <span className="movie-card__feedback">
          {isWatched ? "🤢watched🤢" : ""}
        </span>
      </div>
    </MovieCardStyled>
  );
};

export default MovieCard;
