import React from "react";
import { Space, Image } from "antd";
import Tilt from "react-tilt";
import SeeFoodLogo from "../../assets/logo/ingredients.svg";

const Logo = () => {
  return (
    <div>
      <Space>
        <Tilt
          className="Tilt"
          options={{ max: 35 }}
          style={{ height: 200, width: 200 }}
        >
          <Image width={200} src={SeeFoodLogo} />
        </Tilt>
      </Space>
    </div>
  );
};

export default Logo;
