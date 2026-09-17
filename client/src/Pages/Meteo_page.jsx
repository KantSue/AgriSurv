import { OpenWeatherApi, MeteoFuture } from "../modules/Meteo_api";
import { useFetch } from "../hooks_login/fetchApi";

export function MeteoPage() {
  const { data: resultat, err } = useFetch(OpenWeatherApi);
  const { data: forecasts } = useFetch(MeteoFuture);
  if (err) return <h6>Erreur:{err} </h6>;
  if (!resultat) return <p>Chargement...</p>;
  return (
    <div
      className="min-h-screen md:ml-56 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300
  pt-10"
    >
      {/* Sidebar */}
      <h2 className="text-2xl font-bold text-green-900 mb-6 text-center h">
        Toetrandro
      </h2>
      <section className="flex flex-row md:flex-row justify-between items-center bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow p-6 m-4">
        {/* Partie texte eto */}
        <div className="flex flex-col justify-between w-full md:w-2/3 text-left text-white">
          <div>
            <p className="text-sm md:text-base font-serif opacity-80">Anio</p>
            <p className="font-bold text-lg md:text-2xl mt-1">
              {resultat?.date?.toLocaleDateString("fr-FR", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}
            </p>

            <p className="mt-2 font-semibold capitalize text-white text-lg md:text-xl">
              {resultat.desc}
            </p>
          </div>

          <div className="mt-6 md:mt-10">
            <p className="text-md md:text-lg opacity-80">Marimpana</p>
            <p className="font-extrabold text-2xl md:text-3xl">
              {resultat.temp_min} °C
            </p>
          </div>
        </div>

        {/* Partie icône météo eto*/}
        <div className="flex justify-center items-center w-full md:w-1/3 mt-4 md:mt-0">
          <img
            src={`https://openweathermap.org/img/wn/${resultat?.icon}@4x.png`}
            alt={resultat?.desc}
            className=" md:w-48 md:h-48"
          />
        </div>
      </section>

      <section className="p-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Risika</h1>

        <div className="grid grid-cols-2 gap-4">
          {/* Humidité */}
          <div className="flex items-center gap-3 p-3 bg-blue-100 rounded-lg shadow hover:shadow-lg transition-shadow">
            <img src="/images/water.png" alt="water" className="w-10 h-10" />
            <div>
              <h2 className="font-semibold text-gray-700">Amandoana</h2>
              <p className="text-gray-900 text-lg">{resultat.humidite} %</p>
            </div>
          </div>

          {/* Vent */}
          <div className="flex items-center gap-3 p-3 bg-green-100 rounded-lg shadow hover:shadow-lg transition-shadow">
            <img src="/images/wind.png" alt="rivotra" className="w-10 h-10" />
            <div>
              <h2 className="font-semibold text-gray-700">Rivotra</h2>
              <p className="text-gray-900 text-lg">{resultat.vent} km/h</p>
            </div>
          </div>

          {/* Orana */}
          <div className="flex items-center gap-3 p-3 bg-indigo-100 rounded-lg shadow hover:shadow-lg transition-shadow">
            <img src="/images/thunder.png" alt="orana" className="w-10 h-10" />
            <div>
              <h2 className="font-semibold text-gray-700">Orana</h2>
              <p className="text-gray-900 text-lg">{resultat.pluie} mm</p>
            </div>
          </div>

          {/* Temp-max */}
          <div className="flex items-center gap-3 p-3 bg-red-100 rounded-lg shadow hover:shadow-lg transition-shadow">
            <img
              src="/images/fahrenheit.png"
              alt="temp"
              className="w-10 h-10"
            />
            <div>
              <h2 className="font-semibold text-gray-700">Marimpana</h2>
              <p className="text-gray-900 text-lg">{resultat.temp_max} °C</p>
            </div>
          </div>
        </div>
      </section>
      <section className="p-4">
        <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
          Toetrandro ny 5 andro ho avy
        </h1>

        
        <div className="flex gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-blue-100 p-2">
          {forecasts?.map((f, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-40 md:w-44 p-4 bg-blue-300 rounded-xl shadow hover:shadow-lg transition-shadow text-center"
            >
              <p className="font-semibold text-sm md:text-base">
                {f.date.toLocaleDateString("fr-FR")}
              </p>
              <img
                src={f.icon}
                alt={f.desc}
                className="mx-auto w-16 h-16 md:w-20 md:h-20 mt-2"
              />
              <p className="capitalize text-gray-800 mt-1 text-sm md:text-base">
                {f.desc}
              </p>
              <p className="mt-1 text-gray-700 text-sm md:text-base">
                {f.temp_min}°C - {f.temp_max}°C
              </p>
              <p className="text-gray-700 text-sm md:text-base">
                Rivotra: {f.vent} km/h
              </p>
              <p className="text-gray-700 text-sm md:text-base">
                Amandoana: {f.humidite} %
              </p>
            </div>
          ))}
        </div>
      </section>

   
    </div>
  );
}
