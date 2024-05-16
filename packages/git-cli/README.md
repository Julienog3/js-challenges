# Git CLI

## Minimum attendu

Un outil Node.js en ligne de commande permettant de faire les actions populaires de Git :

- Cloner un repository
- Ajouter un remote
- Créer une branche
- Changer de branche
- Faire un commit
- Pousser un commit
- Récupérer les changements
- Sélectionner/Désélectionner les fichiers à ajouter à un commit

## Fonctionnalités

### Initialisation

- Hors action de clonage → throw si le projet n'est pas un repository Git

### Cloner un repository

- Demander le nom du repository à cloner
- Demander le mode de clonage (SSH/HTTPS)
- Demander le nom du dossier de destination (optionnel)

### Ajouter un remote

- Demander l'URL du remote
- Demander le nom du remote (optionnel, défaut = `origin`)

### Créer une branche

- Demander le nom de la branche
- Demander si la branche doit être créée à partir d'une autre branche (optionnel, défaut = branche courante)

### Changer de branche

- Demander le nom de la branche
- Demander si les changements en cours doivent être sauvegardés (optionnel, défaut = `false`)

### Faire un commit

- Demander le message du commit
- Demander la description du commit (optionnel)

### Pousser un commit

- Demander le nom du remote (optionnel, défaut = `origin`)
- Demander le nom de la branche (optionnel, défaut = branche courante)
- Demander si le push doit être forcé (optionnel, défaut = `false`)
- Demander si le push doit être effectué en mode `--dry-run` (optionnel, défaut = `false`)

### Récupérer les changements

- Demander le nom du remote (optionnel, défaut = `origin`)
- Demander le nom de la branche (optionnel, défaut = branche courante)

### Sélectionner/Désélectionner les fichiers à ajouter à un commit

- Afficher la liste des fichiers modifiés
- Sélectionner ou désélectionner les fichiers à ajouter à un commit

## Spécificités & Contraintes

- Utilisation de `prompts` pour l'UI : [documentation](https://github.com/poppinss/prompts)
- Utilisation d'`execa` pour lancer les commandes Git : [documentation](https://github.com/sindresorhus/execa)

## Tests

- Réaliser au moins un test fonctionnel pour chaque fonctionnalité
- Les tests utiliseront le test runner et le système d'assertion natif de Node.js
  - Example fourni dans `tests/example.test.ts`
  - [Documentation du test runner](https://nodejs.org/api/test.html)
  - [Documentation du système d'assertion](https://nodejs.org/api/assert.html)
- Les tests utiliseront le système de `trap` fourni par `@poppins/prompts`
