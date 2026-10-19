import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  allCulture,
  allcatego,
  allVariety,
  allVariety2,
  PutInPra,
  cultureOfP,
} from "../modules/culture_module";
import { useReadAll } from "../hooks_login/readAll";

const CYCLE_LABELS = {
  fohy: "Fohy",
  antonony: "Antonony",
  lava: "Lava",
};

// Charge une liste quand `load` change ; liste vide si rien à charger ou en cas d'erreur.
function useList(load) {
  const [state, setState] = useState({ items: [], loaded: false });
  useEffect(() => {
    let active = true;
    setState({ items: [], loaded: false });
    if (!load) return;
    load().then((res) => {
      if (active) {
        setState({ items: res.success && Array.isArray(res.result) ? res.result : [], loaded: true });
      }
    });
    return () => {
      active = false;
    };
  }, [load]);
  return state;
}

export function CulturePage() {
  const [idCultur, setCulture] = useState(null);
  const [idCategorie, setCategorie] = useState(null);
  const [idVarieter, setVarieter] = useState(null);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const { data: cultures = [] } = useReadAll(allCulture);

  // Une seule culture dans la région : inutile de la faire choisir.
  useEffect(() => {
    if (cultures.length === 1) setCulture(cultures[0].id_culture);
  }, [cultures]);

  const [loadCategories, setLoadCategories] = useState(null);
  const [loadVarieties, setLoadVarieties] = useState(null);
  const { items: categories, loaded: categoriesLoaded } = useList(loadCategories);
  const { items: varietes } = useList(loadVarieties);

  useEffect(() => {
    setLoadCategories(() => (idCultur ? () => allcatego(idCultur) : null));
  }, [idCultur]);

  useEffect(() => {
    if (!idCultur) {
      setLoadVarieties(null);
    } else if (idCategorie) {
      setLoadVarieties(() => () => allVariety(idCultur, idCategorie));
    } else if (categoriesLoaded && categories.length === 0) {
      // Culture sans catégorie (ex. Katsaka) : on liste directement ses variétés.
      setLoadVarieties(() => () => allVariety2(idCultur));
    } else {
      setLoadVarieties(null);
    }
  }, [idCultur, idCategorie, categories.length, categoriesLoaded]);

  const chooseCulture = (id) => {
    setCulture(id);
    setCategorie(null);
    setVarieter(null);
  };

  const chooseCategorie = (id) => {
    setCategorie(id);
    setVarieter(null);
  };

  const handleValidate = async () => {
    if (!idVarieter) return;
    const response = await PutInPra({ id_varieter: idVarieter });
    // "Sokajy efa misy" : la variété est déjà enregistrée, on continue quand même.
    if (!response.success && response.message !== "Sokajy efa misy") {
      setMessage(response.message || "Tsy nety ny fifidiananao");
      return;
    }
    navigate("/Acceuil", { replace: true });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#03624C] px-4 py-8">
      <div className="w-full max-w-md border border-gray-300 shadow-2xl rounded-lg p-6 md:p-8 bg-gray-100">
        <h2 className="text-2xl text-center font-bold mb-6 text-[#0B2B26]">
          Inona no ambolenao?
        </h2>

        {cultures.length === 0 && (
          <p className="text-center text-gray-600">Tsy misy fambolena hita ho an'ny faritrao.</p>
        )}

        {cultures.length > 1 && (
          <ul className="flex flex-row flex-wrap gap-4 justify-center mb-6">
            {cultures.map((c) => (
              <li key={c.id_culture}>
                <button
                  type="button"
                  onClick={() => chooseCulture(c.id_culture)}
                  className={`w-32 flex flex-col items-center border border-green-700 rounded-md p-2 hover:shadow-md
                    ${idCultur === c.id_culture ? "bg-[#03624C] text-white shadow-xl" : "text-green-900"}`}
                >
                  <img
                    src={c.image_cultur || "/placeholder.png"}
                    alt={c.nom_culture}
                    className="w-full h-20 object-cover rounded-md mb-2"
                  />
                  {c.nom_culture}
                </button>
              </li>
            ))}
          </ul>
        )}

        {categories.length > 0 && (
          <div className="grid grid-cols-2 gap-4 mb-6">
            {categories.map((cat) => (
              <button
                key={cat.id_categorie}
                type="button"
                onClick={() => chooseCategorie(cat.id_categorie)}
                className={`py-6 px-2 rounded-lg border-2 border-green-700 text-lg font-semibold
                  ${idCategorie === cat.id_categorie ? "bg-[#03624C] text-white shadow-xl" : "bg-white text-green-900 hover:shadow-md"}`}
              >
                {cat.categorie_culture}
              </button>
            ))}
          </div>
        )}

        {varietes.length > 0 && (
          <>
            <h3 className="text-lg font-bold text-center text-green-800 mb-3">Karazana</h3>
            <ul className="flex flex-col gap-2">
              {varietes.map((v) => (
                <li key={v.id_varieter}>
                  <button
                    type="button"
                    onClick={() => setVarieter(v.id_varieter)}
                    className={`w-full flex items-center justify-between gap-3 px-4 py-3 rounded-md border-2 border-green-700 text-left
                      ${idVarieter === v.id_varieter ? "bg-[#03624C] text-white" : "bg-white hover:bg-green-50"}`}
                  >
                    <span>{v.nom_varieter}</span>
                    {CYCLE_LABELS[v.type_culture] && (
                      <span
                        className={`shrink-0 text-xs font-semibold px-2 py-1 rounded-full
                          ${idVarieter === v.id_varieter ? "bg-white text-[#03624C]" : "bg-green-100 text-green-900"}`}
                      >
                        {CYCLE_LABELS[v.type_culture]}
                      </span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </>
        )}

        {message && <p className="mt-4 text-center text-red-600">{message}</p>}

        <button
          type="button"
          onClick={handleValidate}
          disabled={!idVarieter}
          className="mt-8 w-full py-3 bg-[#03624C] text-white text-lg rounded-md hover:bg-green-700 disabled:bg-gray-400 transition-colors duration-200"
        >
          Hamafisina
        </button>
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
