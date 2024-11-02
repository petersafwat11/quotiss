"use client";
import React, { useState } from "react";
import classes from "./table.module.css";
import AddNewButton from "@/app/ui/addNewButton-2/AddNewButton";
import AddLocation from "../addLocation/AddLocation";
import { FaRegComment } from "react-icons/fa";

const LocationsTable = ({ container_type, data, dispatchDetail }) => {
  const changeTableItem = (itemData, type, index) => {
    if (type === "create") {
      dispatchDetail({
        type: "destination_locations".toUpperCase(),
        value: [...data, itemData],
      });
      console.log("create");
      toggleShowComponent();
    } else if (type === "delete") {
      const updatedArray = data.filter((_, indx) => indx !== index);
      dispatchDetail({
        type: "destination_locations".toUpperCase(),
        value: updatedArray,
      });
    } else {
      const updatedArray = [...data];
      updatedArray[index] = itemData;
      console.log("edit");

      console.log("updatedArray", updatedArray);
      dispatchDetail({
        type: "destination_locations".toUpperCase(),
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
        <p className={classes["country"]}> Country</p>
        <p className={classes["min"]}> Postal Code Min</p>
        <p className={classes["max"]}>Postal Code Max </p>
        <p className={classes["pickup"]}>Pickup / Delivery </p>
        {container_type.length > 0 &&
          container_type.map((item, index) => (
            <p key={index} className={classes["container-type"]}>
              {item}
            </p>
          ))}
      </div>
      <div className={classes["space"]}></div>

      <div className={classes["body"]}>
        {data.length > 0 &&
          data.map((item, index) =>
            showComponent.state && showComponent.index === index ? (
              <AddLocation
                itemData={item}
                key={index}
                toggleShowComponent={toggleShowComponent}
                applyChanges={changeTableItem}
                index={index}
                selectedOptions={container_type}
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
                <p className={classes["country"]}> {item?.country}</p>
                <p className={classes["min"]}> {item?.postal_code_min}</p>
                <p className={classes["max"]}>{item.postal_code_max} </p>
                <div className={classes["pickup"]}>{item.pickup} </div>
                <div className={classes["comment"]}>
                  <FaRegComment className={classes["comment-icon"]} />
                </div>

                {container_type.length > 0 &&
                  container_type.map((container, index) => (
                    <p key={index} className={classes["container-type"]}>
                      {item[container]}
                    </p>
                  ))}

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
            <AddLocation
              selectedOptions={container_type}
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

export default LocationsTable;
