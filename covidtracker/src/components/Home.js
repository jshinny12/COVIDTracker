import React from "react";
import { Carousel, Typography } from "antd";

const { Title } = Typography;

function Home() {

  const contentStyle = {
    height: '750px',
    color: '#fff',
    lineHeight: '750px',
    textAlign: 'center',
    background: '#1890ff',
  };

  return (
    <Carousel autoplay pauseOnHover={false}>
      <div>
        <Title style={contentStyle}>
          Welcome to COVIDTracker
        </Title>
      </div>
      <div>
        <Title style={contentStyle}>
          A minimalist way of getting COVID statistics
        </Title>
      </div>
      <div>
        <Title style={contentStyle}>
          Offering ease of access to testing sites
        </Title>
      </div>
      <div>
        <Title style={contentStyle}>
          Made by Penn students
        </Title>
      </div>
    </Carousel>
  );
}

export default Home;
