"use client";
import React, { useEffect, useState } from "react";
import classes from "./page.module.css";
import Title from "../ui/title/Title";
import Search from "../ui/search/Search";
import Table from "../ui/rates/table/Table";
import StandardFilter from "../ui/filters/standardFilter/StandardFilter";
import TypesFilter from "../ui/filters/typesFilter/TypesFilter";
import SelectionCheckBoxGroup from "../ui/inputs/selectionCheckBoxGroup/SelectionCheckBoxGroup";
import axios from "axios";
import CheckBoxFilter from "../ui/checkboxFilter/CheckBoxFilter";
const Wrapper = ({ data, rows, search, page }) => {
  const [typesFilterValue, setTypesFilterValue] = useState({
    name: "ALL",
    type: "",
  });
  const [contractsFilterValue, setContractsFilterValue] = useState("Contracts");

  const [selectedOptions, setSelectedOptions] = useState([]);
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
  const usableData = data?.data?.data;
  const [tableData, setTableData] = useState(usableData ? usableData : []);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axios.get(`${process.env.BACKEND_SERVER}/rates`, {
          params: {
            page: page,
            limit: rows,
            searchValue: search ? search : null,
            or: search
              ? [
                  "status",
                  "name",
                  "service",
                  "base_origin_location",
                  "base_destination_location",
                  // "validity_start",
                  // "validity_end",
                ]
              : null,
          },
        });
        setTableData(data?.data?.data?.data);
      } catch (err) {
        console.log("err", err);
      }
    };
    getData();
  }, [rows, search,page]);

  return (
    <div>
      <div className={classes["top"]}>
        <div className={classes["first"]}>
          <Title title={"Rates"} />
          <div className={classes["filters-desktop"]}>
            <StandardFilter
              filterValue={contractsFilterValue}
              setFilterValue={setContractsFilterValue}
              options={["Contracts", "Spot Rates"]}
            />
            <TypesFilter
              filterValue={typesFilterValue}
              setFilterValue={setTypesFilterValue}
            />
            <SelectionCheckBoxGroup
              options={marginOptions}
              label={"Select"}
              selectedOptions={selectedOptions}
              setSelectedOptions={setSelectedOptions}
            />
            <CheckBoxFilter title={"Show valid only"} />
          </div>
        </div>
        <div className={classes["second"]}>
          <div className={classes["search"]}>
            <Search />
          </div>
        </div>
      </div>
      <div className={classes["filters-mobile"]}>
        <StandardFilter
          filterValue={contractsFilterValue}
          setFilterValue={setContractsFilterValue}
          options={["Contracts", "Spot Rates"]}
        />
        <TypesFilter
          filterValue={typesFilterValue}
          setFilterValue={setTypesFilterValue}
        />
        <SelectionCheckBoxGroup
          options={marginOptions}
          label={"Select"}
          selectedOptions={selectedOptions}
          setSelectedOptions={setSelectedOptions}
        />
        <CheckBoxFilter title={"Show valid only"} />
      </div>
      <Table tableData={tableData} />
    </div>
  );
};

export default Wrapper;
