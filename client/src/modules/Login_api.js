import { setToken } from "./auth";

export const LoginUserApi = async (form) => {
  try {
    const response = await fetch("http://localhost:3000/login/loging", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

     const result = await response.json();

    if (!response.ok) {
      return { success: false, message: result.message };
    } else {
      setToken(result.token)
      return { success: true, data: result };
    }
  } catch (err) {
    console.error(err);
    return { success: false, message: "Erreur serveur" };
  }
};
