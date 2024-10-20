import React from "react";
import classes from "./page.module.css";
import ActionBtns from "@/app/ui/actionBtns/ActionBtns";
import Form from "@/app/ui/clients/form/Form";
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
