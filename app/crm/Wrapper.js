"use client";
import React, { useEffect, useState } from "react";
import classes from "./page.module.css";
import Title from "../ui/title/Title";
import Search from "../ui/search/Search";
import Table from "../ui/clients/table/Table";
import CheckBoxFilter from "../ui/checkboxFilter/CheckBoxFilter";
import StandardFilter from "../ui/filters/standardFilter/StandardFilter";
import axios from "axios";
const Wrapper = ({ data, rows, search }) => {
  const [clientsFilterValue, setClientsFilterValue] = useState("All Clients");
  const [statusFilterValue, setStatusFilterValue] = useState("Status");
  const [typesFilterValue, setTypesFilterValue] = useState("Types");
  const usableData = data?.data?.data;

  const [tableData, setTableData] = useState(usableData ? usableData : []);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axios.get(`${process.env.BACKEND_SERVER}/clients`, {
          params: {
            page: page,
            limit: rows,
            searchValue: search ? search : null,
            or: search
              ? [
                  "status",
                  "name",
                  "service",
                  "contract_number",
                  "origin",
                  "destination",
                  "validity_start",
                  "validity_end",
                ]
              : null,
          },
        });

        // setTableData(data?.data?.data?.data);
      } catch (err) {
        console.log("err", err);
      }
    };
    getData();
  }, [rows, search]);

  return (
    <div>
      <div className={classes["top"]}>
        <div className={classes["first"]}>
          <Title title={"Clients"} />
          <div className={classes["filters-desktop"]}>
            <StandardFilter
              filterValue={clientsFilterValue}
              setFilterValue={setClientsFilterValue}
              options={["all clients", "my clients"]}
            />
            <StandardFilter
              filterValue={statusFilterValue}
              setFilterValue={setStatusFilterValue}
              options={["Status", "active", "Potential", "Blocked"]}
            />
            <StandardFilter
              filterValue={typesFilterValue}
              setFilterValue={setTypesFilterValue}
              options={["Types", "Agent", "Client"]}
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
          filterValue={clientsFilterValue}
          setFilterValue={setClientsFilterValue}
          options={["all clients", "my clients"]}
        />
        <StandardFilter
          filterValue={statusFilterValue}
          setFilterValue={setStatusFilterValue}
          options={["Status", "active", "Potential", "Blocked"]}
        />
        <StandardFilter
          filterValue={typesFilterValue}
          setFilterValue={setTypesFilterValue}
          options={["Types", "Agent", "Client"]}
        />

        <CheckBoxFilter title={"Show valid only"} />
      </div>

      <Table tableData={tableData} />
    </div>
  );
};

export default Wrapper;
