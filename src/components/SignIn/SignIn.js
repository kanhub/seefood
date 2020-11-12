import React from "react";
import { Form, Input, Button, Checkbox, Typography, Card } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const { Link, Title } = Typography;

const SignIn = ({ onRouteChange }) => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div id="signin-container">
      <Card className="login" title={<Title level={3}>Sign In</Title>}>
        <Form
          name="normal_login"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Link className="login-form-forgot" href="">
              Forgot password
            </Link>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              onClick={() => onRouteChange("home")}
            >
              Log in
            </Button>
            Or{" "}
            <Link onClick={() => onRouteChange("register")}>register now!</Link>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default SignIn;
