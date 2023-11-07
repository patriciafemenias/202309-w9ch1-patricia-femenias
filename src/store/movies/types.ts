export interface MovieStructure {
  id: number;
  name: string;
  director: string;
  year: number;
}

export interface MoviesStateStructure {
  movies: MovieStructure[];
}
