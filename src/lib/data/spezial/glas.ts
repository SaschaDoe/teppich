import type { FloorType } from '$lib/types/floor';

export const glas: FloorType = {
	id: 'glas',
	name: 'Glasboden',
	slug: 'glas',
	icon: '🔍',
	description: 'Glasböden sind das ultimative Designelement für besondere Architektur. Ob begehbares Glas über Lichthöfen, Glasbrücken oder beleuchtete Glasflächen - hier trifft Technik auf Kunst.',
	heroTitle: 'Glasboden - Schweben über dem Abgrund',
	heroDescription: 'Licht, Transparenz und Architektur verschmelzen. Glasböden sind für alle, die das Besondere suchen.',
	quickFacts: [
		{ label: 'Material', value: 'VSG', desc: 'Verbund-Sicherheitsglas' },
		{ label: 'Preis/m²', value: '500-2000€', desc: 'Exklusiv' },
		{ label: 'Tragfähigkeit', value: 'Hoch', desc: 'Nach Berechnung' },
		{ label: 'Design', value: 'Statement', desc: 'Einzigartig' }
	],
	materials: [
		{
			id: 'vsg-begehbar',
			name: 'Begehbares VSG',
			icon: '🚶',
			description: 'Mehrschichtiges Verbund-Sicherheitsglas für begehbare Flächen. Höchste Sicherheitsstandards.',
			pros: ['Höchste Sicherheit', 'Lichtdurchlässig', 'Rutschfest behandelbar', 'Beeindruckend'],
			cons: ['Extrem teuer', 'Aufwändige Montage', 'Statik-Berechnung nötig', 'Reinigungsaufwand'],
			priceRange: '€€€€',
			pricePerSqm: '800-1500€',
			durability: 5,
			comfort: 2,
			maintenance: 3,
			bestFor: ['Lichthöfe', 'Glasbrücken', 'Oberlichter', 'Treppen'],
			shopLinks: [
				{ name: 'Glas Trösch', url: 'https://www.glastroesch.de' },
				{ name: 'Saint-Gobain', url: 'https://www.saint-gobain.de' }
			]
		},
		{
			id: 'glas-led',
			name: 'LED-Glasboden',
			icon: '💡',
			description: 'Glasboden mit integrierter LED-Beleuchtung. Spektakuläre Lichteffekte für Events und Showrooms.',
			pros: ['Spektakuläre Effekte', 'Programmierbar', 'Blickfang', 'Vielseitig'],
			cons: ['Sehr teuer', 'Technik-Integration', 'Wartung der LEDs', 'Stromversorgung nötig'],
			priceRange: '€€€€',
			pricePerSqm: '1500-3000€',
			durability: 4,
			comfort: 2,
			maintenance: 2,
			bestFor: ['Diskothek', 'Showroom', 'Events', 'Museen'],
			shopLinks: [
				{ name: 'Glas Trösch', url: 'https://www.glastroesch.de/led' },
				{ name: 'Eventboden', url: 'https://www.eventboden.de' }
			]
		},
		{
			id: 'glas-matt',
			name: 'Milchglas / Satiniert',
			icon: '☁️',
			description: 'Mattiertes Glas für dezente Transparenz. Lichtdurchlässig aber blickdicht.',
			pros: ['Blickdicht', 'Lichtdurchlässig', 'Elegante Optik', 'Weniger Fingerabdrücke'],
			cons: ['Kein Durchblick', 'Teuer', 'Schwieriger zu reinigen als Klarglas'],
			priceRange: '€€€€',
			pricePerSqm: '700-1200€',
			durability: 5,
			comfort: 2,
			maintenance: 3,
			bestFor: ['Büro', 'Arztpraxis', 'Galerie', 'Wohnraum'],
			shopLinks: [
				{ name: 'Pilkington', url: 'https://www.pilkington.com' },
				{ name: 'Schott', url: 'https://www.schott.com' }
			]
		}
	],
	rooms: [
		{
			name: 'Lichthof / Atrium',
			icon: '☀️',
			description: 'Der klassische Einsatz - Glas bringt Licht in untere Etagen.',
			requirements: ['Hohe Tragfähigkeit', 'Rutschfest', 'Bruchsicher'],
			recommendedMaterials: ['Begehbares VSG', 'Milchglas'],
			avoidMaterials: [],
			thickness: '30-50mm je nach Spannweite',
			colorTips: 'Klarglas für maximales Licht, satiniert für Privatsphäre',
			specialTips: ['Statiker einbeziehen', 'Drainage bei Außeneinsatz', 'Reinigungszugang planen']
		},
		{
			name: 'Treppe / Galerie',
			icon: '🪜',
			description: 'Glastreppen und Galerien schaffen optische Leichtigkeit.',
			requirements: ['Rutschfest', 'Sicherheitsnorm', 'Tragfähig'],
			recommendedMaterials: ['Begehbares VSG'],
			avoidMaterials: ['LED-Glasboden'],
			thickness: '25-40mm',
			colorTips: 'Anti-Rutsch-Streifen oder satinierte Zonen für Sicherheit',
			specialTips: ['Geländer beachten', 'Beleuchtung von unten effektvoll', 'Reinigung einplanen']
		},
		{
			name: 'Showroom / Event',
			icon: '🎪',
			description: 'Maximaler Effekt für besondere Anlässe.',
			requirements: ['Effektbeleuchtung', 'Schneller Aufbau', 'Beeindruckend'],
			recommendedMaterials: ['LED-Glasboden'],
			avoidMaterials: [],
			thickness: '30mm+',
			colorTips: 'Klarglas für LED-Effekte optimal',
			specialTips: ['Stromanschluss planen', 'Steuerung programmieren', 'Mietoptionen prüfen']
		}
	],
	careGuide: {
		basics: [
			{
				icon: '🧴',
				title: 'Glasreinigung',
				description: 'Wie bei Fenstern - aber begehbare Flächen brauchen mehr Aufmerksamkeit.',
				tips: ['Glasreiniger verwenden', 'Fusselfreie Tücher', 'Keine Scheuermittel auf Antirutsch']
			},
			{
				icon: '👣',
				title: 'Antirutsch-Beschichtung',
				description: 'Die Rutschsicherheit muss gepflegt werden.',
				tips: ['Regelmäßig auf Abnutzung prüfen', 'Beschichtung erneuern lassen', 'Feuchtigkeit beachten']
			},
			{
				icon: '🔍',
				title: 'Inspektion',
				description: 'Regelmäßige Sichtprüfung auf Beschädigungen.',
				tips: ['Kratzer dokumentieren', 'Risse sofort melden', 'Jährliche Prüfung durch Fachmann']
			}
		],
		maintenanceSchedule: [
			{ frequency: 'Täglich', icon: '📅', tasks: ['Sichtprüfung', 'Grobe Verunreinigungen entfernen'] },
			{ frequency: 'Wöchentlich', icon: '📅', tasks: ['Gründliche Glasreinigung'] },
			{ frequency: 'Jährlich', icon: '📅', tasks: ['Professionelle Inspektion', 'Antirutsch prüfen'] }
		],
		stainRemovals: [
			{
				stain: 'Fingerabdrücke',
				icon: '👆',
				steps: ['Glasreiniger aufsprühen', 'Mit Mikrofasertuch polieren', 'Streifenfrei nachwischen'],
				warning: 'Bei satiniertem Glas schwieriger - mehr Reiniger verwenden'
			},
			{
				stain: 'Kratzer',
				icon: '📏',
				steps: ['Oberflächliche Kratzer: Polierpaste', 'Tiefe Kratzer: Fachmann'],
				warning: 'Kratzer können Sicherheit beeinträchtigen - immer prüfen lassen'
			}
		],
		materialSpecificCare: [
			{
				material: 'Klarglas',
				icon: '🔍',
				tips: ['Fingerabdrücke sofort sichtbar', 'Häufige Reinigung nötig', 'Streifenfreie Reiniger verwenden']
			},
			{
				material: 'Satiniertes Glas',
				icon: '☁️',
				tips: ['Fingerabdrücke weniger sichtbar', 'Aber schwieriger zu reinigen', 'Spezialreiniger für Mattglas']
			}
		]
	}
};
