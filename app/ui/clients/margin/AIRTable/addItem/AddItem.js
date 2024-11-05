// import { useReducer, useState } from "react";
// import { intialValue, locationReducer } from "./dataAndReducer";
// import classes from "./addContacts.module.css";
// import { IoCheckmarkSharp } from "react-icons/io5";
// import { FaXmark } from "react-icons/fa6";
// import InputGroup from "@/app/ui/inputs/inputGroup/InputGroup";
// import { FaRegComment } from "react-icons/fa";
// import SelectionGroup from "@/app/ui/inputs/selectionGroup/SelectionGroup";
// import { IoCloseCircleOutline } from "react-icons/io5";

// import { countryList } from "@/app/utils/countryList";
// import RichText from "@/app/ui/inputs/richTextGroup/RichTextGroup";
// import Popup from "@/app/ui/popupWrapper/Popup";

// const AddItem = ({
//   toggleShowComponent,
//   applyChanges,
//   itemData,
//   index,
// }) => {
//   const [data, dispatchDetail] = useReducer(
//     locationReducer,
//     itemData ? itemData : intialValue
//   );
//   const countriesOptions = countryList.map((item) => item.country);
//   const [showComment, setShowComment] = useState(false);
//   const toggleComment = () => {
//     setShowComment(!showComment);
//   };

//   return (
//     <div className={classes["form"]}>
//       <div className={classes["from-country"]}>
//         <div className={classes["input-wrapper"]}>
//           <SelectionGroup
//             noLabel={true}
//             data={data}
//             type={"from_country"}
//             dataKey={"from_country"}
//             label={"From Country"}
//             options={countriesOptions}
//             setData={dispatchDetail}
//             dataType={"single"}
//           />
//         </div>
//       </div>
//       <div className={classes["to-country"]}>
//         <div className={classes["input-wrapper"]}>
//           <SelectionGroup
//             noLabel={true}
//             data={data}
//             type={"to_country"}
//             dataKey={"to_country"}
//             label={"To Country"}
//             options={countriesOptions}
//             setData={dispatchDetail}
//             dataType={"single"}
//           />
//         </div>
//       </div>
//       <div className={classes["to-location"]}>
//         <div className={classes["input-wrapper"]}>
//           <InputGroup
//             noLabel={true}
//             id={"to_location"}
//             data={data.to_location}
//             dataKey={"to_location"}
//             setData={dispatchDetail}
//             stateType={"useReducer"}
//             dataType="single"
//           />
//         </div>
//       </div>
//       <div className={classes["type"]}>
//         <div className={classes["input-wrapper"]}>
//           <SelectionGroup
//             noLabel={true}
//             data={data}
//             type={"type"}
//             dataKey={"type"}
//             label={"Type"}
//             options={typeOptions}
//             setData={dispatchDetail}
//             dataType={"single"}
//           />
//         </div>
//       </div>
//       <div className={classes["mode"]}>
//         <div className={classes["input-wrapper"]}>
//           <SelectionGroup
//             noLabel={true}
//             data={data}
//             type={"mode"}
//             dataKey={"mode"}
//             label={"Mode"}
//             options={modeOptions}
//             setData={dispatchDetail}
//             dataType={"single"}
//           />
//         </div>
//       </div>
//       <div className={classes["total"]}>
//         <div className={classes["input-wrapper"]}>
//           <InputGroup
//             noLabel={true}
//             id={"total_volume"}
//             data={data.total_volume}
//             dataKey={"total_volume"}
//             setData={dispatchDetail}
//             stateType={"useReducer"}
//             dataType="single"
//           />
//         </div>
//       </div>
//       <div className={classes["unit"]}>
//         <div className={classes["input-wrapper"]}>
//           <SelectionGroup
//             data={data}
//             noLabel={true}
//             type={"unit"}
//             dataKey={"unit"}
//             label={"Unit"}
//             options={unitOptions}
//             setData={dispatchDetail}
//             dataType={"single"}
//           />
//         </div>
//       </div>
//       <div className={classes["comment"]}>
//         <div className={classes["input-wrapper"]}>
//           <div onClick={toggleComment} className={classes["comment-wrapper"]}>
//             <FaRegComment className={classes["comment-icon"]} />
//           </div>
//         </div>
//         {showComment && (
//           <Popup>
//             <div className={classes["rich-text"]}>
//               <IoCloseCircleOutline
//                 onClick={toggleComment}
//                 className={classes["close"]}
//               />
//               <RichText
//                 data={data}
//                 dataKey={"comment"}
//                 setData={dispatchDetail}
//                 dataType={"single"}
//               />
//             </div>
//           </Popup>
//         )}
//       </div>

//       <div className={classes["actions"]}>
//         <div
//           onClick={() => {
//             console.log("index", index);
//             index || index === 0
//               ? applyChanges(data, "edit", index)
//               : applyChanges(data, "create");
//           }}
//           className={classes["apply-div"]}
//         >
//           <IoCheckmarkSharp className={classes["apply-icon"]} />
//         </div>
//         <div onClick={toggleShowComponent} className={classes["cancel-div"]}>
//           <FaXmark className={classes["cancel-icon"]} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddItem;
import React from "react";

const AddItem = () => {
  return <div>AddItem</div>;
};

export default AddItem;
