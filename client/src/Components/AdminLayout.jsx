import { Navigate, NavLink, Outlet, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartColumn,
  faCalendarDays,
  faLightbulb,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { getToken, removeToken } from "../modules/auth";

const ADMIN_LINKS = [
  { name: "Statistiques", to: "/admin", icon: faChartColumn, end: true },
  { name: "Calendriers", to: "/admin/calendrier", icon: faCalendarDays },
  { name: "Torohevitra", to: "/admin/torohevitra", icon: faLightbulb },
];

export function AdminLayout() {
  const session = getToken();
  const navigate = useNavigate();

  if (!session) return <Navigate to="/login" replace />;
  if (session.user.role !== "admin") return <Navigate to="/Acceuil" replace />;

  const logout = () => {
    removeToken();
    navigate("/login", { replace: true });
  };

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2.5 rounded-lg whitespace-nowrap transition-colors ${
      isActive ? "bg-white text-[#0B2B26] font-semibold" : "text-green-100 hover:bg-white/10"
    }`;

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <aside className="md:fixed md:inset-y-0 md:left-0 md:w-60 flex md:flex-col bg-[#0B2B26] text-white">
        <div className="hidden md:flex items-center gap-3 px-6 py-6">
          <img src="/images/logo.png" alt="" className="w-9 h-9 object-cover" />
          <div>
            <p className="font-bold leading-tight">AgriSurv</p>
            <p className="text-xs text-green-200">Administration</p>
          </div>
        </div>
        <nav className="flex md:flex-col gap-1 px-2 md:px-3 py-2 md:py-0 overflow-x-auto flex-1">
          {ADMIN_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.end} className={linkClass}>
              <FontAwesomeIcon icon={link.icon} className="w-4" />
              {link.name}
            </NavLink>
          ))}
        </nav>
        <div className="flex md:block items-center px-3 md:px-6 md:py-6 md:border-t md:border-white/20">
          <p className="hidden md:block text-sm text-green-200 truncate">{session.user.nom}</p>
          <button
            type="button"
            onClick={logout}
            className="flex items-center gap-2 md:mt-2 text-green-100 hover:text-white whitespace-nowrap"
            title="Se déconnecter"
          >
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
            <span className="hidden md:inline">Déconnexion</span>
          </button>
        </div>
      </aside>
      <main className="md:ml-60 px-4 py-6 md:px-8 md:py-8 max-w-6xl">
        <Outlet />
      </main>
    </div>
  );
}

export function AdminTitle({ title, subtitle, action }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-3 mb-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-[#0B2B26]">{title}</h1>
        {subtitle && <p className="text-gray-600 mt-1">{subtitle}</p>}
      </div>
      {action}
    </div>
  );
}

// Message de retour après une action (succès ou erreur).
export function Feedback({ message }) {
  if (!message) return null;
  const isError = message.type === "error";
  return (
    <p
      role="status"
      className={`mb-4 rounded-lg px-4 py-3 ${
        isError ? "bg-red-50 text-red-800 border border-red-200" : "bg-green-50 text-green-800 border border-green-200"
      }`}
    >
      {message.text}
    </p>
  );
}

export const adminInput =
  "w-full rounded-lg border border-gray-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-green-700";
export const adminButton =
  "inline-flex items-center gap-2 rounded-lg bg-[#03624C] text-white px-4 py-2 font-medium hover:bg-green-800 disabled:bg-gray-400";
export const adminGhostButton =
  "inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm hover:bg-gray-50";
