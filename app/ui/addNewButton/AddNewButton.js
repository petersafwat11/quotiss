import React from "react";
import classes from "./addNewButton.module.css";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
const AddNewButton = ({ params, path }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleClick = useDebouncedCallback(() => {
    const newParams = new URLSearchParams(searchParams);
    if (params) {
      Object.keys(params).forEach((key) => {
        newParams.set(key, params[key]);
      });
      replace(`${path}?${newParams.toString()}`);
    } else {
      replace(`${path}`);
    }
  }, 200);

  return (
    <button
      onClick={
        handleClick
        // () => {
        // router.push(path);
        // }
      }
      className={classes["add-new"]}
    >
      Add New
    </button>
  );
};

export default AddNewButton;
