export interface MovieStructure {
  id: number;
  title: string;
  director: string;
  year: number;
}

export interface MoviesStateStructure {
  movies: MovieStructure[];
}
