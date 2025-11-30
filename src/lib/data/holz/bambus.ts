import type { FloorType } from '$lib/types/floor';

export const bambus: FloorType = {
	id: 'bambus',
	name: 'Bambusboden',
	slug: 'bambus',
	icon: '🎋',
	description: 'Bambus ist kein Holz, sondern ein Gras - und das härteste natürliche Bodenmaterial überhaupt. In nur 5 Jahren erntereif, ist Bambus extrem nachhaltig und überzeugt mit exotischer Eleganz.',
	heroTitle: 'Bambusboden - Härter als Eiche',
	heroDescription: 'Entdecken Sie die Stärke der Natur. Bambus wächst bis zu 1 Meter pro Tag und ist härter als jedes europäische Holz.',
	quickFacts: [
		{ label: 'Härte', value: '4.0-4.7', desc: 'Brinell (Eiche: 3.4)' },
		{ label: 'Preis/m²', value: '35-80€', desc: 'Je nach Qualität' },
		{ label: 'Nachwachsend', value: '5 Jahre', desc: 'Extrem nachhaltig' },
		{ label: 'Fußwärme', value: 'Gut', desc: 'Für FBH geeignet' }
	],
	materials: [
		{
			id: 'bambus-horizontal',
			name: 'Horizontal Bambus',
			icon: '➖',
			description: 'Klassische Bambusoptik mit sichtbaren Knoten. Die Lamellen liegen flach, wodurch die typische Bambusstruktur sichtbar wird.',
			pros: ['Typische Bambusoptik', 'Natürlicher Look', 'Günstiger', 'Gute Stabilität'],
			cons: ['Weicher als Strand Woven', 'Knotenoptik nicht jedermanns Sache', 'Anfälliger für Kratzer'],
			priceRange: '€€',
			pricePerSqm: '35-50€',
			durability: 3,
			comfort: 4,
			maintenance: 3,
			bestFor: ['Schlafzimmer', 'Wohnzimmer', 'Arbeitszimmer'],
			shopLinks: [
				{ name: 'BAUHAUS', url: 'https://www.bauhaus.info/bambusboden' },
				{ name: 'Bambus-Parkett', url: 'https://www.bambus-parkett.de' }
			]
		},
		{
			id: 'bambus-vertikal',
			name: 'Vertikal Bambus',
			icon: '|',
			description: 'Die Bambusstreifen stehen hochkant - dadurch entsteht ein feines Streifenmuster und höhere Härte.',
			pros: ['Elegante Linienoptik', 'Härter als horizontal', 'Gleichmäßige Optik', 'Modern'],
			cons: ['Weniger natürlicher Look', 'Mittleres Preissegment', 'Empfindlich gegen UV'],
			priceRange: '€€',
			pricePerSqm: '40-55€',
			durability: 4,
			comfort: 4,
			maintenance: 3,
			bestFor: ['Wohnzimmer', 'Flur', 'Büro'],
			shopLinks: [
				{ name: 'OBI', url: 'https://www.obi.de/bambusboden' },
				{ name: 'Parkett-Store', url: 'https://www.parkett-store.de' }
			]
		},
		{
			id: 'bambus-strand-woven',
			name: 'Strand Woven Bambus',
			icon: '💪',
			description: 'Das härteste Bambusprodukt: Bambusfasern werden unter Hochdruck verpresst. Doppelt so hart wie Eiche!',
			pros: ['Extrem hart (Brinell 4.7)', 'Sehr strapazierfähig', 'Wenig Kratzer', 'Holzähnliche Optik'],
			cons: ['Teurer', 'Weniger Bambustypisch', 'Schwerer zu bearbeiten'],
			priceRange: '€€€',
			pricePerSqm: '55-80€',
			durability: 5,
			comfort: 4,
			maintenance: 4,
			bestFor: ['Flur', 'Küche', 'Gewerbe', 'Wohnzimmer'],
			shopLinks: [
				{ name: 'Bambus-Kompass', url: 'https://www.bambuskompass.de' },
				{ name: 'Holzland', url: 'https://www.holzland.de/bambus' }
			]
		},
		{
			id: 'bambus-gedaempft',
			name: 'Gedämpfter Bambus (Karamell)',
			icon: '🍯',
			description: 'Durch Dämpfen erhält der Bambus eine warme, karamellfarbene Tönung. Natürlicher Farbton ohne Chemie.',
			pros: ['Warme Farbe', 'Natürliche Behandlung', 'Zeitlose Optik', 'Kombinierbar'],
			cons: ['Etwas weicher durch Dämpfen', 'Nachdunkeln möglich', 'Farbunterschiede möglich'],
			priceRange: '€€',
			pricePerSqm: '40-60€',
			durability: 3,
			comfort: 4,
			maintenance: 3,
			bestFor: ['Wohnzimmer', 'Schlafzimmer', 'Esszimmer'],
			shopLinks: [
				{ name: 'BAUHAUS', url: 'https://www.bauhaus.info/bambus-karamell' },
				{ name: 'Hornbach', url: 'https://www.hornbach.de/bambusparkett' }
			]
		}
	],
	rooms: [
		{
			name: 'Wohnzimmer',
			icon: '🛋️',
			description: 'Bambus bringt exotisches Flair und ist robust genug für den Familienalltag.',
			requirements: ['Strapazierfähig', 'Optisch ansprechend', 'FBH-kompatibel'],
			recommendedMaterials: ['Strand Woven Bambus', 'Vertikal Bambus'],
			avoidMaterials: [],
			thickness: '14-15mm empfohlen',
			colorTips: 'Natur oder Karamell je nach Einrichtungsstil',
			specialTips: ['Ideal für moderne Einrichtungen', 'Passt zu hellem und dunklem Mobiliar']
		},
		{
			name: 'Küche',
			icon: '🍳',
			description: 'Strand Woven Bambus hält auch der Küchenbelastung stand.',
			requirements: ['Wasserfest behandelt', 'Kratzfest', 'Pflegeleicht'],
			recommendedMaterials: ['Strand Woven Bambus'],
			avoidMaterials: ['Horizontal Bambus'],
			thickness: '15mm empfohlen',
			colorTips: 'Dunklere Töne kaschieren Flecken besser',
			specialTips: ['Versiegelung regelmäßig prüfen', 'Wasserschutz an Spüle', 'Anti-Rutsch-Läufer']
		},
		{
			name: 'Flur / Eingang',
			icon: '🚪',
			description: 'Die extreme Härte macht Strand Woven Bambus zum idealen Flurboden.',
			requirements: ['Höchste Beanspruchung', 'Schmutzresistent', 'Pflegeleicht'],
			recommendedMaterials: ['Strand Woven Bambus'],
			avoidMaterials: ['Horizontal Bambus'],
			thickness: '15mm empfohlen',
			colorTips: 'Mittlere Töne optimal gegen sichtbaren Schmutz',
			specialTips: ['Fußmatte unverzichtbar', 'Besonders hart lackieren lassen']
		}
	],
	careGuide: {
		basics: [
			{
				icon: '🧹',
				title: 'Regelmäßige Reinigung',
				description: 'Bambus ist pflegeleicht wie Holz - regelmäßiges Fegen hält ihn schön.',
				tips: ['Täglich fegen oder saugen', 'Weiche Düse verwenden', 'Schmutz nicht eintreten']
			},
			{
				icon: '💧',
				title: 'Feuchtigkeit kontrollieren',
				description: 'Bambus reagiert empfindlicher auf Feuchtigkeit als Hartholz.',
				tips: ['Nur nebelfeucht wischen', 'Stehendes Wasser vermeiden', 'Luftfeuchtigkeit 40-60%']
			},
			{
				icon: '☀️',
				title: 'UV-Schutz',
				description: 'Bambus kann unter Sonneneinstrahlung vergilben oder ausbleichen.',
				tips: ['Sonnenschutz an Fenstern', 'Teppiche regelmäßig umstellen', 'UV-Schutzlack möglich']
			}
		],
		maintenanceSchedule: [
			{ frequency: 'Täglich', icon: '📅', tasks: ['Kehren/Saugen'] },
			{ frequency: 'Wöchentlich', icon: '📅', tasks: ['Feucht wischen'] },
			{ frequency: 'Monatlich', icon: '📅', tasks: ['Bambus-Pflegemittel auftragen'] },
			{ frequency: 'Jährlich', icon: '📅', tasks: ['Versiegelung prüfen', 'Kratzer ausbessern'] }
		],
		stainRemovals: [
			{
				stain: 'Wasserflecken',
				icon: '💧',
				steps: ['Sofort trockenwischen', 'Feucht nachreinigen', 'Pflegemittel auftragen'],
				warning: 'Dauerhafte Wassereinwirkung kann Bambus quellen lassen'
			},
			{
				stain: 'Kratzer',
				icon: '📏',
				steps: ['Fein anschleifen', 'Mit Bambusöl behandeln', 'Nachversiegeln'],
				warning: 'Strand Woven ist sehr schwer zu schleifen - lieber Profi beauftragen'
			}
		],
		materialSpecificCare: [
			{
				material: 'Lackierter Bambus',
				icon: '✨',
				tips: ['Lack-Pflegemittel verwenden', 'Keine Scheuermittel', 'Bei Beschädigung neu lackieren']
			},
			{
				material: 'Geölter Bambus',
				icon: '🫒',
				tips: ['Regelmäßig nachölen', 'Spezial-Bambusöl verwenden', 'Lokale Reparaturen einfach']
			}
		]
	}
};
