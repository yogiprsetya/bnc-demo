/* eslint-disable @next/next/no-img-element */
import { ReactElement, useState } from "react";
import { Typography, Row, Col } from "antd";
import Modal from "core/Modal";
import moment from "moment";

type propsType = {
  title: string;
  cover: string;
  image: string;
  cast: string[];
  year: string;
  synopsys: string;
  release: string;
  genre: string;
  duration: string;
};

const MovieDetail = (props: propsType): ReactElement => {
  const [imageFull, setImageFull] = useState(false);

  return (
    <Row gutter={18}>
      <Col xs={24} sm={24} md={8}>
        <img
          role="buton"
          onClick={() => setImageFull(true)}
          src={props.cover}
          alt={props.title}
          className="w-100"
          style={{ cursor: "pointer", height: 400, objectFit: "cover" }}
        />
      </Col>

      <Col xs={24} sm={24} md={16}>
        <Typography.Title level={1}>
          {props.title} ({props.year})
        </Typography.Title>

        <div className="d-flex align-center mb-1">
          <Typography>
            <b>Cast :</b> {props?.cast?.join(", ")}
          </Typography>
        </div>

        <div className="d-flex align-center mb-1">
          <Typography>
            <b>Realease Date :</b>{" "}
            {moment(props.release).format("DD MMMM YYYY")}
          </Typography>
        </div>

        <div className="d-flex align-center mb-1">
          <Typography>
            <b>Genre :</b> {props.genre}
          </Typography>
        </div>

        <div className="d-flex align-center mb-3">
          <Typography>
            <b>Duration :</b> {props.duration}
          </Typography>
        </div>

        <Typography>{props.synopsys}</Typography>
      </Col>

      <Modal width={700} onClose={() => setImageFull(false)} shown={imageFull}>
        <img src={props.image} className="w-100" alt={props.title} />
      </Modal>
    </Row>
  );
};

export default MovieDetail;
