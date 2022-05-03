import React from "react";

import { Select } from 'antd';

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

  function renderStateOptions() {
    let uiItems = [];
    stateArray.forEach((element) => {
      uiItems.push(
        <Option value={element}>
          {element}
        </Option>
      );
    });
  }
  
  return (
    <div>
      <Select
        showSearch
        placeholder="Select a state"
        optionFilterProp="children"
        filterOption={(input, option) => 
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        {renderStateOptions()}
      </Select>
    </div>
  );
}

export default Testing;
