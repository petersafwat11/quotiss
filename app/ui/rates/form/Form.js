"use client";
import React, { useReducer, useState } from "react";
import classes from "./form.module.css";
import { intialValue, ratesReducer } from "./dataAndReducer";
import Locations from "../locations/Locations";
import Surcharge from "../surcharge/Surcharge";
import Restrictions from "../restrictions/Restrictions";
import Notes from "../notes/Notes";
import MainInputs from "../mainInputs/MainInputs";
import Tabs from "../../tabs/Tabs";
import DistinationTable from "../locations/distinationTable/DistinationTable";

const Form = () => {
  const applyChanges = () => {};
  const cancelChanges = () => {};
  const [data, dispatchDetail] = useReducer(ratesReducer, intialValue);
  const [dataType, setDataType] = useState("Surcharges");

  return (
    <div className={"form"}>
      <MainInputs dispatchDetail={dispatchDetail} data={data} />
      <Tabs
        types={[
          "Origin Locations",
          "Destination Locations",
          "Surcharges",
          "Restrictions",
          "Notes",
        ]}
        setDataType={setDataType}
        dataType={dataType}
      />
      {dataType === "Origin Locations" ? (
        <DistinationTable
          data={data.surcharges}
          dispatchDetail={dispatchDetail}
        />
      ) : dataType === "Destination Locations" ? (
        <DistinationTable
          data={data.surcharges}
          dispatchDetail={dispatchDetail}
        />
      ) : dataType === "Surcharges" ? (
        <Surcharge
          data={data.terms_and_conditions}
          dispatchDetail={dispatchDetail}
        />
      ) : dataType === "Restrictions" ? (
        <Restrictions
          data={data.restrictions}
          dispatchDetail={dispatchDetail}
        />
      ) : (
        <Notes />
      )}
    </div>
  );
};

export default Form;
