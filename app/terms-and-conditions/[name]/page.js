import React from "react";
import classes from "./page.module.css";
import BackButton from "@/app/ui/backButton/BackButton";
import Form from "@/app/ui/terms_and_conditions/form/Form";
import Title from "@/app/ui/terms_and_conditions/title/Title";
const page = () => {
  return (
    <div className={"page"}>
      <div className={"wrapper"}>
        <div className={classes["top"]}>
          <Title />
        </div>
        <Form />
      </div>
    </div>
  );
};

export default page;
