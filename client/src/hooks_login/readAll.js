import { useState, useEffect } from "react";

export const useReadAll = (functionApi) => {
  const [data, setData] = useState([]);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await functionApi();
        if (!res.success) {
          setErr(res.message);
        } else {
          setData(res.result);
        }
      } catch (err) {
        setErr(err.message || "Erreur dans useReadAll");
      }
    };

    fetchData();
  }, [functionApi]);

  return { data, err };
};
