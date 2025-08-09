# Regards Croisés — PWA visuelle (LocalStorage)

- 🎨 Style bleu/blanc inspiré des documents fournis
- 🌗 Thème clair/sombre avec bascule et persistance
- 🎙 Épisodes avec image (URL) et audio (URL) + démo locale incluse
- 📱 Mobile‑first, installable, offline (GitHub Pages ready)

## Déploiement GitHub Pages
1. Crée un dépôt (ex: `regards-croises`).
2. Mets à la racine : `index.html`, `sw.js`, `manifest.webmanifest`, dossier `icons/`, dossier `media/`.
3. `git add . && git commit -m "visual pwa" && git push`
4. Settings → Pages → *Deploy from a branch* → **main / root**.

## Mise à jour du cache
Incrémente `CACHE` dans `sw.js` après une modification pour forcer l’actualisation.
