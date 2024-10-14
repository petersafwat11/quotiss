import React from "react";
import classes from "./page.module.css";
import BackButton from "../../ui/backButton/BackButton";
import Form from "@/app/ui/margin/form/Form";
const Page = () => {
  // remember to redirect with a param with lcl or fcl
  return (
    <div className={"page"}>
      <BackButton />
      <Form />
    </div>
  );
};

export default Page;
