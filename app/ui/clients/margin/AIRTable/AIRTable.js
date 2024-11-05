"use client";
import React, { useState } from "react";
import classes from "./table.module.css";
import { baseValues, AIROptions } from "../options";
import AddNewButton from "@/app/ui/addNewButton-2/AddNewButton";
import AddItem from "./addItem/AddItem";

const AIRTable = ({ data, dispatchDetail }) => {
  const headerItems = [...baseValues, ...AIROptions];
  const handleNames = (str, type) => {
    const className =
      type === "class"
        ? str.toLowerCase().replace(/\s+/g, "-")
        : str.toLowerCase().replace(/\s+/g, "_");
    return className;
  };
  const changeTableItem = (itemData, type, index) => {
    if (type === "create") {
      dispatchDetail({
        type: "potentials".toUpperCase(),
        value: [...data, itemData],
      });
      toggleShowComponent();
    } else if (type === "delete") {
      const updatedArray = data?.filter((_, indx) => indx !== index);
      dispatchDetail({
        type: "potentials".toUpperCase(),
        value: updatedArray,
      });
    } else {
      const updatedArray = [...data];
      updatedArray[index] = itemData;

      dispatchDetail({
        type: "potentials".toUpperCase(),
        value: updatedArray,
      });
      toggleShowComponent();
    }
  };

  const [showComponent, setShowComponent] = useState({
    state: false,
    index: null,
  });
  const toggleShowComponent = () => {
    setShowComponent({ state: !showComponent.state, index: null });
  };

  return (
    <div className={classes["table"]}>
      <div className={classes["header"]}>
        {headerItems.map((item, index) => (
          <p
            key={index}
            className={
              index < 3 ? classes[handleNames(item, "class")] : classes["val"]
            }
          >
            {item}
          </p>
        ))}
      </div>
      <div className={classes["body"]}>
        {data?.length > 0 &&
          data?.map((item, index) =>
            showComponent.state && showComponent.index === index ? (
              <AddItem
                itemData={item}
                key={index}
                toggleShowComponent={toggleShowComponent}
                applyChanges={changeTableItem}
                index={index}
              />
            ) : (
              <div
                onClick={() => {
                  setShowComponent({
                    state: true,
                    index: index,
                  });
                }}
                key={index}
                className={classes["row"]}
              >
                {Object.keys(item).map((key, idx) => (
                  <p
                    key={`${index}-${idx}`}
                    className={
                      index < 3
                        ? classes[handleNames(key, "class")]
                        : classes["val"]
                    }
                  >
                    {item[handleNames(key, "data")]}
                  </p>
                ))}

                <p
                  key={index}
                  className={
                    index < 3
                      ? classes[handleNames(item, "class")]
                      : classes["val"]
                  }
                >
                  {item}
                </p>

                {/* <p className={classes["from-country"]}> {item?.from_country}</p>
                <p className={classes["from-location"]}>
                  {item?.from_location}
                </p>
                <p className={classes["to-country"]}>{item?.to_country}</p>
                <p className={classes["to-location"]}>{item?.to_location}</p>
                <p className={classes["type"]}>{item?.type}</p>
                <p className={classes["mode"]}>{item?.mode}</p>
                <p className={classes["total"]}>{item?.total_volume}</p>
                <p className={classes["unit"]}>{item?.unit}</p>
 */}
                <div
                  onClick={() => {
                    changeTableItem([], "delete", index);
                  }}
                  className={classes["delete"]}
                >
                  Delete
                </div>
              </div>
            )
          )}
        {showComponent.state &&
          !showComponent.index &&
          showComponent.index !== 0 && (
            <AddItem
              toggleShowComponent={toggleShowComponent}
              applyChanges={changeTableItem}
            />
          )}
      </div>
      <div className={classes["add-btn"]}>
        <AddNewButton buttonClickHandler={toggleShowComponent} />
      </div>

      {/* <div className={classes["body"]}>
        <div className={classes["row"]}>
          {headerItems.map((item, index) => (
            <p
              key={index}
              className={
                index < 3 ? classes[handleClassName(item)] : classes["val"]
              }
            >
              {item}
            </p>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default AIRTable;
