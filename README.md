# AgriSurv

Application web qui accompagne les paysans malgaches tout au long de la saison : calendrier cultural de leur région, conseils, météo et alertes, en malgache.

Les calendriers du riz viennent du livre *Tetiandrom-pambolena Vary 2025-2026* (FOFIFA, MINAE, DGM) : 104 calendriers pour 22 régions, avec pour chaque variété les périodes conseillées de préparation du sol, semis, repiquage, fertilisation, sarclage, traitement et récolte.

## Fonctionnalités

- **Inscription et connexion rapides** : téléphone + code à 6 chiffres, session gardée 30 jours.
- **Choix de la culture** : la région est choisie à l'inscription, puis le paysan choisit la catégorie (an-drano / an-tanety) et sa variété.
- **Alimanaka (calendrier)** : activités passées, en cours et à venir pour la variété choisie.
- **Torohevitra (conseils)** : fiches pratiques par thème (semis, engrais, mauvaises herbes…).
- **Toetrandro (météo)** : prévisions de la région via OpenWeather, avec les risques (pluie, vent).
- **Fampitandremana (alertes)** et **observations** du paysan.
- **Espace admin** : modifier les calendriers (activités et dates par variété), gérer les torohevitra, voir les statistiques d'utilisation (inscrits, actifs, régions, variétés suivies).

## Comptes de démonstration

Le code est `123456` pour tous les comptes. Sur la page de connexion, un clic sur un compte de démonstration remplit le formulaire.

| Téléphone | Compte | Région | Ce qu'on voit |
|---|---|---|---|
| `0340000000` | Admin | — | Espace admin : statistiques, calendriers, torohevitra |
| `0340000001` | Rakoto Demo | Analamanga | Calendrier du riz an-drano Madikatra |
| `0340000002` | Rasoa Demo | Alaotra Mangoro | Calendrier MKX, Mihary (zone Alaotra) |
| `0340000003` | Randria Demo | Sava | Pas encore de variété : montre l'écran de choix |

Les calendriers couvrent la saison octobre 2025 – juin 2026 : après juin 2026, toutes les activités apparaissent comme passées.

## Technologies

- **Frontend** : React 19, React Router, Tailwind CSS (`client/`)
- **Backend** : Node.js, Express 5, Sequelize, JWT, bcrypt (`src/`)
- **Base de données** : MySQL

## Installation

Prérequis : Node.js 20+ et MySQL 8+ (par exemple via WAMP ou XAMPP).

### 1. Base de données

Créer la base puis importer la structure, les données de référence et les comptes démo :

```sh
mysql -u root -e "CREATE DATABASE tantsaha_co2 CHARACTER SET utf8mb4"
mysql -u root --default-character-set=utf8mb4 tantsaha_co2 < tantsaha_co2.sql
mysql -u root --default-character-set=utf8mb4 tantsaha_co2 < comptes_demo.sql
```

Avec phpMyAdmin : créer la base `tantsaha_co2`, puis importer les deux fichiers dans cet ordre.

La connexion se configure dans [src/config/db.js](src/config/db.js) (par défaut `root` sans mot de passe, port 3306).

Pour une base installée avant l'espace admin, ajouter d'abord le rôle et les dates d'inscription, puis réimporter les comptes démo :

```sh
mysql -u root --default-character-set=utf8mb4 tantsaha_co2 < maj_admin.sql
mysql -u root --default-character-set=utf8mb4 tantsaha_co2 < comptes_demo.sql
```

### 2. Backend (port 3000)

```sh
cp .env.example .env    # puis remplacer la valeur de JWT_SECRET
npm install
npm start
```

### 3. Frontend (port 3001)

```sh
cd client
npm install
npm start
```

L'application s'ouvre sur http://localhost:3001.

## Structure

```
├── index.js                 point d'entrée du serveur
├── src/
│   ├── app.js               configuration Express et routes
│   ├── config/db.js         connexion MySQL
│   ├── controllers/         logique des routes
│   ├── models/              requêtes SQL
│   └── router/              définition des routes
├── client/                  application React
│   └── src/
│       ├── Pages/           écrans (connexion, calendrier, conseils, météo…)
│       ├── Components/      menu et composants communs
│       ├── modules/         appels à l'API
│       └── hooks_login/     hooks (formulaires, chargement des données)
├── tantsaha_co2.sql         structure de la base + données de référence
├── comptes_demo.sql         comptes de démonstration (admin + paysans)
├── maj_admin.sql            ajoute le rôle admin sur une base existante
└── maj_fofifa_riz_2025_2026.sql   mise à jour des calendriers FOFIFA sur une base existante
```

## API principale

| Route | Rôle |
|---|---|
| `POST /login/signup`, `POST /login/loging` | Inscription, connexion (renvoie un JWT) |
| `GET /culture/regions` | Régions disposant d'un calendrier |
| `GET /culture/showAll/:localisation` | Cultures d'une région |
| `GET /culture/categorie/:id_culture` | Catégories (an-drano, an-tanety) |
| `GET /culture/Variety/:id_culture/:id_categorie` | Variétés d'une catégorie |
| `POST /culture/insert` | Enregistre la variété choisie par le paysan |
| `GET /Activity/gestionPlaning/:id_paysan/:id_varieter` | Activités passées, en cours et à venir |
| `GET /conseil/allType`, `GET /conseil/bytype/:type` | Conseils |
| `GET /admin/stats` | Statistiques d'utilisation (admin) |
| `GET/POST/PUT/DELETE /admin/planning…` | Calendriers par variété (admin) |
| `GET/POST/PUT/DELETE /admin/conseils…` | Torohevitra (admin) |

Les routes `/admin` demandent un token d'un compte dont le `role` est `admin`.

## Mettre à jour une base existante

Pour une base installée avant l'ajout des calendriers FOFIFA, appliquer seulement la mise à jour :

```sh
mysql -u root --default-character-set=utf8mb4 tantsaha_co2 < maj_fofifa_riz_2025_2026.sql
```

Les tables sont en MyISAM (pas de transaction) : faire une sauvegarde avec `mysqldump` avant.
