export const holidaysReducer = (state, action) => {
  console.log("state", state, action);
  const prevState = { ...state };
  if (action.type === "UPDATE-ALL") {
    return action.value;
  }
  return {
    ...prevState,
    [action.type.toLowerCase()]: action.value,
  };

  // else if (action.type === "NAME") {
  //   return {
  //     ...prevState,
  //     name: action.value,
  //   };
  // } else if (action.type === "GENERAL") {
  //   return {
  //     ...prevState,
  //     name: action.value,
  //   };
  // } else if (action.type === "TRANSLATION") {
  //   return {
  //     ...prevState,
  //     name: action.value,
  //   };
  // } else if (action.type === "LTL") {
  //   return {
  //     ...prevState,
  //     name: action.value,
  //   };
  // }
  return;
};

export const intialValue = {
  origin_country: "country",
  destination_country: "country",
  service: "All",
  january: "",
  february: "",
  march: "",
  april: "",
  may: "",
  june: "",
  july: "",
  august: "",
  september: "",
  october: "",
  november: "",
  december: "",
};
