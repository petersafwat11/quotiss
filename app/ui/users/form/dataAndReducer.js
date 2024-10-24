export const organizationReducer = (state, action) => {
  console.log("state", state);
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
  user_pwd: "",
  user_name: "",
  user_company: "",
  user_location: "",
  user_avatar: "",
  user_active: false,
  user_valid_date: "YYYY-MM-DD",
  user_email: "",
};
