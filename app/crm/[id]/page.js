import React from "react";
import Form from "@/app/ui/clients/form/Form";
const page = ({ params }) => {
  const id = params.id;

  return (
    <div className={"page"}>
      <div className={"wrapper"}>
        <Form id={id} />
      </div>
    </div>
  );
};

export default page;
