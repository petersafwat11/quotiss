export const surchargeReducer = (state, action) => {
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
  name: "",
  general: { comment: "", internalDescription: "", onlineDescription: "" },
  translation: { language: "", name: "", description: "" },
  ltl: {
    surchargeType: "additional",
    surchargeOptions: {
      mandatory: false,
      uber: false,
      noMargin: false,
    },
  },
};
