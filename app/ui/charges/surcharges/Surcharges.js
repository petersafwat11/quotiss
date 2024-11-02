import React, { useEffect, useState } from "react";
import Table from "../surchargesTable/Table";

const Surcharges = ({ data, dispatchDetail, type }) => {
  const [serviceFilterValue, setServiceFilterValue] =
    useState("Select Carrier");
  const [filteredData, setFilteredData] = useState(data);

  const addSurcharge = (newData) => {
    dispatchDetail({
      type: "surcharges".toUpperCase(),
      value: [...data, newData],
    });
  };

  useEffect(() => {
    if (serviceFilterValue === "Select Carrier") {
      return setFilteredData(data);
    }
    const surchargeData = data.filter(
      (item) => item.service === serviceFilterValue
    );
    setFilteredData(surchargeData);
  }, [serviceFilterValue, data]);

  return (
    <div className={"sub-form"}>
      <Table
        applyChanges={addSurcharge}
        tableData={filteredData}
        data={data}
        dispatchDetail={dispatchDetail}
        type={type}
        serviceFilterValue={serviceFilterValue}
        setServiceFilterValue={setServiceFilterValue}
      />
    </div>
  );
};

export default Surcharges;
