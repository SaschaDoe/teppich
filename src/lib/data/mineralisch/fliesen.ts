import type { FloorType } from '$lib/types/floor';

export const fliesen: FloorType = {
	id: 'fliesen',
	name: 'Keramikfliesen',
	slug: 'fliesen',
	icon: '🔲',
	description: 'Der Klassiker für Bad und Küche - hygienisch, langlebig und pflegeleicht',
	heroTitle: 'Fliesen Ratgeber',
	heroDescription: 'Ihr umfassender Guide für Keramikfliesen. Entdecken Sie Formate, Materialien und finden Sie die perfekten Fliesen für Ihr Zuhause.',
	quickFacts: [
		{ label: 'Lebensdauer', value: '50+ Jahre', desc: 'extrem langlebig' },
		{ label: 'Wasserfest', value: '100%', desc: 'perfekt für Nassräume' },
		{ label: 'Formate', value: '10x10 bis 120x260cm', desc: 'für jeden Geschmack' },
		{ label: 'Pflege', value: 'Minimal', desc: 'sehr hygienisch' }
	],
	materials: [
		{
			name: 'Steingutfliesen',
			id: 'steingut',
			icon: '🎨',
			description: 'Die günstigste Fliesenvariante - hauptsächlich für Wände geeignet. Poröser als Steinzeug.',
			pros: [
				'Günstigster Preis',
				'Große Farbauswahl',
				'Leicht zu schneiden',
				'Ideal für Wandflächen'
			],
			cons: [
				'Nicht frostsicher',
				'Poröser - Flecken möglich',
				'Nur bedingt für Böden',
				'Weniger robust'
			],
			priceRange: '€',
			pricePerSqm: '10 - 30 €/m²',
			durability: 3,
			comfort: 2,
			maintenance: 4,
			bestFor: ['Badwände', 'Küchenspiegel'],
			shopLinks: [
				{ name: 'BAUHAUS Fliesen', url: 'https://www.bauhaus.info/fliesen/c/10000985' },
				{ name: 'OBI Wandfliesen', url: 'https://www.obi.de/fliesen/c/1592' },
				{ name: 'Hornbach Fliesen', url: 'https://www.hornbach.de/shop/Fliesen/S1791/artikelliste.html' }
			]
		},
		{
			name: 'Steinzeugfliesen',
			id: 'steinzeug',
			icon: '🏠',
			description: 'Robuste Bodenfliesen für den Innenbereich. Weniger porös als Steingut, aber nicht vollständig dicht.',
			pros: [
				'Gutes Preis-Leistungs-Verhältnis',
				'Für Böden geeignet',
				'Große Auswahl an Designs',
				'Robust im Alltag'
			],
			cons: [
				'Nur bedingt frostsicher',
				'Nicht für Außen geeignet',
				'Empfindlicher als Feinsteinzeug',
				'Glasur kann abnutzen'
			],
			priceRange: '€€',
			pricePerSqm: '20 - 50 €/m²',
			durability: 4,
			comfort: 2,
			maintenance: 5,
			bestFor: ['Badezimmer', 'Küche', 'Flur'],
			shopLinks: [
				{ name: 'BAUHAUS Steinzeug', url: 'https://www.bauhaus.info/bodenfliesen/c/10000986' },
				{ name: 'OBI Bodenfliesen', url: 'https://www.obi.de/bodenfliesen/c/1593' },
				{ name: 'Fliesen Discount', url: 'https://www.fliesendiscount.de/' }
			]
		},
		{
			name: 'Feinsteinzeug',
			id: 'feinsteinzeug',
			icon: '💎',
			description: 'Die Königsklasse der Keramik - extrem dicht, hart und frostsicher. Für höchste Ansprüche.',
			pros: [
				'Extrem hart und robust',
				'Frostsicher (Außenbereich)',
				'Sehr geringe Wasseraufnahme',
				'Langlebig',
				'Viele Oberflächenoptionen',
				'Auch in XXL-Formaten'
			],
			cons: [
				'Höherer Preis',
				'Schwer zu schneiden',
				'Kalt unter den Füßen',
				'Professionelle Verlegung empfohlen'
			],
			priceRange: '€€€',
			pricePerSqm: '30 - 100 €/m²',
			durability: 5,
			comfort: 2,
			maintenance: 5,
			bestFor: ['Wohnbereich', 'Außen', 'Gewerbe'],
			shopLinks: [
				{ name: 'BAUHAUS Feinsteinzeug', url: 'https://www.bauhaus.info/bodenfliesen/c/10000986' },
				{ name: 'OBI Feinsteinzeug', url: 'https://www.obi.de/feinsteinzeug/c/1594' },
				{ name: 'Mosafil Feinsteinzeug', url: 'https://www.mosafil.de/feinsteinzeug/' }
			]
		},
		{
			name: 'Fliesen in Holzoptik',
			id: 'holzoptik',
			icon: '🪵',
			description: 'Kombination aus Holz-Look und Fliesen-Vorteilen. Ideal für alle, die Holzoptik im Bad möchten.',
			pros: [
				'Holz-Look wasserfest',
				'Ideal für Bad und Küche',
				'Pflegeleichter als echtes Holz',
				'Mit Fußbodenheizung kombinierbar',
				'Authentische Optik möglich'
			],
			cons: [
				'Fugen sichtbar',
				'Kalt unter den Füßen',
				'Verlegung aufwendig',
				'Nicht so authentisch wie echtes Holz'
			],
			priceRange: '€€',
			pricePerSqm: '25 - 70 €/m²',
			durability: 5,
			comfort: 2,
			maintenance: 5,
			bestFor: ['Bad', 'Küche', 'Flur'],
			shopLinks: [
				{ name: 'BAUHAUS Holzoptik', url: 'https://www.bauhaus.info/bodenfliesen/c/10000986?q=holzoptik' },
				{ name: 'OBI Holzoptik', url: 'https://www.obi.de/fliesen/c/1592?q=holzoptik' }
			]
		},
		{
			name: 'Fliesen in Betonoptik',
			id: 'betonoptik',
			icon: '🏗️',
			description: 'Moderner Industrial-Look mit den Vorteilen von Keramik. Sehr beliebt im zeitgenössischen Design.',
			pros: [
				'Moderner, minimalistischer Look',
				'Pflegeleichter als echter Beton',
				'Große Formate möglich',
				'Zeitlos elegant',
				'Vielseitig kombinierbar'
			],
			cons: [
				'Unpersönlicher Look',
				'Kalt unter den Füßen',
				'Große Formate teuer in Verlegung'
			],
			priceRange: '€€-€€€',
			pricePerSqm: '30 - 80 €/m²',
			durability: 5,
			comfort: 2,
			maintenance: 5,
			bestFor: ['Wohnzimmer', 'Loft', 'Moderne Architektur'],
			shopLinks: [
				{ name: 'BAUHAUS Betonoptik', url: 'https://www.bauhaus.info/bodenfliesen/c/10000986?q=beton' },
				{ name: 'Mosafil Betonoptik', url: 'https://www.mosafil.de/betonoptik/' }
			]
		},
		{
			name: 'Mosaikfliesen',
			id: 'mosaik',
			icon: '🎨',
			description: 'Kleine Fliesenstücke auf Matten - ideal für Akzente, Bordüren und schwierige Formen.',
			pros: [
				'Kreative Gestaltung möglich',
				'Ideal für Rundungen',
				'Als Akzent einsetzbar',
				'Viele Materialien verfügbar'
			],
			cons: [
				'Viele Fugen',
				'Aufwendiger in der Reinigung',
				'Höherer Verlegeaufwand',
				'Teurer pro m²'
			],
			priceRange: '€€-€€€',
			pricePerSqm: '40 - 150 €/m²',
			durability: 4,
			comfort: 2,
			maintenance: 3,
			bestFor: ['Duschrückwand', 'Bordüren', 'Akzente'],
			shopLinks: [
				{ name: 'BAUHAUS Mosaik', url: 'https://www.bauhaus.info/mosaikfliesen/c/10000989' },
				{ name: 'OBI Mosaik', url: 'https://www.obi.de/mosaikfliesen/c/1596' }
			]
		}
	],
	rooms: [
		{
			name: 'Badezimmer',
			icon: '🚿',
			description: 'Der klassische Einsatzort für Fliesen - wasserfest, hygienisch und langlebig.',
			requirements: [
				'Rutschhemmend (R10+)',
				'Wasserfest',
				'Hygienisch',
				'Leicht zu reinigen'
			],
			recommendedMaterials: ['Steinzeug', 'Feinsteinzeug', 'Holzoptik'],
			avoidMaterials: ['Hochglanz auf Boden', 'Steingut auf Boden'],
			thickness: 'Wand: 6-8mm, Boden: 8-10mm',
			colorTips: 'Helle Farben lassen kleine Bäder größer wirken. Großformate reduzieren Fugen.',
			specialTips: [
				'Bodenfliesen mit Rutschhemmung R10 oder höher',
				'Große Formate = weniger Fugen = leichtere Reinigung',
				'Wandfliesen können glänzend sein',
				'Duschbereich: R11 oder R12 empfohlen'
			]
		},
		{
			name: 'Küche',
			icon: '🍳',
			description: 'Fliesen sind ideal für die Küche - robust gegen Fett, Wasser und Flecken.',
			requirements: [
				'Robust gegen Flecken',
				'Leicht zu reinigen',
				'Stoßfest',
				'Säurebeständig'
			],
			recommendedMaterials: ['Feinsteinzeug', 'Steinzeug glasiert'],
			avoidMaterials: ['Unglasierten Fliesen', 'Porösem Naturstein'],
			thickness: 'Boden: 9-10mm',
			colorTips: 'Mittlere Töne verstecken Krümel. Mattes Finish ist praktischer als Hochglanz.',
			specialTips: [
				'Glasierte Oberfläche für leichte Reinigung',
				'Küchenspiegel: Wandfliesen oder Feinsteinzeug',
				'Dunkle Fugen verstecken Schmutz besser',
				'Vor Herd und Spüle rutschhemmend'
			]
		},
		{
			name: 'Wohnzimmer',
			icon: '🛋️',
			description: 'Großformat-Fliesen werden im Wohnbereich immer beliebter - edel und pflegeleicht.',
			requirements: [
				'Große Formate für elegante Optik',
				'Fußbodenheizung kompatibel',
				'Angenehme Haptik'
			],
			recommendedMaterials: ['Feinsteinzeug', 'Fliesen in Holzoptik'],
			avoidMaterials: ['Kleine Formate', 'Kalte blaue/weiße Töne'],
			thickness: 'Mindestens 9mm',
			colorTips: 'Warme Erdtöne, Holzoptik oder dezente Betonoptik für wohnliche Atmosphäre.',
			specialTips: [
				'Fußbodenheizung gleicht Kälte aus',
				'Teppiche für gemütliche Bereiche',
				'Großformate (60x60, 80x80, 60x120) wirken elegant',
				'Rektifizierte Fliesen für minimale Fugen'
			]
		},
		{
			name: 'Terrasse / Außenbereich',
			icon: '🌳',
			description: 'Für draußen nur Feinsteinzeug - frostsicher und rutschfest.',
			requirements: [
				'Frostsicher',
				'Rutschhemmend (R11+)',
				'UV-beständig',
				'Robust gegen Witterung'
			],
			recommendedMaterials: ['Feinsteinzeug 2cm', 'Terrassenplatten'],
			avoidMaterials: ['Steingut', 'Steinzeug', 'Glasierte Fliesen'],
			thickness: '20mm für Außenbereich',
			colorTips: 'Helle Farben heizen weniger auf. Steinoptik passt gut in den Garten.',
			specialTips: [
				'Nur Feinsteinzeug ist frostsicher',
				'20mm Platten für Außenverlegung',
				'Verlegung auf Stelzlager oder Splitt möglich',
				'Auf Wasseraufnahme <0,5% achten'
			]
		}
	],
	careGuide: {
		basics: [
			{
				icon: '🧹',
				title: 'Regelmäßige Reinigung',
				description: 'Fliesen sind sehr pflegeleicht.',
				tips: [
					'Regelmäßig feucht wischen',
					'Neutralreiniger verwenden',
					'Fugen regelmäßig reinigen',
					'Bei hartnäckigem Schmutz: Allzweckreiniger'
				]
			},
			{
				icon: '🚫',
				title: 'Das sollten Sie vermeiden',
				description: 'Auch Fliesen können beschädigt werden.',
				tips: [
					'Keine Scheuermittel auf Glasur',
					'Keine Säuren auf empfindlichen Fliesen',
					'Nicht mit Drahtbürste schrubben',
					'Kein Essig auf Naturstein'
				]
			},
			{
				icon: '💡',
				title: 'Profi-Tipps',
				description: 'So bleiben Ihre Fliesen wie neu.',
				tips: [
					'Fugen imprägnieren',
					'Filzgleiter unter Möbel',
					'Schmutzfangmatten am Eingang',
					'Regelmäßig Fugenmasse erneuern'
				]
			}
		],
		maintenanceSchedule: [
			{
				frequency: 'Täglich',
				tasks: ['Bei Bedarf kehren', 'Flecken sofort entfernen'],
				icon: '📅'
			},
			{
				frequency: 'Wöchentlich',
				tasks: ['Feucht wischen', 'Fugen kontrollieren'],
				icon: '📆'
			},
			{
				frequency: 'Monatlich',
				tasks: ['Intensivreinigung', 'Fugen reinigen'],
				icon: '🗓️'
			},
			{
				frequency: 'Jährlich',
				tasks: ['Fugen erneuern bei Bedarf', 'Imprägnierung auffrischen'],
				icon: '📋'
			}
		],
		stainRemovals: [
			{
				stain: 'Kalkflecken',
				icon: '💧',
				steps: [
					'Mit Essigwasser behandeln',
					'Einwirken lassen',
					'Mit Wasser nachspülen',
					'Trockenwischen'
				],
				warning: 'Kein Essig auf Naturstein oder unglasierte Fliesen!'
			},
			{
				stain: 'Fett/Öl',
				icon: '🫒',
				steps: [
					'Mit heißem Wasser und Spülmittel',
					'Bürste verwenden',
					'Nachspülen',
					'Bei Bedarf: Fettlöser'
				]
			},
			{
				stain: 'Schimmel in Fugen',
				icon: '🦠',
				steps: [
					'Chlorreiniger oder Schimmelentferner',
					'Mit Zahnbürste einarbeiten',
					'Einwirken lassen',
					'Gründlich abspülen',
					'Gut trocknen und lüften'
				]
			}
		],
		materialSpecificCare: [
			{
				material: 'Glasierte Fliesen',
				icon: '✨',
				tips: [
					'Sehr pflegeleicht',
					'Wasser und Neutralreiniger reichen',
					'Keine Scheuermittel',
					'Hochglanz: Schlierenfreie Reiniger'
				]
			},
			{
				material: 'Feinsteinzeug unglasiert',
				icon: '💎',
				tips: [
					'Imprägnierung empfohlen',
					'Flecken schneller aufnehmen',
					'Mit Spezialreiniger pflegen'
				]
			},
			{
				material: 'Mosaikfliesen',
				icon: '🎨',
				tips: [
					'Viele Fugen = mehr Reinigungsaufwand',
					'Fugen regelmäßig reinigen',
					'Weiche Bürste verwenden'
				]
			}
		]
	}
};
