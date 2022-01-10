import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Menu, Grid } from "antd";
const { useBreakpoint } = Grid;

const MenuLeft = () => {
  const router = useRouter();
  const { md } = useBreakpoint();

  return (
    <Menu
      mode={md ? "horizontal" : "inline"}
      theme="dark"
      className="w-100"
      selectedKeys={[router.pathname]}
    >
      <Menu.Item key="/">
        <Link href="/">
          <a>List</a>
        </Link>
      </Menu.Item>

      <Menu.Item key="/favorite">
        <Link href="/favorite">
          <a>Favorite</a>
        </Link>
      </Menu.Item>
    </Menu>
  );
};

export default MenuLeft;
