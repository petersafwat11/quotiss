import React from "react";
import classes from "./page.module.css";
import Form from "@/app/ui/charges/form/Form";
import axios from "axios";
const Page = async ({ searchParams, params }) => {
  const type = searchParams?.type;
  let data;
  const id = params.id;
  if (id !== "create") {
    try {
      data = await axios.get(`${process.env.BACKEND_SERVER}/charges/${id}`);
    } catch (err) {
      console.log("err", err);
    }
  }
  return (
    <div className={"page"}>
      <div className={"wrapper"}>
        <Form formData={data?.data} id={id} />
      </div>
    </div>
  );
};

export default Page;
