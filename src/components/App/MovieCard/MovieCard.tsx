import { MovieStructure } from "../../../store/movies/types";

interface MovieCardProps {
  movie: MovieStructure;
}

const MovieCard = ({
  movie: { title, director, year },
}: MovieCardProps): React.ReactElement => {
  return (
    <article className="movie-card">
      <h2>{title}</h2>
      <h3>Director</h3>
      <span>{director}</span>
      <h3>Year</h3>
      <span>{year}</span>
    </article>
  );
};

export default MovieCard;
