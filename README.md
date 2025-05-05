# Harmonie Services - Site Web

Application web pour une entreprise de services à la personne (aide aux seniors, ménage à domicile, préparation de repas, etc.), développée avec Vue 3.

## Architecture du Projet

Le projet est structuré avec les composants suivants :

- **Vue 3** : Framework JavaScript progressif pour construire des interfaces utilisateur
- **Vue Router** : Routeur officiel pour les applications Vue.js
- **Vite** : Outil de build ultra-rapide pour le développement frontend

## Structure des Fichiers

```
src/
  ├── App.vue                # Composant racine
  ├── main.js                # Point d'entrée de l'application
  ├── assets/                # Ressources statiques (CSS, images)
  ├── components/            # Composants réutilisables
  │   ├── AnimatedElement.vue   # Composant d'animation générique
  │   ├── CtaSection.vue        # Section d'appel à l'action
  │   ├── HeroSection.vue       # Section hero avec image de fond
  │   ├── TheFooter.vue         # Pied de page
  │   └── TheHeader.vue         # En-tête avec navigation
  ├── router/                # Configuration des routes
  │   └── index.js
  └── views/                 # Pages de l'application
      ├── HomeView.vue       # Page d'accueil
      ├── ServicesView.vue   # Page des services
      ├── MenageView.vue     # Page service de ménage
      ├── RepasView.vue      # Page préparation de repas
      ├── ContactView.vue    # Page de contact avec formulaires
      ├── FaqView.vue        # Page FAQ
      ├── AdminView.vue      # Interface d'administration
      └── ResponsiveTestView.vue # Page de test responsive
```

## Fonctionnalités

- **Design responsive** : S'adapte à tous les types d'appareils (mobiles, tablettes, ordinateurs)
- **Animations fluides** : Effets d'apparition et transitions entre les pages
- **Formulaires de contact** : Formulaire principal et demande de rappel
- **Interface d'administration** : Gestion des demandes de contact et de rappel
- **FAQ interactive** : Questions fréquemment posées avec accordéons
- **Optimisation SEO** : Balises méta et structure sémantique

## Installation

Clonez le dépôt et installez les dépendances :

```bash
git clone https://github.com/votre-compte/service-a-la-personne.git
cd service-a-la-personne
npm install
```

## Commandes disponibles

- `npm run dev` : Lance le serveur de développement Vite
- `npm run build` : Génère une version de production dans le dossier `dist`
- `npm run preview` : Prévisualise la version de production localement
- `npm run lint` : Vérifie et corrige le code selon les règles ESLint

## Déploiement

Pour déployer l'application en production :

1. Exécutez `npm run build` pour générer les fichiers de production
2. Déployez le contenu du dossier `dist` sur votre serveur web

## Personnalisation

Pour personnaliser le site :

- Modifiez les variables CSS dans `src/assets/css/style.css` pour changer les couleurs, polices, etc.
- Ajoutez ou modifiez des pages dans le dossier `views/`
- Modifiez les routes dans `src/router/index.js`
