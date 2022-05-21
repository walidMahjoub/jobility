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
        <Link to="/">Accueil</Link>
      </Menu.Item>
      <Menu.Item key="signin" icon={<LoginOutlined />}>
        <Link to="/signin">Connexion</Link>
      </Menu.Item>
      <Menu.SubMenu key="signup" title="Inscription" icon={<UserAddOutlined />}>
        <Menu.Item key="signup">
          <Link to="/signup/candidate">Candidat</Link>
        </Menu.Item>
        <Menu.Item key="signup-campany">
          <Link to="/signup/campany">Recruteur</Link>
        </Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );
};

export default Header;
