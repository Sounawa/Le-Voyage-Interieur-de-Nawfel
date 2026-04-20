# 🌙 Le Voyage Intérieur de Souhayl — Tome 1 : L'Éveil

> *Une histoire spirituelle interactive*

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0055?logo=framer)

## 📖 Description

**Le Voyage Intérieur de Souhayl** est un livre interactif numérique qui raconte l'histoire de Souhayl, un garçon de dix ans qui rêve de comprendre le **Tassawuf** — le chemin de la purification du cœur. Pour cela, il devra pénétrer dans son monde intérieur et affronter son plus grand ennemi : son propre ego.

Conçu pour les jeunes lecteurs (8-14 ans), ce livre combine narration riche, choix moraux et concepts spirituels de la tradition soufie.

## ✨ Caractéristiques

### Histoire
- **167 pages** de narration immersive en français
- **20 points de choix** avec 3 options chacun, tous valides
- **4 fins distinctes** : La Lumière, La Sagesse, L'Ombre, La Pureté
- **5 chapitres** : Prologue, La Découverte, Le Désert de l'Âme, La Forêt des Épreuves, La Montagne de la Vérité
- **6 illustrations** IA aux moments clés de l'histoire

### Fonctionnalités
- 🎧 **Narration TTS** — Synthèse vocale en français (Web Speech API)
- 🔊 **Effets sonores** — Sons de page, choix, chapitres (Web Audio API)
- 📚 **Abécédaire spirituel** — 25 termes du Tassawuf avec script arabe
- 🧭 **Carte du voyage** — Navigation par chapitre avec progression
- 🏆 **12 succès** — Système de réalisations déblocables
- 🔍 **Recherche** — Recherche plein texte dans l'histoire
- 📊 **Statistiques** — Temps de lecture, pages visitées, choix faits
- 🔖 **Favoris** — Système de marque-pages persistant
- 🗺️ **Carte des chemins** — Visualisation des branches narratives
- 🧩 **Quiz spirituel** — 10 questions sur le Tassawuf et l'histoire
- 🎯 **Mode immersif** — Lecture sans interface pour immersion totale
- ⏱️ **Minuteur de lecture** — Suivi du temps de session et total
- 🔥 **Séries de lecture** — Streaks quotidiens
- 📏 **Personnalisation** — Taille de police, interligne, famille de police
- ⌨️ **Navigation clavier** — Espace pour continuer, 1-2-3 pour choisir
- 👆 **Navigation tactile** — Glisser gauche/droite pour tourner les pages

### Design
- 🌌 Thème sombre mystérieux avec accents dorés
- ✨ Animations Framer Motion fluides
- 🕌 Motifs géométriques islamiques
- 🌟 Particules d'ambiance dynamiques selon l'humeur du chapitre
- 📱 Design responsive (mobile-first)

## 🛠️ Stack Technique

| Technologie | Usage |
|---|---|
| **Next.js 16** | Framework React avec App Router |
| **TypeScript 5** | Typage strict |
| **Tailwind CSS 4** | Styles utilitaires |
| **shadcn/ui** | Composants UI (New York style) |
| **Framer Motion 12** | Animations et transitions |
| **Zustand 5** | Gestion d'état client (persisté) |
| **Lucide Icons** | Icônes SVG |
| **Web Audio API** | Sons synthétisés |
| **Web Speech API** | Narration TTS |

## 🚀 Installation

### Prérequis
- [Bun](https://bun.sh/) (recommandé) ou Node.js 18+
- Un navigateur moderne

### Lancer en développement

```bash
# Cloner le dépôt
git clone https://github.com/Sounawa/Le-Voyage-Interieur-de-Souhayl.git
cd Le-Voyage-Interieur-de-Souhayl

# Installer les dépendances
bun install

# Lancer le serveur de développement
bun run dev
```

L'application est accessible sur [http://localhost:3000](http://localhost:3000).

### Build de production

```bash
bun run build
bun run start
```

## 📁 Structure du projet

```
src/
├── app/
│   ├── page.tsx                # Orchestrateur principal
│   ├── layout.tsx              # Layout racine (thème sombre)
│   └── globals.css             # ~3 600 lignes de CSS custom
├── components/
│   ├── book/                   # 36 composants du livre interactif
│   │   ├── BookCover.tsx       # Couverture animée avec parallaxe
│   │   ├── StoryPageView.tsx   # Pages d'histoire avec drop cap
│   │   ├── ChoiceButtons.tsx   # Boutons de choix interactifs
│   │   ├── ChapterTitle.tsx    # Transitions de chapitre
│   │   ├── EndingScreen.tsx    # Écrans de fin
│   │   ├── TTSNarration.tsx    # Narration vocale
│   │   ├── SpiritualQuiz.tsx   # Quiz mini-jeu
│   │   ├── ChapterMap.tsx      # Carte de navigation
│   │   ├── AchievementsPanel.tsx # Panneau des succès
│   │   └── ...                 # + 27 autres composants
│   └── ui/                     # Composants shadcn/ui
├── data/
│   ├── story-data.ts           # 1 837 lignes, 167 pages, 20 choix
│   └── achievements.ts         # Définitions des succès
├── hooks/                      # Hooks custom (TTS, swipe, mobile)
├── lib/                        # Types et utilitaires
├── store/
│   └── story-store.ts          # Store Zustand (état persisté)
└── public/
    └── images/                 # 6 illustrations IA
```

## 🎮 Guide de navigation

| Action | Desktop | Mobile |
|---|---|---|
| Continuer | `Espace` / `Entrée` | Tap / Glisser ← |
| Retour | `Échap` | Glisser → |
| Choix A/B/C | `1` / `2` / `3` | Tap sur le bouton |

## 📊 Statistiques du projet

- **~13 200 lignes** de code TypeScript/CSS
- **36 composants** React
- **4 hooks** custom
- **167 pages** d'histoire
- **20 points de choix**
- **12 succès** déblocables
- **10 questions** de quiz

## 📄 Licence

Ce projet est privé et réservé à un usage personnel.

---

*« Le Voyage Intérieur de Souhayl » — Conçu avec ❤️ pour les jeunes chercheurs de sagesse.*
