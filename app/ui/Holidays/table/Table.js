"use client";
import React, { useEffect, useState } from "react";
import classes from "./table.module.css";
import AddNewButton from "../../addNewButton-2/AddNewButton";
import MakeHolidayPopup from "../makeHolidayPopup/MakeHolidayPopup";
import { useRouter } from "next/navigation";
import { createItem, updateItem } from "../../../lib/formFunctions";
const Table = ({ data }) => {
  const usableData = data?.data?.data;
  const router = useRouter();
  const [tableData, setTableData] = useState(usableData ? usableData : []);
  const [showAddHoliday, setShowAddHoliday] = useState({
    state: false,
    index: null,
  });
  const toggleAddHoliday = () => {
    setShowAddHoliday({ state: !showAddHoliday.state, index: null });
  };

  const applyChanges = async (data, index) => {
    const id = data?.id || false;
    if (!id) {
      const response = await createItem("holidays", data, router);
      tableData?.length < 10
        ? setTableData([...tableData, response?.data?.data?.data])
        : "";
    } else {
      const response = await updateItem("holidays", data, router, id);
      const updatedData = [...tableData];
      updatedData[showAddHoliday.index] = response?.data?.data?.data;
      setTableData(updatedData);
    }
    toggleAddHoliday();
  };
  useEffect(() => {
    const usableData = data?.data?.data;
    setTableData(usableData);
  }, [data]);

  return (
    <div className={classes["container"]}>
      <div className={classes["table"]}>
        <div className={classes["header"]}>
          <p className={classes["origin-country"]}>Origin Country </p>
          <p className={classes["destination-country"]}> Destination Country</p>
          <p className={classes["service"]}>Service</p>
          <p className={classes["january"]}>January</p>
          <p className={classes["february"]}>February</p>
          <p className={classes["march"]}>March</p>
          <p className={classes["april"]}>April</p>
          <p className={classes["may"]}>May</p>
          <p className={classes["june"]}>June</p>
          <p className={classes["july"]}>July</p>
          <p className={classes["august"]}>August</p>
          <p className={classes["september"]}>September</p>
          <p className={classes["october"]}>October</p>
          <p className={classes["november"]}>November</p>
          <p className={classes["december"]}>December</p>
        </div>
        <div className={classes["body"]}>
          {tableData?.length > 0 &&
            tableData?.map((item, index) =>
              showAddHoliday.state && showAddHoliday.index === index ? (
                <MakeHolidayPopup
                  itemData={item}
                  key={index}
                  toggleAddHoliday={toggleAddHoliday}
                  applyChanges={applyChanges}
                />
              ) : (
                <div
                  onClick={() => {
                    setShowAddHoliday({
                      state: true,
                      index: index,
                    });
                  }}
                  key={index}
                  className={classes["row"]}
                >
                  <p className={classes["origin-country"]}>
                    {item.origin_country}{" "}
                  </p>
                  <p className={classes["destination-country"]}>
                    {item.destination_country}
                  </p>
                  <p className={classes["service"]}>{item.service}</p>
                  <p className={classes["january"]}>{item.january}</p>
                  <p className={classes["february"]}>{item.february}</p>
                  <p className={classes["march"]}>{item.march}</p>
                  <p className={classes["april"]}>{item.april}</p>
                  <p className={classes["may"]}>{item.may}</p>
                  <p className={classes["june"]}>{item.june}</p>
                  <p className={classes["july"]}>{item.july}</p>
                  <p className={classes["august"]}>{item.august}</p>
                  <p className={classes["september"]}>{item.september}</p>
                  <p className={classes["october"]}>{item.october}</p>
                  <p className={classes["november"]}>{item.november}</p>
                  <p className={classes["december"]}>{item.december}</p>
                </div>
              )
            )}
          {showAddHoliday.state &&
            !showAddHoliday.index &&
            showAddHoliday.index !== 0 && (
              <MakeHolidayPopup
                toggleAddHoliday={toggleAddHoliday}
                applyChanges={applyChanges}
              />
            )}
        </div>
        <div className={classes["add-new"]}>
          <AddNewButton buttonClickHandler={toggleAddHoliday} />
        </div>
      </div>
    </div>
  );
};

export default Table;
