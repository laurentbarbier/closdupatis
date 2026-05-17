# Instructions agents

Ce repo peut etre travaille par plusieurs assistants IA : Codex, Claude,
Copilot ou autre. Les consignes partagees vivent dans `.agents/`.

## A lire en premier

- `.agents/README.md` : index des agents et regles communes.
- `.agents/devexpert.md` : contexte technique React/TypeScript/Vite.
- `.agents/locationexpert.md` : contexte metier location courte duree.
- `.agents/working-backwards-coach.md` : cadrage PR/FAQ Working Backwards.

## Regles generales

- Lire le code existant avant toute modification.
- Respecter les patterns deja presents dans le projet.
- Garder les changements limites a la demande.
- Ne pas supprimer ou revert des modifications utilisateur non demandees.
- Ne pas inventer d'informations factuelles sur le logement, les tarifs,
  l'adresse, les distances ou les disponibilites.
- Verifier les changements applicatifs avec `npm run build`.

## Projet

Site vitrine Vite + React + TypeScript pour Hotel House Alpes Mancelles.

Commandes utiles :

```bash
npm run dev
npm run build
npm run fix:figma-assets
```

Il n'y a pas de script test/lint dedie dans `package.json` actuellement.

## Structure utile

```text
src/
  main.tsx
  app/
    App.tsx
    components/
    pages/
  assets/
  styles/
```

## Choix de profil

- Tache de code, refactor, bug, UI : utiliser `.agents/devexpert.md`.
- Tache de contenu, reservation, accueil voyageur, activites locales :
  utiliser `.agents/locationexpert.md`.
- Tache de cadrage produit/fonctionnalite avant execution :
  utiliser `.agents/working-backwards-coach.md`.
