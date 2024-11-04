"use client";
import React, { useState } from "react";
import classes from "./table.module.css";
import { usePathname, useRouter } from "next/navigation";
import AddNewButton from "../../addNewButton/AddNewButton";
import { GrClear } from "react-icons/gr";
import { FaUserEdit } from "react-icons/fa";
import NormalCheckbox from "../../circleCheckbox/CircleChexbox";
import CircleCheckbox from "../../inputs/selectionCheckBoxGroup/circleCheckbox/CircleChexbox";

const Table = ({ data }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [selectedOptions, setSelectedOptions] = useState([]);

  const onSelect = (val) => {
    if (val === "all") {
      if (selectedOptions.length === data.length) {
        setSelectedOptions([]); // Deselect all
      } else {
        setSelectedOptions([...data]); // Select all
      }
    } else {
      setSelectedOptions((prev) =>
        prev.includes(val)
          ? prev.filter((item) => item !== val)
          : [...prev, val]
      );
    }
  };
  const handleItemClick = (id) => {
    router.push(`/users/${id}`);
  };

  return (
    <div className={classes["container"]}>
      <div className={classes["top"]}>
        <div className={classes["actions"]}>
          <div className={classes["action"]}>
            <GrClear className={classes["action-icon"]} />
            <button className={classes["action-button"]}>
              clear Selection
            </button>
          </div>{" "}
          <div className={classes["action"]}>
            <FaUserEdit className={classes["action-icon"]} />
            <button className={classes["action-button"]}>Edit Email</button>
          </div>{" "}
        </div>

        <AddNewButton />
      </div>
      <div className={classes["table"]}>
        <div className={classes["header"]}>
          <div className={classes["checkbox"]}>
            <CircleCheckbox
              itemName={null}
              onChange={() => onSelect("all")}
              type={"item"}
              checked={selectedOptions.length === data?.length}
            />
          </div>
          <p className={classes["name"]}>Name</p>
          <p className={classes["organization"]}>company</p>
          <p className={classes["email"]}>Email</p>
          <p className={classes["active"]}>Active</p>
          {/* <p className={classes["last-active"]}>Last Active</p> */}
        </div>
        <div className={classes["body"]}>
          {data?.length > 0 &&
            data.map((item, index) => (
              <div
                onClick={() => {
                  handleItemClick(item?.id);
                }}
                key={index}
                className={classes["row"]}
              >
                <div className={classes["checkbox"]}>
                  <CircleCheckbox
                    itemName={item}
                    onChange={() => onSelect(item)}
                    type={"item"}
                    checked={selectedOptions.includes(item)}
                  />
                </div>
                <p className={classes["name"]}>{item.user_name}</p>
                <p className={classes["organization"]}>{item.user_company}</p>
                <p className={classes["email"]}>{item.user_email}</p>
                <NormalCheckbox value={item.user_active} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Table;
