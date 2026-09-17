import { createObs } from "../modules/Observatio_api";
import { useState } from "react";
export function ObservationPage(){
    const [titre,setTitre]=useState("");
     const [contenu,setContenu]=useState("");
      const [alerte, setAlerte] = useState({ message: "", type: "", show: false });
    const handleSubmit=async(e)=>{
        e.prenventDefault();
        if(titre===null|| contenu===null){
            setAlerte({message:"Mamenoa iray amin'ny fafana ",type: "error", show: true })
        }
        try{
            const response=await createObs(titre,contenu)
            if(!response.success ){
                 setAlerte({message:"mamenoa iray amin'y fafana",type: "error", show: true })
            }
        } catch (err) {
        setAlerte({ message: "fahadisoana tsy voahevitra", type: "error", show: true });
        return 
     
      
    }

    }
    return(
        <form id="obsevation" onSubmit={handleSubmit}>
            <label >
                Lohateny:
            </label>
            <input
            name="titre"
            type="text"
            value={titre}
            onChange={(e)=>setTitre(e.target.value)}
            ></input>
            <label>
                Fanamarihana:
            </label>
            <input
            name="contenu"
            type="text"
            value={titre}
            onChange={(e)=>setContenu(e.target.value)}
            >
            </input>
            <button>
                Ampidirina
            </button>
        </form>
    )
}