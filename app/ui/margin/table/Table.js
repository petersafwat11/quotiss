"use client";
import React, { useEffect, useState } from "react";
import classes from "./table.module.css";
import AddNewButton from "../../addNewButton/AddNewButton";
import axios from "axios";
import { useRouter } from "next/navigation";

const Table = ({ data, rows, search }) => {
  const usableData = data?.data?.data;
  const router = useRouter();
  const [tableData, setTableData] = useState(usableData ? usableData : []);
  const handleItemClick = (id) => {
    router.push(`/margins/${id}`);
  };
  const [type, setType] = useState("FCL");
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axios.get(`${process.env.BACKEND_SERVER}/margins`, {
          params: {
            page: 1,
            limit: rows,
            type: type,
            searchValue: search ? search : null,
            or: search ? ["name", "Weight / Measurement", "description"] : null,
          },
        });

        setTableData(data?.data?.data?.data);
      } catch (err) {
        console.log("err", err);
      }
    };
    getData();
  }, [type, rows, search]);

  return (
    <div className={classes["container"]}>
      <div className={classes["top"]}>
        <div className={classes["types"]}>
          <button
            onClick={() => {
              type !== "FCL" ? setType("FCL") : "";
            }}
            className={classes[type === "FCL" ? "active-type" : "type"]}
          >
            {" "}
            FCL
          </button>
          <button
            onClick={() => {
              type !== "LCL" ? setType("LCL") : "";
            }}
            className={classes[type === "LCL" ? "active-type" : "type"]}
          >
            LCL
          </button>
        </div>
        <AddNewButton params={{ type: type }} path={"margins/create"} />
      </div>
      <div className={classes["table"]}>
        <div className={classes["header"]}>
          <p className={classes["name"]}>Name </p>
          <p className={classes["W-M"]}> W/M</p>
          <p className={classes["description"]}> Description</p>
        </div>
        <div className={classes["body"]}>
          {tableData.map((item, index) => (
            <div
              onClick={() => {
                handleItemClick(item.id);
              }}
              key={index}
              className={classes["row"]}
            >
              <p className={classes["name"]}>{item.name} </p>
              <p className={classes["W-M"]}> {item["Weight / Measurement"]}</p>
              <p className={classes["description"]}> {item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Table;
