import React from "react";
import classes from "./page.module.css";
import Form from "../ui/organization/form/Form";
const page = () => {
  return (
    <div className={"page"}>
      <div className={"wrapper"}>
        <Form />
      </div>
    </div>
  );
};

export default page;
