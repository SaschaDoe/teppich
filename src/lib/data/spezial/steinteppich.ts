import type { FloorType } from '$lib/types/floor';

export const steinteppich: FloorType = {
	id: 'steinteppich',
	name: 'Steinteppich',
	slug: 'steinteppich',
	icon: '🪨',
	shortDescription: 'Kiesel in Kunstharz',
	description: 'Steinteppich besteht aus kleinen Natursteinen (Marmorkies, Flusskiesel), die mit transparentem Kunstharz gebunden werden. Das Ergebnis: eine drainagefähige, rutschfeste und optisch einzigartige Oberfläche.',
	heroTitle: 'Steinteppich - Natur trifft Technik',
	heroDescription: 'Millionen kleiner Steine, verbunden zu einer einzigartigen Fläche. Ideal für Außenbereiche und überall, wo natürliche Optik gefragt ist.',
	quickFacts: [
		{ label: 'Material', value: 'Naturstein', desc: 'In Kunstharz' },
		{ label: 'Preis/m²', value: '50-120€', desc: 'Je nach Stein' },
		{ label: 'Drainage', value: 'Ja', desc: 'Wasserdurchlässig' },
		{ label: 'Einsatz', value: 'Innen/Außen', desc: 'Vielseitig' }
	],
	materials: [
		{
			id: 'marmorkies',
			name: 'Marmorkies',
			icon: '⚪',
			description: 'Klassischer weißer bis grauer Marmorkies für elegante Steinteppiche. Die beliebteste Variante.',
			pros: ['Elegante Optik', 'Viele Farben', 'Klassisch', 'UV-beständig'],
			cons: ['Kann sich verfärben', 'Porös', 'Verschmutzung sichtbarer'],
			priceRange: '€€',
			pricePerSqm: '60-90€',
			durability: 4,
			comfort: 3,
			maintenance: 3,
			bestFor: ['Terrasse', 'Balkon', 'Bad', 'Pool-Umrandung'],
			shopLinks: [
				{ name: 'Steinteppich-Profi', url: 'https://www.steinteppich-profi.de' },
				{ name: 'BAUHAUS', url: 'https://www.bauhaus.info/steinteppich' }
			]
		},
		{
			id: 'flusskiesel',
			name: 'Flusskiesel',
			icon: '🟤',
			description: 'Natürliche, runde Flusskiesel für organische, naturnahe Optik. Verschiedene Naturfarben.',
			pros: ['Natürliche Optik', 'Sehr robust', 'Fußreflexzonen möglich', 'Einzigartig'],
			cons: ['Unebene Oberfläche', 'Schwieriger zu reinigen', 'Barfuß gewöhnungsbedürftig'],
			priceRange: '€€',
			pricePerSqm: '70-100€',
			durability: 5,
			comfort: 2,
			maintenance: 3,
			bestFor: ['Außendusche', 'Wellnessbereich', 'Garten', 'Teichrand'],
			shopLinks: [
				{ name: 'Kieselsteine24', url: 'https://www.kieselsteine24.de' },
				{ name: 'Steinteppich.de', url: 'https://www.steinteppich.de' }
			]
		},
		{
			id: 'quarzkies',
			name: 'Quarzkies',
			icon: '💎',
			description: 'Härtere Quarzvariante für besonders beanspruchte Bereiche. Sehr robust und langlebig.',
			pros: ['Extrem robust', 'Säurebeständig', 'Kratzfest', 'Langlebig'],
			cons: ['Teurer', 'Kühlere Optik', 'Weniger Farbauswahl'],
			priceRange: '€€€',
			pricePerSqm: '80-120€',
			durability: 5,
			comfort: 3,
			maintenance: 4,
			bestFor: ['Garage', 'Einfahrt', 'Gewerbe', 'Außentreppe'],
			shopLinks: [
				{ name: 'Renofloor', url: 'https://www.renofloor.de' },
				{ name: 'Steinteppich-Experte', url: 'https://www.steinteppich-experte.de' }
			]
		},
		{
			id: 'farbkies',
			name: 'Farbiger Steinteppich',
			icon: '🌈',
			description: 'Eingefärbter Kies oder Mischungen für kreative, bunte Gestaltungen.',
			pros: ['Kreative Gestaltung', 'Logos möglich', 'Einzigartig', 'Blickfang'],
			cons: ['Farbe kann verblassen', 'Aufpreis', 'Geschmackssache'],
			priceRange: '€€€',
			pricePerSqm: '80-130€',
			durability: 4,
			comfort: 3,
			maintenance: 3,
			bestFor: ['Spielplatz', 'Kindergarten', 'Gewerbe', 'Showroom'],
			shopLinks: [
				{ name: 'Colorquarz', url: 'https://www.colorquarz.de' },
				{ name: 'Steinteppich-Shop', url: 'https://www.steinteppich-shop.de' }
			]
		}
	],
	rooms: [
		{
			name: 'Terrasse / Balkon',
			icon: '🌿',
			description: 'Der klassische Einsatzort - drainagefähig und rutschfest.',
			requirements: ['Wasserdurchlässig', 'Frostfest', 'Rutschfest', 'UV-beständig'],
			recommendedMaterials: ['Marmorkies', 'Quarzkies'],
			avoidMaterials: [],
			thickness: '8-12mm Außen',
			colorTips: 'Helle Töne heizen weniger auf, dunkle sind wärmer',
			specialTips: ['Gefälle beachten', 'Drainmatte als Unterbau', 'Bei Frost wasserdurchlässig halten']
		},
		{
			name: 'Bad / Wellness',
			icon: '🚿',
			description: 'Rutschfest und optisch einzigartig im Nassbereich.',
			requirements: ['Rutschfest', 'Wasserfest', 'Hygienisch'],
			recommendedMaterials: ['Marmorkies', 'Flusskiesel'],
			avoidMaterials: [],
			thickness: '6-8mm Innen',
			colorTips: 'Weiß/Grau für Sauberkeit, Beige für Wärme',
			specialTips: ['Versiegelung für leichtere Reinigung', 'Flusskiesel für Fußmassage', 'Auch für Duschwände']
		},
		{
			name: 'Einfahrt / Garage',
			icon: '🚗',
			description: 'Robuste Lösung für befahrbare Flächen.',
			requirements: ['Extrem belastbar', 'Ölfest', 'Rutschfest'],
			recommendedMaterials: ['Quarzkies'],
			avoidMaterials: ['Marmorkies (zu empfindlich)'],
			thickness: '10-15mm für Befahrung',
			colorTips: 'Dunkle Töne kaschieren Reifenspuren und Öl',
			specialTips: ['Dicken Unterbau beachten', 'Spezialharze für KFZ-Belastung', 'Professionelle Verlegung empfohlen']
		}
	],
	careGuide: {
		basics: [
			{
				icon: '🧹',
				title: 'Regelmäßige Reinigung',
				description: 'Die offenporige Struktur braucht regelmäßige Pflege.',
				tips: ['Regelmäßig kehren/saugen', 'Mit Wasser abspritzen', 'Hochdruckreiniger bei Bedarf']
			},
			{
				icon: '🌿',
				title: 'Grünbelag',
				description: 'Im Außenbereich kann sich Grünbelag bilden.',
				tips: ['Regelmäßig entfernen', 'Grünbelagentferner verwenden', 'Feuchtigkeit reduzieren']
			},
			{
				icon: '🛡️',
				title: 'Versiegelung',
				description: 'Optional, aber hilfreich für leichtere Reinigung.',
				tips: ['PU-Versiegelung möglich', 'Erhöht Pflegeleichtigkeit', 'Alle paar Jahre erneuern']
			}
		],
		maintenanceSchedule: [
			{ frequency: 'Wöchentlich', icon: '📅', tasks: ['Kehren', 'Groben Schmutz entfernen'] },
			{ frequency: 'Monatlich', icon: '📅', tasks: ['Mit Wasser reinigen'] },
			{ frequency: 'Halbjährlich', icon: '📅', tasks: ['Intensivreinigung', 'Grünbelag entfernen'] },
			{ frequency: 'Bei Bedarf', icon: '📅', tasks: ['Versiegelung erneuern', 'Reparaturen'] }
		],
		stainRemovals: [
			{
				stain: 'Ölflecken',
				icon: '🛢️',
				steps: ['Katzenstreu aufstreuen', 'Einwirken', 'Absaugen', 'Entfetter verwenden'],
				warning: 'Öl kann in unversiegelten Steinteppich einziehen'
			},
			{
				stain: 'Grünbelag/Moos',
				icon: '🌿',
				steps: ['Grünbelagentferner auftragen', 'Einwirken lassen', 'Abspülen', 'Abbürsten'],
				warning: 'Keine Chlorreiniger - können Verfärbungen verursachen'
			}
		],
		materialSpecificCare: [
			{
				material: 'Marmorkies',
				icon: '⚪',
				tips: ['Empfindlicher gegen Säure', 'Kann sich verfärben', 'Versiegelung empfohlen']
			},
			{
				material: 'Quarzkies',
				icon: '💎',
				tips: ['Robuster', 'Säurebeständiger', 'Weniger Pflege nötig']
			}
		]
	}
};
