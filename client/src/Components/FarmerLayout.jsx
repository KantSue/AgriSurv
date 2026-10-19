import { Link, Navigate, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCalendarDays,
  faCloudSun,
  faLightbulb,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { getToken } from "../modules/auth";
import { AppShell } from "./AppShell";

const NAV_LINKS = [
  { name: "Fandraisana", to: "/Acceuil", icon: faHouse },
  { name: "Alimanaka", to: "/Activiter", icon: faCalendarDays },
  { name: "Torohevitra", to: "/Conseil/Type", icon: faLightbulb },
  { name: "Toetrandro", to: "/Meteo", icon: faCloudSun },
];

export function FarmerLayout() {
  const session = getToken();

  if (!session) return <Navigate to="/login" replace />;
  if (session.user.role === "admin") return <Navigate to="/admin" replace />;

  return (
    <AppShell links={NAV_LINKS} home="/Acceuil" userName={session.user.nom}>
      <Outlet />
    </AppShell>
  );
}

// En-tête et marges communs à chaque écran paysan.
// tone="dark" : texte clair, pour un écran posé sur une image de fond.
export function Page({ title, subtitle, back, tone, children }) {
  const dark = tone === "dark";
  return (
    <div className="relative max-w-6xl mx-auto px-4 py-5 md:px-6 md:py-6">
      {back && (
        <Link
          to={back}
          className={`inline-flex items-center gap-2 mb-3 font-medium py-1 ${
            dark ? "text-agri-100" : "text-agri-600"
          }`}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          Hiverina
        </Link>
      )}
      {title && (
        <h1 className={`text-2xl md:text-3xl font-bold ${dark ? "text-white drop-shadow" : "text-agri-900"}`}>
          {title}
        </h1>
      )}
      {subtitle && <p className={`mt-1 ${dark ? "text-agri-50" : "text-gray-600"}`}>{subtitle}</p>}
      <div className={title || back ? "mt-5" : ""}>{children}</div>
    </div>
  );
}

// Message quand une liste est vide ou en chargement.
export function EmptyState({ children }) {
  return <p className="bg-white rounded-2xl p-5 text-center text-gray-600 shadow-sm">{children}</p>;
}
