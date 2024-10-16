"use client";
import React, { useState } from "react";
import classes from "./table.module.css";
import Popup from "../../popupWrapper/Popup";
import Country from "../country/Country";
import CircleCheckbox from "../../circleCheckbox/CircleCheckbox";
const Table = () => {
  const [activeCountry, setActiveCountry] = useState();
  const [showEditPopup, setShowEditPopup] = useState(false);
  const applyChanges = () => {
    // make update api request
    setShowEditPopup(false);
  };
  const cancelChanges = () => {
    setShowEditPopup(false);
  };
  return (
    <>
      {showEditPopup && (
        <Popup>
          <Country
            data={activeCountry}
            setData={setActiveCountry}
            applyChanges={applyChanges}
            cancelChanges={cancelChanges}
          />
        </Popup>
      )}
      <div className={classes["table"]}>
        <div className={classes["header"]}>
          <p className={classes["code"]}>Code</p>
          <p className={classes["name"]}>Name</p>
          <p className={classes["status"]}>Status</p>
        </div>
        <div className={classes["body"]}>
          <div className={classes["row"]}>
            <p className={classes["code"]}>Gold Level</p>
            <p className={classes["name"]}>A Gold Level</p>
            <div className={classes["status"]}>
              <CircleCheckbox />
            </div>
          </div>
          <div className={classes["row"]}>
            <p className={classes["code"]}>Gold Level</p>
            <p className={classes["name"]}>A Gold Level</p>
            <div className={classes["status"]}>
              <CircleCheckbox />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
