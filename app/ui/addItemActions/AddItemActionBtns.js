import React from "react";
import { IoCheckmarkSharp } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";
import classes from "./addItems.module.css";
const AddItemActionBtns = ({
  applyChanges,
  toggleShowComponent,
  index,
  data,
}) => {
  return (
    <div className={classes["actions"]}>
      <div
        onClick={() => {
          index || index === 0
            ? applyChanges(data, "edit", index)
            : applyChanges(data, "create");
        }}
        className={classes["apply-div"]}
      >
        <IoCheckmarkSharp className={classes["apply-icon"]} />
      </div>
      <div onClick={toggleShowComponent} className={classes["cancel-div"]}>
        <FaXmark className={classes["cancel-icon"]} />
      </div>
    </div>
  );
};

export default AddItemActionBtns;
