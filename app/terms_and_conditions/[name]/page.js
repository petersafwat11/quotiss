import React from "react";
import classes from "./page.module.css";
import BackButton from "@/app/ui/backButton/BackButton";
import Form from "@/app/ui/terms_and_conditions/form/Form";
const page = () => {
  return (
    <div className={classes["page"]}>
      <div className={classes["top"]}>
        <BackButton />
      </div>
      <div className={classes["tile-wrapper"]}>
        <h3> FCL</h3>
      </div>
      <Form />
      
    </div>
  );
};

export default page;
