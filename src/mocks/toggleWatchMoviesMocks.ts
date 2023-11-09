import { MovieStructure } from "../store/movies/types";

export const notWatchedBrainDeadMock: MovieStructure = {
  id: 1,
  title: "Brain Dead",
  director: "Peter Jackson",
  year: 1992,
  picture: "https://i.ibb.co/r66TwSq/braindead.webp",
  isWatched: false,
};

export const notWatchedGremlinsMock: MovieStructure = {
  id: 3,
  title: "Gremlins",
  director: "Joe Dante",
  year: 1984,
  picture: "https://i.ibb.co/tZX3B7j/gremlins.webp",
  isWatched: false,
};

export const watchedBrainDeadMock: MovieStructure = {
  id: 1,
  title: "Brain Dead",
  director: "Peter Jackson",
  year: 1992,
  picture: "https://i.ibb.co/r66TwSq/braindead.webp",
  isWatched: true,
};
