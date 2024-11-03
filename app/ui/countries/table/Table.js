"use client";
import React, { useEffect, useState } from "react";
import classes from "./table.module.css";
import Popup from "../../popupWrapper/Popup";
import Country from "../country/Country";
import CircleCheckbox from "../../circleCheckbox/CircleChexbox";
import { useRouter } from "next/navigation";
import CheckboxGroup from "../../inputs/checkboxGroup/CheckboxGroup";
import { updateItem } from "@/app/lib/formFunctions";
const Table = ({ data }) => {
  const usableData = data?.data?.data;
  console.log("data?.data?.data", data?.data?.data);
  const router = useRouter();
  const [tableData, setTableData] = useState(usableData ? usableData : []);
  const [showEditCountry, setShowEditCountry] = useState({
    state: false,
    index: null,
  });
  const toggleEditCountry = () => {
    setShowEditCountry({ state: !showEditCountry.state, index: null });
  };

  const applyChanges = async (data, index) => {
    const id = data.id;
    console.log(data);
    const response = await updateItem("countries", data, router, id);
    const updatedData = [...tableData];
    updatedData[showEditCountry.index] = response?.data?.data?.data;
    setTableData(updatedData);
    toggleEditCountry();
  };
  useEffect(() => {
    const usableData = data?.data?.data;
    setTableData(usableData);
  }, [data]);

  return (
    <>
      <div className={classes["table"]}>
        <div className={classes["header"]}>
          <p className={classes["code"]}>Code</p>
          <p className={classes["name"]}>Name</p>
          <p className={classes["status"]}>Status</p>
        </div>
        <div className={classes["body"]}>
          {tableData?.length > 0 &&
            tableData?.map((item, index) =>
              showEditCountry.state && showEditCountry.index === index ? (
                <Country
                  data={item}
                  key={index}
                  toggleEditCountry={toggleEditCountry}
                  applyChanges={applyChanges}
                />
              ) : (
                <div
                  onClick={() => {
                    setShowEditCountry({
                      state: true,
                      index: index,
                    });
                  }}
                  key={index}
                  className={classes["row"]}
                >
                  <p className={classes["code"]}>{item.code}</p>
                  <p className={classes["name"]}>{item.name}</p>
                  <div className={classes["status"]}>
                    <CircleCheckbox
                      value={item.status}
                      // onChange={editHandler}
                    />
                  </div>
                </div>
              )
            )}
        </div>
      </div>
    </>
  );
};

export default Table;
