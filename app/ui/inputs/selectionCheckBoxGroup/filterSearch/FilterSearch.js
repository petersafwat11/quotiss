import React from "react";
import { BiSearch } from "react-icons/bi";
import classes from "./filterSearch.module.css";
const FilterSearch = ({ width, searchValue, setSearchValue }) => {
  return (
    <div className={classes["search-wrapper"]}>
      <input
        style={{ width: width ? width : "" }}
        type="text"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        placeholder="search"
        className={classes["search"]}
      />
      <BiSearch className={classes["search-icon"]} />
    </div>
  );
};

export default FilterSearch;
