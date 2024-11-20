import { useReducer, useState } from "react";
import { intialValue, locationReducer } from "./dataAndReducer";
import classes from "./addItem.module.css";
import InputGroup from "@/app/ui/inputs/inputGroup/InputGroup";
import SelectionGroup from "@/app/ui/inputs/selectionGroup/SelectionGroup";
import { countryList } from "@/app/utils/countryList";
import { baseValues, FCLOptions, servicesOptions } from "../../options";
import SelectionCheckBoxGroup from "@/app/ui/inputs/selectionCheckBoxGroup/SelectionCheckBoxGroup";
import CheckboxGroup from "@/app/ui/inputs/checkboxGroup/CheckboxGroup";
import AddItemActionBtns from "@/app/ui/addItemActions/AddItemActionBtns";

const AddItem = ({ toggleShowComponent, applyChanges, itemData, index }) => {
  const headerItems = [...baseValues, ...FCLOptions];
  const handleNames = (str, type) => {
    const className =
      type === "class"
        ? str.toLowerCase().replace(/\s+/g, "-")
        : str.toLowerCase().replace(/\s+/g, "_");
    return className;
  };

  const [data, dispatchDetail] = useReducer(
    locationReducer,
    itemData ? itemData : intialValue
  );
  const countriesOptions = countryList.map((item) => item.country);
  const typeOptions = ["percent", "val"];
  return (
    <div className={classes["form"]}>
      {headerItems.map((item, index) => (
        <div
          key={index}
          className={
            index < 3 ? classes[handleNames(item, "class")] : classes["val"]
          }
        >
          <div className={classes["input-wrapper"]}>
            {["Type", "Origin Country", "Destination Country"].includes(
              item
            ) ? (
              <SelectionGroup
                noLabel={true}
                data={data}
                type={handleNames(item, "data")}
                dataKey={handleNames(item, "data")}
                label={item.split(" ")[0]}
                options={item === "Type" ? typeOptions : countriesOptions}
                setData={dispatchDetail}
                dataType={"single"}
              />
            ) : item === "Service" ? (
              <SelectionCheckBoxGroup
                width={"100%"}
                options={servicesOptions}
                label={
                  data[handleNames(item, "data")]?.length > 0
                    ? `${data[handleNames(item, "data")].length} Selected`
                    : "Select"
                }
                selectedOptions={data[handleNames(item, "data")]}
                setSelectedOptions={dispatchDetail}
                stateType="useReducer"
                dataType="single"
                dataKey={handleNames(item, "data")}
              />
            ) : item === "Active" ? (
              <CheckboxGroup
                data={data}
                type={"active"}
                dataKey={"active"}
                setData={dispatchDetail}
                dataType="single"
              />
            ) : (
              <InputGroup
                noLabel={true}
                id={handleNames(item, "data")}
                data={data[handleNames(item, "data")]}
                dataKey={handleNames(item, "data")}
                setData={dispatchDetail}
                stateType={"useReducer"}
                dataType="single"
              />
            )}
          </div>
        </div>
      ))}
      <AddItemActionBtns
        toggleShowComponent={toggleShowComponent}
        applyChanges={applyChanges}
        index={index}
        data={data}
      />
    </div>
  );
};

export default AddItem;
