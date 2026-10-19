import { useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh, faStop, faChevronRight, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { allTypeConseilApi, allTitleConseil, allAboutTitleConseil } from "../modules/Conseil_api";
import { useReadAll } from "../hooks_login/readAll";
import { speakMg, stopSpeaking } from "../modules/voice";
import { Page, EmptyState } from "../Components/FarmerLayout";

export function ConseilPage() {
  const { data: types = [], err } = useReadAll(allTypeConseilApi);

  return (
    <Page title="Torohevitra" subtitle="Safidio ny lohahevitra tianao ho fantatra">
      {err ? (
        <EmptyState>{err}</EmptyState>
      ) : (
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {types.map((type) => (
            <li key={type.type_conseil}>
              <Link
                to={`/Conseil/Type/${encodeURIComponent(type.type_conseil)}`}
                className="block bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                {type.pictogramme ? (
                  <img src={type.pictogramme} alt="" className="w-full h-28 md:h-36 object-cover" />
                ) : (
                  <div className="flex items-center justify-center w-full h-28 md:h-36 bg-green-50">
                    <FontAwesomeIcon icon={faLightbulb} className="text-4xl text-amber-400" />
                  </div>
                )}
                <p className="p-3 text-center text-lg font-semibold text-[#03624C]">{type.type_conseil}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </Page>
  );
}

export function GetTitle() {
  const { type } = useParams();
  const loadTitles = useCallback(() => allTitleConseil(type), [type]);
  const { data: titres = [], err } = useReadAll(loadTitles);

  return (
    <Page title={type} back="/Conseil/Type">
      {err ? (
        <EmptyState>{err}</EmptyState>
      ) : (
        <ul className="grid gap-3">
          {titres.map((t) => (
            <li key={t.id_conseil}>
              <Link
                to={`/Conseil/Type/Titre/${encodeURIComponent(t.titre)}`}
                className="flex items-center justify-between gap-3 bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow"
              >
                <div>
                  <h2 className="text-lg font-semibold text-[#0B2B26]">{t.titre}</h2>
                  <p className="text-gray-600 line-clamp-2">{t.contenu}</p>
                </div>
                <FontAwesomeIcon icon={faChevronRight} className="text-[#03624C]" />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </Page>
  );
}

export function GetAllByTitle() {
  const { title } = useParams();
  const loadConseil = useCallback(() => allAboutTitleConseil(title), [title]);
  const { data: conseils = [], err } = useReadAll(loadConseil);
  const conseil = conseils[0];

  return (
    // Fond d'origine de l'écran conseil : image des rizières assombrie.
    <div
      className="relative min-h-screen bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/images/hero.png')" }}
    >
      <div className="absolute inset-0 bg-black/40" />
    <Page
      title={title}
      tone="dark"
      back={conseil ? `/Conseil/Type/${encodeURIComponent(conseil.type_conseil)}` : "/Conseil/Type"}
    >
      {err ? (
        <EmptyState>{err}</EmptyState>
      ) : !conseil ? (
        <EmptyState>Andraso kely…</EmptyState>
      ) : (
        <article className="bg-gray-100 rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-5 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-amber-700">
              {conseil.type_conseil}
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => speakMg(conseil.contenu)}
                className="flex items-center gap-2 bg-[#03624C] text-white text-lg px-5 py-3 rounded-xl shadow hover:bg-green-800"
              >
                <FontAwesomeIcon icon={faVolumeHigh} />
                Hihaino
              </button>
              <button
                type="button"
                onClick={stopSpeaking}
                className="flex items-center gap-2 bg-white border-2 border-[#03624C] text-[#03624C] text-lg px-5 py-3 rounded-xl"
              >
                <FontAwesomeIcon icon={faStop} />
                Hijanona
              </button>
            </div>
            <p className="mt-5 text-lg leading-relaxed text-gray-800 whitespace-pre-line">{conseil.contenu}</p>
          </div>
        </article>
      )}
    </Page>
    </div>
  );
}
