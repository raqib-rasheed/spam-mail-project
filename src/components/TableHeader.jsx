import { Card, Col, Input, Row } from "antd";
import React from "react";
import { SearchOutlined } from "@ant-design/icons";

export default function TableHeader() {
  return (
    <div className="headerCardsContainer">
      <Card>
        <div className="cardSpanMailProject">
          <SearchOutlined className="headerCardsSearchIcon" />
          <Input
            placeholder="Spam mail project"
            size="large"
            className="headerCardInput"
          />
        </div>
      </Card>
      <Card>
        <Row justify="start">
          <Col span={12}>
            <Row></Row>
            <h3>Sample Mail Project</h3>
          </Col>
          <Col span={12}>
            <p>Lorem ipsum dolor sit amet consectetur a tempora quas animi.</p>
          </Col>
        </Row>
      </Card>
    </div>
  );
}
