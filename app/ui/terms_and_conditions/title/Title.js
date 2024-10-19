"use client";
import React from "react";
import classes from "./title.module.css";
import { usePathname } from "next/navigation";

const Title = () => {
  const pathName = usePathname();
  const title = pathName.slice(pathName.lastIndexOf("/") + 1);
  return <h3 className={classes["title"]}> {title}</h3>;
};

export default Title;
