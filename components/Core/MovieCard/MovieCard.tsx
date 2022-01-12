/* eslint-disable @next/next/no-img-element */
import { ReactElement, Fragment } from "react";
import { Button, Card, Space, Typography } from "antd";
import { MovieType } from "./interface";
import { DeleteFilled } from "@ant-design/icons";
import style from "./MovieCard.module.scss";
import { getLocalStorage, setLocalStorage } from "utils/localStorage";
import { useTranslation } from "react-i18next";
// import { MoviesStateFn } from "view/Favorite/state";

const { Meta } = Card;

const MovieCard = (props: MovieType): ReactElement => {
  // const { getData } = MoviesStateFn();
  const { t } = useTranslation();

  const removeFavorite = () => {
    const saved = getLocalStorage("favorite");
    const deleted = saved.filter((f: string) => f !== props.id.toString());
    setLocalStorage("favorite", deleted);
    // getData();
    location.reload();
  };

  return (
    <Card
      cover={
        <img alt={props.title} src={props.cover} className={style.thumbnail} />
      }
    >
      <Meta
        title={
          <div className="d-flex justify-space-between">
            <Typography.Title level={3} className={style.title}>
              {props.title}
            </Typography.Title>
          </div>
        }
        description={
          <Fragment>
            <Typography>{t("common:list.about_movie")}</Typography>

            <Space>
              {props.isSaved && (
                <Button className="mt-5" onClick={removeFavorite}>
                  <DeleteFilled /> Remove
                </Button>
              )}

              <Button href={`/movie/${props.id}`} className="mt-5">
                Detail
              </Button>
            </Space>
          </Fragment>
        }
      />
    </Card>
  );
};

export default MovieCard;
