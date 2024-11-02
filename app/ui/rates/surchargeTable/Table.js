"use client";
import React, { useState } from "react";
import classes from "./table.module.css";
import AddSurcharge from "./addSurcharge/AddSurcharge";
import AddNewButton from "../../addNewButton-2/AddNewButton";

const SurchargeTable = ({
  container_type,
  data,
  dispatchDetail,
  locations,
}) => {
  const changeTableItem = (itemData, type, index) => {
    if (type === "create") {
      dispatchDetail({
        type: "surcharges".toUpperCase(),
        value: [...data, itemData],
      });
      console.log("create");
      toggleShowComponent();
    } else if (type === "delete") {
      const updatedArray = data.filter((_, indx) => indx !== index);
      dispatchDetail({
        type: "surcharges".toUpperCase(),
        value: updatedArray,
      });
    } else {
      const updatedArray = [...data];
      updatedArray[index] = itemData;
      console.log("edit");

      dispatchDetail({
        type: "surcharges".toUpperCase(),
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
        <p className={classes["type"]}> Type</p>
        <p className={classes["origin-locations"]}> Origin Locations</p>
        <p className={classes["destination-locations"]}>
          Destination Locations
        </p>
        <p className={classes["margin-type"]}>Margin Type</p>
        {container_type.length > 0 &&
          container_type.map((item, index) => (
            <p key={index} className={classes["container-type"]}>
              {item}
            </p>
          ))}
        <div className={classes["space"]}></div>
      </div>

      <div className={classes["body"]}>
        {data.length > 0 &&
          data.map((item, index) =>
            showComponent.state && showComponent.index === index ? (
              <AddSurcharge
                locations={locations}
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
                <p className={classes["type"]}> {item?.type}</p>
                <p className={classes["origin-locations"]}>
                  {" "}
                  {item?.origin_locations}
                </p>
                <p className={classes["destination-locations"]}>
                  {item.destination_locations}
                </p>
                <p className={classes["margin-type"]}>{item?.margin_type} </p>
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
            <AddSurcharge
              locations={locations}
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

export default SurchargeTable;
