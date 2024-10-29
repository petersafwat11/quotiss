"use client";
import React, { useEffect, useState } from "react";
import classes from "./table.module.css";
import AddNewButton from "../../addNewButton-2/AddNewButton";
import SelectionCheckBoxGroup from "../../inputs/selectionCheckBoxGroup/SelectionCheckBoxGroup";
import StandardFilter from "../../filters/standardFilter/StandardFilter";
import CircleCheckbox from "../../circleCheckbox/CircleChexbox";
import MakeSurcharge from "./makeSurcharge/MakeSurcharge";
import { formatContainer } from "@/app/lib/formatText";

const Table = ({
  tableData,
  data,
  dispatchDetail,
  type,
  applyChanges,
  serviceFilterValue,
  setServiceFilterValue,
}) => {
  const [marginFilterValue, setMarginFilterValue] = useState([]);
  const [weightFilterValue, setWeightFilterValue] = useState("KG");
  const [showAddSurcharge, setShowAddSurcharge] = useState({
    state: false,
    index: null,
  });

  const serviceOptions = [
    "All",
    "MSC",
    "Maersk Line",
    "Hapag-Lloyd",
    "CMA CGM",
    "COSCO",
    "Evergreen",
    "OOCL",
    "Yang Ming",
    "Hamburg Süd",
    "HMM Hyundai",
    "PIL",
    "Zim",
    "Wan Hai",
    "X-Press Feeders",
    "Arkas Line",
    "Sinotrans",
    "UniFeeder",
    "Grimaldi",
    "SITC",
    "IRISL",
    "Ansheng Shipping",
    "Simatech",
    "SM Line",
    "TS Lines",
    "Zhonggu Shipping",
    "APL",
    "Other",
    "2M",
    "THE Alliance",
    "Ocean Alliance",
    "Seago Line",
  ];
  const marginOptions = [
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
  const toggleAddSurcharge = () => {
    setShowAddSurcharge({ state: !showAddSurcharge.state, index: null });
  };
  const LCLTableCols = [
    "weight",
    "measurement",
    "piece",
    "document",
    "min",
    "max",
  ];
  return (
    <div className={"sub-form"}>
      <div className={classes["filters"]}>
        <div className={classes["filter"]}>
          <p className={classes["filter-label"]}>Service</p>
          <StandardFilter
            filterValue={serviceFilterValue}
            setFilterValue={setServiceFilterValue}
            options={serviceOptions}
          />
        </div>
        <div className={classes["filter"]}>
          <p className={classes["filter-label"]}>
            {" "}
            {type === "FCL" ? "Container type" : "Weight unit"}
          </p>
          {type === "FCL" ? (
            <SelectionCheckBoxGroup
              options={marginOptions}
              label={"Select"}
              selectedOptions={marginFilterValue}
              setSelectedOptions={setMarginFilterValue}
            />
          ) : (
            <StandardFilter
              filterValue={weightFilterValue}
              setFilterValue={setWeightFilterValue}
              options={["KG", "MT"]}
            />
          )}
        </div>
      </div>

      <div className={classes["table"]}>
        <div className={classes["header"]}>
          <p className={classes["name"]}>Name</p>
          <p className={classes["surcharge_type"]}>Surcharge_type</p>

          <p className={classes["type"]}>Type</p>
          <p className={classes["online"]}>Online</p>
          <p className={classes["service"]}>Service</p>
          <p className={classes["sort_order"]}>Sort_order</p>
          <p className={classes["shipment"]}>Shipment</p>
          {type === "FCL"
            ? marginFilterValue.map((item, index) => (
                <p key={index} className={classes["container-type"]}>
                  {item}
                </p>
              ))
            : LCLTableCols.map((item, index) => (
                <p key={index} className={classes[item]}>
                  {item}
                </p>
              ))}
          <p className={classes["currency"]}>Currency</p>
          <p className={classes["space"]}></p>
        </div>
        <div className={classes["body"]}>
          {tableData.length > 0 &&
            tableData.map((item, index) => (
              <div key={index} className={classes["row"]}>
                <p className={classes["name"]}>{item.name}</p>

                <p className={classes["surcharge_type"]}>
                  {item?.surcharge_type}
                </p>
                <p className={classes["type"]}>{item?.type}</p>
                <div className={classes["online"]}>
                  <CircleCheckbox value={item?.online} />
                </div>
                {/* <p className={classes["online"]}>{item?.onl}</p> */}
                <p className={classes["service"]}>{item?.service}</p>
                <p className={classes["sort_order"]}>{item?.sort_order}</p>
                <p className={classes["shipment"]}>{item.shipment}</p>
                {type === "FCL"
                  ? marginFilterValue.map((container, index) => (
                      <p key={index} className={classes["container-type"]}>
                        {item[formatContainer(container)]}
                      </p>
                    ))
                  : LCLTableCols.map((item, index) => (
                      <p key={index} className={classes[item]}>
                        {item?.container}
                      </p>
                    ))}
                <p className={classes["currency"]}>{item.currency}</p>
                <p className={classes["delete"]}>Delete</p>
              </div>
            ))}
          {showAddSurcharge.state && !showAddSurcharge.index && (
            <MakeSurcharge
              type={type}
              selectedOptions={marginFilterValue}
              toggleAddSurcharge={toggleAddSurcharge}
              applyChanges={applyChanges}
            />
          )}
        </div>
        <div className={classes["add-btn"]}>
          <AddNewButton buttonClickHandler={toggleAddSurcharge} />
        </div>
      </div>
    </div>
  );
};

export default Table;
