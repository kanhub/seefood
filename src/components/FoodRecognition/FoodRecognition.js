import React from "react";
import "../FoodRecognition/FoodRecognition.css";
import { Typography, Col, Card, Image, Table } from "antd";

const { Title } = Typography;

const FoodRecognition = ({ imgUrl, imgData }) => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Probability",
      dataIndex: "probability",
      key: "probability",
    },
  ];

  if (imgData?.length !== 0 && imgUrl !== "") {
    const dataSource = imgData.map((item) => {
      return {
        key: item.id,
        name: item.name,
        probability: item.value,
      };
    });

    return (
      <>
        <Col xs={12}>
          <Card className="card" title={<Title level={5}>Image</Title>}>
            <Image width="100%" height="auto" src={imgUrl} />
          </Card>
        </Col>
        <Col xs={12}>
          <Card
            className="card"
            title={<Title level={5}>It's made of...</Title>}
          >
            <Table dataSource={dataSource} columns={columns}></Table>
          </Card>
        </Col>
      </>
    );
  } else {
    return <></>;
  }
};

export default FoodRecognition;
