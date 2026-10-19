import { Navigate, Outlet } from "react-router-dom";
import { faChartColumn, faCalendarDays, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { getToken } from "../modules/auth";
import { AppShell } from "./AppShell";

const ADMIN_LINKS = [
  { name: "Statistiques", to: "/admin", icon: faChartColumn, end: true },
  { name: "Calendriers", to: "/admin/calendrier", icon: faCalendarDays },
  { name: "Torohevitra", to: "/admin/torohevitra", icon: faLightbulb },
];

export function AdminLayout() {
  const session = getToken();

  if (!session) return <Navigate to="/login" replace />;
  if (session.user.role !== "admin") return <Navigate to="/Acceuil" replace />;

  return (
    <AppShell links={ADMIN_LINKS} home="/admin" userName={session.user.nom} logoutLabel="Quitter">
      <div className="max-w-6xl mx-auto px-4 py-5 md:px-6 md:py-6">
        <Outlet />
      </div>
    </AppShell>
  );
}

export function AdminTitle({ title, subtitle, action }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-3 mb-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-agri-900">{title}</h1>
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
