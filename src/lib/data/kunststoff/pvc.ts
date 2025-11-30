import type { FloorType } from '$lib/types/floor';

export const pvc: FloorType = {
	id: 'pvc',
	name: 'PVC-Boden',
	slug: 'pvc',
	icon: '🔲',
	shortDescription: 'Klassiker für Nutzräume',
	description: 'PVC-Böden sind die günstige und praktische Lösung für stark beanspruchte Bereiche. Wasserfest, pflegeleicht und in vielen Dekoren erhältlich - ideal für Keller, Garage und Nutzräume.',
	heroTitle: 'PVC-Boden - Praktisch und günstig',
	heroDescription: 'Der unverwüstliche Allrounder für Keller, Garage und Nutzräume. Wasserfest, pflegeleicht und extrem preiswert.',
	quickFacts: [
		{ label: 'Preis/m²', value: '5-25€', desc: 'Sehr günstig' },
		{ label: 'Wasserfest', value: '100%', desc: 'Ideal für Feuchträume' },
		{ label: 'Verlegung', value: 'Einfach', desc: 'Lose oder geklebt' },
		{ label: 'Lebensdauer', value: '10-20 J.', desc: 'Je nach Qualität' }
	],
	materials: [
		{
			id: 'pvc-rolle',
			name: 'PVC-Rollenware',
			icon: '📜',
			description: 'Klassische PVC-Bahnen vom Meter. Günstig, einfach zu verlegen und in vielen Mustern verfügbar.',
			pros: ['Sehr günstig', 'Große Auswahl', 'Einfache Verlegung', 'Wasserdicht'],
			cons: ['Dünn und wenig robust', 'Kann Wellen werfen', 'Weniger langlebig'],
			priceRange: '€',
			pricePerSqm: '5-15€',
			durability: 2,
			comfort: 2,
			maintenance: 5,
			bestFor: ['Keller', 'Garage', 'Waschküche', 'Mietwohnung'],
			shopLinks: [
				{ name: 'BAUHAUS', url: 'https://www.bauhaus.info/pvc-boden' },
				{ name: 'POCO', url: 'https://www.poco.de/pvc-boden' }
			]
		},
		{
			id: 'pvc-fliesen',
			name: 'PVC-Fliesen',
			icon: '🔲',
			description: 'Selbstklebende PVC-Fliesen für schnelle Renovierungen. Einfach abziehen und aufkleben.',
			pros: ['Kinderleichte Verlegung', 'Einzeln austauschbar', 'Günstiger Preis', 'Viele Dekore'],
			cons: ['Viele Fugen', 'Kann sich lösen', 'Nicht so wasserdicht'],
			priceRange: '€',
			pricePerSqm: '8-20€',
			durability: 2,
			comfort: 2,
			maintenance: 4,
			bestFor: ['Hobbyraum', 'Garage', 'Keller'],
			shopLinks: [
				{ name: 'Amazon', url: 'https://www.amazon.de/pvc-fliesen' },
				{ name: 'Hornbach', url: 'https://www.hornbach.de/pvc-fliesen' }
			]
		},
		{
			id: 'cv-belag',
			name: 'CV-Belag (Cushioned Vinyl)',
			icon: '☁️',
			description: 'Geschäumte PVC-Variante mit weicher Rückseite. Fußwärmer und schalldämmender als Standard-PVC.',
			pros: ['Fußwarm', 'Schalldämmend', 'Weich', 'Viele Holz-/Fliesendekore'],
			cons: ['Druckstellen möglich', 'Weniger strapazierfähig', 'Empfindliche Oberfläche'],
			priceRange: '€',
			pricePerSqm: '10-25€',
			durability: 3,
			comfort: 4,
			maintenance: 4,
			bestFor: ['Küche', 'Bad', 'Kinderzimmer'],
			shopLinks: [
				{ name: 'Roller', url: 'https://www.roller.de/cv-belag' },
				{ name: 'TEDOX', url: 'https://www.tedox.de/cv-belag' }
			]
		},
		{
			id: 'pvc-planken',
			name: 'PVC-Planken (selbstklebend)',
			icon: '📋',
			description: 'Selbstklebende Planken in Holzoptik. Schnelle Renovierung ohne Werkzeug.',
			pros: ['Holzoptik günstig', 'Selbstklebend', 'Schnelle Verlegung', 'Kein Werkzeug nötig'],
			cons: ['Nicht abschleifbar', 'Kann sich lösen', 'Untergrund muss perfekt sein'],
			priceRange: '€',
			pricePerSqm: '10-20€',
			durability: 2,
			comfort: 3,
			maintenance: 4,
			bestFor: ['Mietwohnung', 'Schnelle Renovierung', 'Hobbyraum'],
			shopLinks: [
				{ name: 'IKEA', url: 'https://www.ikea.com/de' },
				{ name: 'Action', url: 'https://www.action.com' }
			]
		}
	],
	rooms: [
		{
			name: 'Keller',
			icon: '🏠',
			description: 'Wasserfest und günstig - PVC ist der praktischste Kellerboden.',
			requirements: ['Wasserfest', 'Günstig', 'Pflegeleicht', 'Unempfindlich'],
			recommendedMaterials: ['PVC-Rollenware', 'PVC-Fliesen'],
			avoidMaterials: [],
			thickness: '2-3mm ausreichend',
			colorTips: 'Helle Farben für dunkle Kellerräume',
			specialTips: ['Auf Feuchtigkeit im Untergrund achten', 'Dampfsperre empfohlen']
		},
		{
			name: 'Garage',
			icon: '🚗',
			description: 'Robust und ölfest - spezielle Garagenfliesen halten einiges aus.',
			requirements: ['Öl-/Chemikalienbeständig', 'Rutschfest', 'Extrem belastbar'],
			recommendedMaterials: ['PVC-Fliesen'],
			avoidMaterials: ['CV-Belag', 'PVC-Planken'],
			thickness: '5mm+ für Garage',
			colorTips: 'Dunkle Farben kaschieren Öl und Schmutz',
			specialTips: ['Spezielle Garagenfliesen wählen', 'Auf Tragfähigkeit achten']
		},
		{
			name: 'Küche (Budget)',
			icon: '🍳',
			description: 'CV-Beläge bieten gute Optik zum kleinen Preis.',
			requirements: ['Wasserfest', 'Pflegeleicht', 'Rutschfest'],
			recommendedMaterials: ['CV-Belag'],
			avoidMaterials: ['Dünne PVC-Rollenware'],
			thickness: '2.8-3.5mm empfohlen',
			colorTips: 'Fliesen- oder Steinoptik passend zur Einrichtung',
			specialTips: ['Auf R10-Rutschklasse achten', 'Fugenlos bis zur Wand verlegen']
		}
	],
	careGuide: {
		basics: [
			{
				icon: '🧹',
				title: 'Einfache Reinigung',
				description: 'PVC ist extrem pflegeleicht - einfach fegen und wischen.',
				tips: ['Regelmäßig fegen', 'Feucht wischen mit Allzweckreiniger', 'Keine Scheuermittel']
			},
			{
				icon: '🚫',
				title: 'Vermeiden',
				description: 'Einige Dinge schaden dem PVC-Boden.',
				tips: ['Keine Gummifüße/-matten', 'Keine Lösungsmittel', 'Keine Scheuermilch']
			},
			{
				icon: '🔥',
				title: 'Hitze vermeiden',
				description: 'PVC ist nicht hitzebeständig.',
				tips: ['Keine heißen Gegenstände abstellen', 'Zigaretten verbrennen sich ein', 'Sonneneinstrahlung kann verformen']
			}
		],
		maintenanceSchedule: [
			{ frequency: 'Täglich', icon: '📅', tasks: ['Kehren bei Bedarf'] },
			{ frequency: 'Wöchentlich', icon: '📅', tasks: ['Feucht wischen'] },
			{ frequency: 'Monatlich', icon: '📅', tasks: ['Intensivreinigung'] },
			{ frequency: 'Halbjährlich', icon: '📅', tasks: ['PVC-Pflege auftragen'] }
		],
		stainRemovals: [
			{
				stain: 'Gummiabrieb',
				icon: '👟',
				steps: ['Radiergummi verwenden', 'Mit Spiritus abreiben', 'Nachwischen'],
				warning: 'Gummimatten verfärben PVC permanent - immer Filz/Textil verwenden'
			},
			{
				stain: 'Fettflecken',
				icon: '🍳',
				steps: ['Mit Spülmittel einweichen', 'Aufwischen', 'Nachspülen'],
				warning: 'Schnelles Handeln verhindert Einziehen'
			}
		],
		materialSpecificCare: [
			{
				material: 'PVC-Rollenware',
				icon: '📜',
				tips: ['Fugen mit Klebeband sichern', 'Nicht schwere Möbel verschieben', 'Regelmäßig Pflege auftragen']
			},
			{
				material: 'CV-Belag',
				icon: '☁️',
				tips: ['Druckstellen vermeiden', 'Filzgleiter unter Möbel', 'Nicht schleifen']
			}
		]
	}
};
