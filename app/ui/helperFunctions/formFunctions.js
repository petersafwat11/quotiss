import axios from "axios";

export const createItem = async (route, data, router) => {
  try {
    const response = await axios.post(
      `${process.env.BACKEND_SERVER}/${route}`,
      data
    );
    router.push(`/${route}`);
  } catch (err) {
    console.log("Error Happened :", err);
  }
};
export const updateItem = async (route, data, router, id) => {
  const dataWithoutID = { ...data };
  try {
    const response = await axios.patch(
      `${process.env.BACKEND_SERVER}/${route}/${id}`,
      dataWithoutID
    );
    router.push(`/${route}`);
  } catch (err) {
    console.log("Error Happened :", err);
  }
};
