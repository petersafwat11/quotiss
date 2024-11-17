"use client";
import React, { useState } from "react";
import classes from "./table.module.css";
import AddPotential from "./addFreight/AddFreight";
import AddNewButton from "@/app/ui/addNewButton-2/AddNewButton";

const AIRfreight = ({ data, dispatchDetail }) => {
  const changeTableItem = (itemData, type, index) => {
    if (type === "create") {
      dispatchDetail({
        type: "potentials".toUpperCase(),
        value: [...data, itemData],
        value: {...data,},
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
        <p className={classes["service"]}>service</p>
        <p className={classes["local-charge"]}>Local Charge</p>
        <p className={classes["shipment"]}>Shipment</p>
        <p className={classes["currency"]}>Currency</p>
      </div>
      <div className={classes["body"]}>
        {data?.length > 0 &&
          data?.map((item, index) =>
            showComponent.state && showComponent.index === index ? (
              <AddPotential
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
                <p className={classes["from-country"]}> {item?.from_country}</p>
                <p className={classes["from-location"]}>
                  {" "}
                  {item?.from_location}
                </p>
                <p className={classes["to-country"]}>{item?.to_country}</p>
                <p className={classes["to-location"]}>{item?.to_location}</p>
                <p className={classes["type"]}>{item?.type}</p>
                <p className={classes["mode"]}>{item?.mode}</p>
                <p className={classes["total"]}>{item?.total_volume}</p>
                <p className={classes["unit"]}>{item?.unit}</p>

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
            <AddPotential
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

export default AIRfreight;
