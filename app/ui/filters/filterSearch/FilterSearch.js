import React from "react";
import { BiSearch } from "react-icons/bi";
import classes from "./filterSearch.module.css";
const FilterSearch = ({ searchValue, setSearchValue }) => {
  return (
    <div className={classes["search-wrapper"]}>
      <input
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
