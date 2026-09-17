import { useCallback } from "react";

import {
  allCulture,
  allVariety,
  // allcatego,
  PutInPra,
  allVariety2
} from "../modules/culture_module";
import { useReadAll } from "../hooks_login/readAll";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {cultureOfP} from "../modules/culture_module"



export function CulturePage() {
  const [idVarieter, setVarieter] = useState(null);
  const [idCultur, setCulture] = useState(null);
  const [idCategorie, setCategorie] = useState(null);
  const navigate = useNavigate();

 
  const { data: cultures = [] } = useReadAll(allCulture);

  

 
  const fetchVariety = useCallback(() => {
    if (!idCultur) return null;

   
    if (!idCategorie) {
      return allVariety2(idCultur); 
    }
   
    return allVariety(idCultur, idCategorie);
  }, [idCultur, idCategorie]);

  const { data: varietes = [] } = useReadAll(fetchVariety, [fetchVariety]);

  
  const handleValidate = async (e) => {
    e.preventDefault();
    if (!idCultur || !idVarieter) {
      alert("Vitao ny safidinao");
      return;
    }
    try {
      console.log("voasafidy",idVarieter);
      const response = await PutInPra({ id_varieter: idVarieter });
      if (!response.success) {
        alert(response.message || "Tsy nety ny fifidiananao");
        return;
      }
      alert("Safidy voatahiry");
      navigate("/Acceuil");
    } catch (err) {
      alert("Erreur handleValidate");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-[#03624C]">
      <div className="w-80 md:w-96 max-w-md border border-gray-300 shadow-2xl rounded-lg p-8 bg-gray-100 transform hover:-translate-y-1 transition-all duration-300">
        <div>
          <h2 className="text-2xl text-center font-bold mb-6 text-[#0B2B26] ">
            Ireo karazana voly misy
          </h2>
           <h3 className="text-1xl text-center font-bold mb-6  text-green-800">
            Safidy afaka atao
          </h3> 
        </div>

        <div> {/* Liste des Cultures */}
  <ul className="flex flex-row gap-5 justify-center items-center">
    {cultures.map((c) => (
      <li key={c.id_culture} className="flex justify-center">
        <div
          onClick={() => {
            console.log("Clique sur culture :", c.id_culture);
            setCulture(c.id_culture);
            setCategorie(null);
            setVarieter(null);
          }}
        className={`w-32 h-40 flex flex-col group items-center border-solid border-[1px] border-green-700 justify-center cursor-pointer rounded-md hover:shadow-md p-2
         ${idCultur === c.id_culture ? "bg-[#03624C] text-white shadow-xl" : " group-hover:shadow-xl"}`}
        >
          {/* Image de la culture */}
          <img
            src={c.image_cultur || "/placeholder.png"}
            alt={c.nom_culture}
            className="w-full h-24 object-cover rounded-md mb-2"
          />
          {/* Nom de la culture */}
          <span className={`text-center ${idCultur === c.id_culture ? " text-white" : " group-hover:text-green-900 text-green-900"}`}>{c.nom_culture}</span>
        </div>
      </li>
    ))}
  </ul>

  {/* Liste des Variétés */}
  {varietes.length > 0 && (
    <>
      <h3 className="mt-6 text-lg font-bold text-center text-green-800">Karazana</h3>
      <ul className="flex flex-row justify-center items-center gap-2 mt-5">
        {varietes.map((v) => (
          <li
            key={v.id_varieter}
            onClick={() => {
              console.log("Clique sur variete :", v.id_varieter);
              setVarieter(v.id_varieter);
            }}
            className={`cursor-pointer px-3 py-1 rounded-md border-solid border-[2px] border-green-700
            ${idVarieter===v.id_varieter ? "bg-[#03624C] text-white":"hover:bg-[#03624C]"}`}
          >
            {v.nom_varieter}
          </li>
        ))}
      </ul>
    </>
  )}

          
          {idVarieter && (
            <button
              onClick={handleValidate}
              className=" mt-10 items-center px-6 py-2 bg-[#03624C] text-white rounded-md hover:bg-green-700 disabled:bg-gray-400 transition-colors duration-200"
            >
              Hamafisina
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
export function ListOfMyVar(){
  const { data: listVar, erro } = useReadAll(cultureOfP);
  
  
  
    if (erro) return <h6>Erreur: {erro.message}</h6>;
  
    return (
      <div>
        <h1>Ireo Fambolena voasafinao</h1>
        <ul>
          {listVar.map((e) => (
            <li key={e.id_varieter} >
              {e.nom_varieter}
              
            </li>
          ))}
        </ul>
      </div>
    );
}