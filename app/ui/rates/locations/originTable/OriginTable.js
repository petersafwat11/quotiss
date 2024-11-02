"use client";
import React, { useState } from "react";
import classes from "./table.module.css";
import AddNewButton from "@/app/ui/addNewButton-2/AddNewButton";
import AddLocation from "../addLocation/AddLocation";
import { FaRegComment } from "react-icons/fa";
const OriginTable = ({ container_type, data, dispatchDetail }) => {
  const changeTableItem = (newData, type, index) => {
    if (type === "create") {
      dispatchDetail({
        type: "origin_locations".toUpperCase(),
        value: [...data, newData],
      });
      toggleShowComponent();
    } else if ((type = "delete")) {
      const updatedArray = data.filter((_, indx) => indx !== index);
      dispatchDetail({
        type: "destination_locations".toUpperCase(),
        value: updatedArray,
      });
    } else {
      const updatedArray = [...data];
      updatedArray[index] = newData;
      dispatchDetail({
        type: "origin_locations".toUpperCase(),
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
        <p className={classes["name"]}> Name</p>
        <p className={classes["country"]}> Country</p>
        <p className={classes["price-based-on"]}>Price Based On </p>
        <p className={classes["comment"]}>Comment </p>
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
                <p className={classes["name"]}> {item?.name}</p>
                <p className={classes["country"]}> {item?.country}</p>
                <p className={classes["price-based-on"]}>
                  {item.price_based_on}{" "}
                </p>
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

export default OriginTable;
