import React from "react";
import classes from "./page.module.css";
import Form from "../ui/organization/form/Form";
import ActionBtns from "../ui/actionBtns/ActionBtns";
const page = () => {
  return (
    <div className={"page"}>
      <div className={"wrapper"}>
        <Form />
      </div>
      <ActionBtns />
    </div>
  );
};

export default page;
