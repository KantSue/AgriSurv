import { allTypeConseilApi } from "../modules/Conseil_api";
import { useReadAll } from "../hooks_login/readAll";
import { allTitleConseil } from "../modules/Conseil_api";
import { Link, useParams } from "react-router-dom";
import { useCallback} from "react";
import { allAboutTitleConseil } from "../modules/Conseil_api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faVolumeLow,faCirclePause} from "@fortawesome/free-solid-svg-icons";
import {speakMg} from "../modules/voice";
import { stopSpeaking } from "../modules/voice";


export function ConseilPage() {
  const { data: types = [], err } = useReadAll(allTypeConseilApi);
  if (err) return <h6>Erreur: {err}</h6>;
console.log("ireto ny types:",types);
  return (
   <div className=" md:bg-green-50 min-h-screen p-4 pt-24 md:pl-72 transition-all">
  {/* Header */}
  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
    <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 md:mb-0 drop-shadow-md animate-fadeIn">
      TOROHEVITRA
    </h1>
    <Link
      to="/Acceuil"
      className="inline-block bg-green-800 text-green-100 font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-green-700 hover:scale-105 transition-all duration-300"
    >
      Fandraisana
    </Link>
  </div>

  {/* Section Sokajy */}
  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 border-b-4 border-green-600 pb-2 w-fit animate-fadeIn">
    Sokajy
  </h2>

 
  <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-96 md:w-fit mx-auto">
    {types.map((type, index) => (
      <li key={type.type_conseil || index}>
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 overflow-hidden">
          <figure className="h-32 md:h-40 overflow-hidden">
            <img
              src={type.pictogramme || "/placeholder.png"}
              alt={type.type_conseil}
              className="w-full h-full object-cover "
            />
          </figure>
          <div className="p-4 text-center">
            <Link
              to={`/Conseil/Type/${type.type_conseil}`}
              className="text-lg md:text-xl font-semibold text-[#03624C] hover:text-green-600 transition-colors"
            >
              {type.type_conseil}
            </Link>
          </div>
        </div>
      </li>
    ))}
  </ul>
</div>

  );
}

export function GetTitle() {
    const {type}=useParams();
 const Titles = useCallback(() => allTitleConseil(type), [type]); 
  const { data: titres = [], err } = useReadAll(Titles);
  if (err) return <h6>Erreur: {err}</h6>;

  return (
     <div className="bg-gray-50 h-screen p-4 pt-20 md:ml-56">
  {/* Header */}
  <div className="flex flex-row items-center justify-between m-2">
    <h1 className="hidden md:block text-2xl lg:text-3xl text-gray-950 font-bold p-4">
      Lohateny
    </h1>
    <Link
      to="/Conseil/Type"
      className="inline-block bg-green-800 text-green-100 font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-green-700 hover:scale-105 transition-all duration-300"
    >
      Hiverina
    </Link>
  </div>

  {/* Liste des titres */}
  <ul className="flex flex-col justify-center items-center gap-4">
    {titres.map((title) => (
      <Link key={title.id_conseil} to={`/Conseil/Type/Titre/${title.titre}`}>
        <div className="group card w-96 bg-[#235347] hover:bg-[#0B2B26] shadow-2xl rounded-xl transition-all duration-300">
          <div className="card-body">
            <li className="card-title text-gray-300 group-hover:text-white transition-transform duration-300">
              {title.titre}
            </li>
          </div>
        </div>
      </Link>
    ))}
  </ul>
</div>

  );
}

export function GetAllByTitle() {
    const {title}=useParams();
    console.log(title)
 const Titles = useCallback(() => allAboutTitleConseil(title), [title]); 
  const { data: titres = [], err } = useReadAll(Titles);
  if (err) return <h6>Erreur: {err}</h6>;

  return (
<div  className="min-h-screen md:ml-56 lg:ml-56 p-4 pt-24 transition-all bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/images/hero.png')" }}>
   <div className="absolute inset-0 bg-black opacity-40"></div>
  {/* Header */}
  <div className="flex flex-row items-center justify-between m-2 relative z-10">
    <h1 className=" relative z-10 hidden md:block text-2xl lg:text-3xl text-gray-950 font-bold p-4">
      Torohevitra mahasoa 
    </h1>
    <Link
      to="/Conseil/Type"
      className="inline-block bg-green-800 text-green-100 font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-green-700 hover:scale-105 transition-all duration-300"
    >
      Hiverina
    </Link>
  </div>

  {/* Contenu */}
  <div className="max-w-4xl mx-auto flex flex-col gap-8 relative z-10 pt-5">
    {titres.map((content) => (
      <div
        key={content.id_conseil}
        className="bg-gray-100 rounded-2xl shadow-2xl p-6 md:p-8 hover:shadow-3xl transition-shadow duration-300"
      >
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
          {content.type_conseil}
        </h2>
        <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4 text-center">
          {content.titre}
        </h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{content.contenu}</p>
      <div className="flex justify-between">
  <button
    onClick={() => speakMg(content.contenu)}
    className="flex items-center justify-center gap-2 bg-green-700 text-white px-4 py-2 rounded-lg shadow hover:bg-green-900 transition-transform duration-300 hover:scale-105"
  >
    <FontAwesomeIcon icon={faVolumeLow} />
    <span>Hiaino</span>
  </button>

  
  <button
    onClick={stopSpeaking}
    className="flex items-center gap-2 bg-yellow-500 text-white px-4 py-2 rounded-lg shadow hover:bg-yellow-600 transition"
  >
    <FontAwesomeIcon icon={faCirclePause} />
    <span>Hijanona</span>
  </button>
</div>

      </div>
    ))}

    
  </div>
</div>


  );
}


export function GetOne() {
  const { data: types = [], err: errTypes } = useReadAll(allTypeConseilApi);
  console.log("types:", types);

  const fetchTitres = useCallback(
    () => (types.length > 0 ? allTitleConseil(types[0].type_conseil) : Promise.resolve([])),
    [types]
  );
  const { data: titres = [], err: errTitres } = useReadAll(fetchTitres);
  console.log("titres:", titres);

  const fetchInfo = useCallback(
    () => (titres.length > 0 ? allAboutTitleConseil(titres[0].titre) : Promise.resolve([])),
    [titres]
  );
  const { data: info = [], err: errInfo } = useReadAll(fetchInfo);
  console.log("info:", info);

  if (errTypes || errTitres || errInfo)
    return <h6>Erreur lors du chargement</h6>;

  if (!types.length || !titres.length || !info.length)
    return <h6>Chargement...</h6>;

  return (
    <Link to={`/Conseil/Type/Titre/${titres[0].titre}`}>
  <div className="flex flex-col gap-2 md:ml-4 text-sm bg-white shadow-md rounded-md p-4 cursor-pointer w-full md:w-full max-w-md md:max-w-lg h-auto max-h-80 overflow-y-auto">
    <h4 className="font-semibold">{info[0].type_conseil}</h4>
    <p className="text-gray-700">{info[0].contenu}</p>
    
    
  </div>
</Link>

 
  );
}
