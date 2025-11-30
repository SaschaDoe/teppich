import type { FloorType } from '$lib/types/floor';

export const dielen: FloorType = {
	id: 'dielen',
	name: 'Massivholzdielen',
	slug: 'dielen',
	icon: '🌲',
	description: 'Massivholzdielen sind der Inbegriff natürlicher Bodengestaltung. Die breiten, durchgehenden Holzbohlen bringen Wärme und Charakter in jeden Raum und entwickeln über die Jahre eine einzigartige Patina.',
	heroTitle: 'Massivholzdielen - Echte Handwerkskunst',
	heroDescription: 'Erleben Sie die zeitlose Schönheit massiver Holzdielen. Jede Diele ein Unikat mit einzigartiger Maserung und Charakter.',
	quickFacts: [
		{ label: 'Lebensdauer', value: '100+ J.', desc: 'Mehrfach renovierbar' },
		{ label: 'Preis/m²', value: '60-200€', desc: 'Je nach Holzart' },
		{ label: 'Verlegung', value: 'Profi', desc: 'Schwimmend oder verschraubt' },
		{ label: 'Fußwärme', value: 'Sehr gut', desc: 'Natürliche Wärme' }
	],
	materials: [
		{
			id: 'eiche-massiv',
			name: 'Eiche Massiv',
			icon: '🌳',
			description: 'Der Klassiker unter den Massivholzdielen. Eiche überzeugt durch extreme Härte, wunderschöne Maserung und hohe Langlebigkeit.',
			pros: ['Extrem langlebig', 'Sehr hart (Brinell 3.4)', 'Wertsteigernd', 'Mehrfach abschleifbar'],
			cons: ['Hoher Preis', 'Professionelle Verlegung nötig', 'Empfindlich gegen Feuchtigkeit'],
			priceRange: '€€€',
			pricePerSqm: '80-150€',
			durability: 5,
			comfort: 5,
			maintenance: 3,
			bestFor: ['Wohnzimmer', 'Schlafzimmer', 'Flur'],
			shopLinks: [
				{ name: 'BAUHAUS', url: 'https://www.bauhaus.info/massivholzdielen' },
				{ name: 'Holzland', url: 'https://www.holzland.de/massivholzdielen' }
			]
		},
		{
			id: 'laerche-massiv',
			name: 'Lärche Massiv',
			icon: '🌲',
			description: 'Lärche ist das härteste einheimische Nadelholz und eignet sich auch für den Außenbereich. Charakteristische rötliche Färbung.',
			pros: ['Auch für außen geeignet', 'Natürliche Resistenz', 'Warme Farbtöne', 'Nachhaltiges Holz'],
			cons: ['Weicher als Eiche', 'Harzaustritte möglich', 'Astlöcher häufig'],
			priceRange: '€€',
			pricePerSqm: '50-90€',
			durability: 4,
			comfort: 5,
			maintenance: 3,
			bestFor: ['Schlafzimmer', 'Terrasse', 'Wintergarten'],
			shopLinks: [
				{ name: 'BAUHAUS', url: 'https://www.bauhaus.info/laerchendielen' },
				{ name: 'OBI', url: 'https://www.obi.de/massivholzdielen' }
			]
		},
		{
			id: 'kiefer-massiv',
			name: 'Kiefer / Fichte Massiv',
			icon: '🌲',
			description: 'Preisgünstige Weichholzdielen mit lebhafter Maserung. Ideal für den rustikalen Landhausstil.',
			pros: ['Günstiger Preis', 'Warme Ausstrahlung', 'Schnell nachwachsend', 'Leicht zu bearbeiten'],
			cons: ['Weich, anfällig für Dellen', 'Nachdunkeln stark', 'Harzaustritte'],
			priceRange: '€',
			pricePerSqm: '30-60€',
			durability: 2,
			comfort: 5,
			maintenance: 4,
			bestFor: ['Schlafzimmer', 'Kinderzimmer', 'Dachboden'],
			shopLinks: [
				{ name: 'BAUHAUS', url: 'https://www.bauhaus.info/fichtendielen' },
				{ name: 'Hornbach', url: 'https://www.hornbach.de/massivholzdielen' }
			]
		},
		{
			id: 'nussbaum-massiv',
			name: 'Nussbaum Massiv',
			icon: '🌰',
			description: 'Edles, dunkles Holz mit ausdrucksstarker Maserung. Nussbaum ist ein Statement für exklusives Wohnen.',
			pros: ['Edle dunkle Optik', 'Einzigartige Maserung', 'Sehr wertvoll', 'Dimensionsstabil'],
			cons: ['Sehr teuer', 'Begrenzte Verfügbarkeit', 'Empfindlich gegen UV-Licht'],
			priceRange: '€€€€',
			pricePerSqm: '120-200€',
			durability: 4,
			comfort: 5,
			maintenance: 3,
			bestFor: ['Wohnzimmer', 'Arbeitszimmer', 'Repräsentative Räume'],
			shopLinks: [
				{ name: 'Holzland', url: 'https://www.holzland.de/nussbaumdielen' },
				{ name: 'Parkettkaiser', url: 'https://www.parkettkaiser.de' }
			]
		},
		{
			id: 'altholz-dielen',
			name: 'Altholzdielen',
			icon: '🏚️',
			description: 'Recycelte Dielen aus alten Gebäuden mit einzigartiger Patina und Geschichte. Jede Diele ein Unikat.',
			pros: ['Einzigartiger Charakter', 'Nachhaltig/recycelt', 'Bereits getrocknet', 'Historischer Charme'],
			cons: ['Sehr teuer', 'Verfügbarkeit begrenzt', 'Aufwändige Aufbereitung'],
			priceRange: '€€€€',
			pricePerSqm: '100-250€',
			durability: 5,
			comfort: 5,
			maintenance: 3,
			bestFor: ['Loft', 'Altbau', 'Designobjekte'],
			shopLinks: [
				{ name: 'Altholz-Börse', url: 'https://www.altholz.de' },
				{ name: 'eBay Kleinanzeigen', url: 'https://www.kleinanzeigen.de' }
			]
		}
	],
	rooms: [
		{
			name: 'Wohnzimmer',
			icon: '🛋️',
			description: 'Massivholzdielen schaffen eine warme, einladende Atmosphäre im Wohnbereich.',
			requirements: ['Hohe Beanspruchung', 'Repräsentativer Look', 'Fußbodenheizung möglich'],
			recommendedMaterials: ['Eiche Massiv', 'Nussbaum Massiv'],
			avoidMaterials: ['Kiefer', 'Fichte'],
			thickness: '21-25mm empfohlen',
			colorTips: 'Helle Dielen für kleine Räume, dunkle für große Räume mit viel Licht',
			specialTips: ['Teppiche an Laufwegen schützen das Holz', 'Regelmäßiges Ölen erhält die Schönheit']
		},
		{
			name: 'Schlafzimmer',
			icon: '🛏️',
			description: 'Die Fußwärme und natürliche Ausstrahlung von Massivholz sorgen für erholsamen Schlaf.',
			requirements: ['Gemütlichkeit', 'Natürliche Materialien', 'Geringere Beanspruchung'],
			recommendedMaterials: ['Lärche Massiv', 'Kiefer Massiv', 'Eiche Massiv'],
			avoidMaterials: [],
			thickness: '15-21mm ausreichend',
			colorTips: 'Warme, helle Töne wirken beruhigend',
			specialTips: ['Barfußfreundlich', 'Auf gute Trittschalldämmung achten']
		},
		{
			name: 'Flur / Eingangsbereich',
			icon: '🚪',
			description: 'Stark beanspruchter Bereich - hier zahlt sich Qualität besonders aus.',
			requirements: ['Extreme Beanspruchung', 'Schmutzresistenz', 'Strapazierfähig'],
			recommendedMaterials: ['Eiche Massiv', 'Lärche Massiv'],
			avoidMaterials: ['Kiefer', 'Fichte'],
			thickness: '21-25mm empfohlen',
			colorTips: 'Mittlere Töne kaschieren Schmutz am besten',
			specialTips: ['Fußmatte ist Pflicht', 'Regelmäßige Pflege notwendig', 'Versiegelung statt Öl']
		}
	],
	careGuide: {
		basics: [
			{
				icon: '🧹',
				title: 'Regelmäßige Reinigung',
				description: 'Staub und Sand sind die größten Feinde von Massivholzdielen.',
				tips: ['Täglich fegen oder saugen', 'Weiche Bürste verwenden', 'Niemals nass wischen']
			},
			{
				icon: '💧',
				title: 'Feuchtigkeit vermeiden',
				description: 'Holz arbeitet - zu viel Feuchtigkeit führt zu Quellen und Verformungen.',
				tips: ['Nebelfeucht wischen', 'Verschüttetes sofort aufnehmen', 'Luftfeuchtigkeit 50-60%']
			},
			{
				icon: '🛡️',
				title: 'Schutz',
				description: 'Vorbeugen ist besser als reparieren.',
				tips: ['Filzgleiter unter Möbel', 'Teppiche an Laufwegen', 'Keine Gummisohlen']
			}
		],
		maintenanceSchedule: [
			{ frequency: 'Täglich', icon: '📅', tasks: ['Kehren/Saugen', 'Flecken entfernen'] },
			{ frequency: 'Wöchentlich', icon: '📅', tasks: ['Nebelfeucht wischen', 'Pflegeprodukt auftragen'] },
			{ frequency: 'Jährlich', icon: '📅', tasks: ['Grundreinigung', 'Nachölen/Pflege', 'Kratzer ausbessern'] },
			{ frequency: 'Alle 10-15 Jahre', icon: '📅', tasks: ['Abschleifen', 'Neu versiegeln/ölen'] }
		],
		stainRemovals: [
			{
				stain: 'Wasserflecken',
				icon: '💧',
				steps: ['Sofort trocknen', 'Leicht anschleifen (Körnung 120)', 'Nachölen'],
				warning: 'Bei geölten Böden - versiegelte Böden vom Profi behandeln lassen'
			},
			{
				stain: 'Kratzer',
				icon: '📏',
				steps: ['Mit Holzkitt auffüllen', 'Anschleifen', 'Nachbehandeln'],
				warning: 'Tiefe Kratzer erfordern professionelles Abschleifen'
			}
		],
		materialSpecificCare: [
			{
				material: 'Geölte Dielen',
				icon: '🫒',
				tips: ['Regelmäßig nachölen', 'Spezielle Holzseife verwenden', 'Lokale Ausbesserungen möglich']
			},
			{
				material: 'Versiegelte Dielen',
				icon: '✨',
				tips: ['Keine Wachse verwenden', 'Lack-Pflegemittel nutzen', 'Bei Beschädigung komplett abschleifen']
			}
		]
	}
};
