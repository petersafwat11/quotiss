import React from "react";
import classes from "./page.module.css";
import Title from "../ui/title/Title";
import Search from "../ui/search/Search";
import Table from "../ui/countries/table/Table";
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
    data = await axios.get(`${process.env.BACKEND_SERVER}/countries`, {
      params: {
        page: page,
        limit: rows,
        // company: company,
        // entity_code: entity_code,
        searchValue: search ? search : null,
        or: search ? ["name", "code"] : null,
      },
    });
  } catch (err) {
    console.log("err", err.response);
  }
  return (
    <div className={"page"}>
      <div className={classes["top"]}>
        <Title title={"Countries"} />
        <div className={classes["search"]}>
          <Search />
        </div>
      </div>
      <Table data={data?.data} />
    </div>
  );
};

export default page;
