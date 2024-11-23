export const changeTimeFormat = (date) => {
  // Check if the input is a valid Date object
  if (!(date instanceof Date) || isNaN(date)) {
    return ""; // Return nothing if it's not a valid date
  }

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const year = date.getFullYear();

  // Combine them into the desired format
  return `${day}/${month}/${year}`;
};
