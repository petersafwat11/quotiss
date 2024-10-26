"use client";
import React, { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import classes from "./selectionCheckBoxGroup.module.css";
import CircleCheckbox from "./circleCheckbox/CircleChexbox";
import FilterSearch from "./filterSearch/FilterSearch";

const SelectionCheckBoxGroup = ({
  options,
  label,
  selectedOptions,
  setSelectedOptions,
  required,
}) => {
  // const [selectedOptions, setSelectedOptions] = useState([]);
  const [showOptions, setShowOptions] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  // Toggle visibility of options
  const toggleFilter = () => {
    setShowOptions((prev) => !prev); // Cleaner toggle
  };
  const [updatedValues, setUpdatedValues] = useState(options);
  useEffect(() => {
    const searchedValues = options.filter((item) =>
      item.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    );
    setUpdatedValues(searchedValues);
  }, [searchValue, options]);

  // Handle selection of options
  const onSelect = (val) => {
    if (val === "all") {
      if (selectedOptions.length === options.length) {
        setSelectedOptions([]); // Deselect all
      } else {
        setSelectedOptions([...options]); // Select all
      }
    } else {
      setSelectedOptions((prev) =>
        prev.includes(val)
          ? prev.filter((item) => item !== val)
          : [...prev, val]
      );
    }
    console.log("selectedOptions", selectedOptions);
    // toggleFilter();
  };

  return (
    <div className={classes["selection"]}>
      <div onClick={toggleFilter} className={classes["selected"]}>
        <p className={classes["selected-sport"]}>
          {label}
          {required && <span className={classes["required"]}>*</span>}
        </p>
        <MdKeyboardArrowDown className={classes["arrow"]} />
      </div>

      {/* Options list */}
      {showOptions && (
        <div className={classes["options"]}>
          <div className={classes["option-wrapper"]}>
            <CircleCheckbox
              itemName={null}
              onChange={() => onSelect("all")}
              type={"item"}
              checked={selectedOptions.length === options.length}
            />

            <FilterSearch
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
          </div>
          {updatedValues.map((item, index) => (
            <div key={index} className={classes["option-wrapper"]}>
              <CircleCheckbox
                itemName={item}
                onChange={() => onSelect(item)}
                type={"item"}
                checked={selectedOptions.includes(item)}
              />
              <p className={classes["option"]}>{item}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectionCheckBoxGroup;
