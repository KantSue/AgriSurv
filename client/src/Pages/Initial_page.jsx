import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getToken } from "../modules/auth";
import { routeAfterLogin } from "../modules/culture_module";

const SPLASH_DURATION = 1500;

export function Initial() {
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate();

  // Un paysan déjà connecté va directement à son espace, sinon à la connexion.
  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(async () => {
      const destination = getToken() ? await routeAfterLogin() : "/login";
      navigate(destination, { replace: true });
    }, SPLASH_DURATION);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="h-screen flex items-center justify-center bg-[#03624C]">
      <div
        className={`
          transition-all duration-1000 ease-out
          ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}
          flex flex-col items-center gap-4
        `}
      >
        <img
          src="/images/logo.png"
          alt="AgriSurv"
          className="w-24 h-24 md:w-32 md:h-32 object-cover"
        />
        <h1 className="text-center text-3xl font-bold text-white">AgriSurv</h1>
        <p className="text-center text-green-100">Tongasoa eto amin'ny AgriSurv</p>
      </div>
    </div>
  );
}
