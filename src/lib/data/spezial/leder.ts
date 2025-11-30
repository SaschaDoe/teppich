import type { FloorType } from '$lib/types/floor';

export const leder: FloorType = {
	id: 'leder',
	name: 'Lederboden',
	slug: 'leder',
	icon: '👜',
	description: 'Lederböden sind der Inbegriff von Luxus und Exklusivität. Ob Echtleder-Fliesen oder ganze Lederflächen - dieser Boden ist ein Statement für Menschen mit außergewöhnlichem Geschmack.',
	heroTitle: 'Lederboden - Ultimativer Luxus',
	heroDescription: 'Wenn Parkett und Marmor nicht exklusiv genug sind. Lederboden ist die Königsklasse der Bodenbeläge.',
	quickFacts: [
		{ label: 'Material', value: 'Echtleder', desc: 'Oder recyceltes Leder' },
		{ label: 'Preis/m²', value: '150-600€', desc: 'Luxussegment' },
		{ label: 'Exklusivität', value: 'Höchste', desc: 'Sehr selten' },
		{ label: 'Komfort', value: 'Sehr gut', desc: 'Warm & weich' }
	],
	materials: [
		{
			id: 'leder-fliesen',
			name: 'Lederfliesen',
			icon: '🔲',
			description: 'Quadratische oder rechteckige Lederfliesen zum Verlegen. Die gängigste Form des Lederbodens.',
			pros: ['Einfachere Verlegung', 'Austauschbar', 'Verschiedene Muster möglich', 'Günstiger als Vollflächig'],
			cons: ['Fugen sichtbar', 'Hochwertige Verlegung nötig', 'Empfindlich'],
			priceRange: '€€€',
			pricePerSqm: '150-300€',
			durability: 3,
			comfort: 5,
			maintenance: 2,
			bestFor: ['Schlafzimmer', 'Ankleide', 'Bibliothek'],
			shopLinks: [
				{ name: 'Torlys', url: 'https://www.torlys.com' },
				{ name: 'Edelman Leather', url: 'https://www.edelmanleather.com' }
			]
		},
		{
			id: 'leder-vollflaeche',
			name: 'Vollflächiges Leder',
			icon: '📐',
			description: 'Nahtlos verlegtes Leder für maximalen Luxus. Höchste Handwerkskunst für ultimativen Effekt.',
			pros: ['Nahezu fugenlos', 'Ultimativer Luxus', 'Einzigartig', 'Maximaler Komfort'],
			cons: ['Extrem teuer', 'Nur von Spezialisten', 'Sehr empfindlich', 'Aufwändige Pflege'],
			priceRange: '€€€€',
			pricePerSqm: '400-800€',
			durability: 2,
			comfort: 5,
			maintenance: 1,
			bestFor: ['Luxus-Suite', 'Yacht', 'Privatjet', 'Designer-Penthouse'],
			shopLinks: [
				{ name: 'Ege Leather', url: 'https://www.egecarpets.com' },
				{ name: 'Spezialanfertigung', url: '#' }
			]
		},
		{
			id: 'recycling-leder',
			name: 'Recycling-Lederboden',
			icon: '♻️',
			description: 'Boden aus recycelten Lederfasern. Nachhaltiger und günstiger bei ähnlicher Optik.',
			pros: ['Nachhaltiger', 'Günstiger', 'Gleichmäßigere Optik', 'Robuster als Echtleder'],
			cons: ['Nicht 100% Echtleder', 'Weniger exklusiv', 'Haptik anders'],
			priceRange: '€€',
			pricePerSqm: '80-150€',
			durability: 4,
			comfort: 4,
			maintenance: 3,
			bestFor: ['Arbeitszimmer', 'Empfang', 'Boutique'],
			shopLinks: [
				{ name: 'Freund', url: 'https://www.freund-gmbh.com' },
				{ name: 'Recycled Leather', url: 'https://www.recycledleather.eu' }
			]
		}
	],
	rooms: [
		{
			name: 'Schlafzimmer',
			icon: '🛏️',
			description: 'Ultimativer Luxus unter den Füßen beim Aufwachen.',
			requirements: ['Geringer Durchgang', 'Luxuriöse Atmosphäre', 'Barfuß-Komfort'],
			recommendedMaterials: ['Lederfliesen', 'Vollflächiges Leder'],
			avoidMaterials: [],
			thickness: '3-5mm',
			colorTips: 'Warme Brauntöne für Gemütlichkeit, Schwarz für Drama',
			specialTips: ['Hausschuhe empfohlen', 'Regelmäßige Lederpflege', 'Keine schweren Möbel verschieben']
		},
		{
			name: 'Ankleide / Closet',
			icon: '👔',
			description: 'Der perfekte Raum für Lederboden - geringer Durchgang, hoher Wow-Faktor.',
			requirements: ['Luxusambiente', 'Geringer Durchgang', 'Weich'],
			recommendedMaterials: ['Lederfliesen', 'Recycling-Lederboden'],
			avoidMaterials: [],
			thickness: '3-5mm',
			colorTips: 'Passend zu Holzelementen der Einrichtung',
			specialTips: ['Perfekter Einsatzort', 'Unterstreicht den Luxus', 'Gute Beleuchtung zeigt Textur']
		},
		{
			name: 'Bibliothek / Arbeitszimmer',
			icon: '📚',
			description: 'Klassischer britischer Club-Stil mit Lederboden.',
			requirements: ['Gediegene Atmosphäre', 'Wärme', 'Akustik'],
			recommendedMaterials: ['Lederfliesen', 'Recycling-Lederboden'],
			avoidMaterials: ['Vollflächiges Leder (Stuhlrollen!)'],
			thickness: '4-6mm',
			colorTips: 'Cognac oder Bordeaux für Tradition, Grau für Moderne',
			specialTips: ['Stuhlrollenmatte empfohlen', 'Passt zu Holzmöbeln', 'Schallabsorbierend']
		}
	],
	careGuide: {
		basics: [
			{
				icon: '🧴',
				title: 'Lederpflege',
				description: 'Leder braucht regelmäßige Pflege wie ein guter Schuh.',
				tips: ['Spezielle Lederpflege verwenden', 'Regelmäßig eincremen', 'Vor Austrocknung schützen']
			},
			{
				icon: '💧',
				title: 'Feuchtigkeit',
				description: 'Wasser ist der größte Feind des Lederbodens.',
				tips: ['Nie nass wischen', 'Verschüttetes sofort aufnehmen', 'Luftfeuchtigkeit kontrollieren']
			},
			{
				icon: '☀️',
				title: 'Lichtschutz',
				description: 'UV-Strahlung bleicht Leder aus.',
				tips: ['Direkte Sonne vermeiden', 'UV-Schutzfolien an Fenstern', 'Vorhänge nutzen']
			}
		],
		maintenanceSchedule: [
			{ frequency: 'Täglich', icon: '📅', tasks: ['Staub entfernen', 'Flecken sofort behandeln'] },
			{ frequency: 'Wöchentlich', icon: '📅', tasks: ['Mit trockenem Tuch abwischen'] },
			{ frequency: 'Monatlich', icon: '📅', tasks: ['Lederpflege auftragen', 'Intensivreinigung'] },
			{ frequency: 'Halbjährlich', icon: '📅', tasks: ['Professionelle Lederpflege', 'Imprägnierung'] }
		],
		stainRemovals: [
			{
				stain: 'Wasserflecken',
				icon: '💧',
				steps: ['Sofort tupfen', 'Trocknen lassen', 'Lederpflege auftragen', 'Polieren'],
				warning: 'Wasserränder sind schwer zu entfernen - Profi bei Bedarf'
			},
			{
				stain: 'Fettflecken',
				icon: '🍳',
				steps: ['Nicht reiben', 'Talkum aufstreuen', 'Über Nacht einwirken', 'Abbürsten'],
				warning: 'Fett kann permanent einziehen - schnell handeln'
			}
		],
		materialSpecificCare: [
			{
				material: 'Echtleder',
				icon: '👜',
				tips: ['Hochwertige Lederpflege verwenden', 'Regelmäßig nähren', 'Patina als Charakter betrachten']
			},
			{
				material: 'Recycling-Leder',
				icon: '♻️',
				tips: ['Robuster als Echtleder', 'Weniger intensive Pflege', 'Standard-Lederpflegemittel']
			}
		]
	}
};
