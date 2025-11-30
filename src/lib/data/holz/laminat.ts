import type { FloorType } from '$lib/types/floor';

export const laminat: FloorType = {
	id: 'laminat',
	name: 'Laminat',
	slug: 'laminat',
	icon: '📋',
	description: 'Holzoptik zum kleinen Preis - robust, pflegeleicht und vielseitig',
	heroTitle: 'Laminat Ratgeber',
	heroDescription: 'Ihr umfassender Guide für Laminatböden. Entdecken Sie Nutzungsklassen, Dekore und finden Sie den perfekten Laminatboden für Ihr Zuhause.',
	quickFacts: [
		{ label: 'Lebensdauer', value: '10-25 Jahre', desc: 'je nach Nutzungsklasse' },
		{ label: 'Preisersparnis', value: 'bis 70%', desc: 'günstiger als Echtholz' },
		{ label: 'Verlegung', value: 'DIY-freundlich', desc: 'Klick-System' },
		{ label: 'Dekore', value: '100+', desc: 'von Eiche bis Beton' }
	],
	materials: [
		{
			name: 'Nutzungsklasse 21-23 (Wohnbereich)',
			id: 'nk21-23',
			icon: '🏠',
			description: 'Laminat für den privaten Wohnbereich. NK21 für geringe, NK23 für starke Beanspruchung.',
			pros: [
				'Günstigster Einstieg',
				'Ausreichend für normale Wohnnutzung',
				'Große Dekorauswahl',
				'Einfache DIY-Verlegung',
				'Für alle Wohnräume geeignet'
			],
			cons: [
				'Nicht für gewerbliche Nutzung',
				'Begrenzte Lebensdauer bei hoher Beanspruchung',
				'Oberfläche weniger kratzfest',
				'Nicht für Feuchträume'
			],
			priceRange: '€',
			pricePerSqm: '6 - 20 €/m²',
			durability: 3,
			comfort: 3,
			maintenance: 5,
			bestFor: ['Schlafzimmer', 'Gästezimmer', 'Kinderzimmer (NK23)'],
			shopLinks: [
				{ name: 'BAUHAUS Laminat', url: 'https://www.bauhaus.info/laminat/c/10000993' },
				{ name: 'OBI Laminat', url: 'https://www.obi.de/laminat/c/1588' },
				{ name: 'Hornbach Laminat', url: 'https://www.hornbach.de/shop/Laminat/S1797/artikelliste.html' },
				{ name: 'POCO Laminat', url: 'https://www.poco.de/laminat/' }
			]
		},
		{
			name: 'Nutzungsklasse 31-33 (Gewerbe)',
			id: 'nk31-33',
			icon: '🏢',
			description: 'Robustes Laminat für gewerbliche Nutzung oder stark beanspruchte Wohnbereiche. NK33 hält auch Bürostühlen stand.',
			pros: [
				'Extrem strapazierfähig',
				'Lange Lebensdauer',
				'Für Bürostühle geeignet',
				'Auch für Gewerbe zugelassen',
				'Dickere Nutzschicht',
				'Bessere Trittschalldämmung'
			],
			cons: [
				'Teurer als Wohnbereich-Laminat',
				'Overkill für wenig genutzte Räume',
				'Höheres Gewicht'
			],
			priceRange: '€€',
			pricePerSqm: '15 - 40 €/m²',
			durability: 5,
			comfort: 4,
			maintenance: 5,
			bestFor: ['Flur', 'Wohnzimmer', 'Büro', 'Home-Office'],
			shopLinks: [
				{ name: 'BAUHAUS NK33', url: 'https://www.bauhaus.info/laminat/c/10000993' },
				{ name: 'Hornbach Gewerbe', url: 'https://www.hornbach.de/shop/Laminat/S1797/artikelliste.html' },
				{ name: 'casando NK33', url: 'https://www.casando.de/laminat/' }
			]
		},
		{
			name: 'Feuchtraum-Laminat',
			id: 'feuchtraum',
			icon: '💧',
			description: 'Speziell behandeltes Laminat mit Quellschutz für Küche und Hauswirtschaftsraum. Nicht für Bäder mit Dusche!',
			pros: [
				'Wasserabweisende Oberfläche',
				'Imprägnierte Kanten',
				'Für Küche geeignet',
				'Aufquellen verzögert',
				'Pflegeleicht'
			],
			cons: [
				'NICHT für echte Nassbereiche (Dusche/Wanne)',
				'Teurer als Standard-Laminat',
				'Begrenzte Dekorauswahl',
				'Stehendes Wasser trotzdem vermeiden'
			],
			priceRange: '€€',
			pricePerSqm: '20 - 45 €/m²',
			durability: 4,
			comfort: 3,
			maintenance: 5,
			bestFor: ['Küche', 'Hauswirtschaftsraum', 'Flur mit Eingang'],
			shopLinks: [
				{ name: 'BAUHAUS Feuchtraum', url: 'https://www.bauhaus.info/laminat/c/10000993?q=feuchtraum' },
				{ name: 'OBI Feuchtraum', url: 'https://www.obi.de/laminat/c/1588' }
			]
		},
		{
			name: 'Vinyl-Laminat (SPC/LVT)',
			id: 'vinyl-laminat',
			icon: '✨',
			description: 'Hybrid aus Laminat und Vinyl - 100% wasserfest mit authentischer Holzoptik. Auch Designboden genannt.',
			pros: [
				'100% wasserfest',
				'Für alle Räume inkl. Bad geeignet',
				'Sehr leise (kein Klacken)',
				'Fußwarm',
				'Extrem robust',
				'Klick-Verlegung wie Laminat'
			],
			cons: [
				'Höherer Preis',
				'Kein echtes Holz (Haptik)',
				'Nicht so natürlich wie Echtholz',
				'Umweltbilanz (PVC)'
			],
			priceRange: '€€-€€€',
			pricePerSqm: '25 - 60 €/m²',
			durability: 5,
			comfort: 5,
			maintenance: 5,
			bestFor: ['Bad', 'Küche', 'Keller', 'Gesamte Wohnung'],
			shopLinks: [
				{ name: 'BAUHAUS Designboden', url: 'https://www.bauhaus.info/designboeden/c/10001003' },
				{ name: 'OBI Vinylboden', url: 'https://www.obi.de/vinylboden/c/1590' },
				{ name: 'Hornbach Vinyl', url: 'https://www.hornbach.de/shop/Vinylboden/S1798/artikelliste.html' }
			]
		},
		{
			name: 'Laminat mit integrierter Trittschalldämmung',
			id: 'trittschall',
			icon: '🔇',
			description: 'Laminat mit werksseitig verklebter Dämmunterlage für bessere Akustik und einfachere Verlegung.',
			pros: [
				'Schnellere Verlegung',
				'Bessere Trittschalldämmung',
				'Keine separate Unterlage nötig',
				'Höherer Gehkomfort',
				'Ebene Verlegung garantiert'
			],
			cons: [
				'Höherer Preis pro m²',
				'Nicht kombinierbar mit Spezialunterlagen',
				'Begrenzte Auswahl'
			],
			priceRange: '€€',
			pricePerSqm: '18 - 40 €/m²',
			durability: 4,
			comfort: 4,
			maintenance: 5,
			bestFor: ['Mehrfamilienhäuser', 'Mietwohnungen', 'Obere Stockwerke'],
			shopLinks: [
				{ name: 'BAUHAUS Laminat', url: 'https://www.bauhaus.info/laminat/c/10000993' },
				{ name: 'casando Laminat', url: 'https://www.casando.de/laminat/' }
			]
		}
	],
	rooms: [
		{
			name: 'Wohnzimmer',
			icon: '🛋️',
			description: 'Im Wohnzimmer sollte Laminat robust und ansprechend sein - mindestens Nutzungsklasse 23 oder 31.',
			requirements: [
				'Nutzungsklasse 23 oder 31+',
				'Ansprechende Holzoptik',
				'Gute Trittschalldämmung',
				'Kratzfest'
			],
			recommendedMaterials: ['NK31-33', 'Trittschall-Laminat'],
			avoidMaterials: ['NK21', 'Günstiges Baumarkt-Laminat'],
			thickness: 'Mindestens 8mm, besser 10-12mm',
			colorTips: 'Eiche-Dekore sind zeitlos. Graue Töne wirken modern. Dunkle Böden zeigen Staub.',
			specialTips: [
				'Trittschalldämmung nicht vergessen',
				'Randdämmstreifen verwenden',
				'Dehnungsfuge an Wänden einhalten (8-10mm)',
				'Schwimmend verlegen, nicht kleben'
			]
		},
		{
			name: 'Kinderzimmer',
			icon: '🧸',
			description: 'Robust, pflegeleicht und erschwinglich - Laminat ist ideal für Kinderzimmer.',
			requirements: [
				'Mindestens NK23',
				'Kratzfest',
				'Leicht zu reinigen',
				'Schadstoffarm (Blauer Engel)'
			],
			recommendedMaterials: ['NK31', 'Vinyl-Laminat'],
			avoidMaterials: ['NK21', 'Laminat ohne Umweltsiegel'],
			thickness: 'Mindestens 8mm',
			colorTips: 'Helle, freundliche Dekore. Bunte Farben möglich. Vermeiden Sie zu dunkle Böden.',
			specialTips: [
				'Auf Blauer Engel oder ähnliche Siegel achten',
				'Vinyl-Laminat für Spielecken mit Wasser',
				'Spielteppiche für laute Bereiche',
				'Kratzfeste Oberfläche wählen'
			]
		},
		{
			name: 'Flur',
			icon: '🚪',
			description: 'Der Flur braucht strapazierfähiges Laminat - hier wird am meisten gelaufen.',
			requirements: [
				'NK32 oder 33',
				'Kratzfest',
				'Schmutzunempfindlich',
				'Pflegeleicht'
			],
			recommendedMaterials: ['NK33', 'Feuchtraum-Laminat'],
			avoidMaterials: ['NK21-23', 'Helle, glatte Oberflächen'],
			thickness: '10-12mm für beste Stabilität',
			colorTips: 'Mittlere bis dunkle Dekore. Strukturierte Oberflächen verstecken Kratzer.',
			specialTips: [
				'Fußmatte im Eingangsbereich',
				'Feuchtraum-Laminat bei direktem Hauszugang',
				'Starke Trittschalldämmung für Mehrfamilienhäuser'
			]
		},
		{
			name: 'Küche',
			icon: '🍳',
			description: 'In der Küche ist Feuchtraumlaminat Pflicht - oder besser: Vinyl-Laminat.',
			requirements: [
				'Feuchtigkeitsbeständig',
				'Leicht zu reinigen',
				'Robust gegen Flecken',
				'NK32+'
			],
			recommendedMaterials: ['Vinyl-Laminat', 'Feuchtraum-Laminat'],
			avoidMaterials: ['Standard-Laminat', 'NK21-23'],
			thickness: 'Mindestens 8mm',
			colorTips: 'Praktische Dekore, die Krümel und Flecken kaschieren.',
			specialTips: [
				'Verschüttetes SOFORT aufwischen',
				'Keine Fugen vor Wasseranschlüssen',
				'Matte vor Spüle und Herd',
				'Vinyl-Laminat ist die sicherere Wahl'
			]
		},
		{
			name: 'Arbeitszimmer / Home-Office',
			icon: '💼',
			description: 'Für Bürostühle braucht Laminat die höchste Nutzungsklasse.',
			requirements: [
				'NK33 (bürostuhlgeeignet)',
				'Kratzfest',
				'Antistatisch',
				'Langlebig'
			],
			recommendedMaterials: ['NK33', 'Vinyl-Laminat'],
			avoidMaterials: ['Alle Nutzungsklassen unter NK33'],
			thickness: '10-12mm',
			colorTips: 'Dezente, professionelle Dekore. Grau und Eiche sind beliebt.',
			specialTips: [
				'Unbedingt NK33 für Bürostühle!',
				'Bodenschutzmatte unter dem Stuhl erwägen',
				'Antistatisches Laminat für Elektronik'
			]
		}
	],
	careGuide: {
		basics: [
			{
				icon: '🧹',
				title: 'Regelmäßige Reinigung',
				description: 'Laminat ist pflegeleicht, aber regelmäßiges Reinigen verlängert die Lebensdauer.',
				tips: [
					'Täglich oder alle 2 Tage kehren oder saugen',
					'Wöchentlich nebelfeucht wischen',
					'Nur nebelfeuchtes Wischtuch, nie nass!',
					'Spezielle Laminatreiniger verwenden',
					'Von Fenstern weg wischen für streifenfreies Ergebnis'
				]
			},
			{
				icon: '🚫',
				title: 'Das sollten Sie vermeiden',
				description: 'Laminat verzeiht keine Fehler bei der Reinigung.',
				tips: [
					'Niemals nass wischen',
					'Kein stehendes Wasser',
					'Keine Scheuermittel',
					'Keine Dampfreiniger',
					'Keine Wachs- oder Poliermittel',
					'Kein Bohnerwachs'
				]
			},
			{
				icon: '💡',
				title: 'Profi-Tipps',
				description: 'So bleibt Ihr Laminat lange wie neu.',
				tips: [
					'Filzgleiter unter alle Möbel',
					'Fußmatten an Eingängen',
					'Pflanzenuntersetzer verwenden',
					'Raumklima konstant halten',
					'Kleine Kratzer mit Reparaturset ausbessern',
					'Bei Bürostühlen: Unterlage oder NK33'
				]
			}
		],
		maintenanceSchedule: [
			{
				frequency: 'Täglich',
				tasks: ['Grobe Verschmutzungen aufkehren', 'Flecken sofort entfernen'],
				icon: '📅'
			},
			{
				frequency: 'Wöchentlich',
				tasks: ['Staubsaugen', 'Nebelfeucht wischen'],
				icon: '📆'
			},
			{
				frequency: 'Monatlich',
				tasks: ['Intensivreinigung mit Laminatreiniger', 'Ecken und Kanten kontrollieren'],
				icon: '🗓️'
			},
			{
				frequency: 'Jährlich',
				tasks: ['Fugen und Übergänge prüfen', 'Beschädigungen ausbessern', 'Sockelleisten reinigen'],
				icon: '📋'
			}
		],
		stainRemovals: [
			{
				stain: 'Wasserflecken',
				icon: '💧',
				steps: [
					'Sofort trockenwischen',
					'Bei eingetrockneten Flecken: Laminatreiniger',
					'Nebelfeucht nachwischen',
					'Trocknen lassen'
				],
				warning: 'Laminat quillt bei stehendem Wasser - sofort handeln!'
			},
			{
				stain: 'Absatzspuren',
				icon: '👠',
				steps: [
					'Mit Radiergummi wegrubbeln',
					'Alternativ: Tennisball',
					'Mit feuchtem Tuch nachreiben'
				]
			},
			{
				stain: 'Fett / Öl',
				icon: '🫒',
				steps: [
					'Überschuss mit Küchenpapier aufnehmen',
					'Mit Spülmittel-Wasser behandeln',
					'Sofort trockenwischen',
					'Mit Laminatreiniger nachbehandeln'
				]
			},
			{
				stain: 'Filzstift / Kugelschreiber',
				icon: '🖊️',
				steps: [
					'Mit Alkohol (Spiritus) behandeln',
					'Vorsichtig reiben',
					'Nachwischen mit feuchtem Tuch',
					'Vorher an unsichtbarer Stelle testen!'
				]
			}
		],
		materialSpecificCare: [
			{
				material: 'Standard-Laminat',
				icon: '📋',
				tips: [
					'Nebelfeucht wischen reicht',
					'Spezielle Laminatreiniger sind optimal',
					'Niemals Wachs oder Öl verwenden',
					'Kratzer mit Wachsstift kaschieren'
				]
			},
			{
				material: 'Feuchtraum-Laminat',
				icon: '💧',
				tips: [
					'Trotzdem kein stehendes Wasser',
					'Kanten regelmäßig kontrollieren',
					'Silikonfugen an Übergängen prüfen'
				]
			},
			{
				material: 'Vinyl-Laminat',
				icon: '✨',
				tips: [
					'Kann feuchter gewischt werden',
					'Spezielle Vinylpflege verwenden',
					'Keine aggressiven Reiniger',
					'Gummimatten können Verfärbungen verursachen'
				]
			}
		]
	}
};
