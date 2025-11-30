# Bodenbelag Ratgeber - Erweiterungsplan

## Vorlage: Aktuelle Teppich-Struktur

**WICHTIG: Jede Bodenart wird EXAKT wie die bestehende Teppich-Seite aufgebaut!**

### Was jede Bodenart bekommt (identisch zu Teppich):

#### 1. Hauptseite (wie `/routes/+page.svelte`)
- Hero-Bereich mit Gradient-Text
- Quick Facts (4 Karten: Lebensdauer, Eigenschaften, etc.)
- Feature-Cards mit Links zu Unterseiten
- Call-to-Action Box

#### 2. Materialien-Seite (wie `/routes/materialien/+page.svelte`)
- **Vergleichstabelle** mit allen Varianten (Preis, Haltbarkeit, Komfort, Pflege als Sterne)
- **Material-Karten** für jede Variante mit:
  - Icon und Name
  - Preisklasse-Badge (€ bis €€€€)
  - Beschreibungstext
  - Preisspanne pro m²
  - Sternebewertungen (Haltbarkeit, Komfort, Pflegeleicht)
  - Vorteile-Liste (grün)
  - Nachteile-Liste (rot)
  - "Ideal für" Tags
  - **Shop-Links** (BAUHAUS, OBI, Hornbach, Amazon, etc.) mit externen Links

#### 3. Zimmerempfehlungen (wie `/routes/zimmer/+page.svelte`)
- Schnellnavigation mit Icons
- Für jeden Raum:
  - Anforderungen
  - Empfohlene Materialien (verlinkt zur Materialien-Seite)
  - Weniger geeignete Materialien
  - Polhöhe/Stärke-Empfehlung
  - Farbtipps
  - Besondere Tipps

#### 4. Pflege & Tipps (wie `/routes/pflege/+page.svelte`)
- Grundlagen der Pflege
- Pflegeplan (täglich, wöchentlich, monatlich, jährlich)
- Fleckenentfernung mit Schritt-für-Schritt Anleitungen
- Tiefenreinigung
- Materialspezifische Pflege
- Empfohlene Ausrüstung

#### 5. Händler (gemeinsame Seite für alle Bodenarten)

---

## Neue Seitenstruktur

### Hauptnavigation (Kategorien)
```
/                           → Startseite (Übersicht aller Bodenarten)
/holz                       → Holzbasierte Böden (Kategorie-Übersicht)
/kunststoff                 → Kunststoffbasierte Böden
/mineralisch                → Mineralische/harte Böden
/fugenlos                   → Fugenlose Beschichtungen
/textil                     → Textile Böden (inkl. Teppich)
/spezial                    → Spezielle Bodenarten
/haendler                   → Alle Händler (kategorieübergreifend)
```

---

## 1. Holzbasierte / Natürliche Böden (`/holz`)

### Unterseiten:
| Route | Bodenart | Beschreibung |
|-------|----------|--------------|
| `/holz/parkett` | Parkett | Echtholz, verschiedene Muster (Fischgrät, Schiffsboden, etc.) |
| `/holz/dielen` | Massivholzdielen | Klassische breite Holzdielen |
| `/holz/laminat` | Laminat | Holz-Optik, HDF-Träger, günstige Alternative |
| `/holz/kork` | Korkboden | Warm, elastisch, gutes Raumklima |
| `/holz/mehrschicht` | Mehrschichtparkett | Holzwerkstoff-Böden, Fertigparkett |
| `/holz/bambus` | Bambusboden | Hart, nachhaltig, holzähnlich |

### Materialien pro Bodenart (Beispiel Parkett):
- Eiche (hell, mittel, dunkel, geräuchert)
- Nussbaum
- Ahorn
- Esche
- Buche
- Kirsche
- Tropische Hölzer (Teak, Merbau, etc.)

### Verlegearten:
- Schwimmend
- Vollflächig verklebt
- Genagelt/geschraubt

---

## 2. Kunststoffbasierte / Flexible Böden (`/kunststoff`)

### Unterseiten:
| Route | Bodenart | Beschreibung |
|-------|----------|--------------|
| `/kunststoff/vinyl` | Vinyl/Designboden | LVT/SPC, robust, viele Designs |
| `/kunststoff/linoleum` | Linoleum | Natürlicher Kunststoffmix, nachhaltig |
| `/kunststoff/pvc` | PVC-Boden | Klassischer Kunststoffboden |
| `/kunststoff/gummi` | Gummi-/Kautschukboden | Objektbereich, sehr strapazierfähig |
| `/kunststoff/pu` | PU-Boden | Polyurethan-Beschichtung |

### Materialien/Varianten (Beispiel Vinyl):
- LVT (Luxury Vinyl Tiles)
- SPC (Stone Plastic Composite)
- WPC (Wood Plastic Composite)
- Klick-Vinyl
- Klebe-Vinyl
- Loose-Lay

---

## 3. Mineralische / Harte Böden (`/mineralisch`)

### Unterseiten:
| Route | Bodenart | Beschreibung |
|-------|----------|--------------|
| `/mineralisch/fliesen` | Keramikfliesen | Klassische Bodenfliesen |
| `/mineralisch/feinsteinzeug` | Feinsteinzeug | Hochwertige, dichte Keramik |
| `/mineralisch/naturstein` | Naturstein | Marmor, Granit, Schiefer, Travertin |
| `/mineralisch/beton` | Betonboden | Industrielook, modern |
| `/mineralisch/estrich` | Estrichboden | Geschliffen oder versiegelt |
| `/mineralisch/terrazzo` | Terrazzo | Marmorsplit + Zement, edel |

### Materialien/Varianten (Beispiel Naturstein):
- Marmor (Carrara, Nero Marquina, etc.)
- Granit (verschiedene Farben)
- Schiefer
- Travertin
- Sandstein
- Quarzit
- Kalkstein

---

## 4. Fugenlose & Moderne Beschichtungen (`/fugenlos`)

### Unterseiten:
| Route | Bodenart | Beschreibung |
|-------|----------|--------------|
| `/fugenlos/mikrozement` | Mikrozement/Microcement | Dünne Beschichtung, Beton-Optik |
| `/fugenlos/epoxidharz` | Epoxidharz-Boden | Hochglänzend, industriell |
| `/fugenlos/spachtelboden` | Mineralische Spachtelböden | Individuelle Gestaltung |
| `/fugenlos/flow` | Flow-Böden | Kunstharzbasierte Gießböden |

---

## 5. Textile Böden (`/textil`)

### Unterseiten:
| Route | Bodenart | Beschreibung |
|-------|----------|--------------|
| `/textil/teppich` | Teppichboden | **BESTEHEND** - Klassischer Teppichboden |
| `/textil/sisal` | Sisal/Kokos | Naturfaserteppiche |
| `/textil/seegras` | Seegras-Böden | Natürlich, strukturiert |
| `/textil/wolle-jute` | Wolle/Jute-Teppiche | Hochwertige Naturmaterialien |

---

## 6. Spezielle Bodenarten (`/spezial`)

### Unterseiten:
| Route | Bodenart | Beschreibung |
|-------|----------|--------------|
| `/spezial/glas` | Glasböden | Als Einsatz, begehbare Glaselemente |
| `/spezial/leder` | Lederboden | Luxuriös, selten |
| `/spezial/steinteppich` | Steinteppich | Kiesel/Quarz + Harz |

---

## Seitenstruktur pro Bodenart

Jede Bodenart (`/holz/parkett`, `/kunststoff/vinyl`, etc.) hat folgende Unterseiten:

```
/holz/parkett/                  → Übersicht & Einführung
/holz/parkett/varianten         → Materialien & Varianten (wie /teppich/materialien)
/holz/parkett/zimmer            → Zimmerempfehlungen
/holz/parkett/pflege            → Pflege & Tipps
```

---

## Komponenten-Struktur (Wiederverwendbar)

### Gemeinsame Komponenten:
```
src/lib/components/
├── FloorTypeCard.svelte        → Karte für Bodenart-Übersicht
├── MaterialCard.svelte         → Detailkarte für Material/Variante
├── RoomRecommendation.svelte   → Zimmerempfehlung
├── CareGuide.svelte            → Pflegeanleitung
├── DealerCard.svelte           → Händlerkarte
├── ComparisonTable.svelte      → Vergleichstabelle
├── RatingStars.svelte          → Bewertungssterne
├── ProsConsList.svelte         → Vor-/Nachteile Liste
├── QuickFacts.svelte           → Quick Facts Übersicht
├── CategoryNav.svelte          → Kategorie-Navigation
└── BreadcrumbNav.svelte        → Breadcrumb Navigation
```

### Layout-Komponenten:
```
src/lib/components/
├── HeroSection.svelte          → Hero-Bereich
├── FeatureGrid.svelte          → Feature-Karten Grid
├── TipBox.svelte               → Tipp-Box
└── CTASection.svelte           → Call-to-Action Bereich
```

---

## Datenstruktur

### Typen (`src/lib/types/`):
```typescript
// floor-types.ts
interface FloorCategory {
  id: string;
  name: string;
  slug: string;
  icon: string;
  description: string;
  color: string;
  floorTypes: FloorType[];
}

interface FloorType {
  id: string;
  name: string;
  slug: string;
  icon: string;
  description: string;
  quickFacts: QuickFact[];
  variants: Variant[];
  roomRecommendations: RoomRecommendation[];
  careGuide: CareGuide;
}

interface Variant {
  name: string;
  id: string;
  description: string;
  pros: string[];
  cons: string[];
  priceRange: string;
  pricePerSqm: string;
  durability: number;      // 1-5
  comfort: number;         // 1-5
  maintenance: number;     // 1-5
  moisture: number;        // 1-5 (Feuchtigkeitsbeständigkeit)
  sustainability: number;  // 1-5 (Nachhaltigkeit)
  bestFor: string[];
  installationMethods: string[];
  shopLinks: ShopLink[];
}
```

### Datendateien (`src/lib/data/`):
```
src/lib/data/
├── categories.ts           → Alle Kategorien
├── holz/
│   ├── parkett.ts
│   ├── dielen.ts
│   ├── laminat.ts
│   ├── kork.ts
│   ├── mehrschicht.ts
│   └── bambus.ts
├── kunststoff/
│   ├── vinyl.ts
│   ├── linoleum.ts
│   ├── pvc.ts
│   ├── gummi.ts
│   └── pu.ts
├── mineralisch/
│   ├── fliesen.ts
│   ├── feinsteinzeug.ts
│   ├── naturstein.ts
│   ├── beton.ts
│   ├── estrich.ts
│   └── terrazzo.ts
├── fugenlos/
│   ├── mikrozement.ts
│   ├── epoxidharz.ts
│   ├── spachtelboden.ts
│   └── flow.ts
├── textil/
│   ├── teppich.ts          → Migration bestehender Daten
│   ├── sisal.ts
│   ├── seegras.ts
│   └── wolle-jute.ts
├── spezial/
│   ├── glas.ts
│   ├── leder.ts
│   └── steinteppich.ts
└── dealers.ts              → Erweiterte Händlerliste
```

---

## Neue Startseite (`/`)

Die Hauptseite zeigt alle Kategorien als große Kacheln:

```
┌─────────────────────────────────────────────────────────┐
│                    BODENBELAG RATGEBER                  │
│        Ihr umfassender Guide für den perfekten Boden    │
└─────────────────────────────────────────────────────────┘

┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
│   🪵 HOLZ       │  │  🧪 KUNSTSTOFF  │  │  🪨 MINERALISCH │
│   Parkett       │  │  Vinyl          │  │  Fliesen        │
│   Dielen        │  │  Linoleum       │  │  Naturstein     │
│   Laminat       │  │  PVC            │  │  Beton          │
│   ...           │  │  ...            │  │  ...            │
└─────────────────┘  └─────────────────┘  └─────────────────┘

┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
│  ✨ FUGENLOS    │  │  🧶 TEXTIL      │  │  💎 SPEZIAL     │
│   Mikrozement   │  │  Teppich        │  │  Glas           │
│   Epoxidharz    │  │  Sisal          │  │  Leder          │
│   ...           │  │  ...            │  │  Steinteppich   │
└─────────────────┘  └─────────────────┘  └─────────────────┘
```

---

## Navigation

### Header Navigation:
```
[Logo: Bodenbelag Ratgeber]

Holz ▼        Kunststoff ▼    Mineralisch ▼    Fugenlos ▼    Textil ▼    Spezial ▼    Händler
├─ Parkett    ├─ Vinyl        ├─ Fliesen       ├─ Mikrozement ├─ Teppich  ├─ Glas
├─ Dielen     ├─ Linoleum     ├─ Naturstein    ├─ Epoxidharz  ├─ Sisal    ├─ Leder
├─ Laminat    ├─ PVC          ├─ Beton         ├─ ...         ├─ ...      └─ Steinteppich
├─ Kork       ├─ Gummi        ├─ Terrazzo
└─ Bambus     └─ PU           └─ ...
```

---

## Implementierungsreihenfolge

### Phase 1: Grundstruktur
1. [ ] Neue Ordnerstruktur erstellen
2. [ ] TypeScript-Typen definieren
3. [ ] Wiederverwendbare Komponenten erstellen
4. [ ] Layout mit Mega-Menu Navigation
5. [ ] Startseite mit Kategorieübersicht

### Phase 2: Holzbasierte Böden
6. [ ] `/holz` - Kategorie-Übersicht
7. [ ] `/holz/parkett` - Komplett (Übersicht, Varianten, Zimmer, Pflege)
8. [ ] `/holz/dielen`
9. [ ] `/holz/laminat`
10. [ ] `/holz/kork`
11. [ ] `/holz/mehrschicht`
12. [ ] `/holz/bambus`

### Phase 3: Kunststoffbasierte Böden
13. [ ] `/kunststoff` - Kategorie-Übersicht
14. [ ] `/kunststoff/vinyl`
15. [ ] `/kunststoff/linoleum`
16. [ ] `/kunststoff/pvc`
17. [ ] `/kunststoff/gummi`
18. [ ] `/kunststoff/pu`

### Phase 4: Mineralische Böden
19. [ ] `/mineralisch` - Kategorie-Übersicht
20. [ ] `/mineralisch/fliesen`
21. [ ] `/mineralisch/feinsteinzeug`
22. [ ] `/mineralisch/naturstein`
23. [ ] `/mineralisch/beton`
24. [ ] `/mineralisch/estrich`
25. [ ] `/mineralisch/terrazzo`

### Phase 5: Fugenlose Böden
26. [ ] `/fugenlos` - Kategorie-Übersicht
27. [ ] `/fugenlos/mikrozement`
28. [ ] `/fugenlos/epoxidharz`
29. [ ] `/fugenlos/spachtelboden`
30. [ ] `/fugenlos/flow`

### Phase 6: Textile Böden
31. [ ] `/textil` - Kategorie-Übersicht
32. [ ] `/textil/teppich` - Migration bestehender Inhalte
33. [ ] `/textil/sisal`
34. [ ] `/textil/seegras`
35. [ ] `/textil/wolle-jute`

### Phase 7: Spezielle Böden
36. [ ] `/spezial` - Kategorie-Übersicht
37. [ ] `/spezial/glas`
38. [ ] `/spezial/leder`
39. [ ] `/spezial/steinteppich`

### Phase 8: Übergreifende Seiten
40. [ ] `/haendler` - Erweitert für alle Bodenarten
41. [ ] `/vergleich` - Bodenarten-Vergleichstool
42. [ ] `/suche` - Suchfunktion

---

## Technische Anpassungen

### 1. Projekt umbenennen
- `package.json`: Name von "teppich" zu "bodenbelag-ratgeber"
- Titel in Layout ändern

### 2. Styling erweitern
- Farbschema pro Kategorie (CSS-Variablen)
- Responsive Mega-Menu
- Breadcrumb-Navigation

### 3. SEO
- Meta-Tags pro Seite
- Strukturierte Daten (JSON-LD)
- Sitemap generieren

---

## Geschätzte Dateianzahl

| Bereich | Dateien |
|---------|---------|
| Komponenten | ~15 |
| Layouts | ~5 |
| Routen (Seiten) | ~120 |
| Daten (TypeScript) | ~25 |
| Types | ~3 |
| **Gesamt** | **~170** |

---

## Nächster Schritt

Nach Freigabe dieses Plans beginne ich mit **Phase 1: Grundstruktur**:
1. Typen definieren
2. Komponenten erstellen
3. Neue Startseite
4. Navigation mit Mega-Menu
