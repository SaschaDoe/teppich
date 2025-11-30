import type { FloorType } from '$lib/types/floor';

export const kork: FloorType = {
	id: 'kork',
	name: 'Korkboden',
	slug: 'kork',
	icon: '🍾',
	description: 'Korkböden vereinen Komfort mit Nachhaltigkeit. Das natürliche Material dämmt Wärme und Schall, federt Schritte ab und schont die Gelenke. Die Korkrinde regeneriert sich - ein vorbildlicher Kreislauf.',
	heroTitle: 'Korkboden - Natürlich komfortabel',
	heroDescription: 'Entdecken Sie das einzigartige Laufgefühl auf Kork. Warm, weich, schallschluckend und 100% natürlich.',
	quickFacts: [
		{ label: 'Lebensdauer', value: '30-50 J.', desc: 'Bei guter Pflege' },
		{ label: 'Preis/m²', value: '30-80€', desc: 'Inkl. Verlegung' },
		{ label: 'Verlegung', value: 'Mittel', desc: 'Klick oder Kleben' },
		{ label: 'Fußwärme', value: 'Sehr gut', desc: 'Natürlich isolierend' }
	],
	materials: [
		{
			id: 'kork-klick',
			name: 'Kork-Klickboden',
			icon: '🔗',
			description: 'Mehrschichtige Korkpaneele mit Klick-Verbindung für einfache schwimmende Verlegung.',
			pros: ['Einfache Verlegung', 'Austauschbar', 'HDF-Träger stabilisiert', 'Kein Kleber nötig'],
			cons: ['Nicht so elastisch wie Massivkork', 'Empfindlich gegen Feuchtigkeit', 'Klickverbindung kann ausleiten'],
			priceRange: '€€',
			pricePerSqm: '35-60€',
			durability: 3,
			comfort: 4,
			maintenance: 4,
			bestFor: ['Wohnzimmer', 'Schlafzimmer', 'Kinderzimmer'],
			shopLinks: [
				{ name: 'BAUHAUS', url: 'https://www.bauhaus.info/korkboden' },
				{ name: 'Hornbach', url: 'https://www.hornbach.de/korkboden' }
			]
		},
		{
			id: 'kork-massiv',
			name: 'Massivkork',
			icon: '🧱',
			description: 'Durchgehende Korkplatten für maximalen Komfort und beste Isolationseigenschaften.',
			pros: ['Höchster Komfort', 'Beste Dämmwerte', 'Sehr langlebig', 'Komplett natürlich'],
			cons: ['Teurer', 'Verlegung aufwändiger', 'Oberflächenversiegelung nötig'],
			priceRange: '€€€',
			pricePerSqm: '50-80€',
			durability: 4,
			comfort: 5,
			maintenance: 3,
			bestFor: ['Schlafzimmer', 'Yoga-Raum', 'Kinderzimmer'],
			shopLinks: [
				{ name: 'Kork-Shop', url: 'https://www.korkboden.de' },
				{ name: 'BioRaum', url: 'https://www.bioraum.de' }
			]
		},
		{
			id: 'kork-vinyl',
			name: 'Kork-Vinyl Hybrid',
			icon: '🔀',
			description: 'Kombination aus Kork-Trägerschicht und Vinyl-Oberfläche. Vereint die Vorteile beider Materialien.',
			pros: ['Wasserfest', 'Pflegeleicht', 'Komfortabel', 'Realistische Dekore'],
			cons: ['Nicht 100% natürlich', 'Weniger warm als Massivkork', 'Kunststoffanteil'],
			priceRange: '€€',
			pricePerSqm: '40-65€',
			durability: 4,
			comfort: 4,
			maintenance: 5,
			bestFor: ['Küche', 'Bad', 'Flur'],
			shopLinks: [
				{ name: 'OBI', url: 'https://www.obi.de/korkvinyl' },
				{ name: 'BAUHAUS', url: 'https://www.bauhaus.info/korkvinyl' }
			]
		},
		{
			id: 'kork-fliesen',
			name: 'Korkfliesen',
			icon: '🔲',
			description: 'Quadratische Korkplatten zum Kleben. Vielseitig in Verlegemustern und ideal für unregelmäßige Räume.',
			pros: ['Flexible Gestaltung', 'Auch für Wände', 'Günstiger Einstieg', 'Einzeln austauschbar'],
			cons: ['Kleber erforderlich', 'Fugen sichtbar', 'Verlegung zeitaufwändig'],
			priceRange: '€',
			pricePerSqm: '25-45€',
			durability: 3,
			comfort: 4,
			maintenance: 3,
			bestFor: ['Arbeitszimmer', 'Hobbyraum', 'Pinnwand'],
			shopLinks: [
				{ name: 'Amazon', url: 'https://www.amazon.de/korkfliesen' },
				{ name: 'eBay', url: 'https://www.ebay.de/korkfliesen' }
			]
		}
	],
	rooms: [
		{
			name: 'Kinderzimmer',
			icon: '🧸',
			description: 'Der ideale Boden für Kinder: weich, warm, schallschluckend und schadstofffrei.',
			requirements: ['Weich für Stürze', 'Warm zum Spielen', 'Pflegeleicht', 'Schadstofffrei'],
			recommendedMaterials: ['Massivkork', 'Kork-Klickboden'],
			avoidMaterials: [],
			thickness: '6-10mm empfohlen',
			colorTips: 'Natürliche Korktöne oder dezente Farben wirken beruhigend',
			specialTips: ['Auf Schadstofffrei-Zertifikat achten', 'Wasserlösliche Farben lassen sich leicht entfernen']
		},
		{
			name: 'Schlafzimmer',
			icon: '🛏️',
			description: 'Fußwärme und Ruhe - Kork sorgt für erholsamen Schlaf.',
			requirements: ['Fußwärme', 'Schalldämmung', 'Behaglichkeit'],
			recommendedMaterials: ['Massivkork', 'Kork-Klickboden'],
			avoidMaterials: [],
			thickness: '6-10mm optimal',
			colorTips: 'Natürliche Korktöne schaffen Ruhe',
			specialTips: ['Barfuß besonders angenehm', 'Gute Trittschalldämmung', 'Anti-Allergen']
		},
		{
			name: 'Arbeitszimmer',
			icon: '💼',
			description: 'Ergonomischer Boden für langes Stehen und konzentriertes Arbeiten.',
			requirements: ['Gelenkschonend', 'Rollstuhleignung', 'Akustik'],
			recommendedMaterials: ['Kork-Klickboden', 'Kork-Vinyl Hybrid'],
			avoidMaterials: ['Massivkork bei Bürostühlen'],
			thickness: '10mm+ für Bürostühle',
			colorTips: 'Dezente Muster oder Holzoptik',
			specialTips: ['Stuhlrollenmatte empfohlen', 'Kork reduziert Raumhall']
		}
	],
	careGuide: {
		basics: [
			{
				icon: '🧹',
				title: 'Regelmäßige Reinigung',
				description: 'Kork ist pflegeleicht, aber regelmäßige Reinigung erhält die Versiegelung.',
				tips: ['Staubsaugen mit weicher Düse', 'Nebelfeucht wischen', 'Keine Mikrofasertücher']
			},
			{
				icon: '💧',
				title: 'Feuchtigkeit',
				description: 'Versiegelter Kork ist wasserabweisend, aber stehendes Wasser vermeiden.',
				tips: ['Verschüttetes sofort aufwischen', 'Luftfeuchtigkeit 50-60%', 'Nicht nass reinigen']
			},
			{
				icon: '☀️',
				title: 'UV-Schutz',
				description: 'Kork kann unter Sonneneinstrahlung ausbleichen.',
				tips: ['Vorhänge/Jalousien nutzen', 'Teppiche regelmäßig verschieben', 'UV-Schutzfolie an Fenstern']
			}
		],
		maintenanceSchedule: [
			{ frequency: 'Täglich', icon: '📅', tasks: ['Kehren/Saugen', 'Flecken entfernen'] },
			{ frequency: 'Wöchentlich', icon: '📅', tasks: ['Feucht wischen mit Korkpflege'] },
			{ frequency: 'Halbjährlich', icon: '📅', tasks: ['Pflegewachs auftragen', 'Versiegelung prüfen'] },
			{ frequency: 'Bei Bedarf', icon: '📅', tasks: ['Neu versiegeln', 'Ausbesserungen'] }
		],
		stainRemovals: [
			{
				stain: 'Allgemeine Flecken',
				icon: '🔘',
				steps: ['Feucht abwischen', 'Bei Bedarf milde Seife', 'Nachwischen mit klarem Wasser'],
				warning: 'Keine aggressiven Reiniger - beschädigen die Versiegelung'
			},
			{
				stain: 'Druckstellen',
				icon: '👟',
				steps: ['Feuchtes Tuch auflegen', 'Mit Bügeleisen erwärmen', 'Kork quillt zurück'],
				warning: 'Nur bei unversiegeltem Kork oder nach vorherigem Test'
			}
		],
		materialSpecificCare: [
			{
				material: 'Versiegelter Kork',
				icon: '✨',
				tips: ['Spezielle Korkpflege verwenden', 'Keine Wachse auf Lack', 'Versiegelung alle 5-10 Jahre erneuern']
			},
			{
				material: 'Geölter/Gewachster Kork',
				icon: '🫒',
				tips: ['Regelmäßig nachwachsen', 'Naturöl zur Pflege', 'Lokale Reparaturen möglich']
			}
		]
	}
};
