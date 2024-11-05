"use client";
import React, { useEffect, useState } from "react";
import classes from "./margin.module.css";
import { FaDownload } from "react-icons/fa";
import { FaUpload } from "react-icons/fa";
import LTLTable from "./LTLTable/LTLTable";
import FCLTable from "./FCLTable/FCLTable";
import LCLTable from "./LCLTable/LCLTable";
import AIRTable from "./AIRTable/AIRTable";

const Margin = ({ data, dispatchDetail }) => {
  const [type, setType] = useState("LTL");

  return (
    <div className={classes["container"]}>
      <div className={classes["top"]}>
        <div className={classes["types"]}>
          {["LTL", "FCL SEA", "FCL RAIL", "LCL SEA", "LCL RAIL", "AIR"].map(
            (item, index) => (
              <button
                key={index}
                onClick={() => {
                  setType(item);
                }}
                className={classes[type === item ? "active-type" : "type"]}
              >
                {item}
              </button>
            )
          )}
        </div>
        <div className={classes["actions"]}>
          <button className={classes["action"]}>
            <FaDownload className={classes["icon"]} />
            Download
          </button>
          <button className={classes["action"]}>
            <FaUpload className={classes["icon"]} />
            Upload
          </button>
          <button className={classes["action"]}>Get Template</button>
        </div>
      </div>
      {type === "LTL" ? (
        <LTLTable data={data} dispatchDetail={dispatchDetail} />
      ) : type.startsWith("FCL") ? (
        <FCLTable data={data} dispatchDetail={dispatchDetail} />
      ) : type.startsWith("LCL") ? (
        <LCLTable data={data} dispatchDetail={dispatchDetail} />
      ) : (
        <AIRTable data={data} dispatchDetail={dispatchDetail} />
      )}
    </div>
  );
};

export default Margin;
