import React from "react";
import classes from "./checkboxGroup.module.css";
const CheckboxGroup = ({ data, type, dataKey, setData, label, dataType }) => {
  const handleClick = () => {
    dataType === "single"
      ? setData({
          type: type,
          value: !data[dataKey],
        })
      : setData({
          type: type,
          value: { ...data, [dataKey]: !data[dataKey] },
        });
  };
  return (
    <div onClick={handleClick} className={classes["checkbox-group"]}>
      <div className={classes["circle-checkbox"]}>
        <input
          className={classes["checkbox"]}
          type="checkbox"
          checked={data[dataKey]}
        />
        <span className={classes["checkmark"]}></span>
      </div>
      <p className={classes["label"]}>{label}</p>
    </div>
  );
};

export default CheckboxGroup;
