"use client";
import React, { useEffect, useReducer, useState } from "react";
import classes from "./form.module.css";
import { intialValue, ratesReducer } from "./dataAndReducer";
import Restrictions from "../restrictions/Restrictions";
import Notes from "../notes/Notes";
import MainInputs from "../mainInputs/MainInputs";
import Tabs from "../../tabs/Tabs";
import DistinationTable from "../locations/distinationTable/DistinationTable";
import SurchargeTable from "../surchargeTable/Table";
import OriginTable from "../locations/originTable/OriginTable";
import LocationsTable from "../locations/LocationsTable/LocationsTable";
import RestrictedPostalCodes from "../restrictedPostalCodes/RestrictedPostalCodes";
import PickupSurchargeTable from "../pickupSurchargeTable/pickupSurchargeTable";
import ActionBtns from "../../actionBtns-2/ActionBtns";
import { formatContainer } from "@/app/lib/formatText";
import { createItem } from "@/app/lib/formFunctions";
import { useRouter } from "next/navigation";

const Form = () => {
  useEffect(()=>{},[])
  // const applyChanges = async () => {
  //   if (id === "create") {
  //     await createItem("margins", data, router);
  //   } else {
  //     await updateItem("margins", data, router, id);
  //   }
  // };
  const router = useRouter();
  const applyChanges = async (type) => {
    const ratesData = { ...data, status: "publish" };
    console.log("ratesData", ratesData);
    type === "create" ? await createItem("rates", ratesData, router) : "";
  };
  const deleteItem = () => {};
  const [created, setCreated] = useState(false);
  const [data, dispatchDetail] = useReducer(ratesReducer, intialValue);
  const [dataType, setDataType] = useState("Surcharges");

  return (
    <div>
      <div className={"form"}>
        <MainInputs
          container_type={data?.container_type}
          dispatchDetail={dispatchDetail}
          data={data}
        />

        {created && (
          <div>
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
                  : [
                      "Locations",
                      "Restricted Postal Codes",
                      "Surcharges",
                      "Notes",
                    ]
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
        )}
      </div>
      <div className={classes["create"]}>
        <button
          onClick={() => {
            applyChanges("create");
          }}
          className={classes["create-btn"]}
        >
          Apply
        </button>
      </div>
      {created && (
        <ActionBtns applyChanges={applyChanges} deleteHandler={deleteHandler} />
      )}
    </div>
  );
};

export default Form;
