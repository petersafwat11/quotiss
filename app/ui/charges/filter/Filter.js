"use client";
import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import classes from "./filter.module.css";
import { RiShip2Fill } from "react-icons/ri";
import { FaTrain } from "react-icons/fa";
import { IoAirplane } from "react-icons/io5";
import { FaTruck } from "react-icons/fa";

const Filter = ({ filterValue, setFilterValue }) => {
  const [showOptions, setShowOptions] = useState(false);
  const toggleFilter = () => {
    setShowOptions(!showOptions);
  };
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
          {/* {categories.map((item, index) => ( */}
          {/* <p
              onClick={() => {
                // handleChangeCategory(item);
                setShowOptions(false);
              }}
              className={classes["option"]}
              // key={index}
            >
              {item}
            </p> */}
          {/* ))} */}
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

export default Filter;