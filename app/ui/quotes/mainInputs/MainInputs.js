import React from "react";
import classes from "./mainInputs.module.css";
import InputGroup from "../../inputs/inputGroup/InputGroup";
import SelectionGroup from "../../inputs/selectionGroup/SelectionGroup";
import DateInput from "../../inputs/dateInput/DateInput";
import SelectionCheckBoxGroup from "../../inputs/selectionCheckBoxGroup/SelectionCheckBoxGroup";
import { containerOptions } from "@/app/utils/options";
const MainInputs = ({ data, dispatchDetail }) => {
  const options = [
    "FCL",
    "LCL",
    "AIR",
    "LTL",
    "FTL",
    "MANUAL",
    "EMAIL",
    "AIRTARIFF",
    "FCLTARIFF",
    "MULTI",
  ];
  const incotermsOptions = [
    "CFR",
    "CIF",
    "CPT",
    "CIP",
    "DPU",
    "DAP",
    "DDP",
    "EXW",
    "FCA",
    "FAS",
    "FOB",
  ];
  const weightBacketsOptions = [
    "> 45kg",
    "< 45kg",
    "> 100kg",
    "> 300kg",
    "> 500kg",
    "> 1000kg",
  ];
  const serviceCodeOptions = [
    "GEN",
    "DGR",
    "CAO",
    "FRI",
    "PER",
    "PRI",
    "VAL",
    "HUM",
    "EXP",
    "PIL",
    "ICE",
    "ELI",
    "ELM",
    "REQ",
    "AVI",
    "CUR",
    "AOG",
    "BIG",
  ];
  const directionOptions = ["IMP", "XTR", "EXP"];
  return (
    <div className={classes["inputs"]}>
      <InputGroup
        id={"quote_for_client"}
        label={"Quote #137332 for:"}
        data={data.quote_for_client}
        dataKey={"quote_for_client"}
        setData={dispatchDetail}
        stateType={"useReducer"}
        dataType="single"
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

      <SelectionGroup
        data={data}
        type={"quote_type"}
        dataKey={"quote_type"}
        label={"Please Select quote type"}
        options={options}
        setData={dispatchDetail}
        dataType={"single"}
      />
      {!["MANUAL", "EMAIL"].includes(data?.quote_type) && (
        <SelectionGroup
          data={data}
          type={"direction"}
          dataKey={"direction"}
          label={"Direction:"}
          options={directionOptions}
          setData={dispatchDetail}
          dataType={"single"}
        />
      )}
      {["FCL", "LCL", "AIR", "AIRTARIFF", "MULTI"].includes(
        data?.quote_type
      ) && (
        <SelectionGroup
          data={data}
          type={"incoterms"}
          dataKey={"incoterms"}
          label={"Incoterms:"}
          options={incotermsOptions}
          setData={dispatchDetail}
          dataType={"single"}
        />
      )}
      {["FCL", "LCL", "AIR", "MULTI"].includes(data?.quote_type) && (
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
      )}
      {data?.quote_type === "AIR" && (
        <>
          <SelectionCheckBoxGroup
            width={"100%"}
            options={serviceCodeOptions}
            label={
              data.service_code.length > 0
                ? `${data.service_code.length} Selected`
                : "Select"
            }
            selectedOptions={data.service_code}
            setSelectedOptions={dispatchDetail}
            stateType="useReducer"
            dataType="single"
            dataKey="service_code"
          />
          <InputGroup
            id={"density"}
            label={"Density (kg):"}
            data={data.density}
            dataKey={"density"}
            setData={dispatchDetail}
            stateType={"useReducer"}
            dataType="single"
          />
        </>
      )}
      {data?.quote_type === "LTL" && (
        <DateInput
          label={"Pickup Date:"}
          data={data.pickup_date}
          dataKey={"pickup_date"}
          setData={dispatchDetail}
        />
      )}

      {data?.quote_type === "AIRTARIFF" && (
        <SelectionCheckBoxGroup
          width={"100%"}
          options={weightBacketsOptions}
          label={
            data.weight_backets.length > 0
              ? `${data.weight_backets.length} Selected`
              : "Select"
          }
          selectedOptions={data.weight_backets}
          setSelectedOptions={dispatchDetail}
          stateType="useReducer"
          dataType="single"
          dataKey="weight_backets"
        />
      )}
      {["LCL", "AIR", "LTL", "FTL", "MULTI"].includes(data?.quote_type) && (
        <>
          <InputGroup
            id={"weight"}
            label={"Weight (kg):"}
            data={data.weight}
            dataKey={"weight"}
            setData={dispatchDetail}
            stateType={"useReducer"}
            dataType="single"
          />
          <InputGroup
            id={"CBM"}
            label={"CBM:"}
            data={data.CBM}
            dataKey={"CBM"}
            setData={dispatchDetail}
            stateType={"useReducer"}
            dataType="single"
          />
          <InputGroup
            id={"LDM"}
            label={"LDM:"}
            data={data.LDM}
            dataKey={"LDM"}
            setData={dispatchDetail}
            stateType={"useReducer"}
            dataType="single"
          />
          <InputGroup
            id={"PCS"}
            label={"PCS:"}
            data={data.PCS}
            dataKey={"PCS"}
            setData={dispatchDetail}
            stateType={"useReducer"}
            dataType="single"
          />
        </>
      )}
      {["FCL", "LCL", "AIR", "LTL", "FTL", "AIRTARIFF", "MULTI"].includes(
        data?.quote_type
      ) && <div></div>}
    </div>
  );
};

export default MainInputs;
