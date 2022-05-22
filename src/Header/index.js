import React, { useContext } from "react";
import { Menu, Row, Col } from "antd";
import {
  HomeOutlined,
  LoginOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../contexts/currentUser";

import styles from "./styles.module.css";

const Header = () => {
  const currentUser = useContext(CurrentUserContext);

  const logout = () => {
    localStorage.removeItem("currentUser");
    window.location.reload(false);
  };

  return (
    <Menu mode="horizontal" defaultSelectedKeys={["mail"]}>
      <Menu.Item key="home" icon={<HomeOutlined />}>
        <Link to="/">{currentUser}</Link>
      </Menu.Item>

      {currentUser ? (
        <>
          <Menu.Item key="profile">
            <Link to="profile">Profil</Link>
          </Menu.Item>
          <Menu.Item key="logout">
            <Link to="#" onClick={logout}>
              logout
            </Link>
          </Menu.Item>
        </>
      ) : (
        <>
          <Menu.Item key="signin" icon={<LoginOutlined />}>
            <Link to="/signin">Connexion</Link>
          </Menu.Item>
          <Menu.SubMenu
            key="signup"
            title="Inscription"
            icon={<UserAddOutlined />}
          >
            <Menu.Item key="signup-candidate">
              <Link to="/signup/candidate">Candidat</Link>
            </Menu.Item>
            <Menu.Item key="signup-campany">
              <Link to="/signup/campany">Recruteur</Link>
            </Menu.Item>
          </Menu.SubMenu>
        </>
      )}
    </Menu>
  );
};

export default Header;
