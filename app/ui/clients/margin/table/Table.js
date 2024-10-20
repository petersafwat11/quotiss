"use client";
import React, { useEffect, useState } from "react";
import classes from "./table.module.css";
import { FaDownload } from "react-icons/fa";
import { FaUpload } from "react-icons/fa";
import {
  AIROptions,
  baseValues,
  FCLOptions,
  LCLOptions,
  LTLOptions,
} from "./options";

const Table = () => {
  const [type, setType] = useState("LTL");

  const [cols, setCols] = useState(baseValues);
  useEffect(() => {
    type === "LTL"
      ? setCols([...baseValues, ...LTLOptions])
      : type.startsWith("FCL")
      ? setCols([...baseValues, ...FCLOptions])
      : type === "LCL"
      ? setCols([...baseValues, ...LCLOptions])
      : setCols([...baseValues, ...AIROptions]);
  }, [type, baseValues, LTLOptions, FCLOptions, LCLOptions, AIROptions]);
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
      <div className={classes["table"]}>
        <div className={classes["header"]}>
          {cols.map((item, index) => (
            <p key={index} className={classes["name"]}>
              {item}
            </p>
          ))}
        </div>
        <div className={classes["body"]}>
          <div className={classes["row"]}>
            {cols.map((item, index) => (
              <p key={index} className={classes["name"]}>
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
