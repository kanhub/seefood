import React from "react";
import { Typography, Row, Col, Input, Card } from "antd";
import { FileImageFilled } from "@ant-design/icons";

const { Title } = Typography;
const { Search } = Input;

const ImageLinkForm = () => {
  return (
    <>
      <Row>
        <Col span={24}>
          <Card
            style={{
              width: "50%",
              margin: "auto",
              marginTop: "50px",
              opacity: "0.8",
            }}
            title={<Title level={3}>Search Image</Title>}
            size="small"
          >
            <Search
              style={{ width: "80%" }}
              allowClear
              size="large"
              align="middle"
              placeholder="Link to your image"
              prefix={<FileImageFilled className="site-form-item-icon" />}
              enterButton
            />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ImageLinkForm;
