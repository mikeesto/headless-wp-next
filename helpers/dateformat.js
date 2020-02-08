export const dateFormat = value => {
  return new Date(value).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
};
