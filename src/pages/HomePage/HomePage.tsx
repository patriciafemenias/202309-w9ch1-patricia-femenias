import { useEffect } from "react";
import useMoviesApi from "../../hooks/useMoviesApi";
import { useAppDispatch } from "../../store/hooks";
import { loadMoviesActionCreator } from "../../store/movies/moviesSlice";
import React from "react";
import MoviesList from "../../components/MoviesList/MoviesList";
import HomePageStyled from "./HomePageStyled";

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
    <HomePageStyled>
      <h1 className="main-title">Horrorvision</h1>
      <main>
        <MoviesList />
      </main>
    </HomePageStyled>
  );
};

export default HomePage;
