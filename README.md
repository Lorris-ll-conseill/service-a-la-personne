# Projet Service à la Personne - Site Vitrine "Harmonie Services"

Ce projet est un site vitrine complet pour une entreprise fictive de services à la personne, "Harmonie Services", proposant des services d'aide aux personnes âgées, de ménage, de préparation de repas et d'assistance administrative.

## Fonctionnalités

- Site responsive adapté à tous les appareils (mobile, tablette, desktop)
- Animations et transitions fluides avec CSS et JavaScript
- Design moderne avec système de design cohérent (variables CSS)
- Formulaires de contact et de demande de rappel avec validation et soumission AJAX
- Présentation détaillée des services avec pages dédiées
- Témoignages clients avec slider interactif
- Intégration de carte Google Maps
- FAQ interactive avec système d'accordéon
- Outil de test de réactivité intégré
- Serveur Node.js Express pour gérer les soumissions de formulaires
- Interface d'administration basique pour consulter les messages

## Structure du projet

```
service-a-la-personne/
│
├── public/                  // Fichiers statiques servis par Express
│   ├── css/                 // Feuilles de style
│   │   ├── normalize.css    // Reset CSS pour la cohérence entre navigateurs
│   │   ├── style.css        // Styles principaux et système de design
│   │   ├── animations.css   // Animations et transitions
│   │   ├── forms.css        // Styles spécifiques aux formulaires
│   │   └── faq.css          // Styles pour la page FAQ
│   │
│   ├── js/                  // Scripts JavaScript
│   │   ├── main.js          // Fonctionnalités principales du site
│   │   ├── animations.js    // Gestion des animations au défilement et effets
│   │   ├── forms.js         // Validation et soumission AJAX des formulaires
│   │   └── responsive-test.js // Outil de test de réactivité
│
├── views/                   // Pages HTML du site
│   ├── index.html           // Page d'accueil
│   ├── services.html        // Vue d'ensemble des services
│   ├── menage.html          // Page dédiée aux services de ménage
│   ├── repas.html           // Page dédiée à la préparation de repas
│   ├── contact.html         // Formulaire de contact et coordonnées
│   ├── faq.html             // Questions fréquemment posées
│   └── responsive-test.html // Outil pour tester l'affichage sur différents écrans
│
├── server.js                // Serveur Express pour servir le site et gérer l'API
├── package.json             // Dépendances et scripts npm
└── README.md                // Documentation du projet
```

## Technologies utilisées

- **Frontend**:

  - HTML5 sémantique
  - CSS3 (avec variables CSS pour le système de design)
  - JavaScript (ES6+)
  - Fetch API pour les requêtes AJAX
  - Font Awesome pour les icônes
  - Animations CSS et JavaScript

- **Backend**:
  - Node.js
  - Express.js
  - Stockage en mémoire pour les démonstrations (simulant une base de données)

## Pour démarrer le projet

1. Cloner le dépôt :

   ```bash
   git clone https://github.com/votre-nom/service-a-la-personne.git
   cd service-a-la-personne
   ```

2. Installer les dépendances :

   ```bash
   npm install
   ```

3. Lancer le serveur de développement :

   ```bash
   npm start
   ```

4. Ouvrir le site dans votre navigateur :
   ```
   http://localhost:3002
   ```

## Fonctionnalités détaillées

### Système d'animation

Le site intègre un système d'animation sophistiqué qui déclenche des effets lorsque les éléments entrent dans la fenêtre de visualisation.
Il comprend :

- Animations de fondu et glissement lors du défilement
- Effets hover interactifs sur les cartes de services
- Animation de comptage pour les statistiques
- Effet parallaxe sur certaines sections

### Validation de formulaire

Les formulaires de contact et de demande de rappel incluent :

- Validation côté client en temps réel
- Retour visuel instantané en cas d'erreur
- Animation d'envoi (spinner)
- Message de confirmation après soumission réussie
- Soumission AJAX sans rechargement de page

### Système de FAQ accordéon

La page FAQ présente :

- Un système d'accordéon pour afficher/masquer les réponses
- Filtrage par catégories de questions
- Animation d'ouverture/fermeture
- Design adaptatif sur tous les appareils

### Interface d'administration

Une interface simple pour visualiser les messages de contact et demandes de rappel :

- Accessible via `/admin/submissions?token=harmonie-admin-2025`
- Affichage en tableaux des soumissions
- Onglets pour passer des messages de contact aux demandes de rappel

## Personnalisation

Le site utilise un système de variables CSS pour faciliter la personnalisation :

```css
:root {
  --color-primary: #4e8cff;
  --color-primary-dark: #3a7ae8;
  --color-secondary: #ff6b6b;
  --color-text: #333;
  --color-text-light: #666;
  --color-background: #fff;
  --color-background-alt: #f5f7fa;
  --font-family: "Nunito", sans-serif;
}
```

Pour modifier le thème de couleur, il suffit d'ajuster ces variables dans le fichier `style.css`.

## Crédits

- Images : [Unsplash](https://unsplash.com)
- Icônes : [Font Awesome](https://fontawesome.com)
- Polices : [Google Fonts](https://fonts.google.com)

## Licence

MIT © [Votre Nom]

## Évolutions futures

- Migration vers Vue.js pour une architecture plus modulaire
- Intégration d'une authentification sécurisée pour l'espace admin
- Ajout d'une base de données MongoDB pour le stockage des messages
- Intégration de paiement en ligne pour les devis acceptés
- Système de réservation de créneaux en ligne

```bash
npm install
```

2. Démarrer le serveur :

```bash
node server.js
```

3. Accéder au site via l'URL :

```
http://localhost:3002
```

## Pages du site

- **Accueil** : Présentation de l'entreprise, arguments clés et services principaux
- **Services** : Vue d'ensemble des différents services proposés
- **Ménage** : Page dédiée aux services de ménage à domicile
- **Repas** : Page dédiée aux services de préparation de repas
- **Contact** : Formulaire de contact et coordonnées de l'entreprise
- **FAQ** : Questions fréquentes organisées par catégories
- **Test de réactivité** : Outil pour tester l'affichage sur différentes tailles d'écran

## Caractéristiques techniques

### Frontend

- HTML5 sémantique
- CSS3 avec variables personnalisées et flexbox/grid
- JavaScript vanilla pour les interactions et animations
- Responsive design avec media queries
- Formulaires avec validation côté client et soumission AJAX

### Backend

- Serveur Node.js avec Express
- API RESTful pour la gestion des formulaires
- Architecture MVC simplifiée

### Design System

Le site utilise un système de design cohérent avec :

- Palette de couleurs harmonieuse (variables CSS)
- Typographie moderne et lisible
- Espacements et marges standardisés
- Composants réutilisables (cartes, boutons, formulaires)
- Animations et transitions unifiées

## Outils de développement

### Test de réactivité

Le site inclut un outil de test de réactivité accessible à l'URL `/responsive-test`. Cet outil permet de :

- Visualiser les pages du site sur différentes tailles d'écran (mobile, tablette, desktop)
- Tester les breakpoints et l'adaptation du design
- Afficher les dimensions actuelles de la fenêtre

## Fonctionnalités JavaScript

- Navigation responsive avec menu hamburger sur mobile
- Animations au scroll avec IntersectionObserver
- Slider de témoignages
- Compteurs animés
- Accordéon FAQ
- Validation et soumission des formulaires
- Parallaxe et effets visuels
- Gestion des erreurs de formulaire

## Pour aller plus loin

### Améliorations possibles

- Conversion en site Vue.js pour une expérience plus dynamique
- Ajout d'un backend complet avec base de données
- Intégration de paiement en ligne pour les prestations
- Système de réservation de services
- Espace client sécurisé
- Optimisation SEO avancée

## Crédits

Ce projet a été créé à des fins éducatives et de démonstration.
Images : Unsplash
Icônes : Font Awesome
Polices : Google Fonts (Montserrat, Nunito)

## License

MIT
