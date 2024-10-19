"use client";
import React, { useState } from "react";
import classes from "./form.module.css";
import SelectionGroup from "../../inputs/selectionGroup/SelectionGroup";
const Form = () => {
  const [data, setData] = useState({ language: "", termsAndConditions: "" });
  const languages = [
    "English",
    "Polish",
    "Turkish",
    "Russian",
    "German",
    "Czech",
    "Slovak",
    "Lituanian",
    "Romanian",
    "French",
    "Dutch",
    "Hungarian",
    "Italian",
    "Spanish",
    "Slovenian",
  ];

  return (
    <div className={classes["container"]}>
      <SelectionGroup
        data={data}
        dataKey={"language"}
        label={"Please Select Language"}
        options={languages}
        setData={setData}
        stateType={'useState'}
      />

      <input
        value={data.country}
        onChange={(e) => {
          setData({ ...data, language: e.target.value });
        }}
        className={classes["auth-mode"]}
      ></input>

      {/* there will be text formmater */}
    </div>
  );
};

export default Form;
