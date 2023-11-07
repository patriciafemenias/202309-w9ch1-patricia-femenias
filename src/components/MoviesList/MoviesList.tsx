import { useAppSelector } from "../../store/hooks";
import MovieCard from "../App/MovieCard/MovieCard";

const MoviesList = (): React.ReactElement => {
  const movies = useAppSelector((state) => state.moviesState.movies);

  return (
    <ul className="movies-list">
      {movies.map((movie) => (
        <li key={movie.id}>
          <MovieCard movie={movie} />
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
