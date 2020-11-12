import React from "react";
import { Typography, Card } from "antd";

const { Text, Title } = Typography;

const About = () => {
  return (
    <div id="about-container">
      <Card className="login" title={<Title level={3}>About</Title>}>
        <Text>This is demo app built for fun!</Text>
      </Card>
    </div>
  );
};

export default About;
