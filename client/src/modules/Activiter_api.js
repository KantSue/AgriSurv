 
import { getToken } from "./auth";

export const getPlanings = async (id_varieter) => {
  const tokenData = getToken();
  const id_paysan = tokenData?.user?.id;
  const token = tokenData?.token;

  if (!id_paysan || !token) {
    return { success: false, message: "Utilisateur non authentifié" };
  }

  try {
    const res = await fetch(
      `http://localhost:3000/Activity/allPlanings/${id_paysan}/${id_varieter}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await res.json();

    if (!res.ok) {
      return { success: false, message: data.message || "Erreur serveur" };
    }

    return { success: true, result: data.resultat };

  } catch (err) {
    console.error(err);
    return { success: false, message: "Erreur réseau" };
  }
};
export const PlanningGestion=async(id_varieter)=>{
     const tokenData = getToken();
  const id_paysan = tokenData?.user?.id;
  const token = tokenData?.token;

  if (!id_paysan || !token) {
    return { success: false, message: "Utilisateur non authentifié" };
  }
  try {
    const res = await fetch(
      `http://localhost:3000/Activity/gestionPlaning/${id_paysan}/${id_varieter}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
 
    const data = await res.json();
  console.log("data",data)
    if (!res.ok) {
      return { success: false, message: data.message || "Erreur serveur" };
    }
    console.log(data.result)
    return { success: true, result: data.result };

  } catch (err) {
    console.error(err);
    return { success: false, message: "Erreur réseau" };
  }

  
}