import { useEffect } from "react";
import useMoviesApi from "../../hooks/useMoviesApi";
import { useAppDispatch } from "../../store/hooks";
import { loadMoviesActionCreator } from "../../store/movies/moviesSlice";
import React from "react";
import MoviesList from "../../components/MoviesList/MoviesList";
import HomePageStyled from "./HomePageStyled";
import Navigation from "../../components/Navigation/Navigation";

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
      <main>
        <img
          className="logo-image"
          src="/images/logo.webp"
          alt="logo"
          height="311"
          width="500"
        />
        <Navigation />
        <MoviesList />
      </main>
    </HomePageStyled>
  );
};

export default HomePage;
