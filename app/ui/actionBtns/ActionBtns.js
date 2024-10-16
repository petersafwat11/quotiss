"use client";
import React from "react";
import classes from "./actionBtns.module.css";
import { useRouter, usePathname } from "next/navigation";

const ActionBtns = () => {
  const router = useRouter();
  const pathname = usePathname();
  const mainPage = pathname.slice(0, pathname.lastIndexOf("/"));

  const applyChanges = () => {
    router.push(mainPage);
  };
  const cancelChanges = () => {
    router.push(mainPage);
  };
  return (
    <div className={classes["actions"]}>
      <button onClick={applyChanges} className={classes["apply"]}>
        Apply
      </button>
      <button onClick={cancelChanges} className={classes["cancel"]}>
        Cancel
      </button>
    </div>
  );
};

export default ActionBtns;
