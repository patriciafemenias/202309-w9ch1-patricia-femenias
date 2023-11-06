import { useCallback } from "react";
import { MovieStructure } from "../features/movies/types";

const useMoviesApi = () => {
  const apiUrl = "https://horrorvision-api.onrender.com";

  const getMovies = useCallback(async () => {
    const response = await fetch(`${apiUrl}/movies?_limit=8`);
    const movies = (await response.json()) as MovieStructure[];

    return movies;
  }, [apiUrl]);

  return { getMovies };
};

export default useMoviesApi;
