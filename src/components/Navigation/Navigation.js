import React from "react";
import { Button } from "antd";
import { LogoutOutlined } from "@ant-design/icons";

const Navigation = () => {
  return (
    <nav style={{ display: "flex", justifyContent: "flex-end" }}>
      <Button
        style={{ color: "white" }}
        size="large"
        type="text"
        icon={<LogoutOutlined />}
      >
        Sign Out
      </Button>
    </nav>
  );
};

export default Navigation;
