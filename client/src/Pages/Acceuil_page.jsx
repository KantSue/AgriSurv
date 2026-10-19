import { useCallback } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faLightbulb,
  faTriangleExclamation,
  faPersonDigging,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useFetch } from "../hooks_login/fetchApi";
import { useReadAll } from "../hooks_login/readAll";
import { usePlanning } from "../hooks_login/GestionPlanning";
import { OpenWeatherApi } from "../modules/Meteo_api";
import { allTypeConseilApi, allTitleConseil } from "../modules/Conseil_api";
import { getToken } from "../modules/auth";
import { formatMg } from "../modules/dates";
import { Page, EmptyState } from "../Components/FarmerLayout";
import { ActivityCard, useMyVariety } from "./Avtiviter_page";

// Seuils au-delà desquels on prévient le paysan.
const VENT_FORT_KMH = 40;
const PLUIE_FORTE_MM = 5;

function weatherWarning(meteo) {
  if (!meteo || meteo.success === false) return null;
  if (meteo.vent >= VENT_FORT_KMH) return `Rivotra mahery: ${meteo.vent} km/h`;
  if (meteo.pluie >= PLUIE_FORTE_MM) return `Orana be: ${meteo.pluie} mm`;
  return null;
}

export function AcceuilPage() {
  const nom = getToken()?.user?.nom;
  const { data: meteo } = useFetch(OpenWeatherApi);
  const warning = weatherWarning(meteo);

  return (
    <Page title={`Manao ahoana, ${nom || ""}!`} subtitle={`Anio ${formatMg(new Date())}`}>
      {warning && (
        <div className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-800 rounded-xl p-4 mb-5">
          <FontAwesomeIcon icon={faTriangleExclamation} className="text-xl" />
          <p className="font-medium">Fampitandremana — {warning}</p>
        </div>
      )}

      <section className="mb-6">
        <h2 className="flex items-center gap-2 text-xl font-bold text-[#0B2B26] mb-3">
          <FontAwesomeIcon icon={faPersonDigging} className="text-[#03624C]" />
          Lahasa anio
        </h2>
        <TodayTasks />
      </section>

      <section className="grid grid-cols-2 gap-3 mb-6">
        <Link
          to="/Activiter"
          className="flex flex-col justify-between gap-4 bg-[#03624C] text-white rounded-2xl p-4 shadow-md min-h-28"
        >
          <FontAwesomeIcon icon={faCalendarDays} className="text-3xl" />
          <span className="text-lg font-semibold">Alimanaka</span>
        </Link>
        <Link
          to="/Meteo"
          className="flex flex-col justify-between gap-2 bg-sky-500 text-white rounded-2xl p-4 shadow-md min-h-28"
        >
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold">
              {meteo?.temp_max !== undefined ? `${meteo.temp_max}°` : "--"}
            </span>
            {meteo?.icon && (
              <img
                src={`https://openweathermap.org/img/wn/${meteo.icon}@2x.png`}
                alt={meteo.desc}
                className="w-14 h-14 -my-2"
              />
            )}
          </div>
          <span className="text-lg font-semibold">Toetrandro</span>
        </Link>
      </section>

      <section>
        <h2 className="flex items-center gap-2 text-xl font-bold text-[#0B2B26] mb-3">
          <FontAwesomeIcon icon={faLightbulb} className="text-amber-500" />
          Torohevitra
        </h2>
        <TipOfTheDay />
      </section>
    </Page>
  );
}

function TodayTasks() {
  const { varietes, idVarieter } = useMyVariety();
  const { activities, loading } = usePlanning(idVarieter);
  const today = activities.filter((a) => a.status === "enCours");

  if (varietes.length === 0) {
    return (
      <EmptyState>
        Mbola tsy nisafidy karazana ianao.{" "}
        <Link to="/Culture/choice" className="text-[#03624C] font-semibold underline">
          Hisafidy izao
        </Link>
      </EmptyState>
    );
  }
  if (loading) return <EmptyState>Andraso kely…</EmptyState>;
  if (today.length === 0) {
    const next = activities.find((a) => a.status === "aVenir");
    return (
      <div className="space-y-3">
        <EmptyState>Tsy misy lahasa atao anio.</EmptyState>
        {next && (
          <>
            <p className="text-sm font-medium text-gray-600">Lahasa manaraka:</p>
            <ul>
              <ActivityCard activity={next} />
            </ul>
          </>
        )}
      </div>
    );
  }
  return (
    <ul className="grid gap-3 md:grid-cols-2">
      {today.map((a) => (
        <ActivityCard key={a.id_planning} activity={a} />
      ))}
    </ul>
  );
}

// Un conseil différent chaque jour, pris dans un thème qui change aussi chaque jour.
function TipOfTheDay() {
  const day = Math.floor(Date.now() / 86400000);
  const { data: types = [] } = useReadAll(allTypeConseilApi);
  const type = types.length > 0 ? types[day % types.length].type_conseil : null;
  const loadTips = useCallback(
    () => (type ? allTitleConseil(type) : Promise.resolve({ success: true, result: [] })),
    [type]
  );
  const { data: tips = [] } = useReadAll(loadTips);
  const tip = tips.length > 0 ? tips[day % tips.length] : null;

  if (!tip) return <EmptyState>Andraso kely…</EmptyState>;
  return (
    <Link
      to={`/Conseil/Type/Titre/${encodeURIComponent(tip.titre)}`}
      className="block bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow"
    >
      <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">{tip.type_conseil}</p>
      <h3 className="mt-1 text-lg font-semibold text-[#0B2B26]">{tip.titre}</h3>
      <p className="mt-1 text-gray-700 line-clamp-3">{tip.contenu}</p>
      <span className="mt-2 inline-flex items-center gap-1 text-[#03624C] font-medium">
        Hamaky bebe kokoa <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
      </span>
    </Link>
  );
}
