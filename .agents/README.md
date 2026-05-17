# Agents partages

Ce dossier centralise les consignes d'agents du projet dans un format neutre,
utilisable par Copilot, Codex, Claude ou tout autre assistant IA.

Les fichiers sources historiques sont dans `.github/agents/`. Les versions de
ce dossier doivent etre considerees comme la source generique a maintenir.

## Agents disponibles

- `devexpert.md` : expert developpement React/TypeScript/Vite du projet.
- `locationexpert.md` : expert metier location courte duree et contexte local.
- `working-backwards-coach.md` : coach PR/FAQ et Working Backwards.

## Regles communes

- Lire le code et la documentation locale avant de proposer une modification.
- Preferer les patterns deja presents dans le projet.
- Ne pas supprimer ou reecrire des changements utilisateur non demandes.
- Verifier les changements avec `npm run build` quand du code applicatif est modifie.
- Garder les reponses et fichiers orientes action, sans dependance a un outil specifique.

## Usage recommande

- Pour une tache technique, charger `devexpert.md`.
- Pour une decision de contenu, positionnement, accueil voyageur ou reservation,
  charger `locationexpert.md`.
- Pour cadrer une idee produit ou fonctionnalite avant implementation,
  charger `working-backwards-coach.md`.
