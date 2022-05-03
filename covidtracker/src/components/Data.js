import React, { useState } from "react";

import { Select, Row, Col, Space } from 'antd';
import { getData } from "../testing";

const { Option } = Select;

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

  const [query, setQuery] = useState("");

  function renderStateOptions() {
    let uiItems = [];
    stateArray.forEach((element) => {
      uiItems.push(
        <Option value={element} key={element}>
          {element.charAt(0).toUpperCase() + element.slice(1)}
        </Option>
      );
    });
    return uiItems;
  }

  function handleSearch() {
    console.log(query.toLowerCase());
    console.log(getData(query.toLowerCase()));
  }
  
  return (
    <Row style={{ width: "100%", height: "100%" }}>
      <Col
        span={24}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <Space direction="vertical">
            <Select
              showSearch
              placeholder="Select a state"
              optionFilterProp="children"
              filterOption={(input, option) => 
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              value={query}
              onChange={(value) => setQuery(value)}
              style={{ width: 150, marginTop: 100 }}
              onSearch={() => handleSearch()}
              allowClear
            >
              {renderStateOptions()}
            </Select>
          </Space>
        </div>
      </Col>
    </Row>
  );
}

export default Testing;
