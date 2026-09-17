import { useState, useEffect } from "react";
import { PlanningGestion } from "../modules/Activiter_api";

export function usePlanning(idVarieter) {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!idVarieter)return;
    const fetchActivities = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await PlanningGestion(idVarieter);

        if (!res.success) {
          throw new Error(res.message || "Erreur serveur");
        }

        const planning = res.result;
      
        const combiner=[]
        for (const p of planning){
            combiner.push(
                ...(p.passees?.map(a => ({ ...a, status: "passer" })) || []),
                 ...(p.enCours?.map(a => ({ ...a, status: "enCours" })) || []),
                  ...(p.aVenir?.map(a => ({ ...a, status: "aVenir" })) || [])
            )
        }
       

        setActivities(combiner);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }; 

    fetchActivities();
   
  }, [idVarieter]);

    console.log("Activities mises à jour :", activities);


  return { activities, loading, error };
}
