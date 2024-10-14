"use client";
import React, { useState } from "react";
import classes from "./table.module.css";
import Popup from "../../popupWrapper/Popup";
import Country from "../country/Country";
const Table = () => {
  const [activeCountry, setActiveCountry] = useState();
  const [showEditPopup, setShowEditPopup] = useState(false);
  const applyChanges= ()=>{
// make update api request
    setShowEditPopup(false)
    
  }
  const cancelChanges= ()=>{
    setShowEditPopup(false)
  }
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
      <div className={classes["container"]}>
        <div className={classes["table"]}>
          <div className={classes["table-header"]}>
            <p className={classes["header-col"]}>Code</p>
            <p className={classes["header-col"]}>Name</p>
            <p className={classes["header-col"]}>Status</p>
          </div>
          <div className={classes["body"]}>
            <div className={classes["row"]}>
              <p className={classes["data"]}>Gold Level</p>
              <p className={classes["data"]}>A Gold Level</p>
              <p className={classes["data"]}>A Gold Level</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
