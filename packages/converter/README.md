# Convertisseur de devises en ligne

## Minimum attendus

- Une page HTML avec un formulaire en 3 champs :
  - Montant à convertir
  - Devise source
  - Devise cible
- À la soumission du formulaire, le montant converti est affiché
- Les devises sont récupérées depuis [un service tiers](https://freecurrencyapi.com/), la clé d'API vous est fournie en
  privé
- Réaliser au moins un test unitaire (configuré dans le dossier `tests/unit`)
- Réaliser au moins un test end to end (configuré dans le dossier `tests/e2e`)
  - Les requêtes HTTP sont mockées en utilisant [msw](https://mswjs.io/)
- Le formulaire est accessible (éléments HTML sémantiques, tabulation clavier correcte)
- La page est responsive
- Pas de librairie externe

## Suppléments possibles

- Les devises sont stockées en "cache" pour éviter de les récupérer à chaque requête
- Les précédents montants convertis sont affichés sous le formulaire sous forme de liste (avec la date/heure de la
  conversion)

## Éléments de contexte

- Utilisation de `fetch` pour les requêtes HTTP
- Utilisation de https://picocss.com/docs pour le design (déjà importé pour vous dans le `src/style.css`)
