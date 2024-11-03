import React from "react";
import classes from "./page.module.css";
import Title from "../ui/title/Title";
import Search from "../ui/search/Search";
import Table from "../ui/Holidays/table/Table";
import axios from "axios";
import { cookies } from "next/headers";

const page = async ({ searchParams }) => {
  const cookieStore = await cookies();
  let user = cookieStore.get("user");
  user = JSON.parse(user.value);
  const { company, entity_code } = user;

  const page = searchParams?.page || 1;
  const rows = searchParams?.rows || 10;
  const search = searchParams?.search;
  let data;
  try {
    data = await axios.get(`${process.env.BACKEND_SERVER}/holidays`, {
      params: {
        page: page,
        limit: rows,
        company: company,
        entity_code: entity_code,
        searchValue: search ? search : null,
        or: search
          ? ["service", "destination_country", "origin_country"]
          : null,
      },
    });
  } catch (err) {
    console.log("err", err);
  }
  return (
    <div className={"page"}>
      <div className={classes["top"]}>
        <Title title={"Holidays"} />
        <div className={classes["search"]}>
          <Search />
        </div>
      </div>
      <Table data={data?.data} rows={rows} search={search} />
    </div>
  );
};

export default page;
