export const setUser = (val) => {
  localStorage.setItem("userRole", val);

  window.location.reload();
};

export const getUser = () => {
  let data = localStorage.getItem("userRole");
  return JSON.parse(data);
};

export const resetUser = () => {
  return localStorage.removeItem("userRole");
};
