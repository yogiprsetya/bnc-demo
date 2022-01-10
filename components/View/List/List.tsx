import Link from "next/link";
import { Typography, Row, Col, Spin } from "antd";
import MovieList from "layout/MovieList";
import { Fragment, useEffect, useState, useRef } from "react";
import { MoviesStateFn } from "./state";

const List = () => {
  const loader = useRef(null);
  const { load, movies } = MoviesStateFn();
  const [dummyPage, setDummyPage] = useState(0);
  const [movieList, setMovieList] = useState<any>([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(handleObserver, options);

    if (loader.current) {
      observer.observe(loader.current);
    }
  }, []);

  const handleObserver = (entities) => {
    const target = entities[0];

    if (target.isIntersecting) {
      setDummyPage((page) => page + 1);
    }
  };

  useEffect(() => {
    if (!load) {
      const data = movies[dummyPage] as unknown as [];
      if (data) setMovieList((state) => [...state, ...data]);
    }
  }, [dummyPage, movies, load]);

  return (
    <Fragment>
      <Typography.Title level={2} className="mb-10">
        Add a paragraph for introduction text (hardcoded) that can be translated
        using your translation logic
      </Typography.Title>

      <MovieList load={load} movies={movieList} />

      <div ref={loader} />
    </Fragment>
  );
};

export default List;
