"use client";

import React, { useEffect, useReducer, useState } from "react";
import classes from "./form.module.css";
import { chargesReducer, intialValue } from "./dataAndReducer";
import Surcharges from "../surcharges/Surcharges";
import TermsAndConditions from "../termsAndConditions/TermsAndConditions";
import Tabs from "../../tabs/Tabs";
import InputGroup from "../../inputs/inputGroup/InputGroup";
import SelectionGroup from "../../inputs/selectionGroup/SelectionGroup";
import ActionBtns from "../../actionBtns/ActionBtns";
import { createItem, updateItem } from "@/app/lib/formFunctions";
import { usePathname, useRouter } from "next/navigation";

const Form = ({ formData, id }) => {
  const usableData = formData?.data?.data;
  if (id !== "create") {
    // const usableData = formData?.data?.data;
    const surcharges = usableData?.surcharges.map((item) =>
      typeof item === "string" ? JSON.parse(item) : item
    );
    usableData.surcharges = surcharges;
    usableData.terms_and_conditions = {
      type: "",
      language: "",
      destination_terms_and_conditions: "",
      origin_terms_and_conditions: "",
    };
  }
  const pathname = usePathname();
  const [data, dispatchDetail] = useReducer(
    chargesReducer,
    usableData ? usableData : intialValue
  );
  const [dataType, setDataType] = useState("Surcharges");
  const options = ["Both", "Origin", "Destination", "Not Available"];
  const [type, setType] = useState("FCL");
  const router = useRouter();

  // useEffect(()=>{data?.})
  const applyChanges = async () => {
    const termsAndConditions = data.terms_and_conditions;
    const chargesData = data;
    delete chargesData.terms_and_conditions;

    if (id === "create") {
      const chargeCreated = await createItem(
        "charges",
        chargesData,
        router,
        "charges",
        "don't redirect"
      );
      const charges_id = chargeCreated?.data?.data?.data?.id;
      termsAndConditions.charges_id = charges_id;

      const terms = await createItem(
        "charges/termsAndConditions",
        termsAndConditions,
        router,
        "charges"
        // "don't redirect"
      );
      console.log("terms", terms);
      // router.push("/charges");
    } else {
      const chargeUpdated = await updateItem(
        "charges",
        data,
        router,
        id,
        "charges",
        "don't redirect"
      );
      const charges_id = chargeUpdated?.data?.data?.data?.id;
      `termsAndConditions`.charges_id = charges_id;

      const termsID = termsAndConditions?.id;
      console.log("termsID", termsID);
      if (termsID) {
        const terms = await updateItem(
          "charges/termsAndConditions",
          termsAndConditions,
          router,
          termsID,
          "charges"
        );
      } else {
        await createItem(
          "charges/termsAndConditions",
          termsAndConditions,
          router,
          "charges"
        );
      }
    }
  };

  return (
    <div>
      <div className={"form"}>
        <div className={classes["inputs"]}>
          <InputGroup
            required={true}
            id={"name"}
            label={"Name"}
            data={data.name}
            dataKey={"name"}
            setData={dispatchDetail}
            stateType={"useReducer"}
            dataType="single"
          />
          <InputGroup
            required={true}
            id={"kind"}
            label={"Kind"}
            data={data.kind}
            dataKey={"kind"}
            setData={dispatchDetail}
            stateType={"useReducer"}
            dataType="single"
          />

          <InputGroup
            required={true}
            numbersOnly={true}
            id={"code"}
            label={"Code"}
            data={data.code}
            dataKey={"code"}
            setData={dispatchDetail}
            stateType={"useReducer"}
            dataType="single"
          />
          <SelectionGroup
            required={true}
            data={data}
            type={"available_online"}
            dataKey={"available_online"}
            label={"Available Online"}
            options={options}
            setData={dispatchDetail}
            dataType="single"
          />

          <InputGroup
            required={true}
            id={"country"}
            label={"Country"}
            data={data.country}
            dataKey={"country"}
            setData={dispatchDetail}
            stateType={"useReducer"}
            dataType="single"
          />
          <InputGroup
            required={true}
            id={"region"}
            label={"Region"}
            data={data.region}
            dataKey={"region"}
            setData={dispatchDetail}
            stateType={"useReducer"}
            dataType="single"
          />
          <InputGroup
            required={true}
            numbersOnly={true}
            id={"latitude"}
            label={"Latitude"}
            data={data.latitude}
            dataKey={"latitude"}
            setData={dispatchDetail}
            stateType={"useReducer"}
            dataType="single"
          />
          <InputGroup
            required={true}
            numbersOnly={true}
            id={"longitude"}
            label={"Longitude"}
            data={data.longitude}
            dataKey={"longitude"}
            setData={dispatchDetail}
            stateType={"useReducer"}
            dataType="single"
          />
        </div>
        <div className={classes["data-types"]}>
          <div className={classes["types"]}>
            <button
              onClick={() => {
                setType("FCL");
                dispatchDetail({
                  type: "terms_and_conditions".toUpperCase(),
                  value: { ...data.terms_and_conditions, type: "FCL" },
                });
              }}
              className={classes[type === "FCL" ? "active-type" : "type"]}
            >
              FCL
            </button>
            <button
              onClick={() => {
                setType("LCL");
                dispatchDetail({
                  type: "terms_and_conditions".toUpperCase(),
                  value: { ...data.terms_and_conditions, type: "LCL" },
                });

                console.log("type", type);
              }}
              className={classes[type === "LCL" ? "active-type" : "type"]}
            >
              LCL
            </button>
          </div>
          <Tabs
            types={["Surcharges", "Terms & Conditions"]}
            setDataType={setDataType}
            dataType={dataType}
          />
        </div>

        {dataType === "Surcharges" ? (
          <Surcharges
            type={type}
            data={data.surcharges}
            dispatchDetail={dispatchDetail}
          />
        ) : (
          <TermsAndConditions
            charges_id={data?.id}
            type={type}
            data={data.terms_and_conditions}
            dispatchDetail={dispatchDetail}
          />
        )}
      </div>

      <ActionBtns applyChanges={applyChanges} />
    </div>
  );
};

export default Form;
