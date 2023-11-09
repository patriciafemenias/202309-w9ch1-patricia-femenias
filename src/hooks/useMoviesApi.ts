import { useCallback } from "react";
import { MovieStructure } from "../store/movies/types";

const useMoviesApi = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const getMovies = useCallback(async () => {
    const response = await fetch(`${apiUrl}/movies?_limit=9`);
    const movies = (await response.json()) as MovieStructure[];

    return movies;
  }, [apiUrl]);

  const setWatchedMovie = useCallback(
    async (movieId: number, isWatched: boolean) => {
      try {
        const response = await fetch(`${apiUrl}/movies/${movieId}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ isWatched: !isWatched }),
        });
        if (!response.ok) {
          throw new Error();
        }
      } catch {
        throw new Error();
      }
    },
    [apiUrl],
  );
  return { getMovies, setWatchedMovie };
};

export default useMoviesApi;
