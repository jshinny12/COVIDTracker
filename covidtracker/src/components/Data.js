import React, { useEffect, useState } from "react";

import { Row, Col, Table, Typography, Divider } from 'antd';
import { getData } from "../testing";

const { Title } = Typography;

const stateArray = [];

stateArray.push("alabama");
stateArray.push("alaska");
stateArray.push("arizona");
stateArray.push("arkansas");
stateArray.push("california");
stateArray.push("colorado");
stateArray.push("connecticut");
stateArray.push("delaware");
stateArray.push("florida");
stateArray.push("georgia");
stateArray.push("hawaii");
stateArray.push("idaho");
stateArray.push("illinois");
stateArray.push("indiana");
stateArray.push("iowa");
stateArray.push("kansas");
stateArray.push("kentucky");
stateArray.push("louisiana");
stateArray.push("maine");
stateArray.push("maryland");
stateArray.push("massachusetts");
stateArray.push("michigan");
stateArray.push("minnesota");
stateArray.push("mississippi");
stateArray.push("missouri");
stateArray.push("montana");
stateArray.push("nebraska");
stateArray.push("nevada");
stateArray.push("new hampshire");
stateArray.push("new jersey");
stateArray.push("new mexico");
stateArray.push("new york");
stateArray.push("north carolina");
stateArray.push("north dakota");
stateArray.push("ohio");
stateArray.push("oklahoma");
stateArray.push("oregon");
stateArray.push("pennsylvania");
stateArray.push("rhode island");
stateArray.push("south carolina");
stateArray.push("south dakota");
stateArray.push("tennessee");
stateArray.push("texas");
stateArray.push("utah");
stateArray.push("vermont");
stateArray.push("virginia");
stateArray.push("washington");
stateArray.push("west virginia");
stateArray.push("wisconsin");
stateArray.push("wyoming");

function Testing() {
  const [stateData, setStateData] = useState([]);

  useEffect(() => {
    async function makeAPIRequest() {
      const newArray = [];

      for (const state of stateArray) {
        const elementData = await getData(state.toLowerCase());
        elementData.positiveRate = Math.round((elementData.positive / elementData.totalTestResults) * 10000) / 100;
        elementData.stateName = state.charAt(0).toUpperCase() + state.slice(1);
        elementData.key = state;
        newArray.push(elementData);
      }
      setStateData(newArray);
    }
    makeAPIRequest();
  }, []);

  const columns = [
    {
      title: 'State Name',
      dataIndex: 'stateName',
      key: 'stateName',
    },
    {
      title: 'Code',
      dataIndex: 'state',
      key: 'state',
      sorter: {
        compare: (a, b) => a.state > b.state,
      },
    },
    {
      title: 'Positive Cases',
      dataIndex: 'positive',
      key: 'positive',
      sorter: {
        compare: (a, b) => a.positive - b.positive,
      },
    },
    {
      title: 'Positivity Rate (%)',
      dataIndex: 'positiveRate',
      key: 'positiveRate',
      sorter: {
        compare: (a, b) => a.positiveRate - b.positiveRate,
      },
    },
    {
      title: 'Deaths',
      dataIndex: 'death',
      key: 'death',
      sorter: {
        compare: (a, b) => a.death - b.death,
      },
    },
    {
      title: 'Last Updated',
      dataIndex: 'lastUpdateEt',
      key: 'lastUpdateEt',
    }
  ];
  
  return (
    <Row style={{ width: "100%", height: "100%" }}>
      <Col
        span={24}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 25,
          textAlign: "center",
        }}
      >
        <div>
          <Title>
            COVID Data by State
          </Title>
          <Divider />
          <Table
            columns={columns}
            dataSource={stateData}
            style={{ marginTop: 25, marginBottom: 100 }}
            pagination={{ showSizeChanger: true, pageSizeOptions: [10, 20, 50] }}
          />
        </div>
      </Col>
    </Row>
  );
}

export default Testing;
