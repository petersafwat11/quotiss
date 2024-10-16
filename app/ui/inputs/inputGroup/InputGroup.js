import React from "react";
import classes from "./inputGroup.module.css";
const InputGroup = ({
  id,
  label,
  data,
  dataKey,
  setData,
  stateType,
  dataType,
  objectType
}) => {
  const handleInputChange = (val) => {
    stateType !== "useReducer"
      ? setData({ ...data, [dataKey]: val })
      : dataType === "single"
      ? setData({
          type: dataKey.toLocaleUpperCase(),
          value: val,
        })
      : setData({
          type: objectType.toLocaleUpperCase(),
          value: { ...data, [dataKey]: val },
        });
  };
  return (
    <div className={classes["input-group"]}>
      <label htmlFor={id} className={classes["label"]}>
        {label}
      </label>
      <input
        value={dataType === "single" ? data : data[dataKey]}
        onChange={(e) => {
          handleInputChange(e.target.value);
        }}
        // placeholder={`Please Enter ${label}`}
        id={id}
        className={classes["input"]}
      ></input>
    </div>
  );
};

export default InputGroup;
