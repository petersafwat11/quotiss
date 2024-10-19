"use client";

import React, { useReducer, useState } from "react";
import classes from "./form.module.css";
import { chargesReducer, intialValue } from "./dataAndReducer";
import Surcharges from "../surcharges/Surcharges";
import TermsAndConditions from "../termsAndConditions/TermsAndConditions";
import Tabs from "../../tabs/Tabs";
import InputGroup from "../../inputs/inputGroup/InputGroup";
import SelectionGroup from "../../inputs/selectionGroup/SelectionGroup";

const Form = () => {
  const [data, dispatchDetail] = useReducer(chargesReducer, intialValue);
  const [dataType, setDataType] = useState("Surcharges");
  const options = ["Both", "Origin", "Destination", "Not Available"];
  const [type, setType] = useState("FCL");

  return (
    <div className={"form"}>
      <div className={classes["inputs"]}>
        <InputGroup
          id={"name"}
          label={"Name"}
          data={data.name}
          dataKey={"name"}
          setData={dispatchDetail}
          stateType={"useReducer"}
          dataType="single"
        />
        <InputGroup
          id={"kind"}
          label={"Kind"}
          data={data.kind}
          dataKey={"kind"}
          setData={dispatchDetail}
          stateType={"useReducer"}
          dataType="single"
        />

        <InputGroup
          id={"code"}
          label={"Code"}
          data={data.code}
          dataKey={"code"}
          setData={dispatchDetail}
          stateType={"useReducer"}
          dataType="single"
        />
        <SelectionGroup
          data={data}
          type={"available_online"}
          dataKey={"available_online"}
          label={"Available Online"}
          options={options}
          setData={dispatchDetail}
          dataType="single"
        />

        <InputGroup
          id={"country"}
          label={"Country"}
          data={data.country}
          dataKey={"country"}
          setData={dispatchDetail}
          stateType={"useReducer"}
          dataType="single"
        />
        <InputGroup
          id={"region"}
          label={"Region"}
          data={data.region}
          dataKey={"region"}
          setData={dispatchDetail}
          stateType={"useReducer"}
          dataType="single"
        />
        <InputGroup
          id={"latitude"}
          label={"Latitude"}
          data={data.latitude}
          dataKey={"latitude"}
          setData={dispatchDetail}
          stateType={"useReducer"}
          dataType="single"
        />
        <InputGroup
          id={"longitude"}
          label={"Longitude"}
          data={data.longitude}
          dataKey={"longitude"}
          setData={dispatchDetail}
          stateType={"useReducer"}
          dataType="single"
        />
      </div>
      <div className={classes["data-types"]}>
        <div className={classes["types"]}>
          <button
            onClick={() => {
              setType("FCL");
            }}
            className={classes[type === "FCL" ? "active-type" : "type"]}
          >
            {" "}
            FCL
          </button>
          <button
            onClick={() => {
              setType("LCL");
              console.log("type", type);
            }}
            className={classes[type === "LCL" ? "active-type" : "type"]}
          >
            LCL
          </button>
        </div>
        <Tabs
          types={["Surcharges", "Terms & Conditions"]}
          setDataType={setDataType}
          dataType={dataType}
        />
      </div>

      {dataType === "Surcharges" ? (
        <Surcharges data={data.surcharges} dispatchDetail={dispatchDetail} />
      ) : (
        <TermsAndConditions
          data={data.terms_and_conditions}
          dispatchDetail={dispatchDetail}
        />
      )}
    </div>
  );
};

export default Form;
