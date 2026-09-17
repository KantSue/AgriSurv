export const createObs = async (form) => {
  try {
    const response = await fetch("http://localhost:3000/observation/creation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const result = await response.json();

    if (!response.ok) {
      return { success: false, message: result.message };
    } else {
      return { success: true, data: result };
    }
  } catch (err) {
    console.error(err);
    return { success: false, message: "Erreur serveur" };
  }
};
export const readObsAll = async () => {
  try {
    const res = await fetch("http://localhost:3000/observation/readAll");
    if (!res.ok) {
      const err = await res.json();
      return { success: false, message: err.message || "Erreur du serveur" };
    }
    const data = await res.json();
    return { success: true, result: data };
  } catch (err) {
    console.error(err);
    return { success: false, message: "Erreur dans  readObsAll" };
  }
};
export const getOneObs = async (id_observation) => {
  try {
    const res = await fetch(
      `http://localhost:3000/observation/Oneread/${id_observation}`
    );
    if (!res.ok) {
      const err = await res.json();
      return { success: false, message: err.message || "Erreur du serveur" };
    }
    const data = await res.json();
    return { success: true, result: data };
  } catch (err) {
    console.error(err);
    return { success: false, message: "Erreur dans  getOneObs" };
  }
};
export const DeleteObs = async (id_observation) => {
  try {
    const res = await fetch(
      `http://localhost:3000/observation/delete/${id_observation}`
    );
    if (!res.ok) {
      const err = await res.json();
      return { success: false, message: err.message || "Erreur du serveur" };
    }
    const data = await res.json();
    return { success: true, result: data };
  } catch (err) {
    console.error(err);
    return { success: false, message: "Erreur dans  DeleteObs" };
  }
};
export const UpdatObs = async (form) => {
  try {
    const response = await fetch("http://localhost:3000/observation/update", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const result = await response.json();

    if (!response.ok) {
      // On retourne l'erreur
      return { success: false, message: result.message };
    } else {
      // On retourne le résultat
      return { success: true, data: result };
    }
  } catch (err) {
    console.error(err);
    return { success: false, message: "Erreur serveur" };
  }
};

