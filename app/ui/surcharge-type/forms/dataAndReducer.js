export const surchargeReducer = (state, action) => {
  console.log("state", state);
  const prevState = { ...state };
  if (action.type === "UPDATE-ALL") {
    return action.value;
  } else if (action.type === "NAME") {
    return {
      ...prevState,
      name: action.value,
    };
  } else if (action.type === "GENERAL") {
    return {
      ...prevState,
      name: action.value,
    };
  } else if (action.type === "TRANSLATION") {
    return {
      ...prevState,
      name: action.value,
    };
  } else if (action.type === "LTL") {
    return {
      ...prevState,
      name: action.value,
    };
  }
  return;
};

export   const intialValue = {
  name: "",
  general: { comment: "", internalDescription: "", onlineDescription: "" },
  translation: { language: "", name: "", descrition: "" },
  ltl: {
    surchargeType: "",
    surchargeOptions: {
      mandatory: false,
      uber: false,
      noMargin: false,
    },
  },
};
