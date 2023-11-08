export interface MovieStructure {
  id: number;
  title: string;
  director: string;
  year: number;
  picture: string;
  isWatched: boolean;
}

export interface MoviesStateStructure {
  movies: MovieStructure[];
}
