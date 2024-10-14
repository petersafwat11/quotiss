"use client";

import React, { useReducer } from "react";
import classes from "./form.module.css";
import { chargesReducer, intialValue } from "./dataAndReducer";
import Surcharges from "../surcharges/Surcharges";
import TermsAndConditions from "../termsAndConditions/TermsAndConditions";

const Form = () => {
  const applyChanges = () => {};
  const cancelChanges = () => {};
  const [data, dispatchDetail] = useReducer(chargesReducer, intialValue);
  const [dataType, setDataType] = useState("Surcharges");
  return (
    <div className={classes["conatiner"]}>
      <div className={classes["inputs"]}>
        <input
          value={data.name}
          onChange={(e) => {
            dispatchDetail({
              type: "NAME",
              value: e.target.value,
            });
          }}
          className={classes["main-margin"]}
        ></input>
        <input
          value={data.kind}
          onChange={(e) => {
            dispatchDetail({
              type: "KIND",
              value: e.target.value,
            });
          }}
          className={classes["main-margin"]}
        ></input>

        <input
          value={data.code}
          onChange={(e) => {
            dispatchDetail({
              type: "CODE",
              value: e.target.value,
            });
          }}
          className={classes["main-margin"]}
        ></input>
        <input
          value={data.available_online}
          onChange={(e) => {
            dispatchDetail({
              type: "AVAILABLE_ONLINE",
              value: e.target.value,
            });
          }}
          className={classes["main-margin"]}
        ></input>
        <input
          value={data.country}
          onChange={(e) => {
            dispatchDetail({
              type: "COUNTRY",
              value: e.target.value,
            });
          }}
          className={classes["main-margin"]}
        ></input>
        <input
          value={data.region}
          onChange={(e) => {
            dispatchDetail({
              type: "REGION",
              value: e.target.value,
            });
          }}
          className={classes["main-margin"]}
        ></input>
        <input
          value={data.latitude}
          onChange={(e) => {
            dispatchDetail({
              type: "LATITUDE",
              value: e.target.value,
            });
          }}
          className={classes["main-margin"]}
        ></input>
        <input
          value={data.longitude}
          onChange={(e) => {
            dispatchDetail({
              type: "LONGITUDE",
              value: e.target.value,
            });
          }}
          className={classes["main-margin"]}
        ></input>
      </div>

      <div className={classes["data-types"]}>
        <div className={classes["filters"]}>
          <button>FCL</button>
          <button>LCL</button>
        </div>
        <button
          onClick={() => {
            setDataType("Surcharges");
          }}
          className={classes["data-type"]}
        >
          Surcharges
        </button>
        <button
          onClick={() => {
            setDataType("Terms & Conditions");
          }}
          className={classes["data-type"]}
        >
          Terms & Conditions
        </button>
      </div>
      {dataType === "Surcharges" ? (
        <Surcharges data={data.surcharges} dispatchDetail={dispatchDetail} />
      ) : (
        <TermsAndConditions
          data={data.terms_and_conditions}
          dispatchDetail={dispatchDetail}
        />
      )}
      <div className={classes["actions"]}>
        <button onClick={applyChanges} className={classes["apply-button"]}>
          Apply
        </button>
        <button onClick={cancelChanges} className={classes["apply-button"]}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Form;
