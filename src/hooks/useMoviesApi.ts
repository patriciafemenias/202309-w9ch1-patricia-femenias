import { useCallback } from "react";
import { MovieStructure } from "../store/movies/types";

const useMoviesApi = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const getMovies = useCallback(async () => {
    const response = await fetch(`${apiUrl}/movies?_limit=8`);
    const movies = (await response.json()) as MovieStructure[];

    return movies;
  }, [apiUrl]);

  return { getMovies };
};

export default useMoviesApi;
