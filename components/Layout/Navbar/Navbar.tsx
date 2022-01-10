import React, { useState } from "react";
import { Layout, Row, Col, Menu, Drawer, Button } from "antd";
import MenuLeft from "./MenuLeft";
import MenuRight from "./MenuRight";
import style from "./Navbar.module.scss";
import { MenuOutlined } from "@ant-design/icons";

const Navbar = () => {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <nav className={style.menubar}>
      <div className={style.menubar__logo} />

      <div className={style.menubar__main}>
        <div className={style.menubar__main_menu}>
          <MenuLeft />
          <MenuRight />
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
          <MenuRight />
        </Drawer>
      </div>
    </nav>
  );
};

export default Navbar;
