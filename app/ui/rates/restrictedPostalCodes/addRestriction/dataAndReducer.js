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
  postal_code_min: "",
  postal_code_max: "",
  comment: "",
};
