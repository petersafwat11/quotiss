export const formatContainer = (input) => {
  let formatted = input.replace("'", "").toLowerCase();
  formatted = formatted.split(" ").join("_");
  return "m" + formatted;
};
