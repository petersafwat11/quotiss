"use client";
import React, { useReducer, useState } from "react";
import classes from "./bottom.module.css";
import SelectionCheckBoxGroup from "../../inputs/selectionCheckBoxGroup/SelectionCheckBoxGroup";
import DateInput from "../../inputs/dateInput/DateInput";
import SelectionGroup from "../../inputs/selectionGroup/SelectionGroup";
import InputGroup from "../../inputs/inputGroup/InputGroup";
import CheckboxGroup from "../../inputs/checkboxGroup/CheckboxGroup";
const reducer = (state, action) => {
  const prevState = { ...state };
  if (action.type === "UPDATE-ALL") {
    return action.value;
  }
  return {
    ...prevState,
    [action.type.toLowerCase()]: action.value,
  };
};

const Bottom = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const marginOptions = [
    "20' DC",
    "40' DC",
    "40' HC",
    "45' HC",
    "20' NOR",
    "40' NOR",
    "20' REEF",
    "40' HREEF",
    "45' PLWD",
    "20' OT",
    "40' OT",
    "20' FR",
    "40' FR",
    "20' TANK",
    "40' TANK",
  ];
  const options = [
    "No margin",
    "NET",
    "A + 50",
    "B + 100",
    "C + 150",
    "A + 2",
    "B + 4",
    "C + 6",
    "New Margin",
  ];

  const [data, dispatchDetail] = useReducer(reducer, {
    margin: "No margin",
    date: "",
    show_spot_rates: false,
    origin_location: "",
    include_origin: false,
    destination_location: "",
    include_destination: false,
  });

  return (
    <div className={classes["contaier"]}>
      <SelectionCheckBoxGroup
        options={marginOptions}
        label={"Select"}
        selectedOptions={selectedOptions}
        setSelectedOptions={setSelectedOptions}
      />
      <div className={classes["date"]}>
        <DateInput
          noLabel={true}
          label={"date"}
          data={data.date}
          dataKey={"date"}
          setData={dispatchDetail}
        />

        <CheckboxGroup
          data={data}
          type={"show_spot_rates"}
          dataKey={"show_spot_rates"}
          label={"Show Spot Rates"}
          setData={dispatchDetail}
          dataType="single"
        />
      </div>

      <div className={classes["location"]}>
        <InputGroup
          placeHolder={"please select location"}
          noLabel={true}
          id={"origin_location"}
          label={"origin_location"}
          data={data.origin_location}
          dataKey={"origin_location"}
          setData={dispatchDetail}
          stateType={"useReducer"}
          dataType="single"
        />

        <CheckboxGroup
          data={data}
          type={"include_origin"}
          dataKey={"include_origin"}
          label={"Include Origin Charges"}
          setData={dispatchDetail}
          dataType="single"
        />
      </div>
      <div className={classes["location"]}>
        <InputGroup
          noLabel={true}
          placeHolder={"please select location"}
          id={"destination_location"}
          data={data.destination_location}
          dataKey={"destination_location"}
          setData={dispatchDetail}
          stateType={"useReducer"}
          dataType="single"
        />

        <CheckboxGroup
          data={data}
          type={"include_destination"}
          dataKey={"include_destination"}
          label={"Include Destination Charges"}
          setData={dispatchDetail}
          dataType="single"
        />
      </div>
      <div className={classes["selection"]}>
        <SelectionGroup
          noLabel={true}
          data={data}
          type={"margin"}
          dataKey={"margin"}
          label={"No margin"}
          options={options}
          setData={dispatchDetail}
          dataType="single"
        />
      </div>
    </div>
  );
};

export default Bottom;
