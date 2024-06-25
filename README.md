# Challenges JavaScript

## Sujets choisies

- Application "Convertisseur de devise"
- Application de prise de note

## Design patterns choisies

### Convertisseur

Pour le convertisseur, étant donné la taille du projet, le choix s'est oriénté vers un pattern de création. N'ayant pas non plus de logique métier très complexe je suis donc parti sur un pattern générique, le `Singleton`. Dans mon cas j'ai utilisé le singleton pour faire un client API un peu comme **axios** ou bien **ky**.

### Prise de note

En ce qui concerne l'application de prise de note, avec l'utilisation de la librairie de gestion de store centralisé **zustand**, on peut déduire que l'on utilise indirectement le pattern `Façade` qui vise à simplifier l'utilisation de système complexe tel queles states via une interface simple.
