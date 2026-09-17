export const allTypeConseilApi = async () => {
  try {
        const res = await fetch("http://localhost:3000/conseil/allType");
        if(!res.ok){
            const err=await res.json();
            return {success:false,message:err.message||"Erreur du serveur"}
        }
        const data=await res.json();
        return {success:true, result:data}
    
  } catch (err) {
    console.error(err);
    return { success: false, message: "Erreur dans  allTypeConseilApi" };
  }
}
export const allTitleConseil = async (type) => {
    try {
        const res = await fetch(`http://localhost:3000/conseil/bytype/${type}`);
        if (!res.ok) {
            const err = await res.json();
            return { success: false, message: err.message || "Erreur du serveur" };
        }
        const data = await res.json();
        return { success: true, result: data };
    } catch (err) {
        console.error(err);
        return { success: false, message: "Erreur dans allTitleConseil" };
    }
 }
 export const allAboutTitleConseil = async (title) => {
    try {
        const res = await fetch(`http://localhost:3000/conseil/byTitle/${title}`);
        if (!res.ok) {
            const err = await res.json();
            return { success: false, message: err.message || "Erreur du serveur" };
        }
        const data = await res.json();
        return { success: true, result: data };
    } catch (err) {
        console.error(err);
        return { success: false, message: "Erreur dans allAboutTitleConseil" };
    }
 }
 