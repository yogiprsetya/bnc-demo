import React, { useEffect, useState } from "react";
import {  Drawer, Button } from "antd";
import MenuLeft from "./MenuLeft";
import MenuRight from "./MenuRight";
import style from "./Navbar.module.scss";
import { MenuOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { setLocalStorage } from "utils/localStorage";

const Navbar = () => {
  const { i18n } = useTranslation();
  const [showDrawer, setShowDrawer] = useState(false);
  const [languageBoolean, setLanguageBoolean] = useState(false);

  useEffect(() => {
    switch (i18n.language) {
      case "en":
        setLanguageBoolean(false);
        break;
      case "id":
        setLanguageBoolean(true);
        break;
    }
  }, [i18n.language]);

  const onChangeLanguage = (values: boolean) => {
    let language : string;
    switch (values) {
      case false:
        setLanguageBoolean(false);
        language = "en"
        break;
      case true:
        language = "id";
        setLanguageBoolean(true);
        break;
    }
    i18n.changeLanguage(language);
    setLocalStorage("language", language);
  };

  return (
    <nav className={style.menubar}>
      <div className={style.menubar__logo} />

      <div className={style.menubar__main}>
        <div className={style.menubar__main_menu}>
          <MenuLeft />
          <MenuRight
            languageBoolean={languageBoolean}
            onChangeLanguage={onChangeLanguage}
          />
        </div>

        <Button
          className={style.menubar__menu_bar}
          type="primary"
          onClick={() => setShowDrawer(!showDrawer)}
        >
          <MenuOutlined />
        </Button>

        <Drawer
          title="Basic Drawer"
          placement="right"
          onClose={() => setShowDrawer(false)}
          visible={showDrawer}
        >
          <MenuLeft />
          <MenuRight
            languageBoolean={languageBoolean}
            onChangeLanguage={onChangeLanguage}
          />
        </Drawer>
      </div>
    </nav>
  );
};

export default Navbar;
