export const collectIdsAndDocs = (doc) => {
  return { id: doc.id, ...doc.data() };
};

export const dateFormate = (date) => {
  const dateJS = date.toDate();
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
  }).format(dateJS);
};
