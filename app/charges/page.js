import axios from "axios";
import Wrapper from "./Wrapper";

const Page = async ({ searchParams }) => {
  const page = searchParams?.page || 1;
  const rows = searchParams?.rows || 10;
  const search = searchParams?.search;
  let data;
  try {
    data = await axios.get(`${process.env.BACKEND_SERVER}/charges`, {
      params: {
        page: page,
        limit: rows,
        searchValue: search ? search : null,
        or: search
          ? [
              "location",
              "kind",
              "code",
              "region",
              "country",
              "Alias",
              "Surcharges",
              "Translations",
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
