import React from "react";
import Wrapper from "./Wrapper";
import { cookies } from "next/headers";
import axios from "axios";

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
    data = await axios.get(`${process.env.BACKEND_SERVER}/users`, {
      params: {
        page: page,
        limit: rows,
        company: company,
        entity_code: entity_code,
        user_active: true,
        searchValue: search ? search : null,
        or: search ? ["company", "user_email", "user_name"] : null,
      },
    });
  } catch (err) {
    console.log("err", err);
  }
  return (
    <div className={"page"}>
      <Wrapper
        data={data?.data}
        company={company}
        entity_code={entity_code}
        page={page}
        rows={rows}
      />
    </div>
  );
};

export default page;
