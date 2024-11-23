"use client";
import React from "react";
import classes from "./addQuote.module.css";
import { useRouter } from "next/navigation";
const AddQuoteBtn = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.push("/quotes/create");
      }}
      className={classes["button"]}
    >
      Create Quote
    </button>
  );
};

export default AddQuoteBtn;
