import React from "react";
import classes from "./page.module.css";
import Form from "@/app/ui/surcharge-type/forms/Forms";
const page = () => {
  return (
    <div className={classes["page"]}>
      <Form />
    </div>
  );
};

export default page;
