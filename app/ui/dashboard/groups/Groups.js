import React from "react";
import classes from "./groups.module.css";
import { IoRocketOutline } from "react-icons/io5";
import { FaRegCircleCheck } from "react-icons/fa6";
import { SlPaypal } from "react-icons/sl";
import { FaRegUser } from "react-icons/fa";
import { LuUsers2 } from "react-icons/lu";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMailOpen } from "react-icons/hi";
import Item from "../group/Item";

const Groups = () => {
  return (
    <div className={classes["container"]}>
      {/* <Group title={"ACTIVE USERS"} percentage={"100%"} change={"1"} icon={""} text={"Total in the team"} /> */}
      <Item
        title={"AVG MARGIN"}
        percentage={"0$"}
        change={"0"}
        icon={<SlPaypal  className={classes['icon']}/>}
        text={"Change"}
      />
      <Item
        title={"QUOTES SENT"}
        percentage={"0"}
        change={"0%"}
        icon={<IoRocketOutline className={classes['icon']}/>}
        text={"Change"}
      />
      <Item
        title={"ACCEPTED"}
        percentage={"0(0%)"}
        change={"0%"}
        icon={<FaRegCircleCheck className={classes['icon']}/>}
        text={"Change"}
      />
      <Item
        title={"CRM CLIENTS"}
        percentage={"5"}
        change={"1"}
        icon={<FaRegUser className={classes['icon']}/>}
        text={"New"}
      />
      <Item
        title={"EMAILS"}
        percentage={"0"}
        change={"0%"}
        icon={<HiOutlineMailOpen className={classes['icon']}/>}
        text={"Change"}
      />
      <Item
        title={"MEETINGS"}
        percentage={"0"}
        change={"0%"}
        icon={<LuUsers2 className={classes['icon']}/>}
        text={"Change"}
      />

      <Item
        title={"CALLS"}
        percentage={"0"}
        change={"0%"}
        icon={<FiPhoneCall className={classes['icon']}/>}
        text={"Change"}
      />
    </div>
  );
};

export default Groups;
