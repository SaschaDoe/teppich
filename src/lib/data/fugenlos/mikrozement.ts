import type { FloorType } from '$lib/types/floor';

export const mikrozement: FloorType = {
	id: 'mikrozement',
	name: 'Mikrozement',
	slug: 'mikrozement',
	icon: '🏛️',
	description: 'Mikrozement ist eine hauchdünne Zementbeschichtung (2-3mm), die auf fast jeden Untergrund aufgetragen werden kann. Das Ergebnis: fugenlose Betonoptik ohne aufwändigen Umbau.',
	heroTitle: 'Mikrozement - Beton ohne Beton',
	heroDescription: 'Nur 2-3mm dick und doch die volle Wirkung. Mikrozement verwandelt jeden Raum in ein modernes Designobjekt.',
	quickFacts: [
		{ label: 'Dicke', value: '2-3mm', desc: 'Ultradünn' },
		{ label: 'Preis/m²', value: '80-150€', desc: 'Inkl. Verarbeitung' },
		{ label: 'Untergrund', value: 'Flexibel', desc: 'Fliesen, Estrich, etc.' },
		{ label: 'Fugenlos', value: '100%', desc: 'Nahtlose Flächen' }
	],
	materials: [
		{
			id: 'mikrozement-klassisch',
			name: 'Klassischer Mikrozement',
			icon: '🏗️',
			description: 'Zweikomponenten-System mit Zementbasis. Der Klassiker für authentische Betonoptik.',
			pros: ['Authentische Betonoptik', 'Sehr robust', 'Für Boden und Wand', 'Individuelle Farben'],
			cons: ['Professionelle Verarbeitung', 'Mehrere Arbeitsgänge', 'Trocknungszeit'],
			priceRange: '€€€',
			pricePerSqm: '100-150€',
			durability: 4,
			comfort: 3,
			maintenance: 4,
			bestFor: ['Wohnzimmer', 'Bad', 'Küche', 'Treppe'],
			shopLinks: [
				{ name: 'Topciment', url: 'https://www.topciment.com/de' },
				{ name: 'Ideal Work', url: 'https://www.idealwork.de' }
			]
		},
		{
			id: 'mikrozement-fein',
			name: 'Mikrozement Fein',
			icon: '✨',
			description: 'Extra feine Körnung für glatte, edle Oberflächen. Weniger Betoncharakter, mehr Eleganz.',
			pros: ['Sehr glatte Oberfläche', 'Edler Look', 'Samtiges Finish', 'Ideal für Wände'],
			cons: ['Weniger robust', 'Kratzerempfindlich', 'Nur für geringe Beanspruchung'],
			priceRange: '€€€',
			pricePerSqm: '100-140€',
			durability: 3,
			comfort: 3,
			maintenance: 3,
			bestFor: ['Wände', 'Waschtisch', 'Möbel', 'Akzentflächen'],
			shopLinks: [
				{ name: 'Festfloor', url: 'https://www.festfloor.de' },
				{ name: 'Pandomo', url: 'https://www.pandomo.de' }
			]
		},
		{
			id: 'mikrozement-pool',
			name: 'Mikrozement Pool/Nassbereich',
			icon: '💧',
			description: 'Spezielle wasserfeste Variante für Pools, Duschen und dauerhaft nasse Bereiche.',
			pros: ['Wasserdicht', 'Für Pools geeignet', 'Fugenlos in Duschen', 'Hygienisch'],
			cons: ['Teurer', 'Spezialverarbeitung', 'Regelmäßige Pflege'],
			priceRange: '€€€€',
			pricePerSqm: '120-180€',
			durability: 5,
			comfort: 3,
			maintenance: 4,
			bestFor: ['Pool', 'Dusche', 'Wellnessbereich', 'Spa'],
			shopLinks: [
				{ name: 'Beal International', url: 'https://www.bfrancelusa.com' },
				{ name: 'Mortex', url: 'https://www.mortex.eu' }
			]
		}
	],
	rooms: [
		{
			name: 'Badezimmer',
			icon: '🚿',
			description: 'Fugenlos vom Boden über die Wände bis in die Dusche - Mikrozement-Bäder sind ein Traum.',
			requirements: ['Wasserfest versiegelt', 'Rutschfest', 'Fugenlos'],
			recommendedMaterials: ['Mikrozement Pool/Nassbereich', 'Klassischer Mikrozement'],
			avoidMaterials: ['Mikrozement Fein'],
			thickness: '3-4mm im Bad',
			colorTips: 'Helle Grautöne vergrößern optisch',
			specialTips: ['Wandhochzug empfohlen', 'Antirutsch-Additiv in Dusche', 'Regelmäßig wachsen']
		},
		{
			name: 'Wohnbereich',
			icon: '🛋️',
			description: 'Der moderne Industrial-Look für anspruchsvolle Wohnräume.',
			requirements: ['FBH-geeignet', 'Strapazierfähig', 'Pflegeleicht'],
			recommendedMaterials: ['Klassischer Mikrozement'],
			avoidMaterials: [],
			thickness: '2-3mm Standard',
			colorTips: 'Von Weiß bis Anthrazit - alle Grautöne möglich',
			specialTips: ['Fußbodenheizung perfekt', 'Teppiche für Wärme', 'Versiegelung alle 2 Jahre erneuern']
		},
		{
			name: 'Küche',
			icon: '🍳',
			description: 'Fugenlos und hygienisch - Mikrozement ist ideal für Küchen.',
			requirements: ['Wasserfest', 'Hygienisch', 'Fleckenresistent'],
			recommendedMaterials: ['Klassischer Mikrozement'],
			avoidMaterials: [],
			thickness: '2-3mm',
			colorTips: 'Dunklere Töne sind fleckentoleranter',
			specialTips: ['Auch für Arbeitsplatten geeignet', 'Rückwand fugenlos gestalten', 'Gute Versiegelung wichtig']
		}
	],
	careGuide: {
		basics: [
			{
				icon: '🧹',
				title: 'Sanfte Reinigung',
				description: 'Mikrozement ist empfindlicher als echter Beton.',
				tips: ['Weiche Besen/Mops verwenden', 'pH-neutrale Reiniger', 'Keine Scheuermittel']
			},
			{
				icon: '💧',
				title: 'Feuchtigkeit',
				description: 'Versiegelte Oberflächen sind wasserabweisend.',
				tips: ['Stehendes Wasser vermeiden', 'Verschüttetes aufwischen', 'Nach Reinigung trockenwischen']
			},
			{
				icon: '🛡️',
				title: 'Schutzschicht pflegen',
				description: 'Die Versiegelung ist der Schlüssel.',
				tips: ['Regelmäßig nachwachsen', 'Versiegelung alle 1-2 Jahre', 'Kratzer schnell ausbessern']
			}
		],
		maintenanceSchedule: [
			{ frequency: 'Täglich', icon: '📅', tasks: ['Bei Bedarf fegen', 'Flecken aufwischen'] },
			{ frequency: 'Wöchentlich', icon: '📅', tasks: ['Feucht wischen'] },
			{ frequency: 'Monatlich', icon: '📅', tasks: ['Pflegewachs auftragen'] },
			{ frequency: 'Jährlich', icon: '📅', tasks: ['Versiegelung prüfen/erneuern'] }
		],
		stainRemovals: [
			{
				stain: 'Kalkflecken',
				icon: '💧',
				steps: ['Speziellen Mikrozement-Reiniger verwenden', 'Sanft einreiben', 'Nachwischen'],
				warning: 'Keine Essig- oder Zitronensäure - greift die Oberfläche an'
			},
			{
				stain: 'Kratzer',
				icon: '📏',
				steps: ['Feines Schleifpad', 'Sanft glätten', 'Nachwachsen/versiegeln'],
				warning: 'Tiefe Kratzer erfordern Ausbesserung durch Fachmann'
			}
		],
		materialSpecificCare: [
			{
				material: 'Gewachster Mikrozement',
				icon: '🕯️',
				tips: ['Regelmäßig nachwachsen', 'Heißes Wasser vermeiden', 'Keine aggressiven Reiniger']
			},
			{
				material: 'Versiegelter Mikrozement',
				icon: '✨',
				tips: ['Robuster als gewachst', 'Standard-Reinigung möglich', 'Versiegelung bei Abnutzung erneuern']
			}
		]
	}
};
