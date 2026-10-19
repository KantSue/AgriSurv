import { useCallback, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { getConseils, addConseil, updateConseil, deleteConseil } from "../../modules/Admin_api";
import {
  AdminTitle,
  Feedback,
  adminInput,
  adminButton,
  adminGhostButton,
} from "../../Components/AdminLayout";

const EMPTY = { type_conseil: "", titre: "", contenu: "" };
const TITRE_MAX = 50;

function ConseilForm({ initial, types, onSubmit, onCancel }) {
  const [form, setForm] = useState(initial);
  const set = (name) => (e) => setForm({ ...form, [name]: e.target.value });
  const valid = form.type_conseil.trim() && form.titre.trim() && form.contenu.trim();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(form);
      }}
      className="bg-white rounded-xl border border-green-300 p-4 space-y-3"
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm text-gray-600">Thème (sokajy)</span>
          <input list="conseil-types" value={form.type_conseil} onChange={set("type_conseil")} className={adminInput} />
          <datalist id="conseil-types">
            {types.map((t) => (
              <option key={t} value={t} />
            ))}
          </datalist>
        </label>
        <label className="block">
          <span className="text-sm text-gray-600">
            Titre ({form.titre.length}/{TITRE_MAX})
          </span>
          <input value={form.titre} maxLength={TITRE_MAX} onChange={set("titre")} className={adminInput} />
        </label>
      </div>
      <label className="block">
        <span className="text-sm text-gray-600">Contenu (lu à voix haute aux paysans)</span>
        <textarea value={form.contenu} onChange={set("contenu")} rows={6} className={adminInput} />
      </label>
      <div className="flex gap-2">
        <button type="submit" disabled={!valid} className={adminButton}>
          Enregistrer
        </button>
        <button type="button" onClick={onCancel} className={adminGhostButton}>
          Annuler
        </button>
      </div>
    </form>
  );
}

export function AdminConseils() {
  const [conseils, setConseils] = useState([]);
  const [filtre, setFiltre] = useState("");
  const [editing, setEditing] = useState(null); // "new" ou id_conseil
  const [message, setMessage] = useState(null);

  const reload = useCallback(async () => {
    const res = await getConseils();
    if (res.success) setConseils(res.result);
    else setMessage({ type: "error", text: res.message });
  }, []);

  useEffect(() => {
    reload();
  }, [reload]);

  const types = [...new Set(conseils.map((c) => c.type_conseil))];
  const shown = filtre ? conseils.filter((c) => c.type_conseil === filtre) : conseils;

  const save = async (form) => {
    const res = editing === "new" ? await addConseil(form) : await updateConseil(editing, form);
    if (!res.success) return setMessage({ type: "error", text: res.message });
    setMessage({ type: "ok", text: editing === "new" ? "Conseil ajouté." : "Conseil modifié." });
    setEditing(null);
    reload();
  };

  const remove = async (c) => {
    if (!window.confirm(`Supprimer le conseil « ${c.titre} » ?`)) return;
    const res = await deleteConseil(c.id_conseil);
    setMessage(res.success ? { type: "ok", text: "Conseil supprimé." } : { type: "error", text: res.message });
    if (res.success) reload();
  };

  const chip = (value, label) => (
    <button
      key={label}
      type="button"
      onClick={() => setFiltre(value)}
      className={`px-3 py-1.5 rounded-full text-sm border ${
        filtre === value ? "bg-[#0B2B26] text-white border-[#0B2B26]" : "bg-white border-gray-300"
      }`}
    >
      {label}
    </button>
  );

  return (
    <>
      <AdminTitle
        title="Torohevitra"
        subtitle="Conseils affichés aux paysans, classés par thème."
        action={
          editing !== "new" && (
            <button type="button" onClick={() => setEditing("new")} className={adminButton}>
              <FontAwesomeIcon icon={faPlus} />
              Nouveau conseil
            </button>
          )
        }
      />

      <Feedback message={message} />

      {editing === "new" && (
        <div className="mb-5">
          <ConseilForm
            initial={{ ...EMPTY, type_conseil: filtre }}
            types={types}
            onSubmit={save}
            onCancel={() => setEditing(null)}
          />
        </div>
      )}

      <div className="flex flex-wrap gap-2 mb-4">
        {chip("", `Tous (${conseils.length})`)}
        {types.map((t) => chip(t, t))}
      </div>

      <ul className="grid gap-3">
        {shown.map((c) =>
          editing === c.id_conseil ? (
            <li key={c.id_conseil}>
              <ConseilForm
                initial={{ type_conseil: c.type_conseil, titre: c.titre, contenu: c.contenu }}
                types={types}
                onSubmit={save}
                onCancel={() => setEditing(null)}
              />
            </li>
          ) : (
            <li key={c.id_conseil} className="bg-white rounded-xl border border-gray-200 p-4">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">{c.type_conseil}</p>
                  <h2 className="font-semibold text-[#0B2B26]">{c.titre}</h2>
                </div>
                <div className="flex gap-2">
                  <button type="button" onClick={() => setEditing(c.id_conseil)} className={adminGhostButton}>
                    <FontAwesomeIcon icon={faPen} />
                    Modifier
                  </button>
                  <button
                    type="button"
                    onClick={() => remove(c)}
                    className={`${adminGhostButton} text-red-700 hover:bg-red-50`}
                    title="Supprimer"
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </div>
              <p className="mt-2 text-sm text-gray-700 line-clamp-3">{c.contenu}</p>
            </li>
          )
        )}
      </ul>
    </>
  );
}
