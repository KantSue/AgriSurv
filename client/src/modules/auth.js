
const TOKEN_KEY = "auth_token";
export const setToken = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const getToken = () => {
  const token=localStorage.getItem(TOKEN_KEY);
  if(!token) return null;
  try{
    const payload = JSON.parse(atob(token.split(".")[1]))
    return {
      token,        
      user: payload 
    };
  } catch (err) {
    console.error("Token invalide");
    return null;
  }
};

export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const isAuthenticated = () => {
  return !!getToken();
};