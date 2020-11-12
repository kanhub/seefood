import React from "react";
import { Typography } from "antd";

const { Title } = Typography;
const sampleSearch = "Taco";

const Navigation = () => {
  return (
    <div style={{ paddingTop: "30px" }}>
      <Title level={2}>👋 Welcome, Kanisk!</Title>
      <Title level={5}>You recently searched for {sampleSearch}</Title>
    </div>
  );
};

export default Navigation;
