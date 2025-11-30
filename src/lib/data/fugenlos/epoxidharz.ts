import type { FloorType } from '$lib/types/floor';

export const epoxidharz: FloorType = {
	id: 'epoxidharz',
	name: 'Epoxidharz',
	slug: 'epoxidharz',
	icon: '💧',
	description: 'Epoxidharz-Böden sind die Königsklasse der Industrieböden, die zunehmend auch im Wohnbereich Einzug halten. Spiegelglatt, extrem belastbar und in unendlichen Farben und Effekten möglich.',
	heroTitle: 'Epoxidharz - Liquid Glass',
	heroDescription: 'Flüssiges Glas für Ihren Boden. Epoxidharz bietet unendliche kreative Möglichkeiten bei höchster Belastbarkeit.',
	quickFacts: [
		{ label: 'Belastbarkeit', value: 'Extrem', desc: 'Industrietauglich' },
		{ label: 'Preis/m²', value: '50-200€', desc: 'Je nach Design' },
		{ label: 'Chemikalien', value: 'Resistent', desc: 'Säuren & Laugen' },
		{ label: 'Design', value: 'Grenzenlos', desc: 'Jede Farbe möglich' }
	],
	materials: [
		{
			id: 'epoxid-selbstnivellierend',
			name: 'Selbstnivellierender Epoxidboden',
			icon: '🌊',
			description: 'Fließfähiges Epoxidharz, das sich selbst glättet. Perfekt ebene, spiegelglatte Oberflächen.',
			pros: ['Perfekt eben', 'Hochglänzend', 'Sehr pflegeleicht', 'Chemikalienresistent'],
			cons: ['Rutschig bei Nässe', 'Kratzer sichtbar', 'Vergilbung möglich (UV)'],
			priceRange: '€€€',
			pricePerSqm: '80-150€',
			durability: 5,
			comfort: 2,
			maintenance: 5,
			bestFor: ['Garage', 'Showroom', 'Industrie', 'Loft'],
			shopLinks: [
				{ name: 'Epodex', url: 'https://www.epodex.de' },
				{ name: 'Resinence', url: 'https://www.resinence.de' }
			]
		},
		{
			id: 'epoxid-metallic',
			name: 'Metallic Epoxidboden',
			icon: '✨',
			description: 'Spektakuläre Metallic-Effekte mit schimmernden Pigmenten. Jeder Boden ein Kunstwerk.',
			pros: ['WOW-Effekt', 'Einzigartige Optik', '3D-Tiefenwirkung', 'Individuell'],
			cons: ['Teuer', 'Nur für Profis', 'Ergebnis variiert', 'Kann polarisieren'],
			priceRange: '€€€€',
			pricePerSqm: '120-200€',
			durability: 4,
			comfort: 2,
			maintenance: 4,
			bestFor: ['Showroom', 'Bar/Restaurant', 'Design-Wohnung'],
			shopLinks: [
				{ name: 'Epoxidwelt', url: 'https://www.epoxidwelt.de' },
				{ name: 'Resinence', url: 'https://www.resinence.de/metallic' }
			]
		},
		{
			id: 'epoxid-flakes',
			name: 'Epoxid mit Flakes',
			icon: '🎨',
			description: 'Epoxidharz mit eingestreuten Farbflocken. Robust, rutschfester und optisch interessant.',
			pros: ['Rutschfester', 'Kratzer weniger sichtbar', 'Robust', 'Günstiger'],
			cons: ['Weniger elegant', 'Schwerer zu reinigen', 'Industriecharakter'],
			priceRange: '€€',
			pricePerSqm: '50-90€',
			durability: 5,
			comfort: 2,
			maintenance: 4,
			bestFor: ['Garage', 'Werkstatt', 'Keller', 'Industrie'],
			shopLinks: [
				{ name: 'BAUHAUS', url: 'https://www.bauhaus.info/garagenbeschichtung' },
				{ name: 'Hornbach', url: 'https://www.hornbach.de/epoxid' }
			]
		},
		{
			id: 'epoxid-3d',
			name: '3D Epoxidboden',
			icon: '🖼️',
			description: 'Fotorealistische 3D-Bilder unter kristallklarem Epoxidharz. Der ultimative Hingucker.',
			pros: ['Atemberaubende Optik', 'Absolutes Statement', 'Wassermotive möglich', 'Gesprächsstoff'],
			cons: ['Sehr teuer', 'Kann ermüden', 'Spezieller Geschmack', 'Aufwändig'],
			priceRange: '€€€€',
			pricePerSqm: '150-300€',
			durability: 4,
			comfort: 2,
			maintenance: 4,
			bestFor: ['Badezimmer', 'Kinderarzt', 'Events', 'Showroom'],
			shopLinks: [
				{ name: '3D-Boden', url: 'https://www.3d-boden.de' },
				{ name: 'Kunstharzboden', url: 'https://www.kunstharzboden.de' }
			]
		}
	],
	rooms: [
		{
			name: 'Garage',
			icon: '🚗',
			description: 'Der perfekte Garagenboden: Ölfest, robust und leicht zu reinigen.',
			requirements: ['Öl-/Chemikalienbeständig', 'Rutschfest', 'Extrem belastbar'],
			recommendedMaterials: ['Epoxid mit Flakes', 'Selbstnivellierender Epoxidboden'],
			avoidMaterials: ['Metallic (rutschig)'],
			thickness: '2-3mm',
			colorTips: 'Grau oder Anthrazit sind praktisch, Farben möglich',
			specialTips: ['Anti-Rutsch-Additiv für Gefälle', 'Reifen können Spuren hinterlassen', 'Ölflecken regelmäßig entfernen']
		},
		{
			name: 'Showroom / Gewerbe',
			icon: '🏬',
			description: 'Hochglanz für den perfekten ersten Eindruck.',
			requirements: ['Repräsentativ', 'Pflegeleicht', 'Strapazierfähig'],
			recommendedMaterials: ['Selbstnivellierender Epoxidboden', 'Metallic Epoxidboden'],
			avoidMaterials: [],
			thickness: '2-3mm',
			colorTips: 'Weiß für Autohäuser, Grau für Industrie, Schwarz für Luxus',
			specialTips: ['Regelmäßig polieren für Glanz', 'Fußmatten an Eingängen']
		},
		{
			name: 'Wohnzimmer (Design)',
			icon: '🛋️',
			description: 'Für Design-Enthusiasten: Epoxid als Statement im Wohnbereich.',
			requirements: ['Optisch ansprechend', 'FBH-kompatibel', 'Pflegeleicht'],
			recommendedMaterials: ['Selbstnivellierender Epoxidboden', 'Metallic Epoxidboden'],
			avoidMaterials: ['Flakes-Böden'],
			thickness: '2mm',
			colorTips: 'Weiß oder helles Grau für modernen Look',
			specialTips: ['Teppiche für Wärme', 'Filzgleiter unter Möbeln', 'UV-beständige Variante für Sonnenseiten']
		}
	],
	careGuide: {
		basics: [
			{
				icon: '🧹',
				title: 'Einfache Reinigung',
				description: 'Epoxidharz ist extrem pflegeleicht.',
				tips: ['Fegen oder saugen', 'Feucht wischen', 'Bei Bedarf Intensivreiniger']
			},
			{
				icon: '🚫',
				title: 'Vermeiden',
				description: 'Auch robuste Böden haben Grenzen.',
				tips: ['Keine Scheuermittel', 'Keine Gummimatten (Verfärbung)', 'Heiße Gegenstände vermeiden']
			},
			{
				icon: '✨',
				title: 'Glanz erhalten',
				description: 'Hochglanzböden brauchen etwas Aufmerksamkeit.',
				tips: ['Regelmäßig polieren', 'Mikrofasertücher verwenden', 'Anti-Kratzer-Beschichtung möglich']
			}
		],
		maintenanceSchedule: [
			{ frequency: 'Täglich', icon: '📅', tasks: ['Bei Bedarf fegen'] },
			{ frequency: 'Wöchentlich', icon: '📅', tasks: ['Feucht wischen'] },
			{ frequency: 'Monatlich', icon: '📅', tasks: ['Polieren bei Hochglanz'] },
			{ frequency: 'Jährlich', icon: '📅', tasks: ['Professionelle Politur bei Bedarf'] }
		],
		stainRemovals: [
			{
				stain: 'Reifenspuren',
				icon: '🚗',
				steps: ['Spezialreiniger auftragen', 'Einwirken lassen', 'Mit Bürste bearbeiten', 'Spülen'],
				warning: 'Heiße Reifen können permanente Spuren hinterlassen'
			},
			{
				stain: 'Kratzer',
				icon: '📏',
				steps: ['Fein anschleifen', 'Polieren', 'Bei tiefen Kratzern: Neuversiegelung'],
				warning: 'Tiefe Kratzer erfordern Fachmann'
			}
		],
		materialSpecificCare: [
			{
				material: 'Hochglanz-Epoxid',
				icon: '✨',
				tips: ['Kratzer sofort polieren', 'Keine Schleifmittel', 'Regelmäßig wachsen']
			},
			{
				material: 'Flakes-Epoxid',
				icon: '🎨',
				tips: ['Robuster als Hochglanz', 'Fugen zwischen Flocken reinigen', 'Standard-Pflege ausreichend']
			}
		]
	}
};
