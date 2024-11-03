import axios from "axios";
import Wrapper from "./Wrapper";
import { cookies } from "next/headers";

const Page = async ({ searchParams }) => {
  const cookieStore = await cookies();
  let user = cookieStore.get("user");
  user = JSON.parse(user.value);
  const { company, entity_code } = user;

  const page = searchParams?.page || 1;
  const rows = searchParams?.rows || 10;
  const search = searchParams?.search;
  let data;
  try {
    data = await axios.get(`${process.env.BACKEND_SERVER}/rates`, {
      params: {
        page: page,
        limit: rows,
        company: company,
        entity_code: entity_code,
        searchValue: search ? search : null,
        or: search
          ? [
              "status",
              "name",
              "service",
              "base_origin_location",
              "base_destination_location",
              // "validity_start",
              // "validity_end",
            ]
          : null,
      },
    });
  } catch (err) {
    console.log("err", err);
  }
  return (
    <div className={"page"}>
      <Wrapper data={data?.data} page={page} rows={rows} search={search} />
    </div>
  );
};

export default Page;
