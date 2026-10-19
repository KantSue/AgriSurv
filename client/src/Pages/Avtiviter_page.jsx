import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faPersonDigging, faHourglassHalf } from "@fortawesome/free-solid-svg-icons";
import { usePlanning } from "../hooks_login/GestionPlanning";
import { useReadAll } from "../hooks_login/readAll";
import { cultureOfP } from "../modules/culture_module";
import { formatRangeMg, daysFromToday } from "../modules/dates";
import { Page, EmptyState } from "../Components/FarmerLayout";

const TABS = [
  { key: "enCours", label: "Ankehitriny", icon: faPersonDigging },
  { key: "aVenir", label: "Ho avy", icon: faHourglassHalf },
  { key: "passer", label: "Vita", icon: faCircleCheck },
];

const STATUS_STYLE = {
  enCours: { border: "border-l-amber-500", badge: "bg-amber-100 text-amber-800", label: "Atao izao" },
  aVenir: { border: "border-l-sky-500", badge: "bg-sky-100 text-sky-800", label: "Ho avy" },
  passer: { border: "border-l-gray-300", badge: "bg-gray-100 text-gray-600", label: "Lasa" },
};

// Variétés du paysan + la variété sélectionnée (la première par défaut).
export function useMyVariety() {
  const { data: varietes = [] } = useReadAll(cultureOfP);
  const [idVarieter, setIdVarieter] = useState(null);
  useEffect(() => {
    if (!idVarieter && varietes.length > 0) setIdVarieter(varietes[0].id_varieter);
  }, [varietes, idVarieter]);
  return { varietes, idVarieter, setIdVarieter };
}

function timingText(a) {
  if (a.status === "enCours") {
    const d = daysFromToday(a.date_fin);
    return d === 0 ? "Farany anio" : `Mifarana afaka ${d} andro`;
  }
  if (a.status === "aVenir") {
    const d = daysFromToday(a.date_debut);
    return d === 1 ? "Manomboka rahampitso" : `Manomboka afaka ${d} andro`;
  }
  return null;
}

export function ActivityCard({ activity }) {
  const style = STATUS_STYLE[activity.status];
  const timing = timingText(activity);
  return (
    <li className={`bg-white rounded-xl shadow-sm border-l-4 ${style.border} p-4`}>
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-[#0B2B26]">{activity.type_activite?.trim()}</h3>
        <span className={`shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full ${style.badge}`}>
          {style.label}
        </span>
      </div>
      <p className="mt-1 text-gray-700">{formatRangeMg(activity.date_debut, activity.date_fin)}</p>
      {timing && <p className="mt-1 text-sm font-medium text-[#03624C]">{timing}</p>}
    </li>
  );
}

export function ActiviterPages() {
  const { varietes, idVarieter, setIdVarieter } = useMyVariety();
  const { activities, loading, error } = usePlanning(idVarieter);
  const [tab, setTab] = useState("enCours");

  const byStatus = (key) => activities.filter((a) => a.status === key);
  // Les activités terminées : la plus récente en premier.
  const shown = tab === "passer" ? [...byStatus("passer")].reverse() : byStatus(tab);
  const current = varietes.find((v) => v.id_varieter === idVarieter);

  return (
    <Page title="Alimanaka" subtitle="Ny lahasa tokony hatao amin'ny volinao">
      {varietes.length === 0 ? (
        <EmptyState>
          Mbola tsy nisafidy karazana ianao.{" "}
          <Link to="/Culture/choice" className="text-[#03624C] font-semibold underline">
            Hisafidy izao
          </Link>
        </EmptyState>
      ) : (
        <>
          {varietes.length > 1 ? (
            <div className="flex gap-2 overflow-x-auto pb-2 mb-4">
              {varietes.map((v) => (
                <button
                  key={v.id_varieter}
                  type="button"
                  onClick={() => setIdVarieter(v.id_varieter)}
                  className={`shrink-0 px-4 py-2 rounded-full border-2 border-[#03624C] font-medium ${
                    v.id_varieter === idVarieter ? "bg-[#03624C] text-white" : "bg-white text-[#03624C]"
                  }`}
                >
                  {v.nom_varieter}
                </button>
              ))}
            </div>
          ) : (
            current && (
              <p className="mb-4 text-gray-700">
                Karazana: <span className="font-semibold text-[#03624C]">{current.nom_varieter}</span>
              </p>
            )
          )}

          <div className="grid grid-cols-3 gap-2 mb-5" role="tablist">
            {TABS.map((t) => {
              const active = tab === t.key;
              return (
                <button
                  key={t.key}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setTab(t.key)}
                  className={`flex flex-col items-center gap-1 rounded-xl py-3 px-1 transition-colors ${
                    active ? "bg-[#03624C] text-white shadow-md" : "bg-white text-[#03624C] shadow-sm"
                  }`}
                >
                  <FontAwesomeIcon icon={t.icon} className="text-lg" />
                  <span className="font-semibold">{t.label}</span>
                  <span className={`text-xs ${active ? "text-green-100" : "text-gray-500"}`}>
                    {loading ? "…" : `${byStatus(t.key).length} lahasa`}
                  </span>
                </button>
              );
            })}
          </div>

          {error ? (
            <EmptyState>{error}</EmptyState>
          ) : loading ? (
            <EmptyState>Andraso kely…</EmptyState>
          ) : shown.length === 0 ? (
            <EmptyState>Tsy misy lahasa eto.</EmptyState>
          ) : (
            <ul className="grid gap-3 md:grid-cols-2">
              {shown.map((a) => (
                <ActivityCard key={a.id_planning} activity={a} />
              ))}
            </ul>
          )}
        </>
      )}
    </Page>
  );
}
