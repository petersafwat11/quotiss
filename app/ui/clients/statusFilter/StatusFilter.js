"use client";
import React, { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import classes from "./statusFilter.js.module.css";
import FilterSearch from "../../filterSearch/FilterSearch";

const StatusFilter = ({ filterValue, setFilterValue }) => {
  const [showOptions, setShowOptions] = useState(false);
  const toggleFilter = () => {
    setShowOptions(!showOptions);
  };
  const [searchValue, setSearchValue] = useState("");
  const values = ["Status", "Active", "Potential", "Blocked"];
  const [updatedValues, setUpdatedValues] = useState(values);
  useEffect(() => {
    const values = ["Status", "Active", "Potential", "Blocked"];

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

export default StatusFilter;