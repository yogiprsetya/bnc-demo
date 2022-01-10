import Link from "next/link";
import { Row, Col, Spin } from "antd";
import MovieCard from "core/MovieCard";
import { Fragment, ReactElement } from "react";
import { MovieList } from "./interface";

const MovieList = (props: MovieList): ReactElement => (
  <Fragment>
    {props.load ? (
      <div className="d-flex justify-center align-center">
        <Spin size="large" />
      </div>
    ) : (
      <Row gutter={[16, 16]}>
        {props.movies.map((v, i) => (
          <Col key={i} xs={24} sm={12} md={6}>
            <MovieCard
              id={v.id}
              cover={v.imageUrl}
              title={v.title}
              isSaved={props.isSaved}
            />
          </Col>
        ))}
      </Row>
    )}
  </Fragment>
);

export default MovieList;
