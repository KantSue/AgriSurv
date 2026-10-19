import {
  faUserPlus,
  faSeedling,
  faNoteSticky,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useReadAll } from "../../hooks_login/readAll";
import { getStats } from "../../modules/Admin_api";
import { Card, StatTile, HeroBanner, GlassStat } from "../../Components/AppShell";

// Une seule série par graphique : une seule teinte, celle de la marque.
const BAR = "#235347";

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
            <div className="flex-1 h-2.5 rounded-full bg-agri-50">
              <div
                className="h-2.5 rounded-full"
                style={{ width: `${Math.max((r.total / max) * 100, 3)}%`, background: BAR }}
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
    return { key, label: d.toLocaleDateString("fr-FR", { month: "short" }), total: totals[key] || 0 };
  });
}

// Tiges fines avec un point au sommet ; le mois le plus haut porte son chiffre.
function MonthLollipops({ parMois }) {
  const months = lastSixMonths(parMois);
  const max = Math.max(1, ...months.map((m) => m.total));
  const peak = months.reduce((a, b) => (b.total > a.total ? b : a), months[0]);
  return (
    <div>
      <div className="flex items-end h-52 gap-2">
        {months.map((m) => {
          const h = (m.total / max) * 80;
          const isPeak = m.key === peak.key && m.total > 0;
          return (
            <div
              key={m.key}
              className="group relative flex-1 flex flex-col items-center justify-end h-full"
              title={`${m.label} : ${m.total} inscription(s)`}
            >
              <div className="absolute inset-y-0 w-0.5 rounded-full bg-agri-50" />
              <span
                className={`relative mb-2 rounded-full px-2 py-0.5 text-xs font-semibold tabular-nums ${
                  isPeak ? "bg-agri-900 text-white" : "text-gray-700 opacity-0 group-hover:opacity-100"
                }`}
              >
                {m.total}
              </span>
              <div className="relative flex flex-col items-center" style={{ height: `${h}%` }}>
                <span className="w-3.5 h-3.5 rounded-full border-2 border-white shadow" style={{ background: BAR }} />
                <span className="flex-1 w-0.5" style={{ background: BAR }} />
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex gap-2 mt-2">
        {months.map((m) => (
          <span
            key={m.key}
            className={`flex-1 text-center text-xs ${
              m.key === peak.key && m.total > 0 ? "font-semibold text-agri-900" : "text-gray-500"
            }`}
          >
            {m.label}
          </span>
        ))}
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
    <div className="space-y-4">
      <HeroBanner
        eyebrow="Administration"
        title={
          <>
            Suivi des paysans
            <br />
            AgriSurv
          </>
        }
        subtitle="Utilisation de l'application et calendriers FOFIFA"
      >
        <GlassStat label="Paysans inscrits" value={totaux.paysans} />
        <GlassStat label="Actifs sur 30 jours" value={totaux.actifs_30j}>
          <div className="mt-2 h-1.5 w-full rounded-full bg-white/25">
            <div className="h-1.5 rounded-full bg-agri-100" style={{ width: `${pct(totaux.actifs_30j)}%` }} />
          </div>
          <p className="mt-1 text-xs text-agri-100">{pct(totaux.actifs_30j)} % des inscrits</p>
        </GlassStat>
      </HeroBanner>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatTile icon={faUserPlus} value={totaux.nouveaux_30j} label="Nouveaux (30 j)" />
        <StatTile icon={faSeedling} value={totaux.sans_variete} label="Sans variété" hint="inscription inachevée" />
        <StatTile icon={faNoteSticky} value={totaux.observations} label="Observations" />
        <StatTile icon={faMapLocationDot} value={parRegion.length} label="Régions représentées" />
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <Card title="Inscriptions sur 6 mois" className="lg:col-span-2">
          <MonthLollipops parMois={parMois} />
        </Card>
        <Card title="Paysans par région">
          <BarList rows={parRegion} unit="paysan(s)" />
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <Card title="Variétés les plus suivies">
          <BarList rows={parVariete} unit="paysan(s)" />
        </Card>
        <Card title="Dernières inscriptions" className="lg:col-span-2">
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
    </div>
  );
}
