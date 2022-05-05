import React, { useState } from "react";
import { Space, Input, Row, Col, Tooltip, Descriptions, Divider } from "antd";
import { getSites } from "../testing";

const { Search } = Input;

function Testing() {

  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("");
  const [sites, setSites] = useState([]);

  function onChange(e) {
    const { value } = e.target;
    const reg = /^\d*$/;
    if (reg.test(value) || value === '') {
      setQuery(value);
    }
    if (value.length !== 5) {
      setStatus("error");
    } else {
      setStatus("");
    }
  };

  async function onSearch() {
    console.log(query);
    const newSites = await getSites(query);
    setSites(newSites);
    console.log(newSites);
  }

  function renderSites() {
    if (sites.length !== 0) {
      const newArray = [];
      sites.forEach((element) => {
        newArray.push(
          <div>
            <Divider />
            <Descriptions title={element.id}>
              <Descriptions.Item label="Addess">{element.address_1}<br />{element.city}, {element.state_province}<br />{element.postal_code}</Descriptions.Item>
              <Descriptions.Item label="Description">{element.location_id}</Descriptions.Item>
            </Descriptions>
          </div>
        );
      });
      return newArray;
    }
    return null;
  }

  return (
    <Row style={{ width: "100%", height: "100%" }}>
      <Col
        span={24}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: 50,
          paddingRight: 50,
        }}
      >
        <div>
          <Space direction="vertical">
            <Tooltip
              visible={(query.length === 0)}
              title={"Enter Your Zip Code"}
              placement="topLeft"
              overlayClassName="numeric-input"
            >
              <Search
                status={status}
                placeholder="Search..."
                allowClear
                enterButton
                size="large"
                onSearch={onSearch}
                style={{ marginTop: 100, width: "100%" }}
                onChange={onChange}
                maxLength={5}
                value={query}
              />
            </Tooltip>
            {renderSites()}
          </Space>
        </div>
      </Col>
    </Row>
  );
}

export default Testing;
