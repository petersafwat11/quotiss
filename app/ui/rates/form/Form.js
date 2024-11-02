"use client";
import React, { useReducer, useState } from "react";
import classes from "./form.module.css";
import { intialValue, ratesReducer } from "./dataAndReducer";
import Restrictions from "../restrictions/Restrictions";
import Notes from "../notes/Notes";
import MainInputs from "../mainInputs/MainInputs";
import Tabs from "../../tabs/Tabs";
import DistinationTable from "../locations/distinationTable/DistinationTable";
import SurchargeTable from "../surchargeTable/Table";
import OriginTable from "../locations/originTable/OriginTable";
import InputGroup from "../../inputs/inputGroup/InputGroup";
import ActionBtns from "../../actionBtns/ActionBtns";
import LocationsTable from "../locations/LocationsTable/LocationsTable";
import RestrictedPostalCodes from "../restrictedPostalCodes/RestrictedPostalCodes";
import PickupSurchargeTable from "../pickupSurchargeTable/PickupSurchargeTable";

const Form = () => {
  const applyChanges = () => {};

  const [data, dispatchDetail] = useReducer(ratesReducer, intialValue);
  const [dataType, setDataType] = useState("Surcharges");

  return (
    <div>
      <div className={"form"}>
        <MainInputs dispatchDetail={dispatchDetail} data={data} />
        {data?.container_type.length > 0 &&
          data?.container_type.map((item, index) => (
            <div key={index} className={classes["container-type"]}>
              <div className={classes["input-wrapper"]}>
                <InputGroup
                  numbersOnly={true}
                  noLabel={true}
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
        <Tabs
          types={
            data?.rate_type === "Linked"
              ? [
                  "Origin Locations",
                  "Destination Locations",
                  "Surcharges",
                  "Restrictions",
                  "Notes",
                ]
              : ["Locations", "Restricted Postal Codes", "Surcharges", "Notes"]
          }
          setDataType={setDataType}
          dataType={dataType}
        />
        {dataType === "Locations" ? (
          <LocationsTable
            container_type={data.container_type}
            data={data.locations}
            dispatchDetail={dispatchDetail}
          />
        ) : dataType === "Restricted Postal Codes" ? (
          <RestrictedPostalCodes
            data={data.restricted_postal_codes}
            dispatchDetail={dispatchDetail}
          />
        ) : dataType === "Origin Locations" ? (
          <OriginTable
            container_type={data.container_type}
            data={data.origin_locations}
            dispatchDetail={dispatchDetail}
          />
        ) : dataType === "Destination Locations" ? (
          <DistinationTable
            container_type={data.container_type}
            data={data.destination_locations}
            dispatchDetail={dispatchDetail}
          />
        ) : dataType === "Surcharges" ? (
          data?.rate_type === "Linked" ? (
            <SurchargeTable
              locations={{
                base_origin_location: data?.base_origin_location,
                base_destination_location: data.base_destination_location,
              }}
              container_type={data.container_type}
              data={data.surcharges}
              dispatchDetail={dispatchDetail}
            />
          ) : (
            <PickupSurchargeTable
              container_type={data.container_type}
              data={data.surcharges}
              dispatchDetail={dispatchDetail}
            />
          )
        ) : dataType === "Restrictions" ? (
          <Restrictions
            data={data.restrictions}
            dispatchDetail={dispatchDetail}
          />
        ) : (
          <Notes data={data.notes} dispatchDetail={dispatchDetail} />
        )}
      </div>
      <ActionBtns applyChanges={applyChanges} />
    </div>
  );
};

export default Form;
