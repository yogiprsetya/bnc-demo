import React, { ReactNode, useRef, useEffect } from "react";
import cn from "classnames";
import useOutsideEvent from "hook/useOutsideEvent";
import { CloseOutlined } from "@ant-design/icons";
import style from "./Modal.module.scss";
import { Typography } from "antd";

type propTypes = {
  children: ReactNode;
  title?: string;
  className?: string;
  width: number;
  onClose: () => void;
  shown: boolean;
};

const Modal = (props: propTypes) => {
  const { children, title, width, onClose, className, shown } = props;
  const wrapperRef = useRef(null);

  useOutsideEvent(wrapperRef, () => {
    onClose();
  });

  useEffect(() => {
    const findMe = document?.getElementById("modal-wrapper") || false;

    if (findMe) document.body.classList.add("overflow-hidden");
    if (!findMe) document.body.classList.remove("overflow-hidden");
  }, [shown]);

  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", close, false);
    return () => window.removeEventListener("keydown", close, false);
  }, [onClose]);

  if (!shown) return null;

  return (
    <div className={style.modal} id={Boolean(shown) ? "modal-wrapper" : ""}>
      <div
        style={{ width }}
        className={cn(style.body, className)}
        ref={wrapperRef}
      >
        <header className="flex items-center justify-between">
          <Typography>{title}</Typography>

          <button type="button" onClick={onClose}>
            <CloseOutlined />
          </button>
        </header>

        {children}
      </div>
    </div>
  );
};

Modal.defaultProps = {
  width: 615,
  noClose: false,
  shown: false,
};

export default Modal;
