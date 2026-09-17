import { useState, useCallback } from "react";

export function useActivity() {
  const [activity, setActivity] = useState({
    id_culture: null,
    id_varieter: null,
    id_cycle: null,
    id_categorie: null,
  });

 
  const setCulture = useCallback(
    (id) => setActivity((prev) => ({ ...prev, id_culture: id })),
    []
  );

  const setVarieter = useCallback(
    (id) => setActivity((prev) => ({ ...prev, id_varieter: id })),
    []
  );

  const setCycle = useCallback(
    (id) => setActivity((prev) => ({ ...prev, id_cycle: id })),
    []
  );

  const setCategorie = useCallback(
    (id) => setActivity((prev) => ({ ...prev, id_categorie: id })),
    []
  );

  return {
    activity,
    setCulture,
    setVarieter,
    setCycle,
    setCategorie,
  };
}
