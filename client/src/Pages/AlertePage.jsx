import { deleteAlerte } from "../modules/Alerte_api";
import { useReadAll } from "../hooks_login/readAll";
import { AffichModule, updateAlerte } from "../modules/Alerte_api";
export function AlertePage() {

  const { data: alertes, erro } = useReadAll(AffichModule);



  if (erro) return <h6>Erreur: {erro.message}</h6>;

  return (
    <div>
      <h1>Fampitandremana mananotanina</h1>
      <ul>
        {alertes.map((e) => (
          <li
            key={e.id_alerte}
            onClick={() => updateAlerte(e.id_alerte)}
          >
            <h2>{e.type_alerte}</h2>
            <h4>{e.message}</h4>
            <h4>{e.titre_alerte}</h4>

            <button
              onClick={(ev) => {
                ev.stopPropagation();
                deleteAlerte(e.id_alerte);
              }}
            >
              Hofafana
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
