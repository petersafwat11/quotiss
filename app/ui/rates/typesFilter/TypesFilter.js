"use client";
import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import classes from "./filter.module.css";
import { RiShip2Fill } from "react-icons/ri";
import { FaTrain } from "react-icons/fa";
import { IoAirplane } from "react-icons/io5";
import { FaTruck } from "react-icons/fa";
import FilterSearch from "../../filters/filterSearch/FilterSearch";

const TypesFilter = ({ filterValue, setFilterValue }) => {
  const [showOptions, setShowOptions] = useState(false);
  const toggleFilter = () => {
    setShowOptions(!showOptions);
  };
  // const [searchValue, setSearchValue] = useState("");

  // const [updatedValues, setUpdatedValues] = useState(values);
  // useEffect(() => {
  //   const values = [
  //     "20' DC",
  //     "40' DC",
  //     "40' HC",
  //     "45' HC",
  //     "20' NOR",
  //     "40' NOR",
  //     "20' REEF",
  //     "40' HREEF",
  //     "45' PLWD",
  //     "20' OT",
  //     "40' OT",
  //     "20' FR",
  //     "40' FR",
  //     "20' TANK",
  //     "40' TANK",
  //   ];

  //   const searchedValues = values.filter((item) =>
  //     item.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
  //   );
  //   setUpdatedValues(searchedValues);
  // }, [searchValue]);

  return (
    <div className={classes["selection"]}>
      <div
        onClick={() => {
          setShowOptions(!showOptions);
        }}
        className={classes["selected"]}
      >
        <p className={classes["selected-sport"]}>{filterValue.name}</p>
        <MdKeyboardArrowDown className={classes["arrow"]} />
      </div>

      {showOptions && (
        <div className={classes["options"]}>
          {/* <FilterSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
 */}
          <p
            onClick={() => {
              setFilterValue({ name: "FCL", type: "ship" });
              setShowOptions(false);
            }}
            className={classes["option"]}
          >
            <RiShip2Fill className={classes["icon"]} />
            FCL
          </p>
          <p
            onClick={() => {
              setFilterValue({ name: "LCL", type: "ship" });
              setShowOptions(false);
            }}
            className={classes["option"]}
          >
            <RiShip2Fill className={classes["icon"]} />
            LCL
          </p>
          <p
            onClick={() => {
              setFilterValue({ name: "FCL", type: "train" });
              setShowOptions(false);
            }}
            className={classes["option"]}
          >
            <FaTrain className={classes["icon"]} />
            FCL
          </p>
          <p
            onClick={() => {
              setFilterValue({ name: "LCL", type: "train" });
              setShowOptions(false);
            }}
            className={classes["option"]}
          >
            <FaTrain className={classes["icon"]} />
            LCL
          </p>
          <p
            onClick={() => {
              setFilterValue({ name: "AIR", type: "plane" });
              setShowOptions(false);
            }}
            className={classes["option"]}
          >
            <IoAirplane />
            AIR
          </p>
          <p
            onClick={() => {
              setFilterValue({ name: "LTL", type: "truck" });

              setShowOptions(false);
            }}
            className={classes["option"]}
          >
            <FaTruck />
            LTL
          </p>
          <p
            onClick={() => {
              setFilterValue({ name: "FTL", type: "" });

              setShowOptions(false);
            }}
            className={classes["option"]}
          >
            FTL
          </p>
        </div>
      )}
    </div>
  );
};

export default TypesFilter;
