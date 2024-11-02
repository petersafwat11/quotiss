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
  stateType,
  dataType,
  objectKey,
  dataKey,
  width,
  data,
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
      if (selectedOptions?.length === options.length) {
        dataType === "single"
          ? setSelectedOptions({ type: dataKey, value: [] })
          : dataType === "object"
          ? setSelectedOptions({
              type: objectKey,
              value: { ...data, [dataKey]: [] },
            })
          : setSelectedOptions([]); // Deselect all
      } else {
        dataType === "single"
          ? setSelectedOptions({ type: dataKey, value: [...options] })
          : dataType === "object"
          ? setSelectedOptions({
              type: objectKey,
              value: { ...data, [dataKey]: [...options] },
            })
          : setSelectedOptions([...options]); // Select all
      }
    } else {
      const newState = selectedOptions.includes(val)
        ? options.filter((item) => item !== val)
        : [...options, val];
      dataType === "single"
        ? setSelectedOptions({ type: dataKey, value: newState })
        : dataType === "object"
        ? setSelectedOptions({
            type: objectKey,
            value: { ...data, [dataKey]: newState },
          })
        : setSelectedOptions(newState);
    }
    // toggleFilter();
  };

  return (
    <div className={classes["selection"]}>
      <div
        style={{ width: width ? width : "" }}
        onClick={toggleFilter}
        className={classes["selected"]}
      >
        <p className={classes["selected-sport"]}>
          {label}
          {required && <span className={classes["required"]}>*</span>}
        </p>
        <MdKeyboardArrowDown className={classes["arrow"]} />
      </div>

      {/* Options list */}
      {showOptions && (
        <div
          style={{ width: width ? width : "" }}
          className={classes["options"]}
        >
          <div className={classes["option-wrapper"]}>
            <CircleCheckbox
              itemName={null}
              onChange={() => onSelect("all")}
              type={"item"}
              checked={selectedOptions.length === options?.length}
            />

            <FilterSearch
              width={"100%"}
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
