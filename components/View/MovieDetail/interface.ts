export interface MovieType {
  id: number;
  title: string;
  year: number;
  rating: number;
  imageUrl: string;
  imageLargeUrl: string;
  starring: string[],
  desc: string;
  releaseDate: string;
  duration: string;
  genre: string;
}
