import React from "react";
import { Typography, Card, List } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const { Text, Title } = Typography;

const About = () => {
  const credentials = [
    {
      email: "john@gmail.com",
      password: "test",
    },
  ];

  return (
    <div id="about-container">
      <Card className="login" title={<Title level={3}>About</Title>}>
        <Text>This is demo app built for fun!</Text>
        <br />
        <br />
        <Text>
          Test credentials:
          <br />
          <br />
          <List
            itemLayout="horizontal"
            dataSource={credentials}
            renderItem={(item) => (
              <List.Item.Meta
                description={
                  <>
                    <Text>
                      <UserOutlined /> {item.email}
                    </Text>
                    <br />
                    <Text>
                      <LockOutlined /> {item.password}
                    </Text>
                  </>
                }
              />
            )}
          />
        </Text>
      </Card>
    </div>
  );
};

export default About;
