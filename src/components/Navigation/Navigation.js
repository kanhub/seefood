import React from "react";
import { Button } from "antd";
import {
  LogoutOutlined,
  LoginOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import "../Navigation/Navigation.css";

const Navigation = ({ onRouteChange, isSignedIn, route }) => {
  if (isSignedIn && route === "home") {
    return (
      <nav>
        <Button
          onClick={() => onRouteChange("signout")}
          size="large"
          type="text"
          icon={<LogoutOutlined />}
        >
          Sign Out
        </Button>
      </nav>
    );
  } else if (route === "about") {
    return (
      <nav>
        <Button
          onClick={() => onRouteChange("signin")}
          size="large"
          type="text"
          icon={<LoginOutlined />}
        >
          Sign In
        </Button>
      </nav>
    );
  } else {
    return (
      <nav>
        <Button
          onClick={() => onRouteChange("about")}
          size="large"
          type="text"
          icon={<QuestionCircleOutlined />}
        >
          About
        </Button>
      </nav>
    );
  }
};

export default Navigation;
