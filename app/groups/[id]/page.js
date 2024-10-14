import React from "react";
import classes from "./page.module.css";
import BackButton from "../../ui/backButton/BackButton";
const Page = () => {
  // remember to redirect with a param with lcl or fcl
  return (
    <div className={classes["page"]}>
      <BackButton />
      
    </div>
  );
};

export default Page;
