"use client";
import React, { useState } from "react";
import classes from "./table.module.css";
import AddContacts from "./addContacts/AddContacts";
import AddNewButton from "@/app/ui/addNewButton-2/AddNewButton";
import CircleCheckbox from "@/app/ui/circleCheckbox/CircleChexbox";

const Table = ({ data, dispatchDetail }) => {
  const changeTableItem = (itemData, type, index) => {
    if (type === "create") {
      dispatchDetail({
        type: "contacts".toUpperCase(),
        value: { ...data, persons: [...data.persons, itemData] },
      });
      toggleShowComponent();
    } else if (type === "delete") {
      const updatedArray = data?.persons?.filter((_, indx) => indx !== index);
      dispatchDetail({
        type: "contacts".toUpperCase(),
        value: { ...data, persons: updatedArray },
      });
    } else {
      const updatedArray = [...data?.persons];
      updatedArray[index] = itemData;

      dispatchDetail({
        type: "contacts".toUpperCase(),
        value: { ...data, persons: updatedArray },
      });
      toggleShowComponent();
    }
  };

  const [showComponent, setShowComponent] = useState({
    state: false,
    index: null,
  });
  const toggleShowComponent = () => {
    setShowComponent({ state: !showComponent.state, index: null });
  };
  const maskPassword = (number) => {
    return "*".repeat(number.toString().length);
  };

  return (
    <div className={classes["table"]}>
      <div className={classes["header"]}>
        <p className={classes["name"]}>Name</p>
        <p className={classes["email"]}>E-mail</p>
        <p className={classes["phone"]}>Phone</p>
        <p className={classes["active"]}>Active</p>
        <p className={classes["password"]}>Password</p>
        <div className={classes["space"]}></div>
      </div>
      <div className={classes["body"]}>
        {data?.persons?.length > 0 &&
          data?.persons?.map((item, index) =>
            showComponent.state && showComponent.index === index ? (
              <AddContacts
                itemData={item}
                key={index}
                toggleShowComponent={toggleShowComponent}
                applyChanges={changeTableItem}
                index={index}
              />
            ) : (
              <div
                onClick={() => {
                  setShowComponent({
                    state: true,
                    index: index,
                  });
                }}
                key={index}
                className={classes["row"]}
              >
                <p className={classes["name"]}> {item?.name}</p>
                <p className={classes["email"]}> {item?.email}</p>
                <p className={classes["phone"]}>{item.phone}</p>
                <div className={classes["active"]}>
                  <CircleCheckbox value={item?.active} />
                </div>
                <p className={classes["password"]}>
                  {maskPassword(item.password)}
                </p>

                <div
                  onClick={() => {
                    changeTableItem([], "delete", index);
                  }}
                  className={classes["delete"]}
                >
                  Delete
                </div>
              </div>
            )
          )}
        {showComponent.state &&
          !showComponent.index &&
          showComponent.index !== 0 && (
            <AddContacts
              toggleShowComponent={toggleShowComponent}
              applyChanges={changeTableItem}
            />
          )}
      </div>
      <div className={classes["add-btn"]}>
        <AddNewButton buttonClickHandler={toggleShowComponent} />
      </div>
    </div>
  );
};

export default Table;
