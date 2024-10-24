import React from "react";
import classes from "./page.module.css";
import Title from "../ui/title/Title";
import Table from "../ui/terms_and_conditions/table/Table";
import axios from "axios";
import { cookies } from "next/headers";

const page = async () => {
  const cookieStore = await cookies();
  let user = cookieStore.get("user");
  user = JSON.parse(user.value);

  const { company, entity_code } = user;

  let data;
  try {
    data = await axios.get(`${process.env.BACKEND_SERVER}/termsAndConditions`, {
      params: {
        company: company,
        entity_code: entity_code,
      },
    });
  } catch (err) {
    console.log("err", err);
  }
  return (
    <div className={"page"}>
      <div className={classes["top"]}>
        <Title title={"Terms And Condions"} />
      </div>
      <Table data={data?.data} />
    </div>
  );
};

export default page;
