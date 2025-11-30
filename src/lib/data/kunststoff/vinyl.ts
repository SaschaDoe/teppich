import type { FloorType } from '$lib/types/floor';

export const vinyl: FloorType = {
	id: 'vinyl',
	name: 'Vinyl / Designboden',
	slug: 'vinyl',
	icon: '✨',
	description: 'Wasserfest, robust und in unzähligen Designs - der moderne Alleskönner',
	heroTitle: 'Vinyl & Designboden Ratgeber',
	heroDescription: 'Ihr umfassender Guide für Vinylböden. Entdecken Sie LVT, SPC und Klick-Vinyl für jeden Raum - auch fürs Bad!',
	quickFacts: [
		{ label: 'Wasserfest', value: '100%', desc: 'auch fürs Bad geeignet' },
		{ label: 'Lebensdauer', value: '15-30 Jahre', desc: 'je nach Qualität' },
		{ label: 'Fußwärme', value: 'Hoch', desc: 'angenehm barfuß' },
		{ label: 'Designs', value: '500+', desc: 'Holz, Stein, Beton & mehr' }
	],
	materials: [
		{
			name: 'Klick-Vinyl (LVT)',
			id: 'klick-vinyl',
			icon: '🔗',
			description: 'Luxury Vinyl Tiles mit Klicksystem - einfache schwimmende Verlegung wie bei Laminat. Die beliebteste Variante für DIY.',
			pros: [
				'Einfache DIY-Verlegung',
				'100% wasserfest',
				'Fußwarm und leise',
				'Große Designauswahl',
				'Gute Trittschalldämmung',
				'Austausch einzelner Dielen möglich'
			],
			cons: [
				'Höhenaufbau durch Klicksystem',
				'Teurer als Klebe-Vinyl',
				'Nicht für alle Untergründe'
			],
			priceRange: '€€',
			pricePerSqm: '20 - 50 €/m²',
			durability: 4,
			comfort: 5,
			maintenance: 5,
			bestFor: ['Wohnzimmer', 'Schlafzimmer', 'Küche', 'Flur'],
			shopLinks: [
				{ name: 'BAUHAUS Klick-Vinyl', url: 'https://www.bauhaus.info/designboeden/c/10001003' },
				{ name: 'OBI Vinylboden', url: 'https://www.obi.de/vinylboden/c/1590' },
				{ name: 'Hornbach Vinyl', url: 'https://www.hornbach.de/shop/Vinylboden/S1798/artikelliste.html' },
				{ name: 'casando Vinyl', url: 'https://www.casando.de/vinylboden/' }
			]
		},
		{
			name: 'SPC-Vinyl (Rigid Core)',
			id: 'spc',
			icon: '💪',
			description: 'Stone Plastic Composite - extrem formstabil mit Steinmehl-Kern. Die Premium-Variante für höchste Ansprüche.',
			pros: [
				'Extrem formstabil',
				'Keine Ausdehnung bei Wärme',
				'Ideal für Fußbodenheizung',
				'100% wasserfest',
				'Sehr langlebig',
				'Auch auf unebenen Böden verlegbar'
			],
			cons: [
				'Höherer Preis',
				'Härter/weniger elastisch',
				'Höheres Gewicht'
			],
			priceRange: '€€€',
			pricePerSqm: '30 - 70 €/m²',
			durability: 5,
			comfort: 4,
			maintenance: 5,
			bestFor: ['Bad', 'Küche', 'Keller', 'Gewerbe'],
			shopLinks: [
				{ name: 'BAUHAUS SPC', url: 'https://www.bauhaus.info/designboeden/c/10001003' },
				{ name: 'casando SPC', url: 'https://www.casando.de/vinylboden/spc/' }
			]
		},
		{
			name: 'Klebe-Vinyl',
			id: 'klebe-vinyl',
			icon: '📎',
			description: 'Dünn und direkt auf den Untergrund geklebt. Ideal für niedrige Aufbauhöhen und professionelle Verlegung.',
			pros: [
				'Sehr dünner Aufbau (2-3mm)',
				'Ideal bei niedrigen Türen',
				'Großflächig verlegbar',
				'Günstiger als Klick-Vinyl',
				'Professionelle Optik'
			],
			cons: [
				'Professionelle Verlegung empfohlen',
				'Untergrund muss perfekt sein',
				'Austausch einzelner Teile schwierig',
				'Kleberkosten zusätzlich'
			],
			priceRange: '€-€€',
			pricePerSqm: '12 - 35 €/m²',
			durability: 4,
			comfort: 4,
			maintenance: 5,
			bestFor: ['Gewerbe', 'Renovierung', 'Niedrige Räume'],
			shopLinks: [
				{ name: 'BAUHAUS Klebe-Vinyl', url: 'https://www.bauhaus.info/designboeden/c/10001003' },
				{ name: 'tedox Vinyl', url: 'https://www.tedox.de/vinylboden/' }
			]
		},
		{
			name: 'Loose-Lay Vinyl',
			id: 'loose-lay',
			icon: '🧩',
			description: 'Lose verlegtes Vinyl mit rutschfester Unterseite. Einfachste Verlegung, aber begrenzte Einsatzbereiche.',
			pros: [
				'Schnellste Verlegung',
				'Kein Kleben nötig',
				'Sofort begehbar',
				'Einfach austauschbar',
				'Ideal für Mietwohnungen'
			],
			cons: [
				'Begrenzte Raumgrößen',
				'Kann sich verschieben',
				'Nicht für Bürostühle',
				'Weniger Auswahl'
			],
			priceRange: '€€',
			pricePerSqm: '25 - 45 €/m²',
			durability: 3,
			comfort: 4,
			maintenance: 5,
			bestFor: ['Mietwohnungen', 'Messestände', 'Temporäre Nutzung'],
			shopLinks: [
				{ name: 'casando Loose-Lay', url: 'https://www.casando.de/vinylboden/' }
			]
		},
		{
			name: 'WPC-Vinyl',
			id: 'wpc',
			icon: '🌳',
			description: 'Wood Plastic Composite - Holz-Kunststoff-Gemisch. Weicher als SPC, aber ähnlich stabil.',
			pros: [
				'Weicher Gehkomfort',
				'Gute Trittschalldämmung',
				'Formstabil',
				'Wasserfest',
				'Natürlicheres Gefühl als SPC'
			],
			cons: [
				'Reagiert leicht auf Wärme',
				'Schwerer als LVT',
				'Begrenzte Auswahl'
			],
			priceRange: '€€-€€€',
			pricePerSqm: '28 - 55 €/m²',
			durability: 4,
			comfort: 5,
			maintenance: 5,
			bestFor: ['Wohnräume', 'Schlafzimmer'],
			shopLinks: [
				{ name: 'BAUHAUS WPC', url: 'https://www.bauhaus.info/designboeden/c/10001003' }
			]
		}
	],
	rooms: [
		{
			name: 'Badezimmer',
			icon: '🚿',
			description: 'Vinyl ist der ideale Bodenbelag fürs Bad - 100% wasserfest und rutschsicher.',
			requirements: [
				'100% wasserfest (SPC empfohlen)',
				'Rutschhemmend (R10 oder höher)',
				'Leicht zu reinigen',
				'Schimmelresistent'
			],
			recommendedMaterials: ['SPC-Vinyl', 'Klebe-Vinyl'],
			avoidMaterials: ['Loose-Lay', 'Billiges LVT'],
			thickness: 'SPC 4-6mm, geklebt 2-3mm',
			colorTips: 'Stein- oder Fliesenoptik passt perfekt. Helle Töne lassen kleine Bäder größer wirken.',
			specialTips: [
				'SPC-Vinyl ist die sicherste Wahl',
				'Auf Rutschklasse R10+ achten',
				'Silikonfugen an Übergängen',
				'Regelmäßig lüften'
			]
		},
		{
			name: 'Küche',
			icon: '🍳',
			description: 'Wasserfest, pflegeleicht und angenehm unter den Füßen - Vinyl ist perfekt für die Küche.',
			requirements: [
				'Wasserfest',
				'Fleckenresistent',
				'Pflegeleicht',
				'Robust'
			],
			recommendedMaterials: ['SPC-Vinyl', 'Klick-Vinyl'],
			avoidMaterials: ['Loose-Lay'],
			thickness: 'Klick: 5-8mm, Geklebt: 2-3mm',
			colorTips: 'Holzoptik oder Steinoptik - je nach Stil. Strukturierte Oberflächen verstecken Krümel.',
			specialTips: [
				'Verschüttetes kann liegen bleiben (im Gegensatz zu Laminat)',
				'Vor Herd und Spüle trotzdem Matten empfohlen',
				'Fettspritzer einfach wegwischen'
			]
		},
		{
			name: 'Wohnzimmer',
			icon: '🛋️',
			description: 'Vinyl bietet Holzoptik zum kleinen Preis mit besserem Gehkomfort und einfacherer Pflege.',
			requirements: [
				'Ansprechende Optik',
				'Gute Trittschalldämmung',
				'Langlebig',
				'Pflegeleicht'
			],
			recommendedMaterials: ['Klick-Vinyl', 'WPC-Vinyl'],
			avoidMaterials: ['Billiges Klebe-Vinyl'],
			thickness: '5-8mm Klick-Vinyl',
			colorTips: 'Eiche-Dekore sind zeitlos. Fischgrätmuster für eleganten Look. Graue Töne für modernes Ambiente.',
			specialTips: [
				'Hochwertige Trittschalldämmung wählen',
				'Auf realistische Holzstruktur achten',
				'Authentische Synchronprägung bevorzugen'
			]
		},
		{
			name: 'Keller',
			icon: '🏠',
			description: 'Feuchtigkeitsunempfindlich und robust - Vinyl ist ideal für Kellerräume.',
			requirements: [
				'100% wasserfest',
				'Schimmelresistent',
				'Unempfindlich gegen Feuchtigkeit von unten'
			],
			recommendedMaterials: ['SPC-Vinyl'],
			avoidMaterials: ['Klick-Vinyl ohne Dampfsperre', 'Lose-Lay'],
			thickness: 'SPC 5-6mm',
			colorTips: 'Helle Dekore hellen dunkle Keller auf.',
			specialTips: [
				'Dampfsperre unter den Boden legen',
				'SPC ist formstabiler bei Temperaturwechseln',
				'Vor Verlegung Feuchtigkeit messen'
			]
		}
	],
	careGuide: {
		basics: [
			{
				icon: '🧹',
				title: 'Regelmäßige Reinigung',
				description: 'Vinyl ist extrem pflegeleicht.',
				tips: [
					'Regelmäßig kehren oder saugen',
					'Feucht wischen erlaubt!',
					'Spezielle Vinylreiniger optimal',
					'Mikrofasertuch funktioniert gut',
					'Keine Scheuermittel nötig'
				]
			},
			{
				icon: '🚫',
				title: 'Das sollten Sie vermeiden',
				description: 'Auch Vinyl hat seine Grenzen.',
				tips: [
					'Keine aggressiven Reiniger',
					'Kein Aceton oder Lösungsmittel',
					'Keine Scheuermilch',
					'Keine Gummi- oder Latexmatten (Verfärbungen!)',
					'Keine Dampfreiniger auf Klebe-Vinyl'
				]
			},
			{
				icon: '💡',
				title: 'Profi-Tipps',
				description: 'So bleibt Ihr Vinyl perfekt.',
				tips: [
					'Filzgleiter unter Möbel',
					'Fußmatten an Eingängen',
					'Pflanzen auf Untersetzer',
					'Bei SPC: Dampfreiniger möglich',
					'Kratzer mit Reparaturset ausbessern'
				]
			}
		],
		maintenanceSchedule: [
			{
				frequency: 'Täglich',
				tasks: ['Bei Bedarf kehren', 'Flecken wegwischen'],
				icon: '📅'
			},
			{
				frequency: 'Wöchentlich',
				tasks: ['Feucht wischen', 'Staubsaugen'],
				icon: '📆'
			},
			{
				frequency: 'Monatlich',
				tasks: ['Intensivreinigung mit Vinylreiniger'],
				icon: '🗓️'
			},
			{
				frequency: 'Jährlich',
				tasks: ['Fugen kontrollieren', 'Beschädigungen prüfen'],
				icon: '📋'
			}
		],
		stainRemovals: [
			{
				stain: 'Allgemeine Flecken',
				icon: '🧴',
				steps: [
					'Mit warmem Wasser und Spülmittel',
					'Kurz einwirken lassen',
					'Mit klarem Wasser nachwischen',
					'Trocknen lassen'
				]
			},
			{
				stain: 'Filzstift / Kugelschreiber',
				icon: '🖊️',
				steps: [
					'Alkohol (Spiritus) verwenden',
					'Mit Tuch vorsichtig reiben',
					'Nachwischen mit Wasser'
				],
				warning: 'Vorher an unsichtbarer Stelle testen!'
			},
			{
				stain: 'Gummi-Abdrücke',
				icon: '👟',
				steps: [
					'Mit Radiergummi wegrubbeln',
					'Alternativ: WD-40 oder Öl',
					'Gründlich mit Wasser reinigen'
				]
			},
			{
				stain: 'Nagellack',
				icon: '💅',
				steps: [
					'Vorsichtig mit acetonfreiem Nagellackentferner',
					'Wenig Produkt verwenden',
					'Schnell nachwischen',
					'Mit Wasser reinigen'
				],
				warning: 'Kein Aceton verwenden - greift Vinyl an!'
			}
		],
		materialSpecificCare: [
			{
				material: 'Klick-Vinyl / LVT',
				icon: '🔗',
				tips: [
					'Nicht zu nass wischen',
					'Wasser kann in Klick-Fugen eindringen',
					'Spezielle Vinylpflege verwenden'
				]
			},
			{
				material: 'SPC-Vinyl',
				icon: '💪',
				tips: [
					'Robuster gegen Wasser',
					'Dampfreiniger bei Bedarf möglich',
					'Trotzdem keine Pfützen stehen lassen'
				]
			},
			{
				material: 'Klebe-Vinyl',
				icon: '📎',
				tips: [
					'Empfindlicher als Klick-Varianten',
					'Kein Dampfreiniger',
					'Regelmäßig pflegend wischen'
				]
			}
		]
	}
};
