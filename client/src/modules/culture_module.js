import { getToken, isAdmin } from "./auth";
export const allCulture = async () => {
   const tokenData = getToken();
const localisation = tokenData?.user?.localisation;
  try {
        const res = await fetch(`http://localhost:3000/culture/showAll/${localisation}`);
        if(!res.ok){
            const err=await res.json();
            return {success:false,message:err.message||"Erreur du serveur"}
        }
        const data=await res.json();
        console.log(data)
        return {success:true, result:data}
    
  } catch (err) {
    console.error(err);
    return { success: false, message: "Erreur dans  allCulture" };
  }
}
export const allVariety = async (id_culture,id_varieter) => {
  try {
        const res = await fetch(`http://localhost:3000/culture/Variety/${id_culture}/${id_varieter}`);
        if(!res.ok){
            const err=await res.json();
            return {success:false,message:err.message||"Erreur du serveur"}
        }
        const data=await res.json();
        return {success:true, result:data}
    
  } catch (err) {
    console.error(err);
    return { success: false, message: "Erreur dans  allVariety" };
  }
}
export const allVariety2 = async (id_culture) => {
  try {
        const res = await fetch(`http://localhost:3000/culture/Variety2/${id_culture}`);
        if(!res.ok){
            const err=await res.json();
            return {success:false,message:err.message||"Erreur du serveur"}
        }
        const data=await res.json();
        return {success:true, result:data}
    
  } catch (err) {
    console.error(err);
    return { success: false, message: "Erreur dans  allVariety" };
  }
}

export const allcatego = async (id_culture) => {
  try {
        const res = await fetch(`http://localhost:3000/culture/categorie/${id_culture}`);
        if(!res.ok){
            const err=await res.json();
            return {success:false,message:err.message||"Erreur du serveur"}
        }
        const data=await res.json();
        return {success:true, result:data}
    
  } catch (err) {
    console.error(err);
    return { success: false, message: "Erreur dans  allcatego" };
  }
}

export const cultureOfP = async () => {
   const token=getToken()
  const id_paysan=token.user.id
    try {
        const res = await fetch(`http://localhost:3000/culture/getVarieter/${id_paysan}`);
        if (!res.ok) {
            const err = await res.json();
            return { success: false, message: err.message || "Erreur du serveur" };
        }
        const data = await res.json();
        console.log(data)
        return { success: true, result: data };
    } catch (err) {
        console.error(err);
        return { success: false, message: "Erreur dans allTitleConseil" };
    }
 }

 export const infoOfCu = async (id_culture) => {
    try {
        const res = await fetch(`http://localhost:3000/culture/oneInfo/${id_culture}`);
        if (!res.ok) {
            const err = await res.json();
            return { success: false, message: err.message || "Erreur du serveur" };
        }
        const data = await res.json();
        return { success: true, result: data };
    } catch (err) {
        console.error(err);
        return { success: false, message: "Erreur dans infoOfCu" };
    }
 }
  export const IsAlredyExistInPratiquer = async () => {
       const tokenData = getToken();
      const id_paysan = tokenData?.user?.id;
    try {
        const res = await fetch(`http://localhost:3000/culture/getInfo/${id_paysan}`);
        if (!res.ok) {
            const err = await res.json();
            return { success: false, message: err.message || "Erreur du serveur" };
        }
        const data = await res.json();
        return { success: true, result: data };
    } catch (err) {
        console.error(err);
        return { success: false, message: "Erreur dans IsAlredyExistInPratiquer" };
    }
 }
// Après connexion : l'espace admin, l'accueil si le paysan a déjà une variété, sinon le choix de variété.
export const routeAfterLogin = async () => {
  if (isAdmin()) return "/admin";
  const response = await IsAlredyExistInPratiquer();
  return response.success && response.result.length > 0 ? "/Acceuil" : "/Culture/choice";
};

export const allRegions = async () => {
  try {
    const res = await fetch("http://localhost:3000/culture/regions");
    if (!res.ok) {
      return { success: false, message: "Erreur du serveur" };
    }
    return { success: true, result: await res.json() };
  } catch (err) {
    console.error(err);
    return { success: false, message: "Erreur dans allRegions" };
  }
};

export const PutInPra = async ({ id_varieter }) => {
  const tokenData = getToken();
  const id_paysan = tokenData?.user?.id;

  if (!id_paysan) {
    return { success: false, message: "Utilisateur non connecté" };
  }

  if (!id_varieter) {
    return { success: false, message: "Aucune variété sélectionnée" };
  }

  try {
    const res = await fetch("http://localhost:3000/culture/insert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id_paysan, id_varieter }),
    });

    if (!res.ok) {
      const err = await res.json();
      return { success: false, message: err.message || "Erreur serveur" };
    }

    const data = await res.json();
    return { success: true, result: data };
  } catch (err) {
    console.error("Erreur dans PutInPra:", err);
    return { success: false, message: "Erreur réseau ou serveur" };
  }
};

 