import React from "react";
import { Typography } from "antd";
import { SmileTwoTone } from "@ant-design/icons";

const { Text, Link } = Typography;

const Footer = () => {
  return (
    <div>
      <Text strong style={{ marginTop: "30px" }}>
        <SmileTwoTone twoToneColor="orange" /> Built by{" "}
        <Link
          href="https://github.com/chakrakan"
          style={{ color: "white" }}
          target="_blank"
        >
          chakrakan
        </Link>
      </Text>
    </div>
  );
};

export default Footer;
