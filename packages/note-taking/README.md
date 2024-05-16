# Offline note-taking app

## Minimum attendu

Une application React.js avec 4 pages :

- Page d'accueil avec la liste des notes
- Page de création de note
- Page de visualisation de note
- Page de modification de note

La page de visualisation de note doit afficher le contenu en markdown et une preview convertie en HTML (bouton pour basculer entre les deux)

### Actions possibles

- Créer une note
- Modifier une note
- Supprimer une note

### Modèle de `note`

- Un titre
- Un contenu (markdown)
- Une date de création (automatique)
- Une date de modification (automatique)
- Un identifiant unique (UUID - automatique)

### Spécificités & Contraintes

- Les notes sont stockées en local (localStorage) via un middleware zustand
- Réaliser au moins un test unitaire (le fichier de test doit être dans `src` et s'appeler `xxxxxx.test.tsx`)
- Réaliser au moins un test end to end (configuré dans le dossier `tests/e2e`)
- L'application est responsive
- Pas de librairie de composants UI
- Utilisation des CSS modules pour le style
- Utilisation de [Tanstack Router](https://tanstack.com/router/latest/docs/framework/react/overview) pour la navigation
- Utilisation de [zustand](https://docs.pmnd.rs/zustand/getting-started/introduction) pour la gestion d'état
