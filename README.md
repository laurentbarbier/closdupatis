
  # Site Web Maison de Campagne

  This is a code bundle for Site Web Maison de Campagne. The original project is available at https://www.figma.com/design/eUwQ1iZtOZE946fXP1o3gI/Site-Web-Maison-de-Campagne.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

  ---

  ## Spécifications Détaillées

  ### Vue d'ensemble
  Site vitrine pour une maison de campagne Alpine, présentant les équipements, galerie d'images, localisation et activités disponibles.

  ### Objectifs
  - Présenter l'établissement de manière attrayante
  - Mettre en avant les caractéristiques et services
  - Faciliter la réservation et le contact
  - Optimiser pour mobile et desktop

  ### Architecture

  #### Stack Technologique
  - **Framework** : React + TypeScript
  - **Build** : Vite
  - **Styling** : Tailwind CSS + PostCSS
  - **UI Components** : shadcn/ui

  #### Structure du Projet
  ```
  src/
  ├── app/
  │   ├── App.tsx (Composant principal)
  │   └── components/ (Sections de la page)
  │       ├── Hero.tsx
  │       ├── Features.tsx
  │       ├── Gallery.tsx
  │       ├── Amenities.tsx
  │       ├── Location.tsx
  │       ├── Activities.tsx
  │       ├── Contact.tsx
  │       ├── Footer.tsx
  │       └── figma/ (Composants Figma)
  ├── assets/ (Images, icônes, manifests)
  └── styles/ (CSS global, Tailwind, thème)
  ```

  ### Sections de la Page

  #### 1. Hero
  **Objectif** : Présentation et accroche visuelle
  - **Contenu** : Titre principal, sous-titre, image/vidéo de fond, CTA "Réserver"
  - **Props** : `title`, `subtitle`, `backgroundImage`, `ctaText`, `ctaLink`

  #### 2. Features
  **Objectif** : Présenter les points forts et caractéristiques
  - **Layout** : Grille de 3-4 cartes
  - **Contenu** : Icône, titre, description (max 2-3 lignes)
  - **Props** : `features` (array d'objets {icon, title, description})

  #### 3. Gallery
  **Objectif** : Showcase visuel des espaces
  - **Layout** : Grid responsive (2-4 colonnes selon viewport)
  - **Contenu** : Images avec lazy loading et composant ImageWithFallback
  - **Interactivité** : Lightbox optionnel pour détails
  - **Props** : `images` (array de {src, alt, title})

  #### 4. Amenities
  **Objectif** : Lister les équipements et services disponibles
  - **Layout** : Cards ou liste iconographique
  - **Contenu** : Icône, nom du service, description brève
  - **Props** : `amenities` (array d'objets {icon, name, description})

  #### 5. Location
  **Objectif** : Afficher la localisation et informations de contact
  - **Contenu** : Adresse, coordonnées GPS, informations de contact
  - **Props** : `address`, `coordinates`, `contactEmail`, `contactPhone`

  #### 6. Activities
  **Objectif** : Proposer les activités et expériences disponibles
  - **Layout** : Cards ou carousel
  - **Contenu** : Image, titre, description, informations pratiques
  - **Props** : `activities` (array d'objets {image, title, description, details})

  #### 7. Contact / CTA
  **Objectif** : Appel à l'action final pour réservation
  - **Contenu** : Boutons de contact, liens de réservation
  - **Props** : `contactMethods`, `reservationLink`

  #### 8. Footer
  **Objectif** : Navigation et information complémentaire
  - **Contenu** : Liens, mentions légales, réseaux sociaux

  ### Design & Responsive
  - **Mobile-first approach**
  - **Breakpoints** : sm (640px), md (768px), lg (1024px), xl (1280px)
  - **Typographie** : Lisible et hiérarchisée
  - **Contraste** : Conforme WCAG 2.1 AA

  ### Performance
  - Images optimisées (WebP, lazy loading)
  - Code splitting par route/section
  - Lighthouse score cible : 90+

  ### Accessibilité
  - WCAG 2.1 AA
  - Sémantique HTML correcte
  - Navigation au clavier fonctionnelle
  