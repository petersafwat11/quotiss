"use client";
import React, { useState } from "react";
import classes from "./table.module.css";
import AddNewButton from "@/app/ui/addNewButton-2/AddNewButton";
import { FaRegComment } from "react-icons/fa";
import AddRestriction from "./addRestriction/AddRestriction";

const RestrictedPostalCodes = ({ data, dispatchDetail }) => {
  const changeTableItem = (itemData, type, index) => {
    if (type === "create") {
      dispatchDetail({
        type: "restricted_postal_codes".toUpperCase(),
        value: [...data, itemData],
      });
      toggleShowComponent();
    } else if (type === "delete") {
      const updatedArray = data.filter((_, indx) => indx !== index);
      dispatchDetail({
        type: "restricted_postal_codes".toUpperCase(),
        value: updatedArray,
      });
    } else {
      const updatedArray = [...data];
      updatedArray[index] = itemData;
      dispatchDetail({
        type: "restricted_postal_codes".toUpperCase(),
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
        <p className={classes["min"]}>Postal Code Min </p>
        <p className={classes["max"]}> Postal Code Max </p>
        <p className={classes["comment"]}>Comment </p>
      </div>
      <div className={classes["space"]}></div>

      <div className={classes["body"]}>
        {data.length > 0 &&
          data.map((item, index) =>
            showComponent.state && showComponent.index === index ? (
              <AddRestriction
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
                <p className={classes["min"]}> {item?.postal_code_min}</p>
                <p className={classes["max"]}> {item?.postal_code_max}</p>
                <div className={classes["comment"]}>
                  <FaRegComment className={classes["comment-icon"]} />
                </div>
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
            <AddRestriction
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

export default RestrictedPostalCodes;
