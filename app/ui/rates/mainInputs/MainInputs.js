import React from "react";
import classes from "./mainInputs.module.css";
import InputGroup from "../../inputs/inputGroup/InputGroup";
import SelectionGroup from "../../inputs/selectionGroup/SelectionGroup";
import DateInput from "../../inputs/dateInput/DateInput";
import CheckboxGroup from "../../inputs/checkboxGroup/CheckboxGroup";
import ContainerTypeFilter from "../../filters/containerTypeFilter/ContainerTypeFilter";
const MainInputs = ({ data, dispatchDetail }) => {
  const options = [
    "Linked",
    "Flat",
    "Pick up Delivery (by zipcode)",
    "Pick up Delivery (by distance)",
  ];
  return (
    <div className={classes["inputs"]}>
      <InputGroup
        id={"name"}
        label={"Organization name"}
        data={data.name}
        dataKey={"name"}
        setData={dispatchDetail}
        stateType={"useReducer"}
        dataType="single"
      />
      <InputGroup
        id={"contract_number"}
        label={"Contract Number"}
        data={data.contract_number}
        dataKey={"contract_number"}
        setData={dispatchDetail}
        stateType={"useReducer"}
        dataType="single"
      />
      <InputGroup
        id={"service"}
        label={"Service"}
        data={data.service}
        dataKey={"service"}
        setData={dispatchDetail}
        stateType={"useReducer"}
        dataType="single"
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
        label={"Validity Start"}
        data={data.validity_start}
        dataKey={"validity_start"}
        setData={dispatchDetail}
      />
      <DateInput
        label={"Validity End"}
        data={data.validity_end}
        dataKey={"validity_end"}
        setData={dispatchDetail}
      />
      <ContainerTypeFilter
        filterValue={data.container_type}
        setFilterValue={dispatchDetail}
        type={"single"}
        dataKey={"container_type"}
      />
      {/* conditional */}
      {data.rate_type === "Linked" && (
        <>
          <InputGroup
            id={"base_origin_location"}
            label={"Base Origin Location "}
            data={data.base_origin_location}
            dataKey={"base_origin_location"}
            setData={dispatchDetail}
            stateType={"useReducer"}
            dataType="single"
          />
          <InputGroup
            id={"base_origin_destination"}
            label={"Base Destination Location "}
            data={data.base_origin_destination}
            dataKey={"base_origin_destination"}
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
          <InputGroup
            id={"currency"}
            label={"Currency "}
            data={data.currency}
            dataKey={"currency"}
            setData={dispatchDetail}
            stateType={"useReducer"}
            dataType="single"
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
    </div>
  );
};

export default MainInputs;
