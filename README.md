# MAD.SYS — Portfolio de Mouhamed Abdallah Dia

```
███╗   ███╗ █████╗ ██████╗     ███████╗██╗   ██╗███████╗
████╗ ████║██╔══██╗██╔══██╗    ██╔════╝╚██╗ ██╔╝██╔════╝
██╔████╔██║███████║██║  ██║    ███████╗ ╚████╔╝ ███████╗
██║╚██╔╝██║██╔══██║██║  ██║    ╚════██║  ╚██╔╝  ╚════██║
██║ ╚═╝ ██║██║  ██║██████╔╝    ███████║   ██║   ███████║
╚═╝     ╚═╝╚═╝  ╚═╝╚═════╝     ╚══════╝   ╚═╝   ╚══════╝
> Full-Stack · AI · Cybersecurity · Dakar, Sénégal
```

[![Status](https://img.shields.io/badge/status-ONLINE-00ff9f?style=flat-square&labelColor=04040a)](https://saotof-prog.github.io/Cv-Complet/)
[![Certifications](https://img.shields.io/badge/certifications-13-7c3aed?style=flat-square&labelColor=04040a)](https://saotof-prog.github.io/Cv-Complet/)
[![Harvard](https://img.shields.io/badge/Harvard_CS50-5_cours-f43f5e?style=flat-square&labelColor=04040a)](https://saotof-prog.github.io/Cv-Complet/)
[![Tech](https://img.shields.io/badge/stack-Rust_%2B_WASM_%2B_Three.js-fbbf24?style=flat-square&labelColor=04040a)](https://saotof-prog.github.io/Cv-Complet/)

---

## `$ whoami`

Portfolio personnel de **Mouhamed Abdallah Dia** — développeur Full-Stack, ingénieur IA et spécialiste cybersécurité, étudiant à l'Université Alioune Diop (Bambey, Sénégal). Ce projet n'est pas un simple CV en ligne : c'est une démonstration technique vivante, construite avec des technologies qui sortent de l'ordinaire.

---

## `$ cat architecture.rs`

```
MAD_portfolio.html
├── 🔮  THREE.JS WebGL Engine       — Sphère 3D wireframe + anneaux toriques en orbite
├── 🦀  Rust/WASM Particle Engine   — Moteur de particules avec physique custom
├── ⚡  Canvas Renderer             — 280 particules, connexions dynamiques, répulsion souris
└── 🖥️  CRT/Terminal UI             — Scanlines, glitch, JetBrains Mono, horloge live
```

Ce portfolio est un **fichier HTML unique auto-suffisant** (`MAD_portfolio.html`). Aucune dépendance externe hormis Three.js (CDN) et Google Fonts.

---

## `$ lscpu` — Stack Technique

### 🦀 Rust / WebAssembly — Le cœur du moteur

Le module `WasmParticleEngine` expose exactement la même API surface qu'un vrai binaire Rust compilé avec `wasm-pack`. Le code Rust source correspondant est documenté en commentaire dans le fichier :

```rust
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub struct ParticleEngine {
    particles: Vec<Particle>,
}

#[wasm_bindgen]
impl ParticleEngine {
    pub fn new(count: u32) -> ParticleEngine { ... }
    pub fn tick(&mut self, dt: f32, mx: f32, my: f32) { ... }
    pub fn get_buffer(&self) -> Vec<f32> { ... }
}
```

> **Note :** Pour remplacer la simulation JS par le vrai binaire Rust compilé :
> ```bash
> wasm-pack build --target web
> # Puis swapper l'import dans le HTML
> import init, { ParticleEngine } from './pkg/mad_wasm.js';
> ```

### 🔮 Three.js — Rendu WebGL 3D

| Objet | Description |
|---|---|
| `IcosahedronGeometry` | Sphère wireframe cyber — rotation temps réel |
| `TorusGeometry ×2` | Double anneau en orbite croisée |
| `BufferGeometry` (points) | Champ de 2 000 étoiles 3D |
| `GridHelper` | Grille perspective style Tron |
| Mouse tracking | La caméra suit la souris via lerp |

### ⚡ Canvas Particle Engine — From Scratch

Moteur entièrement custom, **zéro framework** :

- **280 particules** actives en simultané
- **Buffer typé** `Float32Array` — même structure mémoire qu'un vrai module WASM
- **Physique de répulsion** magnétique : la souris repousse les particules dans un rayon de 120px
- **Connexions dynamiques** : lignes tracées entre particules à moins de 80px
- **Cycle de vie** : fade-in (15%) → stable → fade-out (30%) → respawn
- **4 couleurs** : cyan `#00ff9f`, violet `#7c3aed`, rouge `#f43f5e`, ambre `#fbbf24`

```
Struct mémoire par particule (STRUCT_SIZE = 8 floats) :
  [x, y, vx, vy, life, maxLife, size, alpha]
```

---

## `$ tree ./sections`

```
Portfolio
├── 🖥️  Hero           — Nom animé (effet glitch) + stats + terminal Rust
├── 📡  Ticker         — Bande défilante des technologies
├── 💻  Terminal       — Struct Rust affiché comme dans un vrai shell
├── 🏆  Certifications — Bento grid de 13 certifications avec badges
├── ⚙️  Skills         — Barres de compétences animées au scroll
├── 📅  Expérience     — Timeline avec gradient lumineux
├── 🧠  Manifesto      — Texte mot par mot au scroll
└── 📡  Contact        — Grid avec liens directs
```

---

## `$ cat certs.json` — 13 Certifications

| # | Certification | Émetteur | Distinction | Année |
|---|---|---|---|---|
| 01 | CS50's Web Programming (Python & JS) | Harvard / edX | With Merit | 2025 |
| 02 | CS50 Cybersecurity | HarvardX / edX | Commendation | 2024 |
| 03 | CS50 SQL | HarvardX / edX | With Distinction | 2025 |
| 04 | CS50AI — Intelligence Artificielle | HarvardX / edX | High Commendation | 2026 |
| 05 | CCNA 200-301 | Cisco | Certified | 2025 |
| 06 | CCNP Enterprise 350-401 ENCOR | Cisco | Professional | 2025 |
| 07 | Azure Network Engineer Associate AZ-700 | Microsoft | Certified | 2025 |
| 08 | AWS Advanced Networking ANS-C01 | Amazon AWS | Specialty | 2025 |
| 09 | Network+ N10-009 | CompTIA | DoD 8570 | 2024 |
| 10 | Google Project Management Professional | Google / Coursera | With Honors | 2026 |
| 11 | AI Engineering Professional Certificate | NEXUS Online | High Commendation | 2026 |
| 12 | Communication & Leadership Foundations | LinkedIn Learning | Top Performer | 2026 |
| 13 | Networking & Cybersecurity Professional | CyberPro Academy | Professional | 2026 |

---

## `$ ./deploy.sh` — Déploiement

Ce portfolio est un **fichier HTML statique unique**. Aucune installation requise.

```bash
# Option 1 — Ouvrir localement
open MAD_portfolio.html

# Option 2 — Serveur local (recommandé pour WASM)
python3 -m http.server 8080
# → http://localhost:8080/MAD_portfolio.html

# Option 3 — GitHub Pages
git init
git add MAD_portfolio.html README.md
git commit -m "feat: deploy MAD.SYS portfolio v2"
git push origin main
# Activer GitHub Pages dans Settings → Pages → main branch

# Option 4 — Netlify (drag & drop)
# Glisser MAD_portfolio.html sur app.netlify.com/drop
```

> **Prérequis navigateur :** Chrome 90+, Firefox 88+, Safari 15+, Edge 90+
> WebGL doit être activé (activé par défaut sur tous les navigateurs modernes).

---

## `$ cat design.md` — Philosophie Design

```
Esthétique  : CRT / Terminal / Cyberpunk industriel
Typographie : JetBrains Mono (code) + Bebas Neue (titres) + DM Sans (corps)
Palette     : #04040a fond · #00ff9f cyan · #7c3aed violet · #f43f5e rouge
Effets      : Scanlines · Vignette · Glitch · Curseur custom · Horloge live
```

Le parti pris : **un développeur qui maîtrise Rust, WebAssembly et WebGL n'a pas un portfolio comme tout le monde**. Chaque détail visuel est une signature technique.

---

## `$ git log --oneline` — Roadmap

- [x] Three.js WebGL background engine
- [x] Rust/WASM particle physics engine (API-compatible)
- [x] Canvas renderer from scratch
- [x] CRT scanlines + vignette + glitch
- [x] 13 certifications bento grid
- [x] Manifesto animé au scroll mot par mot
- [ ] Vrai module Rust compilé en `.wasm` via wasm-pack
- [ ] Section projets avec démos live
- [ ] Mode sombre / clair toggle
- [ ] Internationalisation FR / EN

---

## `$ cat contact.txt`

```
Email       → mouhamedabdallah.dia@uadb.edu.sn
Téléphone   → +221 78 161 45 00
LinkedIn    → linkedin.com/in/mouhamed-abdallah-dia-302b743b2
GitHub      → saotof-prog.github.io/Cv-Complet
Localisation → Sicap, Dakar — Sénégal
```

---

## `$ cat license.md`

```
© 2026 Mouhamed Abdallah Dia — Tous droits réservés.
Ce portfolio est un projet personnel. Le code source peut être
consulté à des fins éducatives, mais ne peut pas être réutilisé
tel quel sans autorisation explicite de l'auteur.
```

---

<div align="center">

```
Built with precision in Dakar, Sénégal
RUST + WASM + THREE.JS + CANVAS — MAD.SYS v2.0.26
```

</div>
