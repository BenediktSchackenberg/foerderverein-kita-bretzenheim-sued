# 🌻 Förderverein Kita Bretzenheim-Süd e.V.

Fröhliche, kindliche Website für unseren Förderverein. Gebaut mit
[Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com).

## 🚀 Lokal entwickeln

```bash
nvm use      # Node 22 LTS (siehe .nvmrc)
npm install
npm run dev  # http://localhost:4321
```

## 📦 Build

```bash
npm run build    # statische Files nach ./dist
npm run preview  # lokale Vorschau des Build
```

## 🌐 Deployment

Push auf `main` → GitHub Actions baut und deployt automatisch auf
**GitHub Pages** (`.github/workflows/deploy.yml`).

### Einmalig nötig:
1. **GitHub → Settings → Pages → Build and deployment**:
   Source = **GitHub Actions**.
2. Erste Pipeline pusht → fertig.

### Custom Domain (TODO):
1. Domain kaufen (z.B. `foerderverein-kita-bretzenheim-sued.de`).
2. DNS: `CNAME` auf `benediktschackenberg.github.io.` (oder Apex über A-Records).
3. In **Settings → Pages → Custom domain** Domain eintragen.
4. Optional: Datei `public/CNAME` mit der Domain anlegen (auto-Persistenz).
5. `astro.config.mjs` → `site` ggf. anpassen.

## ✉️ Anmeldeformular

Aktuell läuft die Anmeldung per **`mailto:` an `fv.mz.kita@gmail.com`**
(Fallback). Empfehlung:

1. Kostenlosen Account bei [Formspree](https://formspree.io/) anlegen.
2. Form-Endpoint kopieren.
3. In `src/pages/anmeldung.astro` die Konstante `FORMSPREE_ENDPOINT` setzen.

## 📄 PDF-Anmeldeformular

Platzhalter-Link auf `/anmeldung-formular.pdf`. Echtes PDF in `public/`
ablegen, dann funktioniert der Download automatisch.

## 🛠 Struktur

```
src/
├─ layouts/BaseLayout.astro    # Header + Footer + Fonts
├─ components/
│  ├─ Button.astro
│  └─ Card.astro
└─ pages/
   ├─ index.astro       # Startseite mit Hero + 3 Kacheln
   ├─ anmeldung.astro   # Mitglieds-/Spenden-Formular
   └─ impressum.astro   # §5 TMG + Datenschutz
```

## 🎨 Design

- **Fonts:** Quicksand (Headings) + Nunito (Body) via Google Fonts
- **Farben:** Sonnen-Gelb, Mint, Korall, Cream — siehe `tailwind.config.mjs`
- Kindlich-verspielt mit Emojis, abgerundeten Ecken, SVG-Wellen.

## 📋 TODO

- [ ] Echte Domain kaufen & DNS einrichten
- [ ] GitHub Pages aktivieren (Settings → Pages → Source: GitHub Actions)
- [ ] Formspree-Endpoint einsetzen
- [ ] Vereins-PDF nach `public/anmeldung-formular.pdf` legen
- [ ] Foto/Logo der Kita ergänzen (statt Emoji)
