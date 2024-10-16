import React from "react";
import classes from "./page.module.css";
import Form from "@/app/ui/surcharge-type/forms/Forms";
import ActionBtns from "@/app/ui/actionBtns/ActionBtns";
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
