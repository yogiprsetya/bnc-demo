import {useState, useEffect} from "react";
import { HTTPClientPublic } from "service/api";
import { MoviesType } from "layout/MovieList/interface";

export type StateTypes = {
  load: boolean;
  movies: Array<MoviesType>;
};

export const MoviesStateFn = (): StateTypes => {
  const [load, setLoad] = useState<boolean>(false);
  const [movies, setMovies] = useState<Array<MoviesType>>([]);

  const movieChunks = (a: [], size = 10) => {
    return Array.from(
      new Array(Math.ceil(a.length / size)),
      (_, i) => a.slice(i * size, i * size + size)
    );
  }

  useEffect(() => {
    setLoad(true);
    HTTPClientPublic().get("movies")
      .then((res) => {
        const dataRes = movieChunks(res.data.data) as []
        setMovies(dataRes)
      })
      .catch(console.error)
      .finally(() => setLoad(false));
  }, []);

  return { load, movies };
};
