import { usePlanning } from "../hooks_login/GestionPlanning";
import { useReadAll } from "../hooks_login/readAll";
import { cultureOfP } from "../modules/culture_module";
import { useEffect, useState } from "react";
import Calendrier from "../Pages/Calendrier";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";

export function ActiviterPages() {
  const [id_varieter, setId] = useState(null);

  const { activities, error } = usePlanning(id_varieter);

  const { data: listVar = [], erro } = useReadAll(cultureOfP);
  const [selectedVar, setSelectedVar] = useState(null);

  const [ActiviterPasses, setActivitepasses] = useState(false);

  if (erro || error) return <h6>Erreur</h6>;

  const enCours = activities.filter((a) => a.status === "enCours");
  const enCoursNumber = enCours.length;
  const passer = activities.filter((a) => a.status === "passer");
  const passerNumber = passer.length;
  const aVenir = activities.filter((a) => a.status === "aVenir");
  const aVenirNumber = aVenir.length;

  // const enCoursDate = enCours.flatMap((a) => [
  //   new Date(a.date_debut).toISOString().split("T")[0],
  //   new Date(a.date_fin).toISOString().split("T")[0],
  // ]);

  // console.log("voici les dates:", enCoursDate);

  console.log("encours", enCours);
  return (
    <div className="min-h-screen pt-20 ml-0 md:ml-56 bg-[#DAF1DE] px-4  md:pt-4 ">
    
      <div className="flex flex-col gap-8 md:flex-row-reverse md:justify-between md:h-full">
        {/* calendar */}
        <aside className="bg-gradient-to-b from-green-800 to-green-700 p-5 border shadow-2xl rounded-2xl">
          <div className="flex justify-center mb-6">
            <Calendrier />
          </div>

          <div className="hidden md:flex flex-col gap-4 bg-green-100 rounded-xl p-4">
            <h1 className="text-lg font-semibold text-green-900 text-center">
              Fomba famakiana ny Alimanaka
            </h1>

            <div className="flex items-center gap-3 text-green-900">
              <FontAwesomeIcon icon={faSquare} className="text-green-700" />
              <span>Lahasa efa vita</span>
            </div>

            <div className="flex items-center gap-3 text-green-900">
              <FontAwesomeIcon icon={faSquare} className="text-yellow-600" />
              <span>Lahasa mbola miandry</span>
            </div>

            <div className="flex items-center gap-3 text-green-900">
              <FontAwesomeIcon icon={faSquare} className="text-blue-600" />
              <span>Lahasa ho avy</span>
            </div>
          </div>
        </aside>

        <section className=" md:flex md:flex-col md:gap-1 md:w-11/12">
          <div className="">
            <h1 className="Capitalize  text-green-950 text-2xl mt-3 text-solide font-bold px-4 text-center">
              Fanaraha-maso Ireo lahasa atao
            </h1>
          </div>

          <div className="flex flex-col justify-center md:flex-row gap-5">
            <h3 className="Capitalize text-gray-900 text-1xl text-solide font-medium text-center md:text-start">
              Ireo karazam-pambolena voasafidinao
            </h3>
            <ul className="flex flex-ro justify-center items-center gap-x-9">
              {listVar.map((e) => (
                <li
                  key={e.id_varieter}
                  onClick={() => {
                    setId(e.id_varieter);
                    setSelectedVar(e.id_varieter);
                  }}
                  className={`cursor-pointer text-green-700 ${
                    selectedVar === id_varieter
                      ? "underline"
                      : "decoration-none"
                  }`}
                >
                  {e.nom_varieter}
                </li>
              ))}
            </ul>
          </div>

          {/* ACTIVITÉS */}
          {id_varieter && (
            <>
              <div className="flex flex-wrap justify-center gap-4 m-4">
                {[
                  { key: "passes", title: "Lasa", count: passerNumber },
                  {key: "encours",title: "Ankehitriny",count: enCoursNumber,},
                  { key: "avenir", title: "Ho avy", count: aVenirNumber },
                ].map((item) => {
                  const active = ActiviterPasses === item.key;

                  return (
                    <div
                      key={item.key}
                      onClick={() => setActivitepasses(item.key)}
                      className={`group w-28 h-24 cursor-pointer rounded-2xl transition-all duration-300 flex flex-col justify-center items-center text-center
                        ${
                          active
                            ? "bg-green-900 shadow-2xl"
                            : "bg-green-100 shadow-md hover:bg-green-900 hover:shadow-xl"
                        }
                      `}
                    >
                      <p
                        className={`text-sm font-semibold transition-colors
                          ${active ? "text-white" : "text-green-900 group-hover:text-white"}
                        `}
                      >
                        {item.title}
                      </p>
                      <p
                        className={`text-xs text-center transition-colors
                          ${active ? "text-white" : "text-green-950 group-hover:text-white"}
                        `}
                      >
                        lahasa <br /> mihisa {item.count}
                      </p>
                    </div>
                  );
                })}
              </div>

              {ActiviterPasses === "passes" && (
                <Section
                  title="Lahasa efa lasa"
                  data={passer}
                  className="bg-red-200"
                />
              )}
              {ActiviterPasses === "encours" && (
                
                  <Section
                    title="Lahasa an-dàlana"
                    data={enCours}
                    className="bg-red-200"
                  />
           
               
              )}
              {ActiviterPasses === "avenir" && (
                <Section
                  title="Lahasa ho avy"
                  data={aVenir}
                  className="bg-red-200"
                />
              )}

            </>
          )}
        </section>
      </div>
    </div>
  );
}
function Section({ title, data }) {
  return (
    <div className="my-6 w-100 h-screen  md:h-full">
      <h2 className="text-xl font-bold text-gray-700 mb-4">{title}</h2>

      {data.length === 0 ? (
        <p className="text-gray-500">Tsy misy asa ho atao</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 gap-x-10">
          {data.map((a) => (
            <div
              key={a.id_planning}
              className="bg-white w-[360px]  md:w-[290px] md:gap-2 shadow-md rounded-lg p-3 hover:shadow-xl transition-shadow duration-300
              flex flex-col items-center justify-between"
            >
              <div>
                <h3 className="text-sm text-center font-semibold text-green-700">
                  {a.type_activite}
                </h3>
                <p className="text-xs font-bold text-gray-900 m-1 text-center ">
                  {a.date_debut} - {a.date_fin}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-600 mt-2  text-left">
                  <span className="font-medium">Karazana:</span> {a.nom_culture}{" "}
                  / {a.nom_varieter}
                </p>
                <p className="text-sm text-gray-600  text-left">
                  <span className="font-medium">Tsingerim-piainana:</span>{" "}
                  {a.type_culture}
                </p>
                <p className="text-sm text-gray-600  text-left">
                  <span className="font-medium">Voly:</span>
                  {a.categorie_culture}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export function ToDoToday() {
  const todayStr = new Date().toISOString().split("T")[0];

  // Liste des variétés
  const { data: listVar = [], erro } = useReadAll(cultureOfP);
  const [id_varieter, setId] = useState(null);

  // Sélectionne automatiquement la première variété si aucune n'est choisie
  useEffect(() => {
    if (!id_varieter && listVar.length > 0) {
      setId(listVar[0].id_varieter);
    }
  }, [listVar, id_varieter]);

  // Récupération des activités pour la variété sélectionnée
  const { activities = [], error } = usePlanning(id_varieter);

  if (erro || error) return <h6>Erreur</h6>;

  // Filtrer uniquement les activités d'aujourd'hui
  const activitiesToday = activities.filter((act) => {
    const start = new Date(act.date_debut).toISOString().split("T")[0];
    const end = new Date(act.date_fin).toISOString().split("T")[0];
    return todayStr >= start && todayStr <= end;
  });

  return (
    <div>
      {activitiesToday.length === 0 ? (
        <p>Tsy misy lahasa atao</p>
      ) : (
        <ul className="flex flex-col gap-4 w-90">
          {activitiesToday.map((act) => (
            <li
              key={act.id_planning}
              className="bg-green-200 p-3 text-sm text-start text-green-900 md:p-4 shadow-md rounded-md hover:shadow-lg"
            >
              {act.type_activite} - {act.nom_culture} / {act.nom_varieter}{" "}
              <br />
              {act.date_debut} → {act.date_fin}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// export function ActiviterenCours() {
//   const { activities, loading, eror } = usePlanning();
//   console.log("Réponse API :", activities);
//   console.log(activities);
//   if (eror) return <h6>Erreur: {eror}</h6>;

//   const enCours = activities.filter((act) => act.status === "enCours");

//   console.log("En cours :", enCours);
//   return (
//     <div className="bg-white">
//       <div>{enCours.length === 0 && <p>Tsy misy asa ho atao</p>}</div>
//       <div>
//         <ul>
//           {enCours.map((act) => (
//             <li key={act.id_planning}>
//               <p>{act.type_activite}</p>
//               <p>
//                 {act.date_debut} → {act.date_fin}
//               </p>
//               <p>
//                 Culture : {act.nom_culture} / {act.nom_varieter} /{" "}
//                 {act.cycle_vie} / {act.categorie_culture}
//               </p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }
// export function ActiviterPasses() {
//   const { activities, loading, eror } = usePlanning();
//   console.log("Réponse API :", activities);
//   console.log(activities);
//   if (eror) return <h6>Erreur: {eror}</h6>;

//   const Passer = activities.filter((act) => act.status === "passer");
//   console.log("En cours :", Passer);

//   return (
//     <div>
//       <div>{Passer.length === 0 && <p>Tsy misy asa ho atao</p>}</div>
//       <div>
//         <ul>
//           {Passer.map((act) => (
//             <li key={act.id_planning}>
//               <p>{act.type_activite}</p>
//               <p>
//                 {act.date_debut} → {act.date_fin}
//               </p>
//               <p>
//                 Culture : {act.nom_culture} / {act.nom_varieter} /{" "}
//                 {act.cycle_vie} / {act.categorie_culture}
//               </p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }
// export function ActiviterFuture() {
//   const { activities, loading, eror } = usePlanning();
//   console.log("Réponse API :", activities);
//   console.log(activities);
//   if (eror) return <h6>Erreur: {eror}</h6>;
//   if (loading) return <h2>chargement...</h2>;
//   const aVenir = activities.filter((act) => act.status === "aVenir");
//   console.log("En cours :", aVenir);
//   return (
//     <div>
//       <div>{aVenir.length === 0 && <p>Tsy misy asa ho atao</p>}</div>
//       <div>
//         <ul>
//           {aVenir.map((av) => (
//             <li key={av.id_planning}>
//               <p>{av.type_activite}</p>
//               <p>
//                 {av.date_debut} → {av.date_fin}
//               </p>
//               <p>
//                 Culture : {av.nom_culture} / {av.nom_varieter} / {av.cycle_vie}{" "}
//                 / {av.categorie_culture}
//               </p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }
