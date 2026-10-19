import { useReadAll } from "../../hooks_login/readAll";
import { getStats } from "../../modules/Admin_api";
import { AdminTitle } from "../../Components/AdminLayout";

const BAR = "#03624C";

function StatTile({ label, value, hint }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4">
      <p className="text-sm text-gray-600">{label}</p>
      <p className="text-3xl font-bold text-[#0B2B26] mt-1 tabular-nums">{value}</p>
      {hint && <p className="text-xs text-gray-500 mt-1">{hint}</p>}
    </div>
  );
}

function Card({ title, children }) {
  return (
    <section className="bg-white rounded-xl border border-gray-200 p-5">
      <h2 className="font-semibold text-[#0B2B26] mb-4">{title}</h2>
      {children}
    </section>
  );
}

// Barres horizontales triées, valeur écrite au bout de chaque barre.
function BarList({ rows, unit }) {
  if (rows.length === 0) return <p className="text-gray-500 text-sm">Aucune donnée pour l'instant.</p>;
  const max = Math.max(...rows.map((r) => r.total));
  return (
    <ul className="space-y-3">
      {rows.map((r) => (
        <li key={r.label} title={`${r.label} : ${r.total} ${unit}`}>
          <p className="text-sm text-gray-700 truncate">{r.label}</p>
          <div className="flex items-center gap-2 mt-1">
            <div className="flex-1 h-3">
              <div
                className="h-3 rounded-r"
                style={{ width: `${Math.max((r.total / max) * 100, 2)}%`, background: BAR }}
              />
            </div>
            <span className="w-8 text-right text-sm font-semibold tabular-nums text-gray-900">{r.total}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}

// Les 6 derniers mois, y compris ceux sans inscription.
function lastSixMonths(parMois) {
  const totals = Object.fromEntries(parMois.map((m) => [m.mois, m.total]));
  const now = new Date();
  return Array.from({ length: 6 }, (_, i) => {
    const d = new Date(now.getFullYear(), now.getMonth() - 5 + i, 1);
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
    return {
      key,
      label: d.toLocaleDateString("fr-FR", { month: "short" }),
      total: totals[key] || 0,
    };
  });
}

function MonthColumns({ parMois }) {
  const months = lastSixMonths(parMois);
  const max = Math.max(1, ...months.map((m) => m.total));
  return (
    <div className="flex items-end gap-2 h-44 border-b border-gray-200">
      {months.map((m) => (
        <div
          key={m.key}
          className="flex-1 flex flex-col items-center justify-end h-full"
          title={`${m.label} : ${m.total} inscription(s)`}
        >
          <span className="text-xs font-semibold tabular-nums text-gray-900 mb-1">{m.total}</span>
          <div
            className="w-full max-w-10 rounded-t"
            style={{ height: `${(m.total / max) * 75}%`, minHeight: m.total ? 4 : 0, background: BAR }}
          />
        </div>
      ))}
      <div className="sr-only">
        {months.map((m) => `${m.label} ${m.total}`).join(", ")}
      </div>
    </div>
  );
}

const fmtDate = (value) =>
  value ? new Date(value).toLocaleDateString("fr-FR", { day: "2-digit", month: "short", year: "numeric" }) : "—";

export function AdminStats() {
  const { data: stats, err } = useReadAll(getStats);

  if (err) return <p className="text-red-700">{err}</p>;
  if (!stats?.totaux) return <p className="text-gray-600">Chargement…</p>;

  const { totaux, parRegion, parVariete, parMois, derniers } = stats;
  const pct = (n) => (totaux.paysans ? Math.round((n / totaux.paysans) * 100) : 0);

  return (
    <>
      <AdminTitle title="Statistiques" subtitle="Utilisation de l'application par les paysans" />

      <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 mb-6">
        <StatTile label="Paysans inscrits" value={totaux.paysans} />
        <StatTile label="Nouveaux (30 j)" value={totaux.nouveaux_30j} />
        <StatTile label="Actifs (30 j)" value={totaux.actifs_30j} hint={`${pct(totaux.actifs_30j)} % des inscrits`} />
        <StatTile label="Sans variété" value={totaux.sans_variete} hint="n'ont pas fini l'inscription" />
        <StatTile label="Observations" value={totaux.observations} />
      </div>

      <div className="grid gap-4 lg:grid-cols-2 mb-4">
        <Card title="Paysans par région">
          <BarList rows={parRegion} unit="paysan(s)" />
        </Card>
        <Card title="Variétés les plus suivies">
          <BarList rows={parVariete} unit="paysan(s)" />
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card title="Inscriptions sur 6 mois">
          <MonthColumns parMois={parMois} />
          <div className="flex gap-2 mt-1">
            {lastSixMonths(parMois).map((m) => (
              <span key={m.key} className="flex-1 text-center text-xs text-gray-500">
                {m.label}
              </span>
            ))}
          </div>
        </Card>
        <Card title="Dernières inscriptions">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-gray-500 border-b">
                  <th className="py-2 pr-3 font-medium">Nom</th>
                  <th className="py-2 pr-3 font-medium">Région</th>
                  <th className="py-2 pr-3 font-medium">Inscrit le</th>
                  <th className="py-2 font-medium">Dernière visite</th>
                </tr>
              </thead>
              <tbody>
                {derniers.map((p, i) => (
                  <tr key={i} className="border-b last:border-0">
                    <td className="py-2 pr-3">
                      {p.nom_paysan} {p.prenom_paysan}
                      <span className="block text-xs text-gray-500">{p.num_telephone}</span>
                    </td>
                    <td className="py-2 pr-3">{p.localisation || "—"}</td>
                    <td className="py-2 pr-3 whitespace-nowrap">{fmtDate(p.date_inscription)}</td>
                    <td className="py-2 whitespace-nowrap">{fmtDate(p.derniere_connexion)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </>
  );
}
