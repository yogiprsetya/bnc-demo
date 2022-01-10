export interface MoviesType {
  id: number;
  title: string;
  year: number;
  rating: number;
  imageUrl: string;
}

export interface MovieList {
  load: boolean;
  isSaved?: boolean;
  movies: MoviesType[]
}
