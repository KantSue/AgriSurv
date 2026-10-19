import { OpenWeatherApi, MeteoFuture } from "../modules/Meteo_api";
import { useFetch } from "../hooks_login/fetchApi";
import { getToken } from "../modules/auth";
import { formatMg } from "../modules/dates";
import { Page, EmptyState } from "../Components/FarmerLayout";

const ANDRO = ["Alahady", "Alatsinainy", "Talata", "Alarobia", "Alakamisy", "Zoma", "Sabotsy"];

function Measure({ image, label, value, tint }) {
  return (
    <div className={`flex items-center gap-3 p-4 rounded-xl ${tint}`}>
      <img src={image} alt="" className="w-10 h-10" />
      <div>
        <p className="text-sm text-gray-700">{label}</p>
        <p className="text-xl font-bold text-gray-900">{value}</p>
      </div>
    </div>
  );
}

export function MeteoPage() {
  const { data: today, err } = useFetch(OpenWeatherApi);
  const { data: forecasts } = useFetch(MeteoFuture);
  const region = getToken()?.user?.localisation;

  return (
    <Page title="Toetrandro" subtitle={region}>
      {err ? (
        <EmptyState>Tsy azo ny toetrandro. Andramo indray rehefa kelikely.</EmptyState>
      ) : !today ? (
        <EmptyState>Andraso kely…</EmptyState>
      ) : (
        <>
          <section className="flex items-center justify-between bg-gradient-to-br from-sky-500 to-sky-700 text-white rounded-2xl shadow-md p-5">
            <div>
              <p className="opacity-90">Anio {formatMg(today.date)}</p>
              <p className="text-5xl font-bold mt-2">{today.temp_max}°C</p>
              <p className="mt-1 text-lg capitalize">{today.desc}</p>
            </div>
            <img
              src={`https://openweathermap.org/img/wn/${today.icon}@4x.png`}
              alt={today.desc}
              className="w-28 h-28 md:w-40 md:h-40 -my-4"
            />
          </section>

          <section className="grid grid-cols-2 gap-3 mt-4">
            <Measure image="/images/thunder.png" label="Orana" value={`${today.pluie} mm`} tint="bg-indigo-50" />
            <Measure image="/images/wind.png" label="Rivotra" value={`${today.vent} km/h`} tint="bg-green-50" />
            <Measure image="/images/water.png" label="Hamandoana" value={`${today.humidite} %`} tint="bg-sky-50" />
            <Measure
              image="/images/fahrenheit.png"
              label="Hafanana ambany"
              value={`${today.temp_min}°C`}
              tint="bg-red-50"
            />
          </section>

          {Array.isArray(forecasts) && forecasts.length > 0 && (
            <section className="mt-6">
              <h2 className="text-xl font-bold text-[#0B2B26] mb-3">Andro ho avy</h2>
              <ul className="grid gap-2">
                {forecasts.map((f) => (
                  <li
                    key={f.date.toISOString()}
                    className="flex items-center gap-3 bg-white rounded-xl shadow-sm px-4 py-2"
                  >
                    <div className="w-28">
                      <p className="font-semibold">{ANDRO[f.date.getDay()]}</p>
                      <p className="text-sm text-gray-500">{formatMg(f.date, false)}</p>
                    </div>
                    <img src={f.icon} alt="" className="w-12 h-12" />
                    <p className="flex-1 capitalize text-gray-700">{f.desc}</p>
                    <p className="text-lg font-semibold whitespace-nowrap">{f.temp_max}°</p>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </>
      )}
    </Page>
  );
}
