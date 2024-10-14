"use client";
import React, { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import classes from "./marginFilter.module.css";
import { BiSearch } from "react-icons/bi";
import FilterSearch from "../../filterSearch/FilterSearch";

const MarginFilter = ({ filterValue, setFilterValue }) => {
  const [showOptions, setShowOptions] = useState(false);
  const toggleFilter = () => {
    setShowOptions(!showOptions);
  };
  const [searchValue, setSearchValue] = useState("");
  const values = [
    "20' DC",
    "40' DC",
    "40' HC",
    "45' HC",
    "20' NOR",
    "40' NOR",
    "20' REEF",
    "40' HREEF",
    "45' PLWD",
    "20' OT",
    "40' OT",
    "20' FR",
    "40' FR",
    "20' TANK",
    "40' TANK",
  ];
  const [updatedValues, setUpdatedValues] = useState(values);
  useEffect(() => {
    const values = [
      "20' DC",
      "40' DC",
      "40' HC",
      "45' HC",
      "20' NOR",
      "40' NOR",
      "20' REEF",
      "40' HREEF",
      "45' PLWD",
      "20' OT",
      "40' OT",
      "20' FR",
      "40' FR",
      "20' TANK",
      "40' TANK",
    ];

    const searchedValues = values.filter((item) =>
      item.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    );
    setUpdatedValues(searchedValues);
  }, [searchValue]);
  return (
    <div className={classes["selection"]}>
      <div
        onClick={() => {
          setShowOptions(!showOptions);
        }}
        className={classes["selected"]}
      >
        <p className={classes["selected-sport"]}>{filterValue}</p>
        <MdKeyboardArrowDown className={classes["arrow"]} />
      </div>
      {showOptions && (
        <>
          <div className={classes["options"]}>
            <FilterSearch
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />

            {updatedValues.map((item, index) => (
              <p
                onClick={() => {
                  setFilterValue(item);
                  setShowOptions(false);
                  setSearchValue("");
                }}
                className={classes["option"]}
                key={index}
              >
                {item}
              </p>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MarginFilter;
