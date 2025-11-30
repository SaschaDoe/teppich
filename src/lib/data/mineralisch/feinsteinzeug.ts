import type { FloorType } from '$lib/types/floor';

export const feinsteinzeug: FloorType = {
	id: 'feinsteinzeug',
	name: 'Feinsteinzeug',
	slug: 'feinsteinzeug',
	icon: '💎',
	shortDescription: 'Hochwertige dichte Keramik',
	description: 'Feinsteinzeug ist die Premium-Variante keramischer Fliesen. Mit einer Wasseraufnahme unter 0,5% ist es extrem dicht, frostfest und für höchste Beanspruchungen geeignet - innen wie außen.',
	heroTitle: 'Feinsteinzeug - Das Beste der Keramik',
	heroDescription: 'Dichter, härter, langlebiger: Feinsteinzeug vereint alle Vorteile von Fliesen in Perfektion.',
	quickFacts: [
		{ label: 'Wasseraufnahme', value: '<0,5%', desc: 'Frostfest' },
		{ label: 'Preis/m²', value: '30-100€', desc: 'Premium-Segment' },
		{ label: 'Härte', value: 'Sehr hoch', desc: 'Mohs 7-8' },
		{ label: 'Einsatz', value: 'Universal', desc: 'Innen & Außen' }
	],
	materials: [
		{
			id: 'feinsteinzeug-poliert',
			name: 'Poliertes Feinsteinzeug',
			icon: '✨',
			description: 'Hochglanzpolierte Oberfläche für elegante, repräsentative Räume. Marmorähnliche Optik ohne die Nachteile.',
			pros: ['Elegante Hochglanzoptik', 'Leicht zu reinigen', 'Große Formate möglich', 'Reflexion hellt auf'],
			cons: ['Rutschig bei Nässe', 'Kratzer sichtbarer', 'Fingerabdrücke sichtbar'],
			priceRange: '€€€',
			pricePerSqm: '50-100€',
			durability: 5,
			comfort: 2,
			maintenance: 4,
			bestFor: ['Wohnzimmer', 'Empfang', 'Lobby'],
			shopLinks: [
				{ name: 'Fliesen Discount', url: 'https://www.fliesen-discount.de' },
				{ name: 'Fliesenmax', url: 'https://www.fliesenmax.de' }
			]
		},
		{
			id: 'feinsteinzeug-matt',
			name: 'Mattes Feinsteinzeug',
			icon: '🔘',
			description: 'Natürliche, matte Oberfläche für zeitlose Eleganz. Rutschfester und pflegeleichter als poliert.',
			pros: ['Rutschfester', 'Kratzer weniger sichtbar', 'Zeitlose Optik', 'Vielseitig einsetzbar'],
			cons: ['Weniger Glanz', 'Fugen können sich stärker abzeichnen'],
			priceRange: '€€',
			pricePerSqm: '30-60€',
			durability: 5,
			comfort: 3,
			maintenance: 5,
			bestFor: ['Bad', 'Küche', 'Flur', 'Terrasse'],
			shopLinks: [
				{ name: 'BAUHAUS', url: 'https://www.bauhaus.info/feinsteinzeug' },
				{ name: 'Hornbach', url: 'https://www.hornbach.de/feinsteinzeug' }
			]
		},
		{
			id: 'feinsteinzeug-outdoor',
			name: 'Outdoor-Feinsteinzeug',
			icon: '🌳',
			description: 'Extra starke Platten (20mm) für die Verlegung im Außenbereich. Frostfest und rutschsicher.',
			pros: ['Frostfest', 'Rutschsicher (R11+)', 'Lose verlegbar', 'Enorme Stabilität'],
			cons: ['Schwer', 'Teurer', 'Dickere Platten'],
			priceRange: '€€€',
			pricePerSqm: '40-80€',
			durability: 5,
			comfort: 2,
			maintenance: 5,
			bestFor: ['Terrasse', 'Balkon', 'Garten', 'Einfahrt'],
			shopLinks: [
				{ name: 'OBI', url: 'https://www.obi.de/terrassenplatten' },
				{ name: 'BAUHAUS', url: 'https://www.bauhaus.info/terrassenplatten' }
			]
		},
		{
			id: 'feinsteinzeug-grossformat',
			name: 'Großformat (60x120cm+)',
			icon: '📐',
			description: 'Moderne Großformate bis 120x240cm für fugenarme, großzügige Flächen.',
			pros: ['Weniger Fugen', 'Moderne Optik', 'Räume wirken größer', 'Hochwertige Ausstrahlung'],
			cons: ['Schwierige Verlegung', 'Teurer', 'Bruchgefahr bei Transport'],
			priceRange: '€€€',
			pricePerSqm: '50-100€',
			durability: 5,
			comfort: 2,
			maintenance: 4,
			bestFor: ['Wohnzimmer', 'Badezimmer', 'Gewerbe'],
			shopLinks: [
				{ name: 'Fliesenmax', url: 'https://www.fliesenmax.de/grossformat' },
				{ name: 'Fliesen Outlet', url: 'https://www.fliesen-outlet.de' }
			]
		}
	],
	rooms: [
		{
			name: 'Badezimmer',
			icon: '🚿',
			description: 'Die perfekte Wahl fürs Bad: wasserdicht, hygienisch und elegant.',
			requirements: ['Wasserfest', 'Rutschsicher', 'Pflegeleicht', 'Hygienisch'],
			recommendedMaterials: ['Mattes Feinsteinzeug', 'Großformat'],
			avoidMaterials: ['Poliertes Feinsteinzeug (rutschig)'],
			thickness: '10mm Standard',
			colorTips: 'Helle Töne vergrößern kleine Bäder optisch',
			specialTips: ['Mindestens R10 Rutschklasse', 'Große Formate für edle Optik', 'Fugen mit Epoxid versiegeln']
		},
		{
			name: 'Terrasse',
			icon: '🌿',
			description: 'Outdoor-Feinsteinzeug ist der moderne Ersatz für Naturstein.',
			requirements: ['Frostfest', 'R11+ rutschfest', 'UV-beständig', 'Tragfähig'],
			recommendedMaterials: ['Outdoor-Feinsteinzeug'],
			avoidMaterials: ['Standard-Feinsteinzeug', 'Poliert'],
			thickness: '20mm für Außen',
			colorTips: 'Nicht zu dunkel - heizt sich in der Sonne auf',
			specialTips: ['Gefälle für Wasserablauf', '20mm Platten auf Stelzlager möglich', 'Splittbett oder lose Verlegung']
		},
		{
			name: 'Wohnzimmer',
			icon: '🛋️',
			description: 'Feinsteinzeug in Großformat oder Holzoptik für edle Wohnbereiche.',
			requirements: ['Fußbodenheizung geeignet', 'Optisch ansprechend', 'Pflegeleicht'],
			recommendedMaterials: ['Großformat', 'Mattes Feinsteinzeug'],
			avoidMaterials: [],
			thickness: '10mm Standard',
			colorTips: 'Warme Erdtöne oder kühles Grau je nach Einrichtung',
			specialTips: ['Holzoptik für Wärme', 'Teppiche für Behaglichkeit', 'Fußbodenheizung ideal']
		}
	],
	careGuide: {
		basics: [
			{
				icon: '🧹',
				title: 'Regelmäßige Reinigung',
				description: 'Feinsteinzeug ist extrem pflegeleicht.',
				tips: ['Fegen oder saugen', 'Feucht wischen', 'Fliesenreiniger bei Bedarf']
			},
			{
				icon: '🔲',
				title: 'Fugenpflege',
				description: 'Die Fugen brauchen besondere Aufmerksamkeit.',
				tips: ['Fugen regelmäßig reinigen', 'Schimmel vorbeugen', 'Fugen bei Bedarf erneuern']
			},
			{
				icon: '✨',
				title: 'Poliertes Feinsteinzeug',
				description: 'Hochglanz braucht etwas mehr Pflege.',
				tips: ['Mikrofasertuch für streifenfreien Glanz', 'Keine Scheuermittel', 'Kalkflecken sofort entfernen']
			}
		],
		maintenanceSchedule: [
			{ frequency: 'Täglich', icon: '📅', tasks: ['Bei Bedarf fegen'] },
			{ frequency: 'Wöchentlich', icon: '📅', tasks: ['Feucht wischen'] },
			{ frequency: 'Monatlich', icon: '📅', tasks: ['Fugen reinigen'] },
			{ frequency: 'Jährlich', icon: '📅', tasks: ['Intensivreinigung', 'Fugen prüfen'] }
		],
		stainRemovals: [
			{
				stain: 'Kalk',
				icon: '💧',
				steps: ['Essigwasser auftragen', 'Einwirken lassen', 'Abwischen'],
				warning: 'Nicht auf polierten Oberflächen - kann mattieren'
			},
			{
				stain: 'Zementschleier',
				icon: '🏗️',
				steps: ['Zementschleierentferner verwenden', 'Nach Anleitung einwirken', 'Gründlich spülen'],
				warning: 'Nur bei unpolierten Oberflächen'
			}
		],
		materialSpecificCare: [
			{
				material: 'Poliertes Feinsteinzeug',
				icon: '✨',
				tips: ['Keine säurehaltigen Reiniger', 'Mikrofasertücher verwenden', 'Imprägnierung möglich']
			},
			{
				material: 'Outdoor-Feinsteinzeug',
				icon: '🌳',
				tips: ['Hochdruckreiniger möglich', 'Grünbelag mit Spezialreiniger', 'Fugen bei Split regelmäßig nachfüllen']
			}
		]
	}
};
