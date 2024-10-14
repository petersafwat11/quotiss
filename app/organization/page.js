import React from "react";
import classes from "./page.module.css";
import BackButton from "../ui/backButton/BackButton";
import Form from "../ui/organization/form/Form";
const page = () => {
  return (
    <div className={"page"}>
      <div className={classes["top"]}>
        <BackButton />
      </div>
      <Form />
    </div>
  );
};

export default page;
