"use client";
import React, { useEffect, useState } from "react";
import classes from "./page.module.css";
import Title from "../ui/title/Title";
import Search from "../ui/search/Search";
import Table from "../ui/charges/table/Table";
import axios from "axios";
import TypesFilter from "../ui/filters/typesFilter/TypesFilter";
import { useRouter } from "next/navigation";
import ChexBoxFilter from "../ui/charges/checkboxFilter/ChexBoxFilter";

const Wrapper = ({ data, rows, search }) => {
  let usableData = data?.data?.data;
  const [filterValue, setFilterValue] = useState({ name: "types", type: "" });
  const [tableData, setTableData] = useState(usableData ? usableData : []);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axios.get(`${process.env.BACKEND_SERVER}/charges`, {
          params: {
            page: 1,
            limit: rows,
            searchValue: search ? search : null,
            or: search
              ? [
                  "location",
                  "kind",
                  "code",
                  "region",
                  "country",
                  "Alias",
                  "Surcharges",
                  "Translations",
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
  }, [filterValue, rows, search]);

  return (
    <div>
      <div className={classes["top"]}>
        <div className={classes["first"]}>
          <Title title={"Charges"} />
          {/* <Filter filterValue={filterValue} setFilterValue={setFilterValue} /> */}
          <TypesFilter
            filterValue={filterValue}
            setFilterValue={setFilterValue}
          />
          <ChexBoxFilter title={" Show with charges"} />
        </div>
        <div className={classes["second"]}>
          <div className={classes["search"]}>
            <Search />
          </div>
        </div>
      </div>
      <Table data={tableData} />
    </div>
  );
};

export default Wrapper;
