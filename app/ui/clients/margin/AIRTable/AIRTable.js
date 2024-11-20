"use client";
import React, { useState } from "react";
import classes from "./table.module.css";
import { baseValues, AIROptions } from "../options";
import AddNewButton from "@/app/ui/addNewButton-2/AddNewButton";
import AddItem from "./addItem/AddItem";
import CircleCheckbox from "@/app/ui/circleCheckbox/CircleChexbox";

const AIRTable = ({ data, dispatchDetail }) => {
  const headerItems = [...baseValues, ...AIROptions];
  const handleNames = (str, type) => {
    if (typeof str === "string") {
      const className =
        type === "class"
          ? str.toLowerCase().replace(/\s+/g, "-")
          : str.toLowerCase().replace(/\s+/g, "_");
      return className;
    }
    return str;
  };
  const changeTableItem = (itemData, type, index) => {
    if (type === "create") {
      dispatchDetail({
        type: "margins".toUpperCase(),
        value: { ...data, air: [...data.air, itemData] },
      });
      toggleShowComponent();
    } else if (type === "delete") {
      const updatedArray = data?.air?.filter((_, indx) => indx !== index);
      dispatchDetail({
        type: "margins".toUpperCase(),
        value: { ...data, air: updatedArray },
      });
    } else {
      const updatedArray = [...data.air];
      updatedArray[index] = itemData;

      dispatchDetail({
        type: "margins".toUpperCase(),
        value: { ...data, air: updatedArray },
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
        {data?.air?.length > 0 &&
          data?.air?.map((item, index) =>
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
                {headerItems.map((name, idx) =>
                  name === "Active" ? (
                    <div key={idx} className={classes["val"]}>
                      <CircleCheckbox value={item?.active} />
                    </div>
                  ) : name === "Service" ? (
                    <p
                      key={`${index}-${idx}`}
                      className={
                        idx < 3
                          ? classes[handleNames(name, "class")]
                          : classes["val"]
                      }
                    >
                      {item?.service?.length > 0
                        ? `${item?.service?.length} Selected`
                        : `0 Selected`}
                    </p>
                  ) : (
                    <p
                      key={`${index}-${idx}`}
                      className={
                        idx < 3
                          ? classes[handleNames(name, "class")]
                          : classes["val"]
                      }
                    >
                      {item[handleNames(name, "data")]}
                    </p>
                  )
                )}

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
    </div>
  );
};

export default AIRTable;
