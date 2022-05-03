import React, { useState } from "react";
import { Space, Input, Row, Col, Tooltip } from "antd";

const { Search } = Input;

function Testing() {

  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("");

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
    console.log("HI");
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
                style={{ marginTop: 100 }}
                onChange={onChange}
                maxLength={5}
                value={query}
              />
            </Tooltip>
          </Space>
        </div>
      </Col>
    </Row>
  );
}

export default Testing;
