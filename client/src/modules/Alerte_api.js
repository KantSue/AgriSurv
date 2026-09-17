 import { getToken } from "./auth";



 export const updateAlerte = async (id_alerte) => {
  try {
        const res = await fetch(`http://localhost:3000/alerte/update/${id_alerte}`);
        if(!res.ok){
            const err=await res.json();
            return {success:false,message:err.message||"Erreur du serveur"}
        }
        const data=await res.json();
        return {success:true, result:data}
    
  } catch (err) {
    console.error(err);
    return { success: false, message: "Erreur dans  updateAlerte" };
  }
}
 export const deleteAlerte = async (id_alerte) => {
  try {
        const res = await fetch(`http://localhost:3000/alerte/delete/${id_alerte}`);
        if(!res.ok){
            const err=await res.json();
            return {success:false,message:err.message||"Erreur du serveur"}
        }
        const data=await res.json();
        return {success:true, result:data}
    
  } catch (err) {
    console.error(err);
    return { success: false, message: "Erreur dans  deleteAlerte" };
  }
}
export const generateAlerteDeb=async()=>{
  const token=getToken()
  const id_paysan=token.user.id
 
  try {
        const res = await fetch(`http://localhost:3000/alerte/generate/${id_paysan}`);
        if(!res.ok){
            const err=await res.json();
            console.log(err)
            return {success:false,message:err.message||"Erreur du serveur"}
        }
        const data=await res.json();
        console.log(data)
        return {success:true, result:data}
        
    
  } catch (err) {
    console.error(err);
    console.log(err)
    return { success: false, message: "Erreur dans  deleteAlerte" };
  }
}
export const AffichModule=async()=>{
  const token=getToken()
  const id_paysan=token.user.id
  try {
        const res = await fetch(`http://localhost:3000/alerte/afich/${id_paysan}`);
        if(!res.ok){
            const err=await res.json();
            return {success:false,message:err.message||"Erreur du serveur"}
        }
        const data=await res.json();
        return {success:true, result:data}
    
  } catch (err) {
    console.error(err);
    return { success: false, message: "Erreur dans  deleteAlerte" };
  }
}
