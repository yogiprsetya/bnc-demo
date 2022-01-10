import {useState, useEffect} from "react";
import { HTTPClientPublic } from "service/api";
import { MoviesType } from "layout/MovieList/interface";
import {getLocalStorage} from 'utils/localStorage';

export type StateTypes = {
  load: boolean;
  movies: Array<MoviesType>;
  getData: () => void;
};

export const MoviesStateFn = (): StateTypes => {
  const [load, setLoad] = useState<boolean>(false);
  const [movies, setMovies] = useState<Array<MoviesType>>([]);

  const getData = () => {
    console.log(getLocalStorage("favorite"));

    setLoad(true);
    HTTPClientPublic().get("movies")
      .then((res) => {
        const saved = getLocalStorage("favorite")
        const dataRes = res.data.data.filter((item: MoviesType) => saved.includes(item.id.toString()));

        setMovies(dataRes)
      })
      .catch(console.error)
      .finally(() => setLoad(false));
  }

  useEffect(() =>
    getData()
  , []);

  return { load, movies, getData };
};
