"use client";
import React, { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import classes from "./standeredFilter.module.css";
import FilterSearch from "../../filters/filterSearch/FilterSearch";

const StandardFilter = ({ filterValue, setFilterValue, options }) => {
  const [showOptions, setShowOptions] = useState(false);
  const toggleFilter = () => {
    setShowOptions(!showOptions);
  };
  const [searchValue, setSearchValue] = useState("");
  //   const values = [
  //     "status",
  //     "draft",
  //     "sent",
  //     "accepted",
  //     "declined",
  //     "negotiated",
  //   ];
  const [updatedValues, setUpdatedValues] = useState(options);
  useEffect(() => {
    const searchedValues = options.filter((item) =>
      item.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    );
    setUpdatedValues(searchedValues);
  }, [searchValue, options]);
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

export default StandardFilter;