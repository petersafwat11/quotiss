"use client";
import React, { useReducer, useState } from "react";
import classes from "./forms.module.css";
import General from "./general/General";
import Translation from "./translation/Translation";
import LTL from "./ltl/LTL";
import { intialValue, surchargeReducer } from "./dataAndReducer";

const Form = () => {
  const [data, dispatchDetail] = useReducer(surchargeReducer, intialValue);
  const [dataType, setDataType] = useState("General");
  return (
    <div className={classes["forms"]}>
      <input
        value={data.main_margin}
        onChange={(e) => {
          setData({ ...data, main_margin: e.target.value });
        }}
        className={classes["main-margin"]}
      ></input>
      <div className={classes["dataTypes"]}>
        <p
          onCLick={() => {
            setDataType("General");
          }}
          className={classes["data-type"]}
        >
          General
        </p>
        <p
          onCLick={() => {
            setDataType("Translation");
          }}
          className={classes["data-type"]}
        >
          Translation
        </p>
        <p
          onCLick={() => {
            setDataType("LTL");
          }}
          className={classes["data-type"]}
        >
          LTL
        </p>
      </div>
      <div className={classes["otherData"]}>
        {dataType === "General" ? (
          <General data={data.general} dispatchDetail={dispatchDetail} />
        ) : dataType === "Translation" ? (
          <Translation
            data={data.translation}
            dispatchDetail={dispatchDetail}
          />
        ) : (
          <LTL data={data.ltl} dispatchDetail={dispatchDetail} />
        )}
      </div>
    </div>
  );
};

export default Form;
