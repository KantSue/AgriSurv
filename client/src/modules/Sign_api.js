import { setToken } from "./auth";

export const SignUpApi=async(form)=>{
    try {
    const response = await fetch("http://localhost:3000/login/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

     const result = await response.json();
     

    if (!response.ok) {
      return { success: false, message: result.message };
    } else {
      setToken(result.token);
      console.log(result.token)
      return { success: true, data: result };
    }
  } catch (err) {
    console.error(err);
    return { success: false, message: "Erreur serveur" };
  }
}