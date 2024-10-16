import React from "react";
import classes from "./textareaGroup.module.css";
const TextAreaGroup = ({ id, label, data, dataKey, setData, stateType }) => {
  return (
    <div className={classes["input-group"]}>
      <label htmlFor={id} className={classes["label"]}>
        {label}
      </label>
      <textarea
        value={data[dataKey]}
        onChange={(e) => {
          stateType === "useState"
            ? setData({ ...data, [dataKey]: e.target.value })
            : "";
        }}
        id={id}
        className={classes["input"]}
      ></textarea>
    </div>
  );
};

export default TextAreaGroup;
