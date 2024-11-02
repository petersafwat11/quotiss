import React from "react";
import classes from "./mainInputs.module.css";
import InputGroup from "../../inputs/inputGroup/InputGroup";
import SelectionGroup from "../../inputs/selectionGroup/SelectionGroup";
import DateInput from "../../inputs/dateInput/DateInput";
import CheckboxGroup from "../../inputs/checkboxGroup/CheckboxGroup";
import ContainerTypeFilter from "../../filters/containerTypeFilter/ContainerTypeFilter";
import SelectionCheckBoxGroup from "../../inputs/selectionCheckBoxGroup/SelectionCheckBoxGroup";
import { currencies } from "@/app/utils/options";

import { formatContainer } from "@/app/lib/formatText";
const MainInputs = ({ container_type, data, dispatchDetail }) => {
  const options = [
    "Linked",
    // "Flat",
    "Pick up Delivery (by zipcode)",
    "Pick up Delivery (by distance)",
  ];
  const servicesOptions = [
    "ECU Worldwide",
    "Sun Star",
    "Shenzhen Smile",
    "World jaguar",
    "Own Service Rail",
    "Trans China",
    "RAILGATE",
    "Multiwell",
    "Trans Hope",
    "RZDL Trans Siberian LandBridge",
    "RAil",
    "Loconi",
    "Nordicon rail",
    "Carrier Of Choice_rail",
    "Camel Alliance",
  ];
  const containerOptions = [
    "20' DC",
    "40' DC",
    "40' HC",
    "45' HC",
    "20' NOR",
    "40' NOR",
    "20' REEF",
    "40' HREEF",
    "45' PLWD",
    "20' OT",
    "40' OT",
    "20' FR",
    "40' FR",
    "20' TANK",
    "40' TANK",
  ];

  return (
    <div className={classes["inputs"]}>
      <InputGroup
        required={true}
        id={"name"}
        label={"Organization name"}
        data={data.name}
        dataKey={"name"}
        setData={dispatchDetail}
        stateType={"useReducer"}
        dataType="single"
      />
      <InputGroup
        numbersOnly={true}
        id={"contract_number"}
        label={"Contract Number"}
        data={data.contract_number}
        dataKey={"contract_number"}
        setData={dispatchDetail}
        stateType={"useReducer"}
        dataType="single"
      />

      <SelectionGroup
        required={true}
        data={data}
        type={"service"}
        dataKey={"service"}
        label={"Select Service"}
        options={servicesOptions}
        setData={dispatchDetail}
        dataType={"single"}
      />
      <SelectionGroup
        data={data}
        type={"rate_type"}
        dataKey={"rate_type"}
        label={"rate type"}
        options={options}
        setData={dispatchDetail}
        dataType={"single"}
      />
      <DateInput
        required={true}
        label={"Validity Start"}
        data={data.validity_start}
        dataKey={"validity_start"}
        setData={dispatchDetail}
      />
      <DateInput
        required={true}
        label={"Validity End"}
        data={data.validity_end}
        dataKey={"validity_end"}
        setData={dispatchDetail}
      />
      <div className={classes["input-group"]}>
        <label className={classes["label"]}>
          Container type <span className={classes["required"]}>*</span>{" "}
        </label>
        <SelectionCheckBoxGroup
          width={"100%"}
          options={containerOptions}
          label={
            data.container_type.length > 0
              ? `${data.container_type.length} Selected`
              : "Select"
          }
          selectedOptions={data.container_type}
          setSelectedOptions={dispatchDetail}
          stateType="useReducer"
          dataType="single"
          dataKey="container_type"
        />
      </div>

      {/* conditional */}
      {data.rate_type === "Linked" && (
        <>
          <InputGroup
            required={true}
            id={"base_origin_location"}
            label={"Base Origin Location "}
            data={data.base_origin_location}
            dataKey={"base_origin_location"}
            setData={dispatchDetail}
            stateType={"useReducer"}
            dataType="single"
          />
          <InputGroup
            required={true}
            id={"base_destination_location"}
            label={"Base Destination Location "}
            data={data.base_destination_location}
            dataKey={"base_destination_location"}
            setData={dispatchDetail}
            stateType={"useReducer"}
            dataType="single"
          />
        </>
      )}
      {data.rate_type === "Flat" && (
        <>
          <InputGroup
            id={"pickup_delivery_rate"}
            label={"Pickup-Delivery Rate "}
            data={data.pickup_delivery_rate}
            dataKey={"pickup_delivery_rate"}
            setData={dispatchDetail}
            stateType={"useReducer"}
            dataType="single"
          />
        </>
      )}
      {(data.rate_type !== "Flat") & (data.rate_type !== "Linked") && (
        <>
          <InputGroup
            disabled={true}
            id={"terminal_type"}
            label={"Terminal type "}
            data={data.terminal_type}
            dataKey={"terminal_type"}
            setData={dispatchDetail}
            stateType={"useReducer"}
            dataType="single"
          />
          <InputGroup
            id={"direction"}
            label={"Direction "}
            data={data.direction}
            dataKey={"direction"}
            setData={dispatchDetail}
            stateType={"useReducer"}
            dataType="single"
          />
          <SelectionGroup
            data={data}
            type={"currency"}
            dataKey={"currency"}
            label={"currency"}
            options={currencies}
            setData={dispatchDetail}
            dataType={"single"}
          />
          <InputGroup
            id={"mark_up"}
            label={"Markup (%) "}
            data={data.mark_up}
            dataKey={"mark_up"}
            setData={dispatchDetail}
            stateType={"useReducer"}
            dataType="single"
          />
          <div className={classes["checkbox"]}>
            <CheckboxGroup
              data={data}
              type={"online"}
              dataKey={"online"}
              label={"Online"}
              setData={dispatchDetail}
              dataType="single"
            />
          </div>
        </>
      )}
      {data?.container_type.length > 0 &&
        data?.container_type.map((item, index) => (
          <div key={index} className={classes["container-type"]}>
            <div className={classes["input-wrapper"]}>
              <InputGroup
                numbersOnly={true}
                // noLabel={true}
                label={item}
                id={formatContainer(item)}
                data={data[formatContainer(item)]}
                dataKey={formatContainer(item)}
                setData={dispatchDetail}
                stateType={"useReducer"}
                dataType="single"
              />
            </div>
          </div>
        ))}
    </div>
  );
};

export default MainInputs;
