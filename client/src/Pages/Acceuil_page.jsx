import React, { useEffect, useState } from "react";
import { useFetch } from "../hooks_login/fetchApi";
import { OpenWeatherApi } from "../modules/Meteo_api";
import { Link, useNavigate } from "react-router-dom";
import { getToken } from "../modules/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useReadAll } from "../hooks_login/readAll";
import { allTypeConseilApi } from "../modules/Conseil_api";

import {
  faBell,
  faCalendar,
  faPersonDigging,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";

import { ToDoToday } from "../Pages/Avtiviter_page";
import { GetOne } from "./ConseilPage";

export function AcceuilPage() {
  const navigate = useNavigate();
  // const [nom,setNom]=useState("");
  // const [localisation,setLoc]=useState("");
  const [id, setid] = useState(null);
  const [weatherwarning, setWeather] = useState({});
  // const[actitviteWarning,setActivity]=useState({})
  useEffect(() => {
    const token = getToken();
    if (!token) {
      alert("Avereno ny fisoratana anarana");
      navigate("/login");
    } else {
      // setNom(token.user.nom);
      // setLoc(token.user.localisation );
      setid(token.user.id);
    }
  }, [navigate]);
  const { data: types, err } = useReadAll(allTypeConseilApi);

  const { data: resultat } = useFetch(OpenWeatherApi);

  console.log("meteo",resultat)
  console.log(types);
  useEffect(() => {
    if (!resultat) return; 
    if (resultat.vent > 1) {
      setWeather({ valeur: resultat.vent, message: "rivotra mahery" });
    } else if (resultat.pluie > 1) {
      setWeather({ valeur: resultat.pluie, message: "orana matevina" });
    } else {
      setWeather({}); 
    }
  }, [resultat]);

  if (err) return <h6>Erreur: {err}</h6>;
  console.log("ito ,isy errreur", err);
  console.log("ito ,ilay tableau", types);

  return (
   <div className="md:ml-56  md:p-4 h-full md:h-full w-full md:pr-56 font-sans">
  {/* Hero */}
  <section>
    <img
      src="/images/hero.png"
      alt="Culture"
      className="w-full h-60 md:h-80 object-cover rounded-b-2xl shadow-md"
    />
  </section>

  <div className="px-4">
    {/* Cards ambony */}
    <div className="flex flex-row md:flex-row gap-6 justify-center mt-6">
      {/* ALIMANAKA */}
      <div className="bg-gradient-to-r from-green-700 to-green-600 md:w-96 w-40 p-6 h-24 text-center shadow-xl rounded-2xl flex items-center justify-center gap-4 transform hover:-translate-y-1 transition-transform duration-300">
        <FontAwesomeIcon
          icon={faCalendar}
          className="h-7 w-7 text-green-100"
        />
        <Link
          to={"/Activiter"}
          className="text-green-100 text-sm md:text-lg font-semibold tracking-wide"
        >
          ALIMANAKA
        </Link>
      </div>

      {/* METEO */}
      <div className="bg-blue-400 md:w-96 w-40 p-4 h-24 shadow-xl rounded-2xl flex flex-row items-center justify-between gap-4 hover:shadow-2xl transition-shadow duration-300">
        <div>
          <Link
            to={"/Meteo"}
            className="text-gray-800 font-semibold text-sm md:text-base tracking-wide"
          >
            Toetrandro
          </Link>
          <p className="text-gray-500 text-xs md:text-sm mt-1">Maripana</p>
          <p className="font-bold text-gray-900 text-base md:text-lg">
            {resultat?.temp_max ?? "--"} °C
          </p>
        </div>
        <div>
          <img
            src={`https://openweathermap.org/img/wn/${resultat?.icon}@4x.png`}
            alt={resultat?.desc}
            className="w-24 h-24 md:w-24 md:h-24"
          />
        </div>
      </div>
    </div>

    {/* Sections */}
    <section className="mt-8 space-y-6">
      {/* FANAIRANA */}
      <div className="flex flex-col w-full">
        <div className="flex items-center gap-2 text-red-700 mb-2">
          <FontAwesomeIcon icon={faBell} className="h-7 w-7" />
          <h1 className="text-lg md:text-xl font-semibold tracking-wide">
            Fanairana
          </h1>
        </div>

        {weatherwarning.message && (
          <div className="bg-red-50 w-full p-4 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-red-700 text-sm md:text-base font-medium">
              Toetr'andro: {weatherwarning.valeur} {weatherwarning.message}
            </h2>
          </div>
        )}
      </div>

      {/* LAHASA ANIO */}
      <div className="flex flex-col w-full">
        <div className="flex items-center gap-2 text-green-800 mb-2">
          <FontAwesomeIcon icon={faPersonDigging} className="h-6 w-6" />
          <h1 className="text-lg md:text-xl font-semibold tracking-wide">
            Lahasa anio
          </h1>
        </div>
        <ToDoToday />
      </div>

      {/* TOROHEVITRA */}
      <div className="flex flex-col w-full">
        <div className="flex items-center gap-2 mb-2">
          <FontAwesomeIcon icon={faLightbulb} className="h-7 w-7 text-yellow-500" />
          <h1 className="text-lg md:text-xl font-semibold tracking-wide">
            Torohevitra
          </h1>
        </div>
        <GetOne />
      </div>
    </section>
  </div>
</div>


  );
}
