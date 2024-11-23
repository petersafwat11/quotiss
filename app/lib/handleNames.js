export const handleNames = (str, type) => {
  if (typeof str === "string") {
    const className =
      type === "class"
        ? str.toLowerCase().replace(/\s+/g, "-")
        : str.toLowerCase().replace(/\s+/g, "_");
    return className;
  }
  return str;
};
