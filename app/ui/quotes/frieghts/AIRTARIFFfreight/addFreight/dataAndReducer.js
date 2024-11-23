export const locationReducer = (state, action) => {
  console.log("state", state, action);
  const prevState = { ...state };
  if (action.type === "UPDATE-ALL") {
    return action.value;
  }
  return {
    ...prevState,
    [action.type.toLowerCase()]: action.value,
  };
};

export const intialValue = {
  currency: "",
  comment: "",
  min_price: "",
  validity_end: "",
  validity_start: "",
  service: "",
  name: "",
  checked: false,
};
