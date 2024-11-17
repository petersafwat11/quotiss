"use client";
import React, { useState } from "react";
import classes from "./table.module.css";
import AddPotential from "./addFreight/AddFreight";
import AddNewButton from "@/app/ui/addNewButton-2/AddNewButton";
import RichText from "@/app/ui/inputs/richTextGroup/RichTextGroup";
import InputGroup from "@/app/ui/inputs/inputGroup/InputGroup";
import AddFreight from "./addFreight/AddFreight";
import { FaRegComment } from "react-icons/fa";

const FTLfreight = ({ data, dispatchDetail, selectedOptions }) => {
  const changeTableItem = (itemData, type, index) => {
    if (type === "create") {
      dispatchDetail({
        type: "ftl_freight".toUpperCase(),
        value: { ...data, freights: [...data?.freights, itemData] },
      });
      toggleShowComponent();
    } else if (type === "delete") {
      const updatedArray = data?.filter((_, indx) => indx !== index);
      dispatchDetail({
        type: "ftl_freight".toUpperCase(),
        value: { ...data, freights: updatedArray },
      });
    } else {
      const updatedArray = [...data];
      updatedArray[index] = itemData;

      dispatchDetail({
        type: "ftl_freight".toUpperCase(),
        value: { ...data, freights: updatedArray },
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
    <div className={classes["container"]}>
      <div className={classes["table"]}>
        <div className={classes["header"]}>
          <p className={classes["name"]}>Name</p>
          <p className={classes["service"]}>service</p>
          <p className={classes["start"]}>Validity Start</p>
          <p className={classes["end"]}>Validity End</p>
          <p className={classes["shipment"]}>Shipment</p>
          <p className={classes["currency"]}>Currency</p>
        </div>
        <div className={classes["body"]}>
          {data?.freights?.length > 0 &&
            data?.freights?.map((item, index) =>
              showComponent.state && showComponent.index === index ? (
                <AddFreight
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
                  <p className={classes["name"]}> {item?.name}</p>
                  <p className={classes["service"]}> {item?.service}</p>
                  <p className={classes["shipment"]}>{item?.shipment}</p>
                  <p className={classes["start"]}>{item?.validity_start}</p>
                  <p className={classes["end"]}>{item?.validity_end}</p>
                  <p className={classes["currency"]}>{item?.currency}</p>
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
              <AddFreight
                selectedOptions={selectedOptions}
                toggleShowComponent={toggleShowComponent}
                applyChanges={changeTableItem}
              />
            )}
        </div>
        <div className={classes["add-btn"]}>
          <AddNewButton buttonClickHandler={toggleShowComponent} />
        </div>
      </div>
      <div className={classes["bottom"]}>
        <div className={classes["input-group"]}>
          <p className={classes["label"]}>Comment (visible on the offer)</p>
          <RichText
            data={data}
            dataKey={"comment_offer"}
            type={"ftl_freight"}
            setData={dispatchDetail}
            dataType={"object"}
          />
          <InputGroup
            label={"Notes (internal use only):"}
            id={data?.internal_notes}
            data={data}
            dataKey={"internal_notes"}
            setData={dispatchDetail}
            stateType={"useReducer"}
            dataType="object"
            objectType={"ftl_freight"}
          />
        </div>
      </div>
    </div>
  );
};

export default FTLfreight;
