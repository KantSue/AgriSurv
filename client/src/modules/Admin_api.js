import { getToken } from "./auth";

const BASE = "http://localhost:3000/admin";

async function request(path, { method = "GET", body } = {}) {
  try {
    const res = await fetch(BASE + path, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()?.token}`,
      },
      body: body ? JSON.stringify(body) : undefined,
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) return { success: false, message: data.message || data.error || "Erreur serveur" };
    return { success: true, result: data };
  } catch (err) {
    console.error(err);
    return { success: false, message: "Serveur injoignable" };
  }
}

export const getStats = () => request("/stats");

export const getVarietes = () => request("/varietes");
export const getActivites = () => request("/activites");
export const getPlanning = (id_varieter) => request(`/planning/${id_varieter}`);
export const addPlanning = (ligne) => request("/planning", { method: "POST", body: ligne });
export const updatePlanning = (id, ligne) => request(`/planning/${id}`, { method: "PUT", body: ligne });
export const deletePlanning = (id) => request(`/planning/${id}`, { method: "DELETE" });

export const getConseils = () => request("/conseils");
export const addConseil = (conseil) => request("/conseils", { method: "POST", body: conseil });
export const updateConseil = (id, conseil) => request(`/conseils/${id}`, { method: "PUT", body: conseil });
export const deleteConseil = (id) => request(`/conseils/${id}`, { method: "DELETE" });
