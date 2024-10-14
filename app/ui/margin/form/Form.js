"use client";
import React, { useState } from "react";
import classes from "./form.module.css";

const Form = () => {
  const [data, setData] = useState({
    main_margin: "",
    weightAndmeasurement: "",
    description: "",
  });

  return (
    <div className={classes["container"]}>
      <input
        value={data.main_margin}
        onChange={(e) => {
          setData({ ...data, main_margin: e.target.value });
        }}
        className={classes["main-margin"]}
      ></input>
      <input
        value={data.weightAndmeasurement}
        onChange={(e) => {
          setData({ ...data, weightAndmeasurement: e.target.value });
        }}
        className={classes["main-margin"]}
      ></input>
      <textarea
        value={data.description}
        onChange={(e) => {
          setData({ ...data, description: e.target.value });
        }}
        className={classes["main-margin"]}
      ></textarea>
    </div>
  );
};

export default Form;
