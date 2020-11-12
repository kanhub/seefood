import React from "react";
import { Space, Image } from "antd";
import Tilt from "react-tilt";
import SeeFoodLogo from "../../assets/logo/ingredients.svg";
import "../Logo/Logo.css";

const Logo = () => {
  return (
    <div>
      <Space>
        <Tilt className="Tilt" options={{ max: 35 }}>
          <Image id="seefood-logo" src={SeeFoodLogo} />
        </Tilt>
      </Space>
    </div>
  );
};

export default Logo;
