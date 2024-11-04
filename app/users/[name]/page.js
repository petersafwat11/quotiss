import React from "react";
import axios from "axios";
import Form from "@/app/ui/users/form/Form";
const page = async ({ params }) => {
  let data;
  const id = params.id;
  if (id !== "create") {
    try {
      data = await axios.get(`${process.env.BACKEND_SERVER}/users/${id}`);
    } catch (err) {
      console.log("err", err);
    }
  }

  return (
    <div className={"page"}>
      <div className={"wrapper"}>
        <Form formData={data?.data} id={id} />
      </div>
    </div>
  );
};

export default page;
