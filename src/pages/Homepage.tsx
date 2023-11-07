import { useEffect } from "react";
import useMoviesApi from "../hooks/useMoviesApi";
import { useAppDispatch } from "../store/hooks";
import { loadMoviesActionCreator } from "../store/movies/moviesSlice";
import MoviesList from "../components/MoviesList/MoviesList";

const HomePage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getMovies } = useMoviesApi();

  useEffect(() => {
    (async () => {
      const currentMovies = await getMovies();
      dispatch(loadMoviesActionCreator(currentMovies));
    })();
  }, [dispatch, getMovies]);

  return (
    <>
      <h1>Horrorvision</h1>
      <main>
        <MoviesList />
      </main>
    </>
  );
};

export default HomePage;
