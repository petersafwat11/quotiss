"use client";
import React from "react";
import classes from "./backbutton.module.css";
import { usePathname, useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";

const BackButton = () => {

  const router = useRouter();
  const pathname = usePathname();

  const mainPage = pathname.slice(0, pathname.lastIndexOf("/"));

  return (
    <button
      onClick={() => {
        router.push(mainPage);
      }}
      className={classes["button"]}
    >
      <IoIosArrowBack className={classes['arrow']} />

      Back
    </button>
  );
};

export default BackButton;
