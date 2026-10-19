import { Link, NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { removeToken } from "../modules/auth";

// Cadre partagé par l'espace paysan et l'espace admin : même barre de menu, mêmes couleurs.
// Ordinateur : rail d'icônes arrondi à gauche. Téléphone : bandeau en haut + onglets en bas.
export function AppShell({ links, home, userName, logoutLabel = "Hiala", children }) {
  const navigate = useNavigate();
  const logout = () => {
    removeToken();
    navigate("/login", { replace: true });
  };

  return (
    <div className="min-h-screen bg-agri-50 text-gray-900">
      <aside className="hidden md:flex fixed top-4 bottom-4 left-4 z-30 w-24 flex-col items-center rounded-3xl bg-agri-900 py-5 shadow-xl">
        <Link to={home} className="flex items-center justify-center w-12 h-12 rounded-2xl bg-agri-100" title="AgriSurv">
          <img src="/images/logo.png" alt="AgriSurv" className="w-8 h-8 object-cover" />
        </Link>
        <nav className="mt-8 flex flex-col gap-2">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              title={link.name}
              className={({ isActive }) =>
                `flex flex-col items-center gap-1 w-20 py-2.5 rounded-2xl text-[11px] font-medium transition-colors ${
                  isActive ? "bg-agri-300 text-agri-950" : "text-agri-300 hover:bg-agri-800 hover:text-white"
                }`
              }
            >
              <FontAwesomeIcon icon={link.icon} className="text-lg" />
              {link.name}
            </NavLink>
          ))}
        </nav>
        <div className="mt-auto flex flex-col items-center gap-4">
          <button
            type="button"
            onClick={logout}
            title={logoutLabel}
            className="flex flex-col items-center gap-1 text-[11px] text-agri-300 hover:text-white"
          >
            <FontAwesomeIcon icon={faArrowRightFromBracket} className="text-lg" />
            {logoutLabel}
          </button>
          <div className="flex flex-col items-center gap-1" title={userName}>
            <img src="/images/user.png" alt="" className="w-11 h-11 rounded-2xl bg-agri-100 p-1 object-cover" />
            <span className="max-w-20 truncate text-[11px] text-agri-100">{userName}</span>
          </div>
        </div>
      </aside>

      <header className="md:hidden sticky top-0 z-30 flex items-center justify-between bg-agri-900 text-white px-4 py-3 shadow">
        <Link to={home} className="flex items-center gap-2">
          <img src="/images/logo.png" alt="" className="w-8 h-8 object-cover" />
          <span className="font-bold">AgriSurv</span>
        </Link>
        <button
          type="button"
          onClick={logout}
          className="flex items-center gap-2 text-sm bg-agri-800 rounded-full px-3 py-1.5"
        >
          <FontAwesomeIcon icon={faArrowRightFromBracket} />
          {logoutLabel}
        </button>
      </header>

      <main className="md:ml-28 pb-24 md:pb-6">{children}</main>

      <nav
        className="md:hidden fixed bottom-0 inset-x-0 z-30 grid bg-agri-900"
        style={{ gridTemplateColumns: `repeat(${links.length}, minmax(0, 1fr))` }}
      >
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.end}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center gap-1 py-2.5 text-xs font-medium ${
                isActive ? "text-white" : "text-agri-300"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <span
                  className={`flex items-center justify-center w-12 h-8 rounded-full ${
                    isActive ? "bg-agri-300 text-agri-950" : ""
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

// Carte blanche arrondie, brique de base des écrans.
export function Card({ title, action, className = "", children }) {
  return (
    <section className={`min-w-0 bg-white rounded-3xl shadow-sm p-5 ${className}`}>
      {(title || action) && (
        <div className="flex items-center justify-between gap-3 mb-4">
          {title && <h2 className="text-lg font-semibold text-agri-900">{title}</h2>}
          {action}
        </div>
      )}
      {children}
    </section>
  );
}

// Petite carte chiffre clé : icône dans un rond + valeur + libellé.
export function StatTile({ icon, value, label, hint }) {
  return (
    <div className="min-w-0 flex items-center gap-3 bg-white rounded-3xl shadow-sm p-4">
      <span className="flex items-center justify-center shrink-0 w-11 h-11 rounded-full bg-agri-100 text-agri-700">
        <FontAwesomeIcon icon={icon} />
      </span>
      <div className="min-w-0">
        <p className="text-2xl font-bold text-agri-900 tabular-nums leading-tight">{value}</p>
        <p className="text-sm text-gray-600 leading-tight">{label}</p>
        {hint && <p className="text-xs text-gray-500 leading-tight">{hint}</p>}
      </div>
    </div>
  );
}

// Bannière du haut : l'image AgriSurv, titre posé dessus, et des cartes translucides.
export function HeroBanner({ eyebrow, title, subtitle, action, children }) {
  return (
    <section className="relative overflow-hidden rounded-3xl shadow-sm min-h-56 md:min-h-72">
      <img src="/images/hero.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-agri-950/90 via-agri-900/60 to-agri-900/10" />
      <div className="relative flex flex-col justify-between gap-6 h-full min-h-56 md:min-h-72 p-5 md:p-7 text-white">
        <div className="flex items-start justify-between gap-3">
          <div>
            {eyebrow && <p className="text-xs uppercase tracking-widest text-agri-100">{eyebrow}</p>}
            <h1 className="mt-1 text-2xl md:text-4xl font-bold leading-tight">{title}</h1>
            {subtitle && <p className="mt-1 text-agri-100">{subtitle}</p>}
          </div>
          {action}
        </div>
        {children && <div className="flex flex-wrap gap-3">{children}</div>}
      </div>
    </section>
  );
}

export function GlassStat({ label, value, children }) {
  return (
    <div className="min-w-36 rounded-2xl border border-white/25 bg-white/15 backdrop-blur-md px-4 py-3">
      <p className="text-xs text-agri-100">{label}</p>
      <p className="text-2xl font-bold">{value}</p>
      {children}
    </div>
  );
}
