import { useCallback, useEffect, useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPen, faTrash, faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useReadAll } from "../../hooks_login/readAll";
import {
  getVarietes,
  getActivites,
  getPlanning,
  addPlanning,
  updatePlanning,
  deletePlanning,
} from "../../modules/Admin_api";
import {
  AdminTitle,
  Feedback,
  adminInput,
  adminButton,
  adminGhostButton,
} from "../../Components/AdminLayout";

const EMPTY_ROW = { type_activite: "", date_debut: "", date_fin: "" };

const fmt = (d) =>
  new Date(`${String(d).slice(0, 10)}T00:00:00`).toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

// Un même nom d'activité existe sous plusieurs id : le formulaire travaille avec le nom,
// et on garde l'id d'origine tant que le nom ne change pas.
function toPayload(row, activites, original) {
  const id_activite =
    original && original.type_activite === row.type_activite
      ? original.id_activite
      : activites.find((a) => a.type_activite === row.type_activite)?.id_activite;
  return { id_activite, date_debut: row.date_debut, date_fin: row.date_fin };
}

function RowFields({ row, setRow, activites }) {
  const names = activites.map((a) => a.type_activite);
  // L'activité d'une ligne existante peut ne pas être dans la liste dédoublonnée.
  if (row.type_activite && !names.includes(row.type_activite)) names.unshift(row.type_activite);
  return (
    <>
      <select
        aria-label="Activité"
        value={row.type_activite}
        onChange={(e) => setRow({ ...row, type_activite: e.target.value })}
        className={adminInput}
      >
        <option value="">— Activité —</option>
        {names.map((n) => (
          <option key={n} value={n}>
            {n}
          </option>
        ))}
      </select>
      <input
        type="date"
        aria-label="Début"
        value={row.date_debut}
        onChange={(e) => setRow({ ...row, date_debut: e.target.value })}
        className={adminInput}
      />
      <input
        type="date"
        aria-label="Fin"
        value={row.date_fin}
        min={row.date_debut || undefined}
        onChange={(e) => setRow({ ...row, date_fin: e.target.value })}
        className={adminInput}
      />
    </>
  );
}

export function AdminCalendrier() {
  const { data: varietes = [] } = useReadAll(getVarietes);
  const { data: activites = [] } = useReadAll(getActivites);

  const regions = useMemo(() => [...new Set(varietes.map((v) => v.localisation))], [varietes]);
  const [region, setRegion] = useState("");
  const [idVarieter, setIdVarieter] = useState("");
  const varietesRegion = varietes.filter((v) => v.localisation === region);

  const [rows, setRows] = useState([]);
  const [newRow, setNewRow] = useState(EMPTY_ROW);
  const [editing, setEditing] = useState(null); // { id_planning, ...champs }
  const [message, setMessage] = useState(null);

  useEffect(() => {
    if (!region && regions.length > 0) setRegion(regions[0]);
  }, [regions, region]);

  const reload = useCallback(async () => {
    if (!idVarieter) return setRows([]);
    const res = await getPlanning(idVarieter);
    setRows(res.success ? res.result : []);
  }, [idVarieter]);

  useEffect(() => {
    reload();
    setEditing(null);
  }, [reload]);

  const report = (res, okText) => {
    setMessage(res.success ? { type: "ok", text: okText } : { type: "error", text: res.message });
    return res.success;
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    const res = await addPlanning({ id_varieter: Number(idVarieter), ...toPayload(newRow, activites) });
    if (report(res, "Activité ajoutée au calendrier.")) {
      setNewRow(EMPTY_ROW);
      reload();
    }
  };

  const handleSave = async () => {
    const original = rows.find((r) => r.id_planning === editing.id_planning);
    const res = await updatePlanning(editing.id_planning, toPayload(editing, activites, original));
    if (report(res, "Modification enregistrée.")) {
      setEditing(null);
      reload();
    }
  };

  const handleDelete = async (row) => {
    if (!window.confirm(`Supprimer « ${row.type_activite} » (${fmt(row.date_debut)} – ${fmt(row.date_fin)}) ?`)) return;
    if (report(await deletePlanning(row.id_planning), "Activité supprimée.")) reload();
  };

  const canAdd = newRow.type_activite && newRow.date_debut && newRow.date_fin;

  return (
    <>
      <AdminTitle
        title="Calendriers"
        subtitle="Les paysans voient ces dates dans leur Alimanaka dès l'enregistrement."
      />

      <div className="grid gap-3 sm:grid-cols-2 bg-white rounded-xl border border-gray-200 p-4 mb-5">
        <label className="block">
          <span className="text-sm text-gray-600">Région</span>
          <select
            value={region}
            onChange={(e) => {
              setRegion(e.target.value);
              setIdVarieter("");
            }}
            className={adminInput}
          >
            {regions.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="text-sm text-gray-600">Variété</span>
          <select value={idVarieter} onChange={(e) => setIdVarieter(e.target.value)} className={adminInput}>
            <option value="">— Choisir une variété —</option>
            {varietesRegion.map((v) => (
              <option key={v.id_varieter} value={v.id_varieter}>
                {v.nom_varieter}
                {v.categorie_culture ? ` · ${v.categorie_culture}` : ""}
                {v.type_culture ? ` · cycle ${v.type_culture}` : ""}
              </option>
            ))}
          </select>
        </label>
      </div>

      <Feedback message={message} />

      {idVarieter && (
        <>
          <form
            onSubmit={handleAdd}
            className="grid gap-3 md:grid-cols-[2fr_1fr_1fr_auto] items-end bg-white rounded-xl border border-gray-200 p-4 mb-5"
          >
            <p className="md:col-span-4 font-semibold text-[#0B2B26]">Ajouter une activité</p>
            <RowFields row={newRow} setRow={setNewRow} activites={activites} />
            <button type="submit" disabled={!canAdd} className={adminButton}>
              <FontAwesomeIcon icon={faPlus} />
              Ajouter
            </button>
          </form>

          <div className="bg-white rounded-xl border border-gray-200 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-gray-500 border-b bg-gray-50">
                  <th className="px-4 py-3 font-medium">Activité</th>
                  <th className="px-4 py-3 font-medium">Début</th>
                  <th className="px-4 py-3 font-medium">Fin</th>
                  <th className="px-4 py-3 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {rows.length === 0 && (
                  <tr>
                    <td colSpan={4} className="px-4 py-6 text-center text-gray-500">
                      Aucune activité pour cette variété.
                    </td>
                  </tr>
                )}
                {rows.map((row) =>
                  editing?.id_planning === row.id_planning ? (
                    <tr key={row.id_planning} className="border-b bg-green-50/50">
                      <td colSpan={3} className="px-4 py-2">
                        <div className="grid gap-2 md:grid-cols-[2fr_1fr_1fr]">
                          <RowFields row={editing} setRow={setEditing} activites={activites} />
                        </div>
                      </td>
                      <td className="px-4 py-2">
                        <div className="flex justify-end gap-2">
                          <button type="button" onClick={handleSave} className={adminButton} title="Enregistrer">
                            <FontAwesomeIcon icon={faCheck} />
                          </button>
                          <button type="button" onClick={() => setEditing(null)} className={adminGhostButton} title="Annuler">
                            <FontAwesomeIcon icon={faXmark} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ) : (
                    <tr key={row.id_planning} className="border-b last:border-0">
                      <td className="px-4 py-3 font-medium">{row.type_activite}</td>
                      <td className="px-4 py-3 whitespace-nowrap">{fmt(row.date_debut)}</td>
                      <td className="px-4 py-3 whitespace-nowrap">{fmt(row.date_fin)}</td>
                      <td className="px-4 py-3">
                        <div className="flex justify-end gap-2">
                          <button
                            type="button"
                            onClick={() =>
                              setEditing({
                                id_planning: row.id_planning,
                                type_activite: row.type_activite,
                                date_debut: String(row.date_debut).slice(0, 10),
                                date_fin: String(row.date_fin).slice(0, 10),
                              })
                            }
                            className={adminGhostButton}
                          >
                            <FontAwesomeIcon icon={faPen} />
                            Modifier
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDelete(row)}
                            className={`${adminGhostButton} text-red-700 hover:bg-red-50`}
                            title="Supprimer"
                          >
                            <FontAwesomeIcon icon={faTrash} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </>
      )}
    </>
  );
}
