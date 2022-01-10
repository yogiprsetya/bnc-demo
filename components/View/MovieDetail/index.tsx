import { Fragment } from "react";
import { useRouter } from "next/router";
import MovieDetail from "./MovieDetail";
import MetaTag from "./MetaTag";
import { MovieStateFn } from "./state";
import { Spin, Button, Space } from "antd";
import {
  ArrowLeftOutlined,
  HeartOutlined,
  HeartFilled,
} from "@ant-design/icons";

const Index = () => {
  const router = useRouter();
  const { load, movie, isSaved, saveMovie } = MovieStateFn();

  return (
    <Fragment>
      <MetaTag
        title={movie?.title}
        description="Deskripsi filem harusnya dari API"
        cover={movie?.imageUrl}
      />

      {load ? (
        <div className="d-flex justify-center align-center">
          <Spin size="large" />
        </div>
      ) : (
        <Fragment>
          <Space align="center" className="mb-5">
            <Button
              type="primary"
              onClick={() => router.back()}
              icon={<ArrowLeftOutlined />}
            >
              Back
            </Button>

            <Button
              shape="circle"
              icon={isSaved ? <HeartFilled /> : <HeartOutlined />}
              disabled={isSaved}
              onClick={saveMovie}
            />
          </Space>

          <MovieDetail
            title={movie?.title}
            image={movie?.imageLargeUrl}
            cover={movie?.imageUrl}
            cast={movie?.starring}
            year={movie?.year.toString()}
            synopsys={movie?.desc}
            release={movie?.releaseDate}
            genre={movie?.genre}
            duration={movie?.duration}
          />
        </Fragment>
      )}
    </Fragment>
  );
};

export default Index;
