"use client";
import React, { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import classes from "./selectionGroup.module.css";

const SelectionGroup = ({
  data,
  type,
  dataKey,
  options,
  setData,
  label,
}) => {
  const [showOptions, setShowOptions] = useState(false);
  const toggleFilter = () => {
    setShowOptions(!showOptions);
  };
  const values = ["Contracts", "Spot Rates"];
  const handleSelection = (val) => {
    // setFilterValue(item);
    setData({
      type: type,
      value: { ...data, [dataKey]: val },
    });

    setShowOptions(false);
  };
  return (
    <div className={classes["selection"]}>
      <div
        onClick={() => {
          setShowOptions(!showOptions);
        }}
        className={classes["selected"]}
      >
        <p className={classes["selected-sport"]}>
          {data[dataKey].length !== 0 ? data[dataKey] : label}
        </p>
        <MdKeyboardArrowDown className={classes["arrow"]} />
      </div>
      {showOptions && (
        <div className={classes["options"]}>
          {options.map((item, index) => (
            <p
              onClick={() => {
                handleSelection(item);
              }}
              className={classes["option"]}
              key={index}
            >
              {item}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectionGroup;
