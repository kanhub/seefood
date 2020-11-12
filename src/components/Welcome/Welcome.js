import React from "react";
import { Typography } from "antd";
import "../Welcome/Welcome.css";

const { Title } = Typography;
const sampleSearch = "Taco";

const Welcome = () => {
  return (
    <div id="welcome">
      <Title level={2}>👋 Welcome, Kanisk!</Title>
      <Title level={5}>You recently searched for {sampleSearch}</Title>
    </div>
  );
};

export default Welcome;
