const MOIS_MG = [
  "Janoary", "Febroary", "Martsa", "Aprily", "Mey", "Jona",
  "Jolay", "Aogositra", "Septambra", "Oktobra", "Novambra", "Desambra",
];

// Les dates arrivent de l'API en "AAAA-MM-JJ" : on les lit en heure locale.
export const parseDay = (value) => {
  const [y, m, d] = String(value).slice(0, 10).split("-").map(Number);
  return new Date(y, m - 1, d);
};

export const todayStr = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
};

export const formatMg = (value, withYear = true) => {
  const d = value instanceof Date ? value : parseDay(value);
  return `${d.getDate()} ${MOIS_MG[d.getMonth()]}${withYear ? " " + d.getFullYear() : ""}`;
};

export const formatRangeMg = (debut, fin) => {
  const a = parseDay(debut);
  const b = parseDay(fin);
  return `${formatMg(a, a.getFullYear() !== b.getFullYear())} – ${formatMg(b)}`;
};

// Nombre de jours entiers entre aujourd'hui et la date (négatif si passée).
export const daysFromToday = (value) =>
  Math.round((parseDay(value) - parseDay(todayStr())) / 86400000);
