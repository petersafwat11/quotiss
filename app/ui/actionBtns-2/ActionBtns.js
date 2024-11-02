"use client";
import React from "react";
import classes from "./actionBtns.module.css";
import { useRouter, usePathname } from "next/navigation";

const ActionBtns = ({ applyChanges, deleteHandler }) => {
  const router = useRouter();
  const pathname = usePathname();
  const mainPage = pathname.slice(0, pathname.lastIndexOf("/"));

  const applyHandler = () => {
    applyChanges();
  };
  return (
    <div className={classes["actions"]}>
      <button
        onClick={() => {
          applyHandler("publish");
        }}
        className={classes["apply"]}
      >
        Publish
      </button>
      <button
        onClick={() => {
          applyHandler("save");
        }}
        className={classes["apply"]}
      >
        Save
      </button>
      <button
        onClick={() => {
          applyHandler("archive");
        }}
        className={classes["apply"]}
      >
        Archive
      </button>
      <button onClick={deleteHandler} className={classes["cancel"]}>
        Delete
      </button>
    </div>
  );
};

export default ActionBtns;
