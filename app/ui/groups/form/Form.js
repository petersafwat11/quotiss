"use client";
import React, { useState } from "react";
import classes from "./form.module.css";
const Form = () => {
  const [data, setData] = useState({
    group_name: "",
    locations: "",
    default_gateaway: [],
    available_online: "",
  });
  const applyChanges = () => {};
  const cancelChanges = () => {};
  return (
    <div className={classes["container"]}>
      <div className={classes["inputs"]}>
        <input
          value={data.group_name}
          onChange={(e) => {
            setData({ ...data, group_name: e.target.value });
          }}
          className={classes["group-name"]}
        ></input>
        <input
          value={data.available_online}
          onChange={(e) => {
            setData({ ...data, available_online: e.target.value });
          }}
          className={classes["available-online"]}
        ></input>
        <input
          value={data.locations}
          onChange={(e) => {
            setData({ ...data, locations: e.target.value });
          }}
          className={classes["locations"]}
        ></input>
        <input
          value={data.default_gateaway}
          onChange={(e) => {
            setData({ ...data, default_gateaway: e.target.value });
          }}
          className={classes["default-gateaway"]}
        ></input>
      </div>
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
