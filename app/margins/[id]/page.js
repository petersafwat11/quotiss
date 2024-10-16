import React from "react";
import classes from "./page.module.css";
import BackButton from "../../ui/backButton/BackButton";
import Form from "@/app/ui/margin/form/Form";
import ActionBtns from "@/app/ui/actionBtns/ActionBtns";
const Page = async ({ searchParams }) => {
  const type = searchParams?.type;

  // remember to redirect with a param with lcl or fcl
  return (
    <div className={"page"}>
      <div className={"wrapper"}>
        <Form type={type} />
      </div>
      <ActionBtns />
    </div>
  );
};

export default Page;
