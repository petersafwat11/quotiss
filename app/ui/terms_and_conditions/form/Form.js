"use client";
import React, { useEffect, useState } from "react";
import classes from "./form.module.css";
import SelectionGroup from "../../inputs/selectionGroup/SelectionGroup";
import RichText from "../../inputs/richTextGroup/RichTextGroup";
import ActionBtns from "../../actionBtns/ActionBtns";
import { createItem, updateItem } from "@/app/lib/formFunctions";
import { usePathname, useRouter } from "next/navigation";
import Cookies from "js-cookie";
import axios from "axios";

const Form = () => {
  const pathname = usePathname();
  const router = useRouter();
  const type = pathname.slice(pathname.lastIndexOf("/") + 1);
  const [data, setData] = useState({
    language: "",
    termsAndConditions: "",
    type: type,
  });

  let user = Cookies.get("user");
  user = user && JSON.parse(user);
  const { company, entity_code } = user;
  const applyChanges = async () => {
    const id = data?.id;
    if (!id) {
      await createItem(
        "termsAndConditions",
        data,
        router,
        "terms-and-conditions"
      );
    } else {
      await updateItem(
        "termsAndConditions",
        data,
        router,
        id,
        "terms-and-conditions"
      );
    }
  };

  const languages = [
    "English",
    "Polish",
    "Turkish",
    "Russian",
    "German",
    "Czech",
    "Slovak",
    "Lituanian",
    "Romanian",
    "French",
    "Dutch",
    "Hungarian",
    "Italian",
    "Spanish",
    "Slovenian",
  ];
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `${process.env.BACKEND_SERVER}/termsAndConditions`,
          {
            params: {
              company: company,
              entity_code: entity_code,
              language: data.language,
              type: type,
            },
          }
        );
        console.log("response", response?.data?.data?.data);
        const responseData = response?.data?.data?.data;
        responseData.length > 0
          ? setData(responseData[0])
          : setData({
              language: data.language,
              type: type,
              termsAndConditions: "",
            });
      } catch (err) {
        console.log("err", err);
      }
    };
    getData();
  }, [company, entity_code, data.language, type]);

  return (
    <div>
      <div className={"form"}>
        <SelectionGroup
          data={data}
          dataKey={"language"}
          label={"Please Select Language"}
          options={languages}
          setData={setData}
          stateType={"useState"}
        />

        {/* there will be text formmater */}
        {data.language.length > 0 && (
          <div className={classes["rich-text"]}>
            <RichText
              data={data}
              dataKey={"termsAndConditions"}
              setData={setData}
            />
          </div>
        )}
      </div>
      <ActionBtns applyChanges={applyChanges} />
    </div>
  );
};

export default Form;
