import { getToken } from "./auth";
// const cleapi=`c439e2357d3d29c6f7770157bc6b6df3`;
const descriptionsMG = {
  "clear sky": "lanitra mazava",
  "few clouds": "rahona kely",
  "scattered clouds": "rahona miparitaka",
  "broken clouds": "rahona matevina",
  "shower rain": "orana kely",
  "rain": "orana",
  "thunderstorm": "rivodoza",
  "snow": "ranomandry",
  "mist": "aloka",
  "overcast clouds":"rahona matevina",
  "light rain":"orana manify",
  "moderate rain":"orana matevina"
};
// OpenWeather (units=metric) donne le vent en m/s.
const toKmh = (ms) => Math.round(ms * 3.6);

export const OpenWeatherApi = async () => {
  const token = getToken();
  const localisation = token?.user?.localisation ?? null;
  console.log(localisation)
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${localisation}&appid=c439e2357d3d29c6f7770157bc6b6df3&units=metric`);
    if (!response.ok) {
      throw new Error(`erreur :${response.status}`);
    }
    const data = await response.json();
    console.log(data)
    if (!data) {
      throw new Error(`tsisy data`);
    }
    const descEng = data.weather[0].description;
    const descMg = descriptionsMG[descEng] || descEng;
    const localDate = new Date((data.dt + data.timezone) * 1000);
    return {
      ville: data.name,
      temp_min: Math.round(data.main.temp_min),
      temp_max: Math.round(data.main.temp_max),
      humidite: data.main.humidity,
      vent: toKmh(data.wind.speed),
      pluie: data.rain ? Object.values(data.rain)[0] : 0,
      icon: data.weather[0].icon,
      desc: descMg,
      date: localDate,
    };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Erreur dans OpenWeatherApi" };
  }
}
export const MeteoFuture =async()=>{
 const token = getToken();
  const localisation = token?.user?.localisation ?? null;
  console.log(localisation)
  try{
    const response=await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${localisation}&appid=c439e2357d3d29c6f7770157bc6b6df3&units=metric&lang=ag`)
     if (!response.ok) {
      throw new Error(`erreur :${response.status}`);
    }
    const data = await response.json();
    console.log(data)
    if (!data) {
      throw new Error(`il n'y a pas de data`);
    }
       
      const forecasts = data.list
      .filter(item => item.dt_txt.includes("12:00:00"))
      .map(item => {
        const descEng = item.weather[0].description;
        const descMg = descriptionsMG[descEng] || descEng; 
        const localDate = new Date((item.dt + data.city.timezone) * 1000);

        return {
          date: localDate,
          temp_min: Math.round(item.main.temp_min),
          temp_max: Math.round(item.main.temp_max),
          desc: descMg,
          icon: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
          vent: toKmh(item.wind.speed),
          humidite: item.main.humidity
        };
      });

    return forecasts;
  
  }catch (error) {
    console.error(error);
    return { success: false, message: "Erreur dans OpenWeatherApi" };
  }
}