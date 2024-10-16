import React from "react";
import classes from "./general.module.css";
import InputGroup from "@/app/ui/inputs/inputGroup/InputGroup";
const General = ({ data, dispatchDetail }) => {
  return (
    <div className="sub-form">
      <InputGroup
        id={"comment"}
        label={"Comment (internal use only)"}
        dataKey={"comment"}
        objectType={'general'}
        data={data}
        setData={dispatchDetail}
        stateType={"useReducer"}
        dataType="object"
      />

      <InputGroup
        id={"internalDescription"}
        label={"Description (information for internal users))"}
        dataKey={"internalDescription"}
        objectType={'general'}
        data={data}
        setData={dispatchDetail}
        stateType={"useReducer"}
        dataType="object"
      />

      <InputGroup
        id={"onlineDescription"}
        label={"Description (information for online clients)))"}
        dataKey={"onlineDescription"}
        objectType={'general'}
        data={data}
        setData={dispatchDetail}
        stateType={"useReducer"}
        dataType="object"
      />
    </div>
  );
};

export default General;
