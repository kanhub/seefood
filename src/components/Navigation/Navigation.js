import React from "react";
import { Button } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import "../Navigation/Navigation.css";

const Navigation = () => {
  return (
    <nav>
      <Button id="sign-out" size="large" type="text" icon={<LogoutOutlined />}>
        Sign Out
      </Button>
    </nav>
  );
};

export default Navigation;
