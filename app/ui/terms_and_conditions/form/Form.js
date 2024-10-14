"use client";
import React, { useState } from "react";
import classes from "./form.module.css";
const Form = () => {
  const [data, setData] = useState({ language: "", termsAndConditions: "" });
  const applyChanges = () => {};
  const cancelChanges = () => {};
  return (
    <div className={classes["container"]}>
      <input
        value={data.country}
        onChange={(e) => {
          setData({ ...data, language: e.target.value });
        }}
        className={classes["auth-mode"]}
      ></input>
      <div className={classes["actions"]}>
        <button onClick={applyChanges} className={classes["apply-button"]}>
          Apply
        </button>
        <button onClick={cancelChanges} className={classes["apply-button"]}>
          Cancel
        </button>
      </div>

      {/* there will be text formmater */}
    </div>
  );
};

export default Form;
