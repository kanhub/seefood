import React from "react";
import { Typography } from "antd";
import "../Welcome/Welcome.css";

const { Title } = Typography;

const Welcome = ({ user }) => {
  const { name, entries } = user;
  return (
    <div id="welcome">
      <Title level={2}>👋 Welcome, {name}!</Title>
      <Title level={5}>You have searched {entries} recipies</Title>
    </div>
  );
};

export default Welcome;
