import React from "react";
import { Avatar, Row, Col, Typography, Space, Divider, Button } from "antd";
import { LinkedinFilled } from "@ant-design/icons";

import brandon from "../Assets/brandon.jpeg";
import joey from "../Assets/joey.jpeg";
import marshal from "../Assets/marshal.jpeg";

const { Title, Paragraph } = Typography;

function About() {
  return (
    <div>
      <div>
        <Row
          style={{
            textAlign: "center",
            justifyContent: "center",
            marginTop: 25
          }}
        >
          <Title
            underline
          >
            The Team
          </Title>
        </Row>
      </div>
      <div>
        <Row
          style={{ marginTop: 15 }}
        >
          <Col
            span={8}
            style={{
              display: "flex",
              textAlign: "center",
              paddingLeft: 50,
              paddingRight: 50,
            }}
          >
            <Space direction="vertical">
              <Avatar size={250} src={brandon} />
              <Title>
                Brandon Adiele
              </Title>
              <Paragraph>
                Brandon is a sophomore from Los Angeles, California. He’s studying CIS at the University of Pennsylvania. He loves making music, playing soccer, and watching basketball.
              </Paragraph>
              <Divider />
              <Button
                type="primary"
                href="https://www.linkedin.com/in/brandonadiele/"
                icon={<LinkedinFilled />}
                size="large"
                target={"_blank"}
                rel="noreferrer noopener"
              >
                LinkedIn
              </Button>
            </Space>
          </Col>

          <Col
            span={8}
            style={{
              display: "flex",
              textAlign: "center",
              paddingLeft: 50,
              paddingRight: 50,
            }}
          >
            <Space direction="vertical">
              <Avatar size={250} src={marshal} />
              <Title>
                Marshal Xu
              </Title>
              <Paragraph>
                A sophomore from the University of Pennsylvania, Marshal is studying CIS with minors in Math and Anthropology. He is from Portland, Oregon, where he has grown up his entire life. In his free time, he enjoys photography, cooking, and exploring cafes!
              </Paragraph>
              <Divider />
              <Button
                type="primary"
                href="https://www.linkedin.com/in/marshalxu/"
                icon={<LinkedinFilled />}
                size="large"
                target={"_blank"}
                rel="noreferrer noopener"
              >
                LinkedIn
              </Button>
            </Space>
          </Col>
          <Col
            span={8}
            style={{
              display: "flex",
              textAlign: "center",
              paddingLeft: 50,
              paddingRight: 50,
            }}
          >
            <Space direction="vertical">
              <Avatar size={250} src={joey} />
              <Title>
                Joey Shin
              </Title>
              <Paragraph>
                Joey was originally born in South Korea but grew up in Virginia. He is a CIS major at the University of Pennsylvania. His major interests consist of fishing, hiking, and golfing!
              </Paragraph>
              <Divider />
              <Button
                type="primary"
                href="https://www.linkedin.com/in/joey-shin-46aa561a1/"
                icon={<LinkedinFilled />}
                size="large"
                target={"_blank"}
                rel="noreferrer noopener"
              >
                LinkedIn
              </Button>
            </Space>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default About;
