export const organizationReducer = (state, action) => {
  console.log("state", state);
  const prevState = { ...state };
  if (action.type === "UPDATE-ALL") {
    return action.value;
  } else if (action.type === "NAME") {
    return {
      ...prevState,
      organization_name: action.value,
    };
  } else if (action.type === "DETAILS") {
    return {
      ...prevState,
      details: action.value,
    };
  } else if (action.type === "EMAILINTEGRATION") {
    return {
      ...prevState,
      email_integration: action.value,
    };
  } else if (action.type === "QUOTEOPTIONS") {
    return {
      ...prevState,
      quote_options: action.value,
    };
  }
  return;
};
export const intialValue = {
  organization_name: "",
  details: {
    country: "",
    city: "",
    postal_code: "",
    street: "",
    taxpayer_id_number: "",
    spread: "",
    quote_collecting_email: "",
    ecu_account_id: "",
    logo: "",
  },
  quote_options: {
    show_service_name_for_freight: false,
    main_currency: "",
    insurance_value_multiplier: "",
    insurance_rate: null,
    insurance_min_value: null,
    insurance_min_value_currency: null,
    
  },
  email_integration: {
    use_SSL: false,
  },
};
