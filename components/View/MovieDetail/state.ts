import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { HTTPClientPublic } from "service/api";
import { MovieType } from "./interface";
import { getLocalStorage, setLocalStorage } from "utils/localStorage";
import { useTranslation } from "react-i18next";

export type StateTypes = {
  load: boolean;
  isSaved: boolean;
  movie: MovieType;
  saveMovie: () => void;
};

export const MovieStateFn = (): StateTypes => {
  const router = useRouter();
  const [load, setLoad] = useState<boolean>(false);
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [movie, setMovie] = useState<MovieType>(null);
  const { i18n } = useTranslation();

  const getFavorite = () => {
    const getFavorite = getLocalStorage("favorite");
    setIsSaved(getFavorite?.includes(router.query.id));
  };

  const saveMovie = () => {
    const movieId = router.query.id;
    const prev = getLocalStorage("favorite");

    if (prev) {
      setLocalStorage("favorite", [...prev, movieId]);
    } else {
      setLocalStorage("favorite", JSON.stringify([movieId]));
    }

    getFavorite();
  };

  useEffect(() => {
    if (router.isReady) {
      setLoad(true);
      HTTPClientPublic(i18n.language)
        .get(`movies/${router.query.id}`)
        .then((res) => {
          setMovie(res.data.data);
        })
        .catch(console.error)
        .finally(() => setLoad(false));

      getFavorite();
    }
  }, [router]);

  return { load, movie, isSaved, saveMovie };
};
