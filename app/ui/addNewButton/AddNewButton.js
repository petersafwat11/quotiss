import React from "react";
import classes from "./addNewButton.module.css";
import { usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
const AddNewButton = ({ params, path }) => {
  // const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleClick = useDebouncedCallback(() => {
    replace(`${path}/create`);
  }, 200);

  return (
    <button onClick={handleClick} className={classes["add-new"]}>
      Add New
    </button>
  );
};

export default AddNewButton;
