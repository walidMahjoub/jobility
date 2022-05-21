import React from "react";
import { Menu, Row, Col } from "antd";
import {
  HomeOutlined,
  LoginOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

import styles from "./styles.module.css";

const Header = () => {
  return (
    <Menu mode="horizontal" defaultSelectedKeys={["mail"]}>
      <Menu.Item key="home" icon={<HomeOutlined />}>
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="signin" icon={<LoginOutlined />}>
        <Link to="/signin">signin</Link>
      </Menu.Item>
      <Menu.Item key="signup" icon={<UserAddOutlined />}>
        <Link to="/signup">signup</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Header;
