import React from "react";
import classes from "./page.module.css";
import Form from "@/app/ui/surcharge-type/forms/Forms";
import axios from "axios";
const page = async ({ params }) => {
  let data;
  const id = params.id;
  if (id !== "create") {
    try {
      data = await axios.get(
        `${process.env.BACKEND_SERVER}/surchrgeTypes/${id}`
      );
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

export default page;
