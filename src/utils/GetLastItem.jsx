export const getId = () => {
  const last = Number(localStorage.getItem("lastId") || 0) + 1;
  localStorage.setItem("lastId", last);
  return last;
};
