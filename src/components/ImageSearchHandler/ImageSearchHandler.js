import React, { useCallback, useState, useRef, useEffect } from "react";
import { Typography, Row, Col, Input, Card } from "antd";
import { FileImageFilled } from "@ant-design/icons";
import "../ImageSearchHandler/ImageSearchHandler.css";
import Clarifai from "clarifai";
import FoodRecognition from "../FoodRecognition/FoodRecognition";

const { Title } = Typography;
const { Search } = Input;
const app = new Clarifai.App({
  apiKey: process.env.REACT_APP_CLARIFAI_API_KEY,
});

const ImageLinkForm = () => {
  const [imgUrl, setImgUrl] = useState("");
  const [imgData, setImgData] = useState([]);
  const { current: url } = useRef(imgUrl);

  useEffect(() => {
    if (url !== imgUrl) {
      setImgData([]);
    }
  }, [imgUrl, url]);

  const search = useCallback(() => {
    if (imgUrl !== "") {
      app.models
        .predict(Clarifai.FOOD_MODEL, imgUrl)
        .then((resp) => {
          let conceptData = resp.outputs[0].data.concepts;
          setImgData([...conceptData]);
        })
        .catch((err) => console.log(err));
    }
  }, [imgUrl]);

  return (
    <>
      <Row>
        <Col span={24}>
          <Card
            id="search-card"
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
              onChange={(e) => setImgUrl(e.target.value)}
              onSearch={search}
              enterButton
            />
          </Card>
        </Col>
      </Row>
      <Row
        type="flex"
        style={{
          alignItems: "inherit",
          marginBottom: "20px",
          marginLeft: "30px",
          marginRight: "30px",
        }}
        justify="end"
        gutter={10}
      >
        <FoodRecognition imgUrl={imgUrl} imgData={imgData} />
      </Row>
    </>
  );
};

export default ImageLinkForm;
