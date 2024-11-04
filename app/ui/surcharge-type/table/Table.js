"use client";
import React, { useEffect, useState } from "react";
import classes from "./table.module.css";
import AddNewButton from "../../addNewButton/AddNewButton";
import { useRouter } from "next/navigation";

const Table = ({ data }) => {
  const usableData = data?.data?.data;
  const router = useRouter();
  const [tableData, setTableData] = useState(usableData ? usableData : []);
  console.log("usableData", data);
  const handleItemClick = (id) => {
    router.push(`/surchrgeTypes/${id}`);
  };
  useEffect(() => {
    const usableData = data?.data?.data;
    setTableData(usableData);
  }, [data]);
  return (
    <div className={classes["container"]}>
      <div className={classes["top"]}>
        <div className={classes["add-new"]}>
          <AddNewButton />
        </div>
      </div>
      <div className={classes["table"]}>
        <div className={classes["header"]}>
          <p className={classes["name"]}>Name </p>
          <p className={classes["description"]}> Description</p>
          <p className={classes["comment"]}> Comment</p>
        </div>
        <div className={classes["body"]}>
          {tableData?.length > 0 &&
            tableData?.map((item, index) => (
              <div
                onClick={() => {
                  handleItemClick(item.id);
                }}
                key={index}
                className={classes["row"]}
              >
                <p className={classes["name"]}>{item.name} </p>
                <p className={classes["description"]}>
                  {" "}
                  {item?.general?.internalDescription}
                </p>
                <p className={classes["comment"]}> {item?.general?.comment}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Table;
