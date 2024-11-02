import axios from "axios";
import Wrapper from "./Wrapper";
const Page = async ({ searchParams }) => {
  const page = searchParams?.page || 1;
  const rows = searchParams?.rows || 10;
  const search = searchParams?.search;
  let data;
  try {
    data = await axios.get(`${process.env.BACKEND_SERVER}/clients`, {
      params: {
        page: page,
        limit: rows,
        searchValue: search ? search : null,
        or: search
          ? [
              "status",
              "name",
              "service",
              "contract_number",
              "origin",
              "destination",
              "validity_start",
              "validity_end",
            ]
          : null,
      },
    });
  } catch (err) {
    console.log("err", err);
  }
  return (
    <div className={"page"}>
      <Wrapper data={data?.data} page={page} rows={rows} search={search}/>
    </div>
  );
};

export default Page;
