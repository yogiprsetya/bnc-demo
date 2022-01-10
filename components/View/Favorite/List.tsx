import { Fragment } from "react";
import { Typography, Empty } from "antd";
import MovieList from "layout/MovieList";
import { MoviesStateFn } from "./state";

const List = () => {
  const { load, movies } = MoviesStateFn();

  return (
    <Fragment>
      <Typography.Title level={2} className="mb-10">
        Favorite Add a paragraph for introduction text (hardcoded) that can be
        translated using your translation logic
      </Typography.Title>

      <MovieList load={load} movies={movies} isSaved />
      {!movies?.length && <Empty />}
    </Fragment>
  );
};

export default List;
