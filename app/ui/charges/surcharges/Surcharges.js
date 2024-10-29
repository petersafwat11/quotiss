import React, { useEffect, useState } from "react";
import Table from "../surchargesTable/Table";
import Cookies from "js-cookie";
import axios from "axios";

const Surcharges = ({ data, dispatchDetail, type }) => {
  let user = Cookies.get("user");
  user = user && JSON.parse(user);
  const { company, entity_code } = user;
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `${process.env.BACKEND_SERVER}/charges`,
          {
            params: {
              company: company,
              entity_code: entity_code,
              type: type,
            },
          }
        );
        console.log("response", response?.data?.data?.data[0]);
        // const data = response?.data?.data?.data[0];
        // data
        //   ? dispatchDetail({
        //       type: "UPDATE-ALL",
        //       value: data,
        //     })
        //   : "";
      } catch (err) {
        console.log("err", err);
      }
    };
    getData();
  }, [company, entity_code, type]);
  return (
    <div className={"sub-form"}>
      <Table tableData={tableData} data={data} dispatchDetail={dispatchDetail} type={type} />
    </div>
  );
};

export default Surcharges;
