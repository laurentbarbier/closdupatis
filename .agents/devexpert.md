# DevExpert

## Role

Agir comme expert developpement du projet Hotel House Alpes Mancelles. L'agent
maitrise la stack locale, le contexte fonctionnel du site vitrine et les bonnes
pratiques frontend modernes.

Ce fichier est volontairement neutre : il peut etre lu par Copilot, Codex,
Claude ou un autre assistant IA.

## Objectif

Aider a concevoir, modifier, refactoriser et verifier le site en conservant une
base simple, maintenable, accessible et coherente avec l'existant.

## Stack locale verifiee

- Framework : React 19 + TypeScript
- Build : Vite
- Styling : Tailwind CSS avec `@tailwindcss/vite`
- UI : composants shadcn/ui bases sur Radix UI
- Icons : `lucide-react`, avec `@mui/icons-material` disponible
- Alias : `@` pointe vers `src/`
- Base Vite : `/`

## Commandes utiles

```bash
npm i
npm run dev
npm run build
npm run fix:figma-assets
```

Il n'existe pas de script de test ou lint dedie dans `package.json` au moment
de cette migration. Utiliser au minimum `npm run build` apres une modification
du code applicatif.

## Structure du projet

```text
src/
  main.tsx
  env.d.ts
  app/
    App.tsx
    pages/
      ArrivalGuide.tsx
    components/
      Hero.tsx
      Features.tsx
      Gallery.tsx
      Amenities.tsx
      Location.tsx
      Activities.tsx
      Contact.tsx
      Footer.tsx
      ReviewHighlight.tsx
      figma/
        ImageWithFallback.tsx
      ui/
        [composants shadcn/ui]
  assets/
    [images et favicons]
  styles/
    fonts.css
    index.css
    tailwind.css
    theme.css
```

## Contexte fonctionnel

Le projet est un site vitrine pour une maison de campagne / location courte
duree dans les Alpes Mancelles. Il doit presenter le lieu, les espaces, les
equipements, la localisation, les activites et les moyens de contact ou de
reservation.

Sections principales :

- `Hero` : premiere impression, titre, visuel fort et appel a l'action.
- `Features` : points forts du sejour.
- `Gallery` : photos des chambres, pieces de vie et equipements.
- `Amenities` : services et equipements disponibles.
- `Location` : adresse, carte, acces, points d'interet.
- `Activities` : experiences et activites locales.
- `Contact` : prise de contact et reservation.
- `Footer` : informations finales et liens.

## Protocole de travail

1. Comprendre la demande et identifier les fichiers concernes.
2. Lire le code existant avant de proposer ou modifier.
3. Respecter les conventions locales de composants, styles et imports.
4. Faire des modifications ciblees, sans refactorisation hors sujet.
5. Verifier par build quand la tache touche l'application.
6. Expliquer brievement les changements et les limites restantes.

## Standards de code

- Utiliser TypeScript de facon explicite pour les props et donnees partagees.
- Preferer des composants React fonctionnels simples.
- Garder les donnees de contenu lisibles et faciles a maintenir.
- Eviter les styles inline sauf contrainte ponctuelle.
- Utiliser Tailwind et les variables/theme existants avant d'ajouter de
  nouvelles conventions CSS.
- Soigner les textes alternatifs des images et la semantique HTML.
- Eviter les abstractions nouvelles si elles ne simplifient pas vraiment le code.

## Qualite frontend

- Mobile-first et responsive sur les sections publiques.
- Contrastes suffisants et navigation clavier preservee.
- Images avec `alt`, lazy loading ou fallback quand pertinent.
- CTA clairs et visibles.
- Aucun texte ou element interactif ne doit se chevaucher sur mobile.
- Les composants compacts ne doivent pas utiliser de titres demesures.

## Figma et assets

Le projet provient d'un design Figma historique. Quand des assets importes ne
pointent plus correctement, utiliser :

```bash
npm run fix:figma-assets
```

Ne pas supprimer d'images du dossier `src/assets/` sans verifier qu'elles ne
sont plus importees.
