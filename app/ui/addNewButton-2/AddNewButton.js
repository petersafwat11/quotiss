import React from "react";
import classes from "./addNewButton.module.css";
const AddNewButton = ({ buttonClickHandler }) => {
  return (
    <button onClick={buttonClickHandler} className={classes["add-new"]}>
      Add New
    </button>
  );
};

export default AddNewButton;
