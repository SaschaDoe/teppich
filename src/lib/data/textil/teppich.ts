import type { FloorType } from '$lib/types/floor';

export const teppich: FloorType = {
	id: 'teppich',
	name: 'Teppichboden',
	slug: 'teppich',
	icon: '🧵',
	description: 'Weich, warm und schalldämmend - der Klassiker für behagliche Wohnräume',
	heroTitle: 'Teppichboden Ratgeber',
	heroDescription: 'Ihr umfassender Guide für den perfekten Bodenbelag. Entdecken Sie Materialien, finden Sie die besten Händler und lernen Sie, wie Sie Ihren Teppich pflegen.',
	quickFacts: [
		{ label: 'Lebensdauer', value: '10-20 Jahre', desc: 'bei guter Pflege' },
		{ label: 'Schalldämmung', value: 'Bis zu 30 dB', desc: 'Trittschallreduzierung' },
		{ label: 'Wärmedämmung', value: '20-30%', desc: 'Energieersparnis möglich' },
		{ label: 'Materialvielfalt', value: '6+ Arten', desc: 'für jeden Bedarf' }
	],
	materials: [
		{
			name: 'Wolle',
			id: 'wolle',
			icon: '🐑',
			description: 'Das edelste Naturmaterial für Teppichböden. Wolle ist seit Jahrhunderten der Goldstandard für hochwertige Teppiche und bietet unübertroffenen Komfort.',
			pros: [
				'Natürlich und nachhaltig',
				'Hervorragende Wärmedämmung',
				'Feuchtigkeitsregulierend',
				'Natürlich schmutzabweisend (Lanolin)',
				'Schwer entflammbar',
				'Antistatisch',
				'Sehr langlebig (20+ Jahre)'
			],
			cons: [
				'Höchste Preisklasse',
				'Empfindlich gegen Motten',
				'Nicht für Feuchträume geeignet',
				'Kann bei Nässe filzen',
				'Verblasst bei direkter Sonneneinstrahlung'
			],
			priceRange: '€€€€',
			pricePerSqm: '40 - 120 €/m²',
			durability: 5,
			comfort: 5,
			maintenance: 3,
			bestFor: ['Wohnzimmer', 'Schlafzimmer', 'Repräsentative Räume'],
			shopLinks: [
				{ name: 'Kibek Wollteppiche', url: 'https://www.kibek.de/teppiche/material/wolle/' },
				{ name: 'BAUHAUS Teppichböden', url: 'https://www.bauhaus.info/teppichboeden/c/10000992' },
				{ name: 'tedox Teppichböden', url: 'https://www.tedox.de/teppichboden/' }
			]
		},
		{
			name: 'Polyamid (Nylon)',
			id: 'polyamid',
			icon: '🔬',
			description: 'Die widerstandsfähigste Kunstfaser für Teppichböden. Ideal für stark beanspruchte Bereiche mit hoher Belastung.',
			pros: [
				'Extrem strapazierfähig',
				'Hohe Elastizität - federt zurück',
				'Einfache Reinigung',
				'Farbecht und lichtbeständig',
				'Gutes Preis-Leistungs-Verhältnis',
				'Weiche Haptik möglich'
			],
			cons: [
				'Synthetisch (nicht nachhaltig)',
				'Kann statisch aufladen',
				'Weniger temperaturregulierende Eigenschaften',
				'Schmilzt bei hoher Hitze'
			],
			priceRange: '€€€',
			pricePerSqm: '20 - 50 €/m²',
			durability: 5,
			comfort: 4,
			maintenance: 5,
			bestFor: ['Flure', 'Kinderzimmer', 'Büros', 'Stark frequentierte Bereiche'],
			shopLinks: [
				{ name: 'BAUHAUS Teppichböden', url: 'https://www.bauhaus.info/teppichboeden/c/10000992' },
				{ name: 'tedox Teppichboden', url: 'https://www.tedox.de/teppichboden/' },
				{ name: 'OBI Teppichböden', url: 'https://www.obi.de/teppichboeden/c/1595' },
				{ name: 'Hornbach Teppichboden', url: 'https://www.hornbach.de/shop/Teppichboden/S1795/artikelliste.html' }
			]
		},
		{
			name: 'Polypropylen (PP)',
			id: 'polypropylen',
			icon: '💧',
			description: 'Der Allrounder unter den Kunstfasern. Besonders beliebt für Bereiche, wo Feuchtigkeit ein Thema ist.',
			pros: [
				'Sehr preisgünstig',
				'Wasserabweisend und schimmelresistent',
				'Allergikerfreundlich',
				'Leicht zu reinigen',
				'Farbecht',
				'Antistatisch'
			],
			cons: [
				'Weniger weich als andere Fasern',
				'Geringere Widerstandsfähigkeit',
				'Kann sich bei Belastung flachlegen',
				'Nicht so langlebig',
				'Weniger luxuriöses Gefühl'
			],
			priceRange: '€',
			pricePerSqm: '8 - 25 €/m²',
			durability: 3,
			comfort: 3,
			maintenance: 5,
			bestFor: ['Keller', 'Hobbyräume', 'Mietwohnungen', 'Gästezimmer'],
			shopLinks: [
				{ name: 'tedox Teppichboden', url: 'https://www.tedox.de/teppichboden/' },
				{ name: 'BAUHAUS Teppichböden', url: 'https://www.bauhaus.info/teppichboeden/c/10000992' },
				{ name: 'POCO Teppichboden', url: 'https://www.poco.de/teppichboden/' },
				{ name: 'Roller Teppichboden', url: 'https://www.roller.de/bodenbelaege/teppichboden/' }
			]
		},
		{
			name: 'Polyester',
			id: 'polyester',
			icon: '✨',
			description: 'Weich und luxuriös im Griff, dabei bezahlbar. Polyester bietet ein seidiges Gefühl zu moderaten Preisen.',
			pros: [
				'Sehr weich und angenehm',
				'Brillante Farben möglich',
				'Gute Fleckenresistenz',
				'Hypoallergen',
				'Feuchtigkeitsabweisend',
				'Günstiger als Wolle'
			],
			cons: [
				'Weniger elastisch - legt sich flach',
				'Nicht so langlebig wie Polyamid',
				'Kann ölige Flecken anziehen',
				'Weniger umweltfreundlich'
			],
			priceRange: '€€',
			pricePerSqm: '15 - 35 €/m²',
			durability: 3,
			comfort: 5,
			maintenance: 4,
			bestFor: ['Schlafzimmer', 'Wohnzimmer', 'Gering frequentierte Räume'],
			shopLinks: [
				{ name: 'Kibek Teppiche', url: 'https://www.kibek.de/teppiche/' },
				{ name: 'BAUHAUS Teppichböden', url: 'https://www.bauhaus.info/teppichboeden/c/10000992' },
				{ name: 'Amazon Hochflor', url: 'https://www.amazon.de/s?k=hochflor+teppich+polyester' }
			]
		},
		{
			name: 'Sisal / Naturfaser',
			id: 'sisal',
			icon: '🌿',
			description: 'Für Naturliebhaber die perfekte Wahl. Sisal und andere Naturfasern wie Jute oder Kokos bieten ein rustikales, natürliches Ambiente.',
			pros: [
				'100% natürlich und biologisch abbaubar',
				'Robuste, strukturierte Oberfläche',
				'Antistatisch',
				'Gute Luftqualität',
				'Einzigartiges Design',
				'Nachhaltig'
			],
			cons: [
				'Rau auf der Haut',
				'Empfindlich gegen Feuchtigkeit',
				'Schwierig zu reinigen',
				'Kann bei Nässe schimmeln',
				'Nicht für alle Räume geeignet',
				'Farbauswahl begrenzt'
			],
			priceRange: '€€',
			pricePerSqm: '20 - 45 €/m²',
			durability: 4,
			comfort: 2,
			maintenance: 2,
			bestFor: ['Arbeitszimmer', 'Eingangsbereich', 'Wintergärten'],
			shopLinks: [
				{ name: 'Kibek Sisalteppiche', url: 'https://www.kibek.de/teppiche/material/sisal/' },
				{ name: 'BAUHAUS Naturfaser', url: 'https://www.bauhaus.info/teppichboeden/c/10000992' },
				{ name: 'Amazon Sisalteppich', url: 'https://www.amazon.de/s?k=sisalteppich' }
			]
		},
		{
			name: 'Mischgewebe',
			id: 'mischgewebe',
			icon: '🔄',
			description: 'Das Beste aus mehreren Welten. Mischgewebe kombinieren die Vorteile verschiedener Fasern für ein optimales Ergebnis.',
			pros: [
				'Kombiniert Vorteile verschiedener Materialien',
				'Oft Wolle/Synthetik-Mix',
				'Besseres Preis-Leistungs-Verhältnis als reine Wolle',
				'Verbesserte Strapazierfähigkeit',
				'Vielseitig einsetzbar'
			],
			cons: [
				'Eigenschaften variieren je nach Mischverhältnis',
				'Pflegeanleitung genau beachten',
				'Qualität schwankt stark',
				'Nicht immer eindeutig deklariert'
			],
			priceRange: '€€-€€€',
			pricePerSqm: '25 - 60 €/m²',
			durability: 4,
			comfort: 4,
			maintenance: 4,
			bestFor: ['Alle Wohnräume', 'Familienhaushalte'],
			shopLinks: [
				{ name: 'Kibek Teppiche', url: 'https://www.kibek.de/teppiche/' },
				{ name: 'BAUHAUS Teppichböden', url: 'https://www.bauhaus.info/teppichboeden/c/10000992' },
				{ name: 'tedox Teppichboden', url: 'https://www.tedox.de/teppichboden/' },
				{ name: 'Hornbach Teppichboden', url: 'https://www.hornbach.de/shop/Teppichboden/S1795/artikelliste.html' }
			]
		}
	],
	rooms: [
		{
			name: 'Wohnzimmer',
			icon: '🛋️',
			description: 'Das Herzstück des Hauses verdient einen Teppich, der Komfort und Langlebigkeit vereint.',
			requirements: [
				'Mittlere bis hohe Strapazierfähigkeit',
				'Weicher, angenehmer Flor',
				'Gute Fleckenresistenz',
				'Repräsentatives Aussehen'
			],
			recommendedMaterials: ['Wolle', 'Polyamid', 'Wolle-Synthetik-Mix'],
			avoidMaterials: ['Sisal (zu rau)', 'Billiges Polypropylen'],
			thickness: 'Mittel bis hoch (10-15mm)',
			colorTips: 'Mittlere Töne sind praktisch - nicht zu hell (Flecken sichtbar) und nicht zu dunkel (Staub sichtbar). Beige, Grau, Taupe sind zeitlose Klassiker.',
			specialTips: [
				'Velours oder Saxony für luxuriöses Gefühl',
				'Bei Haustieren: Schlingenteppich vermeiden (Krallen)',
				'Unter schweren Möbeln: Filzgleiter verwenden'
			]
		},
		{
			name: 'Schlafzimmer',
			icon: '🛏️',
			description: 'Der Raum der Entspannung braucht einen besonders weichen und behaglichen Untergrund.',
			requirements: [
				'Maximaler Komfort',
				'Wärmedämmung',
				'Geräuschdämmung',
				'Allergikerfreundlich möglich'
			],
			recommendedMaterials: ['Wolle', 'Polyester', 'Hochflor-Polyamid'],
			avoidMaterials: ['Sisal', 'Kokos', 'Kurzflor-PP'],
			thickness: 'Hoch (15-40mm) für maximalen Komfort',
			colorTips: 'Beruhigende, warme Farben. Creme, Beige, sanfte Pastelltöne oder gedämpftes Blau fördern den Schlaf.',
			specialTips: [
				'Hochflor/Shaggy für Luxusgefühl',
				'Bei Allergien: waschbarer Teppich oder Kurzflor',
				'Beidseitig des Bettes Läufer oder Brücken als Alternative'
			]
		},
		{
			name: 'Kinderzimmer',
			icon: '🧸',
			description: 'Hier wird gespielt, getobt und gelernt. Der Teppich muss robust, pflegeleicht und sicher sein.',
			requirements: [
				'Höchste Strapazierfähigkeit',
				'Leicht zu reinigen',
				'Schadstoffgeprüft',
				'Rutschfest',
				'Weich für Stürze'
			],
			recommendedMaterials: ['Polyamid', 'Polypropylen (hochwertig)'],
			avoidMaterials: ['Wolle (Mottenrisiko, teuer)', 'Sisal (zu rau)', 'Hochflor (schwer zu reinigen)'],
			thickness: 'Mittel (8-12mm) - Kompromiss aus Komfort und Reinigung',
			colorTips: 'Bunte Farben und Muster sind willkommen! Kaschieren auch Flecken. Spielteppiche mit Straßen oder Motiven sind beliebt.',
			specialTips: [
				'Auf Öko-Tex Standard 100 achten',
				'Kurzflor ist pflegeleichter',
				'Schmutzabweisende Ausrüstung empfehlenswert',
				'Bei Babys: schadstofffreie Materialien sind Pflicht'
			]
		},
		{
			name: 'Flur / Eingangsbereich',
			icon: '🚪',
			description: 'Die meist beanspruchte Zone im Haus. Hier kommt der meiste Schmutz rein.',
			requirements: [
				'Maximale Strapazierfähigkeit',
				'Schmutzunempfindlich',
				'Pflegeleicht',
				'Rutschfest'
			],
			recommendedMaterials: ['Polyamid (hochwertig)', 'Sisal', 'Flachgewebe'],
			avoidMaterials: ['Hochflor', 'Helle Farben', 'Polyester'],
			thickness: 'Kurz bis mittel (5-10mm)',
			colorTips: 'Dunkle, gemusterte Töne kaschieren Schmutz am besten. Melierte Oberflächen sind ideal.',
			specialTips: [
				'Schmutzfangmatten im Eingang sind Pflicht',
				'Läufer statt vollflächigem Teppich erwägen',
				'Auf Trittsicherheit achten'
			]
		},
		{
			name: 'Arbeitszimmer / Büro',
			icon: '💼',
			description: 'Ein Raum für Konzentration braucht einen Teppich, der Rollstuhlrollen standhält.',
			requirements: [
				'Bürostuhlrollen-geeignet',
				'Antistatisch',
				'Schalldämmend',
				'Professionelles Erscheinungsbild'
			],
			recommendedMaterials: ['Polyamid (Kurzflor)', 'Sisal', 'Flachgewebe'],
			avoidMaterials: ['Hochflor', 'Langflor-Velours'],
			thickness: 'Kurz (4-8mm) für gute Rollbarkeit',
			colorTips: 'Dezente, professionelle Farben: Grau, Anthrazit, dunkles Blau.',
			specialTips: [
				'Bodenschutzmatte unter dem Stuhl erwägen',
				'Bei offenem Schlingengewebe: auf Rollentauglichkeit achten',
				'Antistatik-Ausrüstung für Elektronik wichtig'
			]
		}
	],
	careGuide: {
		basics: [
			{
				icon: '🧹',
				title: 'Regelmäßiges Saugen',
				description: 'Das A und O der Teppichpflege. Saugen Sie mindestens 1-2x pro Woche.',
				tips: [
					'Langsam und überlappend saugen',
					'In beide Richtungen für bessere Reinigung',
					'Bürstaufsatz bei Hochflor verwenden',
					'Saugkraft an Material anpassen'
				]
			},
			{
				icon: '🚫',
				title: 'Das sollten Sie vermeiden',
				description: 'Diese Fehler verkürzen die Lebensdauer.',
				tips: [
					'Zu nasses Reinigen (Schimmelgefahr)',
					'Aggressive Reinigungsmittel',
					'Reiben bei Flecken (nur tupfen!)',
					'Heiße Temperaturen bei Kunstfasern',
					'Bleichmittel',
					'Zu starkes Saugen bei Hochflor'
				]
			},
			{
				icon: '💡',
				title: 'Profi-Tipps',
				description: 'So bleibt Ihr Teppich lange schön.',
				tips: [
					'Schuhe ausziehen schont den Teppich',
					'Filzgleiter unter Möbelbeine',
					'Teppich regelmäßig drehen (Abnutzung)',
					'Fußmatten am Eingang reduzieren Schmutz',
					'UV-Schutzfolien verhindern Ausbleichen'
				]
			}
		],
		maintenanceSchedule: [
			{
				frequency: 'Täglich',
				tasks: ['Sichtbaren Schmutz aufsammeln', 'Stark frequentierte Bereiche saugen'],
				icon: '📅'
			},
			{
				frequency: 'Wöchentlich',
				tasks: ['Gründlich staubsaugen (alle Räume)', 'Unter Möbeln saugen', 'Flecken sofort behandeln'],
				icon: '📆'
			},
			{
				frequency: 'Monatlich',
				tasks: ['Tiefenreinigung mit Teppichpulver', 'Möbel verrücken und darunter saugen', 'Fransen und Kanten prüfen'],
				icon: '🗓️'
			},
			{
				frequency: 'Jährlich',
				tasks: ['Professionelle Grundreinigung erwägen', 'Florfasern aufbürsten', 'Imprägnierung erneuern'],
				icon: '📋'
			}
		],
		stainRemovals: [
			{
				stain: 'Rotwein',
				icon: '🍷',
				steps: [
					'Sofort mit Küchenpapier abtupfen (nicht reiben!)',
					'Salz großzügig aufstreuen und einwirken lassen',
					'Nach 15 Min. absaugen',
					'Mit Mineralwasser oder verdünntem Essig nachbehandeln',
					'Mit klarem Wasser ausspülen und trocknen lassen'
				],
				warning: 'Niemals heißes Wasser verwenden - das fixiert den Fleck!'
			},
			{
				stain: 'Kaffee',
				icon: '☕',
				steps: [
					'Überschüssige Flüssigkeit sofort aufnehmen',
					'Kaltes Wasser mit etwas Spülmittel mischen',
					'Von außen nach innen tupfen',
					'Mit klarem Wasser nachspülen',
					'Trocknen lassen'
				]
			},
			{
				stain: 'Fett/Öl',
				icon: '🫒',
				steps: [
					'Grobes Fett mit Löffel abheben',
					'Speisestärke oder Backpulver aufstreuen',
					'Mehrere Stunden einwirken lassen',
					'Absaugen',
					'Mit Gallseife oder Teppichschaum nachbehandeln'
				]
			},
			{
				stain: 'Tierurin',
				icon: '🐕',
				steps: [
					'Sofort mit Küchenpapier aufnehmen',
					'Mit Essigwasser (1:1) behandeln',
					'Einwirken lassen',
					'Mit Natron bestreuen gegen Geruch',
					'Nach dem Trocknen absaugen'
				],
				warning: 'Spezielle Enzymreiniger sind am effektivsten gegen Gerüche.'
			}
		],
		materialSpecificCare: [
			{
				material: 'Wolle',
				icon: '🐑',
				tips: [
					'Nur pH-neutrale Reiniger',
					'Nie zu nass reinigen',
					'Mottenschutz verwenden',
					'Direkte Sonne meiden'
				]
			},
			{
				material: 'Synthetik (PA/PP/PES)',
				icon: '🔬',
				tips: [
					'Robuster - mehr Methoden möglich',
					'Antistatikspray bei Bedarf',
					'Keine Hitze (Bügeleisen!)',
					'Verträgt feuchte Reinigung besser'
				]
			},
			{
				material: 'Naturfasern (Sisal/Jute)',
				icon: '🌿',
				tips: [
					'Nur trockene Methoden!',
					'Feuchtigkeit unbedingt vermeiden',
					'Regelmäßig kehren',
					'Bei Flecken: sofort trocknen'
				]
			}
		]
	}
};
