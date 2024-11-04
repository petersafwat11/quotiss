"use client";
import React, { useEffect, useState } from "react";
import classes from "./page.module.css";
import Title from "../ui/title/Title";
import Search from "../ui/search/Search";
import Table from "../ui/users/table/Table";
import ChexBoxFilter from "../ui/charges/checkboxFilter/ChexBoxFilter";
import axios from "axios";
import CheckboxGroup from "../ui/inputs/checkboxGroup/CheckboxGroup";
const Wrapper = ({ data, company, entity_code, page, rows }) => {
  const usableData = data?.users;
  const [tableData, setTableData] = useState(usableData ? usableData : []);
  const [users, setsUsers] = useState({ active: true });
  console.log(data?.users);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `${process.env.BACKEND_SERVER}/users`,
          {
            params: {
              page: page,
              limit: rows,
              company: company,
              entity_code: entity_code,
              user_active: users?.active,
            },
          }
        );
        //   const responseData = response?.data?.data?.data;
        //   responseData.length > 0
        //     ? setTableData(responseData[0])
        //     : setTableData({
        //         language: data.language,
        //         type: type,
        //         termsAndConditions: "",
        //       });
      } catch (err) {
        console.log("err", err);
      }
    };
    getData();
  }, [company, entity_code, page, rows, users]);

  return (
    <div className={classes["wrapper"]}>
      <div className={classes["top"]}>
        <div className={classes["first"]}>
          <Title title={"Users"} />
          <CheckboxGroup
            data={users}
            type={"layout"}
            dataKey={"active"}
            label={"Show active only"}
            setData={setsUsers}
            stateType={"useState"}
          />

          {/* <ChexBoxFilter title={" Show active only"} /> */}
        </div>
        <div className={classes["second"]}>
          <div className={classes["search"]}>
            <Search />
          </div>
        </div>
      </div>
      <Table data={tableData} />
    </div>
  );
};

export default Wrapper;
