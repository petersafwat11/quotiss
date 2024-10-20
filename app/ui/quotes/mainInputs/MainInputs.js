import React from "react";
import classes from "./mainInputs.module.css";
import InputGroup from "../../inputs/inputGroup/InputGroup";
import SelectionGroup from "../../inputs/selectionGroup/SelectionGroup";
import DateInput from "../../inputs/dateInput/DateInput";
const MainInputs = ({ data, dispatchDetail }) => {
  const options = [
    "FCL",
    "LCL",
    "AIR",
    "LTL",
    "FTL",
    "MANUAL",
    "EMAIL",
    "AIRTARIFF",
    "MULTI",
  ];
  return (
    <div className={classes["inputs"]}>
      <InputGroup
        id={"quote_for_client"}
        label={"Quote #137332 for:"}
        data={data.quote_for_client}
        dataKey={"quote_for_client"}
        setData={dispatchDetail}
        stateType={"useReducer"}
        dataType="single"
      />

      <DateInput
        label={"Validity Start"}
        data={data.validity_start}
        dataKey={"validity_start"}
        setData={dispatchDetail}
      />
      <DateInput
        label={"Validity End"}
        data={data.validity_end}
        dataKey={"validity_end"}
        setData={dispatchDetail}
      />

      <SelectionGroup
        data={data}
        type={"quote_type"}
        dataKey={"quote_type"}
        label={"Please Select quote type"}
        options={options}
        setData={dispatchDetail}
        dataType={"single"}
      />
    </div>
  );
};

export default MainInputs;
