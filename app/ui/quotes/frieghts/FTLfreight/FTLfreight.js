"use client";
import React, { useEffect, useState } from "react";
import classes from "./table.module.css";
import AddNewButton from "@/app/ui/addNewButton-2/AddNewButton";
import CircleCheckbox from "@/app/ui/circleCheckbox/CircleChexbox";
import AddFreight from "./addFreight/AddFreight";
import { FTLOptions } from "../options";
import InputGroup from "@/app/ui/inputs/inputGroup/InputGroup";
import { changeTimeFormat } from "../utils";
import { handleNames } from "@/app/lib/handleNames";
import { FaRegComment } from "react-icons/fa";
import RichText from "@/app/ui/inputs/richTextGroup/RichTextGroup";

const FTLfreight = ({ data, dispatchDetail }) => {
  useEffect(() => {
    console.log("data", data);
  }, [data]);
  const headerItems = [...FTLOptions];
  const changeTableItem = (itemData, type, index) => {
    if (type === "create") {
      dispatchDetail({
        type: "ftl_freight".toUpperCase(),
        value: { ...data, freights: [...data?.freights, itemData] },
      });
      toggleShowComponent();
    } else if (type === "delete") {
      const updatedArray = data?.freights?.filter((_, indx) => indx !== index);
      dispatchDetail({
        type: "ftl_freight".toUpperCase(),
        value: { ...data, freights: updatedArray },
      });
    } else {
      const updatedArray = [...data?.freights];
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
          <p className={classes["space"]}></p>
          {headerItems.map((item, index) => (
            <p key={index} className={classes[handleNames(item, "class")]}>
              {item}
            </p>
          ))}
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
                  <CircleCheckbox value={item?.checked} />

                  {headerItems.map((name, idx) =>
                    name === "Validity Start" || name === "Validity End" ? (
                      <div
                        key={idx}
                        className={classes[handleNames(name, "class")]}
                      >
                        {/* {item[handleNames(name, "data")]} */}
                        {changeTimeFormat(item[handleNames(name, "data")])}
                      </div>
                    ) : (
                      <p
                        key={`${index}-${idx}`}
                        className={classes[handleNames(name, "class")]}
                      >
                        {item[handleNames(name, "data")]}
                      </p>
                    )
                  )}
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
        <div className={classes["rich-text"]}>
          <p className={classes["label"]}>Comment (visible on the offer)</p>
          <RichText
            data={data}
            dataKey={"comment_offer"}
            type={"ftl_freight"}
            setData={dispatchDetail}
            dataType={"object"}
          />
        </div>

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
  );
};

export default FTLfreight;
