import React from "react";
import Form from "../ui/organization/form/Form";
import axios from "axios";
import { cookies } from "next/headers";

const page = async () => {
  const cookieStore = await cookies();
  let user = cookieStore.get("user");
  user = JSON.parse(user.value);

  const { company, entity_code } = user;

  let data;
  try {
    data = await axios.get(`${process.env.BACKEND_SERVER}/organization`, {
      params: {
        company: company,
        entity_code: entity_code,
        company: company,
        entity_code: entity_code,
      },
    });
  } catch (err) {
    console.log("err", err);
  }
  return (
    <div className={"page"}>
      <div className={"wrapper"}>
        <Form formData={data?.data} />
      </div>
    </div>
  );
};

export default page;
