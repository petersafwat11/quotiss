"use client";
import React, { useEffect, useState } from "react";
import classes from "./table.module.css";
import { FaRegComment } from "react-icons/fa";
import AddNewButton from "@/app/ui/addNewButton-2/AddNewButton";
import SelectionGroup from "@/app/ui/inputs/selectionGroup/SelectionGroup";
import InputGroup from "@/app/ui/inputs/inputGroup/InputGroup";
import { formatContainer } from "@/app/lib/formatText";
import SelectionCheckBoxGroup from "@/app/ui/inputs/selectionCheckBoxGroup/SelectionCheckBoxGroup";
import AddFreight from "./addFreight/AddFreight";

const FCLFreight = ({ data, dispatchDetail, selectedOptions }) => {
  const changeTableItem = (itemData, type, index) => {
    if (type === "create") {
      dispatchDetail({
        type: "fcl_freight".toUpperCase(),
        value: { ...data, freights: [...data?.freights, itemData] },
      });
      toggleShowComponent();
    } else if (type === "delete") {
      const updatedArray = data?.filter((_, indx) => indx !== index);
      dispatchDetail({
        type: "fcl_freight".toUpperCase(),
        value: { ...data, freights: updatedArray },
      });
    } else {
      const updatedArray = [...data];
      updatedArray[index] = itemData;

      dispatchDetail({
        type: "fcl_freight".toUpperCase(),
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
  const marginOptions = ["NET", "A +50", "B +100", "C +150", "New Margin"];
  useEffect(() => {
    const dd = data?.freights?.map((item) => item?.name);
    console.log("dd", dd);
  }, [data]);
  return (
    <div className={classes["container"]}>
      <div className={classes["top"]}>
        <div className={classes["selections"]}>
          <div className={classes["first"]}>
            <SelectionCheckBoxGroup
              options={["cc", "xx"]}
              label={
                data?.freights?.length > 0
                  ? `${data?.freights?.length}Selected`
                  : "Select"
              }
              width={"100%"}
              selectedOptions={data?.freights_selected}
              setSelectedOptions={dispatchDetail}
              stateType="useReducer"
              dataType="object"
              dataKey="freights_selected"
              objectKey="fcl_freight"
              data={data}
            />
          </div>
          <div className={classes["second"]}>
            <SelectionGroup
              noLabel={true}
              data={data}
              type={"fcl_freight"}
              dataKey={"type"}
              // label={"Please Select Language"}
              options={marginOptions}
              setData={dispatchDetail}
              dataType="object"
            />
          </div>
        </div>
        <div className={classes["inputs"]}>
          {selectedOptions?.length > 0 &&
            selectedOptions.map((item, index) => (
              <div key={index} className={classes["container-type"]}>
                <div className={classes["input-wrapper"]}>
                  <InputGroup
                    numbersOnly={true}
                    // noLabel={true}
                    label={item}
                    id={formatContainer(item)}
                    data={data}
                    dataKey={formatContainer(item)}
                    setData={dispatchDetail}
                    stateType={"useReducer"}
                    dataType="object"
                    objectType={"fcl_freight"}
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className={classes["table"]}>
        <div className={classes["header"]}>
          <p className={classes["service"]}>service</p>
          <p className={classes["local-charge"]}>Local Charge</p>
          <p className={classes["shipment"]}>Shipment</p>
          {selectedOptions.length > 0 &&
          selectedOptions.map((item, index) => (
            <p key={index} className={classes["container-type"]}>
              {item}
            </p>
          ))}

          <p className={classes["currency"]}>Currency</p>
        </div>
        <div className={classes["body"]}>
          {data?.freights?.length > 0 &&
            data?.freights?.map((item, index) =>
              showComponent.state && showComponent.index === index ? (
                <AddFreight
                  selectedOptions={selectedOptions}
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
                  <p className={classes["service"]}> {item?.service}</p>
                  <p className={classes["local-charge"]}>
                    {" "}
                    {item?.local_charge}
                  </p>
                  <p className={classes["shipment"]}>{item?.shipment}</p>
                  {selectedOptions.length > 0 &&
                  selectedOptions.map((container, index) => (
                    <p key={index} className={classes["container-type"]}>
                      {item[formatContainer(container)]}
                    </p>
                  ))}

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
        <InputGroup
          label={"Notes (internal use only):"}
          id={data?.internal_notes}
          data={data}
          dataKey={"internal_notes"}
          setData={dispatchDetail}
          stateType={"useReducer"}
          dataType="object"
          objectType={"fcl_freight"}
        />
      </div>
    </div>
  );
};

export default FCLFreight;
