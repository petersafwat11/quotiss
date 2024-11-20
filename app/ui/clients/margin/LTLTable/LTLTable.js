"use client";
import React, { useState } from "react";
import classes from "./table.module.css";
import { baseValues, LTLOptions } from "../options";
import AddNewButton from "@/app/ui/addNewButton-2/AddNewButton";
import AddItem from "./addItem/AddItem";
import CircleCheckbox from "@/app/ui/circleCheckbox/CircleChexbox";

const LTLTable = ({ data, dispatchDetail }) => {
  const headerItems = [...LTLOptions];
  const handleNames = (str, type) => {
    if (typeof str === "string") {
      const className =
        type === "class"
          ? str.toLowerCase().replace(/\s+/g, "-")
          : str.toLowerCase().replace(/\s+/g, "_");
      return className;
    }
    if (Array.isArray(str)) {
      // Handle array case
      return `${str.length} selected`;
    }

    return str;
  };
  const changeTableItem = (itemData, type, index) => {
    if (type === "create") {
      dispatchDetail({
        type: "margins".toUpperCase(),
        value: { ...data, LTL: [...data.LTL, itemData] },
      });
      toggleShowComponent();
    } else if (type === "delete") {
      const updatedArray = data?.LTL?.filter((_, indx) => indx !== index);
      dispatchDetail({
        type: "margins".toUpperCase(),
        value: { ...data, LTL: updatedArray },
      });
    } else {
      const updatedArray = [...data.LTL];
      updatedArray[index] = itemData;

      dispatchDetail({
        type: "margins".toUpperCase(),
        value: { ...data, LTL: updatedArray },
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
              index < 7 ? classes[handleNames(item, "class")] : classes["val"]
            }
          >
            {item}
          </p>
        ))}
      </div>
      <div className={classes["body"]}>
        {data?.LTL?.length > 0 &&
          data?.LTL?.map((item, index) =>
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
                        idx < 7
                          ? classes[handleNames(name, "class")]
                          : classes["val"]
                      }
                    >
                      {["Postal Code Min", "Postal Code Max"].includes(name)
                        ? idx === 2 || idx === 1
                          ? item[handleNames(`${name} o`, "data")]
                          : item[handleNames(`${name} d`, "data")]
                        : item[handleNames(name, "data")]}
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

export default LTLTable;
