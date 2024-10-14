"use client";
import React, { useState } from "react";
import classes from "./page.module.css";
import Title from "../ui/title/Title";
import Search from "../ui/search/Search";
import ChexBoxFilter from "../ui/checkboxFilter/CheckBoxFilter";
import TypesFilter from "../ui/rates/typesFilter/TypesFilter";
import ClientsFilter from "../ui/clients/clientsFilter/ClientsFilter";
import StatusFilter from "../ui/clients/statusFilter/StatusFilter";
import Table from "../ui/clients/table/Table";
const Page = () => {
  const [clientsFilterValue, setClientsFilterValue] = useState("All Clients");
  const [statusFilterValue, setStatusFilterValue] = useState("Status");
  const [typesFilterValue, setTypesFilterValue] = useState("Types");

  return (
    <div className={"page"}>
      <div className={classes["top"]}>
        <div className={classes["first"]}>
          <Title title={"Clients CRM"} />
          <TypesFilter
            filterValue={typesFilterValue}
            setFilterValue={setTypesFilterValue}
          />
          <ClientsFilter
            filterValue={clientsFilterValue}
            setFilterValue={setClientsFilterValue}
          />
          <StatusFilter
            filterValue={statusFilterValue}
            setFilterValue={setStatusFilterValue}
          />
          <ChexBoxFilter title={" Show with Terms & Conditions"} />
        </div>
        <div className={classes["second"]}>
          <div className={classes["search"]}>
            <Search />
          </div>
        </div>
      </div>
      <Table />
    </div>
  );
};

export default Page;
