import { useState, useEffect } from "react";

export const useFetch = (functionApi) => {
  const [data, setData] = useState(null);  
  const [err, setErr] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await functionApi();

        if (res.message) {
          setErr(res.message);
          setData(null);
        } else {
          setData(res); 
          setErr(null);
        }

      } catch (error) {
        setErr(error.message || "Erreur inconnue");
        setData(null);
      }
    };

    fetchData();
  }, [functionApi]);

  return { data, err };
};
