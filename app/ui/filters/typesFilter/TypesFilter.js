"use client";
import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import classes from "./filter.module.css";
import { RiShip2Fill } from "react-icons/ri";
import { FaTrain } from "react-icons/fa";
import { IoAirplane } from "react-icons/io5";
import { FaTruck } from "react-icons/fa";

const TypesFilter = ({ filterValue, setFilterValue, fullOptions }) => {
  const [showOptions, setShowOptions] = useState(false);
  const toggleFilter = () => {
    setShowOptions(!showOptions);
  };
  const mainOptions = [
    { name: "FCL", type: "port" },
    { name: "FCL", type: "rail" },
    { name: "LCL", type: "port" },
    { name: "LCL", type: "rail" },
    { name: "AIR", type: "air" },
    { name: "LTL", type: "road" },
    { name: "FTL", type: "road" },
  ];
  const allOptions = [...mainOptions, "Manual", "Email", "Multi", "FCLTARIFF"];
  const types = fullOptions ? allOptions : mainOptions;
  const handleClick = (item) => {
    setFilterValue({ name: item.name, type: item.type });
    toggleFilter();
  };

  return (
    <div className={classes["selection"]}>
      <div onClick={toggleFilter} className={classes["selected"]}>
        <div className={classes["selected-type"]}>
          {filterValue.type === "port" ? (
            <RiShip2Fill className={classes["icon"]} />
          ) : filterValue.type === "rail" ? (
            <FaTrain className={classes["icon"]} />
          ) : filterValue.type === "air" ? (
            <IoAirplane className={classes["icon"]} />
          ) : filterValue.type === "road" ? (
            <FaTruck className={classes["icon"]} />
          ) : (
            ""
          )}

          <p className={classes["selected-sport"]}>{filterValue?.name}</p>
        </div>
        <MdKeyboardArrowDown className={classes["arrow"]} />
      </div>

      {showOptions && (
        <div className={classes["options"]}>
          <p className={classes["types-text"]}>Types</p>
          {types.map((item, index) => (
            <div
              onClick={() => {
                handleClick(item);
              }}
              key={index}
              className={classes["option"]}
            >
              {item.type === "port" ? (
                <RiShip2Fill className={classes["icon"]} />
              ) : item.type === "rail" ? (
                <FaTrain className={classes["icon"]} />
              ) : item.type === "air" ? (
                <IoAirplane className={classes["icon"]} />
              ) : item.type === "road" ? (
                <FaTruck className={classes["icon"]} />
              ) : (
                ""
              )}
              <p className={classes["option-name"]}>{item.name}</p>
            </div>
          ))}
          {/* <p
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
          </p> */}
        </div>
      )}
    </div>
  );
};

export default TypesFilter;
