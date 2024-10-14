import React from "react";
import classes from "./page.module.css";
import BackButton from "@/app/ui/backButton/BackButton";
const page = () => {
  return (
    <div className={classes["page"]}>
      <div className={classes["top"]}>
        <BackButton />
      </div>
      
    </div>
  );
};

export default page;
