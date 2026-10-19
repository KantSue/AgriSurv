
const TOKEN_KEY = "auth_token";
export const setToken = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const getToken = () => {
  const token=localStorage.getItem(TOKEN_KEY);
  if(!token) return null;
  try{
    const payload = JSON.parse(atob(token.split(".")[1]))
    if (payload.exp && payload.exp * 1000 < Date.now()) {
      localStorage.removeItem(TOKEN_KEY);
      return null;
    }
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

export const isAdmin = () => getToken()?.user?.role === "admin";