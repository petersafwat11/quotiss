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
  objectType,
  type,
  handleKeyDown,
  noLabel,
  numbersOnly,
  disabled,
  required,
  placeHolder,
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
      {!noLabel && (
        <label htmlFor={id} className={classes["label"]}>
          {label} {required && <span className={classes["required"]}>*</span>}
        </label>
      )}
      <input
        disabled={disabled ? disabled : ""}
        style={{ border: disabled ? "1px solid #b6acac" : "" }}
        onKeyDown={(e) => {
          handleKeyDown ? handleKeyDown(e) : "";
        }}
        type={type ? type : "text"}
        value={dataType === "single" ? data : data[dataKey]}
        onChange={(e) => {
          if (numbersOnly) {
            const onlyNumbers = e.target.value.replace(/[^0-9]/g, "");
            handleInputChange(onlyNumbers);
          } else {
            handleInputChange(e.target.value);
          }
        }}
        placeholder={placeHolder ? placeHolder : ""}
        id={id}
        className={classes["input"]}
      ></input>
    </div>
  );
};

export default InputGroup;
