import type { FloorType } from '$lib/types/floor';

export const linoleum: FloorType = {
	id: 'linoleum',
	name: 'Linoleum',
	slug: 'linoleum',
	icon: '🌿',
	description: 'Linoleum ist ein zu 100% natürlicher Bodenbelag aus Leinöl, Kork, Holzmehl und Jute. Bereits seit über 150 Jahren bewährt, erlebt dieses antibakterielle und antistatische Material eine Renaissance.',
	heroTitle: 'Linoleum - Der Naturwerkstoff',
	heroDescription: '100% natürlich, antibakteriell und nachhaltig. Linoleum besteht aus Leinöl, Korkmehl, Holzmehl und Jute - Natur pur unter Ihren Füßen.',
	quickFacts: [
		{ label: 'Lebensdauer', value: '30-40 J.', desc: 'Extrem langlebig' },
		{ label: 'Preis/m²', value: '25-60€', desc: 'Plus Verlegung' },
		{ label: 'Material', value: '100%', desc: 'Natürlich' },
		{ label: 'Hygiene', value: 'Sehr gut', desc: 'Antibakteriell' }
	],
	materials: [
		{
			id: 'linoleum-bahnenware',
			name: 'Linoleum Bahnenware',
			icon: '📜',
			description: 'Klassisches Linoleum in Rollenform. Fugenarm verlegt, ideal für große Flächen und Gewerbe.',
			pros: ['Nahezu fugenlos', 'Große Farbauswahl', 'Professionelle Optik', 'Hygienisch'],
			cons: ['Professionelle Verlegung nötig', 'Nicht für DIY', 'Anfangs Leinölgeruch'],
			priceRange: '€€',
			pricePerSqm: '25-45€',
			durability: 5,
			comfort: 3,
			maintenance: 4,
			bestFor: ['Gewerbe', 'Kindergarten', 'Küche', 'Flur'],
			shopLinks: [
				{ name: 'Forbo Flooring', url: 'https://www.forbo.com/flooring/de-de' },
				{ name: 'Tarkett', url: 'https://www.tarkett.de' }
			]
		},
		{
			id: 'linoleum-klick',
			name: 'Linoleum Klick-Paneele',
			icon: '🔗',
			description: 'Moderne Linoleum-Paneele mit Klick-System für einfache DIY-Verlegung.',
			pros: ['Einfache Verlegung', 'DIY-freundlich', 'Austauschbar', 'Schwimmend verlegbar'],
			cons: ['Mehr Fugen', 'Teurer als Bahnenware', 'Weniger Dekore'],
			priceRange: '€€€',
			pricePerSqm: '40-60€',
			durability: 4,
			comfort: 4,
			maintenance: 4,
			bestFor: ['Wohnzimmer', 'Schlafzimmer', 'Kinderzimmer'],
			shopLinks: [
				{ name: 'BAUHAUS', url: 'https://www.bauhaus.info/linoleum' },
				{ name: 'OBI', url: 'https://www.obi.de/linoleum' }
			]
		},
		{
			id: 'linoleum-fliesen',
			name: 'Linoleum Fliesen',
			icon: '🔲',
			description: 'Quadratische oder rechteckige Linoleumfliesen für kreative Verlegemuster.',
			pros: ['Kreative Muster möglich', 'Einzeln austauschbar', 'Weniger Verschnitt', 'Farb-Kombinationen'],
			cons: ['Viele Fugen', 'Aufwändige Verlegung', 'Kleber erforderlich'],
			priceRange: '€€',
			pricePerSqm: '30-50€',
			durability: 4,
			comfort: 3,
			maintenance: 4,
			bestFor: ['Gewerbe', 'Empfang', 'Kreative Räume'],
			shopLinks: [
				{ name: 'Forbo Marmoleum', url: 'https://www.forbo.com' },
				{ name: 'DLW Linoleum', url: 'https://www.dlw.de' }
			]
		},
		{
			id: 'marmoleum',
			name: 'Marmoleum (Marmoriert)',
			icon: '🎨',
			description: 'Die bekannteste Linoleum-Marke mit charakteristischer Marmorierung. Premium-Qualität von Forbo.',
			pros: ['Ikonisches Design', 'Höchste Qualität', 'Riesige Farbpalette', 'Sehr langlebig'],
			cons: ['Markenpreis', 'Nur über Fachhandel', 'Professionelle Verlegung'],
			priceRange: '€€€',
			pricePerSqm: '35-55€',
			durability: 5,
			comfort: 4,
			maintenance: 4,
			bestFor: ['Arztpraxen', 'Schulen', 'Design-Wohnungen'],
			shopLinks: [
				{ name: 'Forbo Marmoleum', url: 'https://www.forbo.com/marmoleum' },
				{ name: 'Raumausstatter', url: 'https://www.raumausstatter.de' }
			]
		}
	],
	rooms: [
		{
			name: 'Küche',
			icon: '🍳',
			description: 'Antibakteriell und pflegeleicht - Linoleum ist ideal für die hygienebewusste Küche.',
			requirements: ['Hygienisch', 'Wasserabweisend', 'Pflegeleicht', 'Rutschfest'],
			recommendedMaterials: ['Linoleum Bahnenware', 'Marmoleum'],
			avoidMaterials: [],
			thickness: '2.5mm empfohlen',
			colorTips: 'Mittlere Töne kaschieren Flecken und Krümel',
			specialTips: ['Fugenlos verlegen lassen', 'An Spüle hochziehen (Hohlkehle)']
		},
		{
			name: 'Kinderzimmer',
			icon: '🧸',
			description: 'Natürlich, warm, antibakteriell und schadstofffrei - perfekt für Kinder.',
			requirements: ['Schadstofffrei', 'Warm', 'Robust', 'Pflegeleicht'],
			recommendedMaterials: ['Linoleum Klick-Paneele', 'Marmoleum'],
			avoidMaterials: [],
			thickness: '2.5-4mm optimal',
			colorTips: 'Bunte Farben oder Naturtöne je nach Alter',
			specialTips: ['Auf Zertifikate achten', 'Leinölgeruch verfliegt nach wenigen Wochen']
		},
		{
			name: 'Arztpraxis / Gewerbe',
			icon: '🏥',
			description: 'Der Klassiker in Gesundheitseinrichtungen - hygienisch, strapazierfähig, antistatisch.',
			requirements: ['Höchste Hygiene', 'Antistatisch', 'Rollstuhlgeeignet', 'Desinfizierbar'],
			recommendedMaterials: ['Linoleum Bahnenware', 'Marmoleum'],
			avoidMaterials: ['Linoleum Klick-Paneele'],
			thickness: '2.5-3.2mm empfohlen',
			colorTips: 'Dezente, beruhigende Farben für Patienten',
			specialTips: ['Fugenlos verschweißen', 'Hohlkehlen-Sockelleisten', 'Elektrisch ableitfähig möglich']
		}
	],
	careGuide: {
		basics: [
			{
				icon: '🧹',
				title: 'Regelmäßige Reinigung',
				description: 'Linoleum ist pflegeleicht, aber mag keine aggressiven Reiniger.',
				tips: ['Täglich fegen oder saugen', 'Wöchentlich feucht wischen', 'pH-neutrale Reiniger verwenden']
			},
			{
				icon: '🚫',
				title: 'Was vermeiden',
				description: 'Einige Substanzen schaden dem natürlichen Material.',
				tips: ['Keine alkalischen Reiniger', 'Keine Scheuermittel', 'Kein Ammoniak oder Bleiche']
			},
			{
				icon: '✨',
				title: 'Pflege & Schutz',
				description: 'Eine regelmäßige Pflege erhält den Glanz.',
				tips: ['Linoleum-Pflegemittel verwenden', 'Gelegentlich polieren', 'Schutzfilm erneuern']
			}
		],
		maintenanceSchedule: [
			{ frequency: 'Täglich', icon: '📅', tasks: ['Kehren/Saugen', 'Flecken sofort entfernen'] },
			{ frequency: 'Wöchentlich', icon: '📅', tasks: ['Feucht wischen mit pH-neutralem Reiniger'] },
			{ frequency: 'Monatlich', icon: '📅', tasks: ['Pflegefilm auftragen'] },
			{ frequency: 'Jährlich', icon: '📅', tasks: ['Grundreinigung', 'Politur erneuern'] }
		],
		stainRemovals: [
			{
				stain: 'Gummiabrieb (Schuhe)',
				icon: '👟',
				steps: ['Weißen Radierer verwenden', 'Sanft abreiben', 'Nachwischen'],
				warning: 'Dunkle Gummisohlen hinterlassen oft Spuren - Filzgleiter helfen'
			},
			{
				stain: 'Verfärbungen',
				icon: '🎨',
				steps: ['Spezialreiniger für Linoleum', 'Einwirken lassen', 'Aufnehmen'],
				warning: 'Linoleum kann bei Kontakt mit Gummi permanent verfärben'
			}
		],
		materialSpecificCare: [
			{
				material: 'Marmoleum',
				icon: '🏛️',
				tips: ['Forbo-Pflegeprodukte verwenden', 'Topshield-Schutzschicht erneuern', 'Kein Hochdruckreiniger']
			},
			{
				material: 'Linoleum Klick',
				icon: '🔗',
				tips: ['Fugen nicht überwässern', 'Standard-Linoleumpflege', 'Bei Beschädigung Paneel austauschen']
			}
		]
	}
};
