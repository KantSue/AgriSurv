import { useEffect, useState } from "react";

export function Alerte({ message, type = "success", duration = 3000 }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  const colors = {
    success: "bg-green-100 text-green-800",
    error: "bg-red-100 text-red-800",
    warning: "bg-yellow-100 text-yellow-800",
    info: "bg-blue-100 text-blue-800",
  };
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div
        className={`p-4 rounded-md ${colors[type]} shadow-lg transition-all duration-500 ease-out h-30 w-30 text-center  `}
        role="alert"

      >
        {message}
      </div>
    </div>
  );
}