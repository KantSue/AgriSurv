import { useCallback } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faTriangleExclamation,
  faPersonDigging,
  faHourglassHalf,
  faCircleCheck,
  faCloudRain,
  faChevronRight,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { useFetch } from "../hooks_login/fetchApi";
import { useReadAll } from "../hooks_login/readAll";
import { usePlanning } from "../hooks_login/GestionPlanning";
import { OpenWeatherApi } from "../modules/Meteo_api";
import { allTypeConseilApi, allTitleConseil } from "../modules/Conseil_api";
import { getToken } from "../modules/auth";
import { formatMg } from "../modules/dates";
import { Page, EmptyState } from "../Components/FarmerLayout";
import { Card, StatTile, HeroBanner, GlassStat } from "../Components/AppShell";
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

  const { varietes, idVarieter } = useMyVariety();
  const { activities, loading } = usePlanning(idVarieter);
  const count = (status) => (loading ? "…" : activities.filter((a) => a.status === status).length);
  const variete = varietes.find((v) => v.id_varieter === idVarieter);

  return (
    <Page>
      <div className="space-y-4">
        <HeroBanner
          eyebrow={`Anio ${formatMg(new Date())}`}
          title={`Manao ahoana, ${nom || ""}!`}
          subtitle={variete ? `Karazana: ${variete.nom_varieter}` : "Tongasoa eto amin'ny AgriSurv"}
          action={
            <a
              href="#fanairana"
              title="Fanairana"
              className="relative flex items-center justify-center w-11 h-11 shrink-0 rounded-full bg-white text-agri-900 shadow"
            >
              <FontAwesomeIcon icon={faBell} />
              {warning && <span className="absolute top-2 right-2.5 w-2.5 h-2.5 rounded-full bg-red-500" />}
            </a>
          }
        >
          <Link to="/Activiter">
            <GlassStat label="Lahasa anio" value={count("enCours")}>
              <p className="mt-1 flex items-center gap-1 text-xs text-agri-100">
                Alimanaka <FontAwesomeIcon icon={faArrowRight} />
              </p>
            </GlassStat>
          </Link>
          <Link to="/Meteo">
            <GlassStat
              label="Toetrandro"
              value={meteo?.temp_max !== undefined ? `${meteo.temp_max}°C` : "--"}
            >
              <p className="mt-1 text-xs capitalize text-agri-100">{meteo?.desc || "…"}</p>
            </GlassStat>
          </Link>
        </HeroBanner>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatTile icon={faPersonDigging} value={count("enCours")} label="Ankehitriny" />
          <StatTile icon={faHourglassHalf} value={count("aVenir")} label="Ho avy" />
          <StatTile icon={faCircleCheck} value={count("passer")} label="Vita" />
          <StatTile
            icon={faCloudRain}
            value={meteo?.pluie !== undefined ? `${meteo.pluie} mm` : "--"}
            label="Orana anio"
          />
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          <Card
            title="Lahasa anio"
            className="lg:col-span-2"
            action={
              <Link to="/Activiter" className="text-sm font-medium text-agri-600 rounded-full border border-agri-100 px-3 py-1">
                Alimanaka <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
              </Link>
            }
          >
            <TodayTasks varietes={varietes} activities={activities} loading={loading} />
          </Card>

          <div className="space-y-4">
            <Card title={<span id="fanairana" className="text-red-700"><FontAwesomeIcon icon={faBell} /> Fanairana</span>}>
              {warning ? (
                <p className="flex items-center gap-3 rounded-2xl bg-red-50 p-3 font-medium text-red-800">
                  <FontAwesomeIcon icon={faTriangleExclamation} className="text-xl" />
                  Toetr'andro: {warning}
                </p>
              ) : (
                <p className="text-gray-600">Tsy misy fanairana anio.</p>
              )}
            </Card>
            <Card title="Torohevitra">
              <TipOfTheDay />
            </Card>
          </div>
        </div>
      </div>
    </Page>
  );
}

function TodayTasks({ varietes, activities, loading }) {
  const today = activities.filter((a) => a.status === "enCours");

  if (varietes.length === 0) {
    return (
      <EmptyState>
        Mbola tsy nisafidy karazana ianao.{" "}
        <Link to="/Culture/choice" className="text-agri-600 font-semibold underline">
          Hisafidy izao
        </Link>
      </EmptyState>
    );
  }
  if (loading) return <p className="text-gray-600">Andraso kely…</p>;
  if (today.length === 0) {
    const next = activities.find((a) => a.status === "aVenir");
    return (
      <div className="space-y-3">
        <p className="text-gray-600">Tsy misy lahasa atao anio.</p>
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
  const type = types.length > 0 ? types[day % types.length] : null;
  const loadTips = useCallback(
    () => (type ? allTitleConseil(type.type_conseil) : Promise.resolve({ success: true, result: [] })),
    [type]
  );
  const { data: tips = [] } = useReadAll(loadTips);
  const tip = tips.length > 0 ? tips[day % tips.length] : null;

  if (!tip) return <p className="text-gray-600">Andraso kely…</p>;
  return (
    <Link to={`/Conseil/Type/Titre/${encodeURIComponent(tip.titre)}`} className="block group">
      {type.pictogramme && (
        <img src={type.pictogramme} alt="" className="w-full h-28 object-cover rounded-2xl mb-3" />
      )}
      <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">{tip.type_conseil}</p>
      <h3 className="mt-1 font-semibold text-agri-900">{tip.titre}</h3>
      <p className="mt-1 text-sm text-gray-700 line-clamp-3">{tip.contenu}</p>
      <span className="mt-2 inline-flex items-center gap-1 text-agri-600 font-medium group-hover:underline">
        Hamaky bebe kokoa <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
      </span>
    </Link>
  );
}
