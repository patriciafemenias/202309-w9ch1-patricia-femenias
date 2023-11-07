export interface MovieStructure {
  id: number;
  title: string;
  director: string;
  year: number;
  picture: string;
}

export interface MoviesStateStructure {
  movies: MovieStructure[];
}
