import {
  notWatchedBrainDeadMock,
  notWatchedGremlinsMock,
  watchedBrainDeadMock,
} from "../../mocks/toggleWatchMoviesMocks";
import { moviesReducer, toggleWatchMovieActionCreator } from "./moviesSlice";
import { MovieStructure } from "./types";

describe("Given a moviesReducer reducer", () => {
  describe("When it receives the movies 'Braindead' and 'Gremlins' as not watched and receives an action to set 'Braindead' as watched", () => {
    test("Then it should return 'Braindead' with a new state as watched", async () => {
      const notWatchedBrainDead = notWatchedBrainDeadMock;
      const notWatchedGremlins = notWatchedGremlinsMock;
      const watchedBrainDead = watchedBrainDeadMock;
      const currentMovies: MovieStructure[] = [
        notWatchedBrainDead,
        notWatchedGremlins,
      ];

      const toggleWatchMovieAction = toggleWatchMovieActionCreator(
        notWatchedBrainDead.id,
      );
      const newMovieState = moviesReducer(
        { movies: currentMovies },
        toggleWatchMovieAction,
      );
      const newBrainDeadState = newMovieState.movies[0];

      expect(newBrainDeadState).toStrictEqual(watchedBrainDead);
    });
  });
});
