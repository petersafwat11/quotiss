"use client";

import React, { useReducer } from "react";
import classes from "./form.module.css";
import { intialValue, ratesReducer } from "./dataAndReducer";
import Locations from "../locations/Locations";
import Surcharge from "../surcharge/Surcharge";
import Restrictions from "../restrictions/Restrictions";
import Notes from "../notes/Notes";
import MainInputs from "../mainInputs/MainInputs";

const Form = () => {
  const applyChanges = () => {};
  const cancelChanges = () => {};
  const [data, dispatchDetail] = useReducer(ratesReducer, intialValue);
  const [dataType, setDataType] = useState("Surcharges");

  return (
    <div className={classes["conatiner"]}>
      <MainInputs dispatchDetail={dispatchDetail} data={data} />
      <div className={classes["data-types"]}>
        <button
          onClick={() => {
            setDataType("Locations");
          }}
          className={classes["data-type"]}
        >
          Locations
        </button>
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
            setDataType("Locations");
          }}
          className={classes["data-type"]}
        >
          Restrictions
        </button>
        <button
          onClick={() => {
            setDataType("Notes");
          }}
          className={classes["data-type"]}
        >
          Notes
        </button>
      </div>
      {dataType === "Locations" ? (
        <Locations data={data.surcharges} dispatchDetail={dispatchDetail} />
      ) : dataType === "Surcharges" ? (
        <Surcharge
          data={data.terms_and_conditions}
          dispatchDetail={dispatchDetail}
        />
      ) : dataType === "Restrictions" ? (
        <Restrictions
          data={data.terms_and_conditions}
          dispatchDetail={dispatchDetail}
        />
      ) : (
        <Notes />
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
