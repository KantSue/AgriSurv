import { Link, Navigate, NavLink, Outlet, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCalendarDays,
  faCloudSun,
  faLightbulb,
  faArrowRightFromBracket,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { getToken, removeToken } from "../modules/auth";

const NAV_LINKS = [
  { name: "Fandraisana", to: "/Acceuil", icon: faHouse },
  { name: "Alimanaka", to: "/Activiter", icon: faCalendarDays },
  { name: "Torohevitra", to: "/Conseil/Type", icon: faLightbulb },
  { name: "Toetrandro", to: "/Meteo", icon: faCloudSun },
];

function useLogout() {
  const navigate = useNavigate();
  return () => {
    removeToken();
    navigate("/login", { replace: true });
  };
}

// Cadre commun des écrans paysan : menu à gauche sur ordinateur, barre d'onglets en bas sur téléphone.
export function FarmerLayout() {
  const session = getToken();
  const logout = useLogout();

  if (!session) return <Navigate to="/login" replace />;
  if (session.user.role === "admin") return <Navigate to="/admin" replace />;

  return (
    <div className="min-h-screen bg-[#F3F8F2] text-gray-900">
      {/* Ordinateur */}
      <aside className="hidden md:flex fixed inset-y-0 left-0 w-60 flex-col bg-[#03624C] text-white">
        <Link to="/Acceuil" className="flex items-center gap-3 px-6 py-6">
          <img src="/images/logo.png" alt="" className="w-10 h-10 object-cover" />
          <span className="text-xl font-bold">AgriSurv</span>
        </Link>
        <nav className="flex flex-col gap-1 px-3">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg text-lg transition-colors ${
                  isActive ? "bg-white text-[#03624C] font-semibold" : "text-green-100 hover:bg-white/10"
                }`
              }
            >
              <FontAwesomeIcon icon={link.icon} className="w-5" />
              {link.name}
            </NavLink>
          ))}
        </nav>
        <div className="mt-auto px-6 py-6 border-t border-white/20">
          <p className="text-sm text-green-200">Tongasoa</p>
          <p className="font-semibold truncate">{session.user.nom}</p>
          <button
            type="button"
            onClick={logout}
            className="mt-3 flex items-center gap-2 text-green-100 hover:text-white"
          >
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
            Hiala
          </button>
        </div>
      </aside>

      {/* Téléphone : bandeau du haut */}
      <header className="md:hidden sticky top-0 z-30 flex items-center justify-between bg-[#03624C] text-white px-4 py-3 shadow">
        <Link to="/Acceuil" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="" className="w-8 h-8 object-cover" />
          <span className="font-bold">AgriSurv</span>
        </Link>
        <button
          type="button"
          onClick={logout}
          className="flex items-center gap-2 text-sm bg-white/10 rounded-full px-3 py-1.5"
        >
          <FontAwesomeIcon icon={faArrowRightFromBracket} />
          Hiala
        </button>
      </header>

      <main className="md:ml-60 pb-24 md:pb-10">
        <Outlet />
      </main>

      {/* Téléphone : onglets du bas, gros boutons faciles à toucher */}
      <nav className="md:hidden fixed bottom-0 inset-x-0 z-30 grid grid-cols-4 bg-white border-t border-gray-200 shadow-[0_-2px_8px_rgba(0,0,0,0.06)]">
        {NAV_LINKS.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center gap-1 py-2.5 text-xs font-medium ${
                isActive ? "text-[#03624C]" : "text-gray-500"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <span
                  className={`flex items-center justify-center w-12 h-8 rounded-full ${
                    isActive ? "bg-green-100" : ""
                  }`}
                >
                  <FontAwesomeIcon icon={link.icon} className="text-xl" />
                </span>
                {link.name}
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

// En-tête et marges communs à chaque écran paysan.
// tone="dark" : texte clair, pour un écran posé sur une image de fond.
export function Page({ title, subtitle, back, tone, children }) {
  const dark = tone === "dark";
  return (
    <div className="relative max-w-5xl mx-auto px-4 py-5 md:px-8 md:py-8">
      {back && (
        <Link
          to={back}
          className={`inline-flex items-center gap-2 mb-3 font-medium py-1 ${
            dark ? "text-green-100" : "text-[#03624C]"
          }`}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          Hiverina
        </Link>
      )}
      <h1 className={`text-2xl md:text-3xl font-bold ${dark ? "text-white drop-shadow" : "text-[#0B2B26]"}`}>
        {title}
      </h1>
      {subtitle && <p className={`mt-1 ${dark ? "text-green-50" : "text-gray-600"}`}>{subtitle}</p>}
      <div className="mt-5">{children}</div>
    </div>
  );
}

// Message quand une liste est vide ou en chargement.
export function EmptyState({ children }) {
  return <p className="bg-white rounded-xl p-5 text-center text-gray-600 shadow-sm">{children}</p>;
}
