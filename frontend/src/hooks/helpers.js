export const getToken = () => {
  return localStorage.getItem(import.meta.AUTH_TOKEN);
};

export const setToken = (token) => {
  if (token) {
    localStorage.setItem(import.meta.AUTH_TOKEN, token);
  }
};

export const removeToken = () => {
  localStorage.removeItem(import.meta.AUTH_TOKEN);
};
