import type { FloorType } from '$lib/types/floor';

export const naturstein: FloorType = {
	id: 'naturstein',
	name: 'Naturstein',
	slug: 'naturstein',
	icon: '🪨',
	description: 'Naturstein ist der Inbegriff von Luxus und Beständigkeit. Ob edler Marmor, robuster Granit oder rustikaler Schiefer - jede Platte ist ein Unikat der Natur.',
	heroTitle: 'Naturstein - Ewige Schönheit',
	heroDescription: 'Millionen Jahre alt und immer noch zeitlos elegant. Naturstein ist das ultimative Statement für anspruchsvolle Räume.',
	quickFacts: [
		{ label: 'Lebensdauer', value: 'Ewig', desc: 'Jahrtausende Bestand' },
		{ label: 'Preis/m²', value: '50-500€', desc: 'Je nach Steinart' },
		{ label: 'Einzigartig', value: '100%', desc: 'Jede Platte ein Unikat' },
		{ label: 'Wertsteigernd', value: 'Ja', desc: 'Investition' }
	],
	materials: [
		{
			id: 'marmor',
			name: 'Marmor',
			icon: '🏛️',
			description: 'Der König unter den Natursteinen. Marmor steht für Luxus, Eleganz und zeitlose Schönheit.',
			pros: ['Unvergleichliche Eleganz', 'Einzigartige Maserung', 'Kühlend im Sommer', 'Wertsteigernd'],
			cons: ['Sehr empfindlich gegen Säure', 'Kratzer- und fleckenanfällig', 'Teuer', 'Pflegeintensiv'],
			priceRange: '€€€€',
			pricePerSqm: '80-300€',
			durability: 3,
			comfort: 2,
			maintenance: 2,
			bestFor: ['Lobby', 'Badezimmer', 'Empfang', 'Luxuswohnungen'],
			shopLinks: [
				{ name: 'Rossittis', url: 'https://www.rossittis.de' },
				{ name: 'Naturstein-Direkt', url: 'https://www.naturstein-direkt.de' }
			]
		},
		{
			id: 'granit',
			name: 'Granit',
			icon: '⚫',
			description: 'Extrem harter und widerstandsfähiger Naturstein. Granit ist praktisch unverwüstlich.',
			pros: ['Extrem hart', 'Säurebeständiger', 'Kratzfest', 'Vielfältige Farben'],
			cons: ['Kalt', 'Schwer', 'Teure Verlegung', 'Fugen können sich verfärben'],
			priceRange: '€€€',
			pricePerSqm: '60-150€',
			durability: 5,
			comfort: 2,
			maintenance: 4,
			bestFor: ['Küche', 'Flur', 'Außenbereich', 'Gewerbe'],
			shopLinks: [
				{ name: 'BAUHAUS', url: 'https://www.bauhaus.info/granit' },
				{ name: 'Natursteinwerk', url: 'https://www.natursteinwerk.com' }
			]
		},
		{
			id: 'schiefer',
			name: 'Schiefer',
			icon: '📐',
			description: 'Charaktervoller Naturstein mit spaltrauer Oberfläche. Rustikal und rutschfest.',
			pros: ['Rutschfest', 'Charaktervoll', 'Robust', 'Erschwinglich'],
			cons: ['Kann absplittern', 'Unebene Oberfläche', 'Farbabrieb möglich'],
			priceRange: '€€',
			pricePerSqm: '50-90€',
			durability: 4,
			comfort: 2,
			maintenance: 3,
			bestFor: ['Flur', 'Küche', 'Außenbereich'],
			shopLinks: [
				{ name: 'OBI', url: 'https://www.obi.de/schiefer' },
				{ name: 'Schiefergrube', url: 'https://www.schiefergrube.de' }
			]
		},
		{
			id: 'travertin',
			name: 'Travertin',
			icon: '🏺',
			description: 'Mediterraner Kalkstein mit charakteristischen Poren. Warm und einladend.',
			pros: ['Mediterrane Optik', 'Warme Ausstrahlung', 'Gute Wärmeleitung', 'Erschwinglicher'],
			cons: ['Säureempfindlich', 'Poren verschmutzen', 'Regelmäßige Imprägnierung nötig'],
			priceRange: '€€',
			pricePerSqm: '40-80€',
			durability: 3,
			comfort: 3,
			maintenance: 3,
			bestFor: ['Wohnzimmer', 'Bad', 'Terrasse'],
			shopLinks: [
				{ name: 'Jonastone', url: 'https://www.jonastone.de' },
				{ name: 'Travertin-Direkt', url: 'https://www.travertin-direkt.de' }
			]
		},
		{
			id: 'quarzit',
			name: 'Quarzit',
			icon: '💎',
			description: 'Einer der härtesten Natursteine überhaupt. Ideal für stark beanspruchte Bereiche.',
			pros: ['Extrem hart', 'Säurebeständig', 'Pflegeleicht', 'Edle Optik'],
			cons: ['Teuer', 'Schwere Bearbeitung', 'Begrenzte Farbauswahl'],
			priceRange: '€€€',
			pricePerSqm: '70-150€',
			durability: 5,
			comfort: 2,
			maintenance: 5,
			bestFor: ['Küche', 'Bad', 'Flur', 'Gewerbe'],
			shopLinks: [
				{ name: 'Naturstein-Online', url: 'https://www.naturstein-online.de' },
				{ name: 'Steinlese', url: 'https://www.steinlese.de' }
			]
		}
	],
	rooms: [
		{
			name: 'Badezimmer',
			icon: '🚿',
			description: 'Naturstein im Bad ist purer Luxus - aber mit Pflegeaufwand.',
			requirements: ['Wasserfest imprägniert', 'Rutschfest', 'Säurebeständig (Reiniger!)'],
			recommendedMaterials: ['Granit', 'Quarzit'],
			avoidMaterials: ['Marmor (säureempfindlich)', 'Unbehandelter Travertin'],
			thickness: '10-20mm',
			colorTips: 'Helle Steine für kleine Bäder, dunkle für Akzente',
			specialTips: ['Regelmäßig imprägnieren', 'Nur pH-neutrale Reiniger', 'Kalk sofort entfernen']
		},
		{
			name: 'Wohnzimmer',
			icon: '🛋️',
			description: 'Naturstein als Blickfang im Wohnbereich.',
			requirements: ['Fußbodenheizung geeignet', 'Optisch ansprechend', 'Polierbar'],
			recommendedMaterials: ['Marmor', 'Travertin', 'Quarzit'],
			avoidMaterials: [],
			thickness: '10-15mm',
			colorTips: 'Naturtöne für Wärme, helle Steine für Eleganz',
			specialTips: ['Teppiche schützen vor Abrieb', 'Fußbodenheizung langsam hochfahren']
		},
		{
			name: 'Küche',
			icon: '🍳',
			description: 'Granit und Quarzit halten den Küchenbelastungen stand.',
			requirements: ['Säurebeständig', 'Kratzfest', 'Pflegeleicht'],
			recommendedMaterials: ['Granit', 'Quarzit'],
			avoidMaterials: ['Marmor', 'Travertin'],
			thickness: '10-15mm',
			colorTips: 'Gesprenkelte Muster kaschieren Krümel',
			specialTips: ['Vor dem Verfugen imprägnieren', 'Zitronensaft sofort aufwischen']
		}
	],
	careGuide: {
		basics: [
			{
				icon: '🧹',
				title: 'Schonende Reinigung',
				description: 'Naturstein braucht sanfte Pflege.',
				tips: ['Nur pH-neutrale Reiniger', 'Keine Säuren (Essig, Zitrone)', 'Weiche Tücher verwenden']
			},
			{
				icon: '🛡️',
				title: 'Imprägnierung',
				description: 'Regelmäßige Imprägnierung schützt den Stein.',
				tips: ['Vor Erstnutzung imprägnieren', 'Jährlich erneuern', 'Qualitätsprodukte verwenden']
			},
			{
				icon: '⚠️',
				title: 'Flecken vermeiden',
				description: 'Vorbeugen ist einfacher als entfernen.',
				tips: ['Verschüttetes sofort aufnehmen', 'Keine Gläser ohne Untersetzer', 'Blumentöpfe mit Untersetzer']
			}
		],
		maintenanceSchedule: [
			{ frequency: 'Täglich', icon: '📅', tasks: ['Fegen', 'Flecken sofort aufnehmen'] },
			{ frequency: 'Wöchentlich', icon: '📅', tasks: ['Feucht wischen mit Steinseife'] },
			{ frequency: 'Jährlich', icon: '📅', tasks: ['Imprägnierung erneuern', 'Fugen prüfen'] },
			{ frequency: 'Bei Bedarf', icon: '📅', tasks: ['Polieren lassen', 'Kratzer ausschleifen'] }
		],
		stainRemovals: [
			{
				stain: 'Ölflecken',
				icon: '🛢️',
				steps: ['Löschpapier auflegen', 'Mit Bügeleisen erwärmen', 'Öl wird aufgesogen'],
				warning: 'Eingebrannte Flecken nur vom Profi entfernbar'
			},
			{
				stain: 'Säureflecken (Marmor)',
				icon: '🍋',
				steps: ['Fleck markieren', 'Vom Steinmetz schleifen lassen', 'Neu polieren'],
				warning: 'Säureschäden auf Marmor sind dauerhaft - nur Schleifen hilft'
			}
		],
		materialSpecificCare: [
			{
				material: 'Marmor',
				icon: '🏛️',
				tips: ['Nur Marmor-Spezialreiniger', 'Nie Essig oder Zitrone', 'Regelmäßig wachsen für Glanz']
			},
			{
				material: 'Granit',
				icon: '⚫',
				tips: ['Robuster als andere Steine', 'Trotzdem imprägnieren', 'Fleckenentfernung einfacher']
			},
			{
				material: 'Schiefer',
				icon: '📐',
				tips: ['Mit Schieferöl pflegen', 'Spaltraue Oberfläche reinigen', 'Lose Splitter entfernen']
			}
		]
	}
};
