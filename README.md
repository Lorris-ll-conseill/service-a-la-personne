# Service à la Personne

Ce projet est une application web dédiée aux services à la personne, incluant des services de ménage, de repas, et plus encore. L'application permet aux utilisateurs de découvrir et de demander des services adaptés à leurs besoins.

## Structure du Projet

```
service-a-la-personne
├── public
│   ├── css
│   │   ├── style.css
│   │   └── normalize.css
│   ├── js
│   │   └── main.js
│   └── images
├── views
│   ├── index.html
│   ├── services.html
│   ├── menage.html
│   ├── repas.html
│   └── contact.html
├── server.js
├── package.json
├── .gitignore
└── README.md
```

## Installation

1. Assurez-vous d'avoir [Node.js](https://nodejs.org/) installé sur votre machine.
2. Clonez le dépôt ou téléchargez les fichiers du projet.
3. Ouvrez un terminal et naviguez jusqu'au répertoire du projet.
4. Exécutez la commande suivante pour installer les dépendances :

   ```
   npm install
   ```

## Lancer l'Application

Pour démarrer le serveur, exécutez la commande suivante :

```
node server.js
```

L'application sera accessible à l'adresse `http://localhost:3000`.

## Pages Disponibles

- **Accueil** : Une page d'accueil avec un message de bienvenue et des liens vers les différents services.
- **Services** : Détails sur les services offerts.
- **Ménage** : Informations spécifiques sur les services de ménage.
- **Repas** : Informations sur les services de repas.
- **Contact** : Formulaire ou informations pour contacter l'équipe.

## Contribuer

Les contributions sont les bienvenues ! N'hésitez pas à soumettre des demandes de tirage pour améliorer l'application.