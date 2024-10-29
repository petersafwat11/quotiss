import axios from "axios";
import Cookies from "js-cookie";

let user = Cookies.get("user");
user = user && JSON.parse(user);

// create_date, create_user, update_date, update_user;

export const createItem = async (route, data, router, pageName) => {
  const { company, entity_code, id } = user;

  try {
    const response = await axios.post(
      `${process.env.BACKEND_SERVER}/${route}`,
      {
        ...data,
        company: company,
        entity_code: entity_code,
        create_date: new Date(Date.now()).toISOString(),
        update_date: new Date(Date.now()).toISOString(),
        create_user: id,
        update_user: id,
      }
    );
    const page = pageName ? pageName : route;
    // router.push(`/${page}`);
    console.log("response", response);
    return response;
  } catch (err) {
    console.log("Error Happened :", err);
    return err;
  }
};
export const updateItem = async (route, data, router, id, pageName) => {
  const { company, entity_code, id: userID } = user;

  const dataWithoutID = { ...data };
  try {
    const response = await axios.patch(
      `${process.env.BACKEND_SERVER}/${route}/${id}`,
      {
        ...dataWithoutID,
        company: company,
        entity_code: entity_code,
        update_date: new Date(Date.now()).toISOString(),
        update_user: userID,
      }
    );
    const page = pageName ? pageName : route;
    // router.push(`/${page}`);
    console.log("response", response);
    return response;
  } catch (err) {
    console.log("Error Happened :", err);
    return err;
  }
};
