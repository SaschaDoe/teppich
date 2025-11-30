import type { FloorType } from '$lib/types/floor';

export const seegras: FloorType = {
	id: 'seegras',
	name: 'Seegras',
	slug: 'seegras',
	icon: '🌊',
	shortDescription: 'Natürlich strukturiert',
	description: 'Seegrasböden werden aus den Fasern von Wasserpflanzen gewoben. Das natürliche Material ist von Natur aus fleckenresistent und bringt eine einzigartige, organische Struktur in jeden Raum.',
	heroTitle: 'Seegras - Aus dem Wasser in Ihr Zuhause',
	heroDescription: 'Natürlich imprägniert, wunderschön strukturiert und überraschend pflegeleicht. Seegras ist die elegante Naturfaser.',
	quickFacts: [
		{ label: 'Material', value: '100%', desc: 'Natürliche Wasserpflanze' },
		{ label: 'Preis/m²', value: '30-60€', desc: 'Mittleres Segment' },
		{ label: 'Fleckschutz', value: 'Natürlich', desc: 'Von Natur aus' },
		{ label: 'Struktur', value: 'Einzigartig', desc: 'Organische Optik' }
	],
	materials: [
		{
			id: 'seegras-natur',
			name: 'Seegras Natur',
			icon: '🌿',
			description: 'Unbehandeltes Seegras in seiner natürlichen grün-braunen Färbung. Klassisch und zeitlos.',
			pros: ['Natürlich fleckresistent', 'Einzigartige Färbung', 'Nachhaltig', 'Antistatisch'],
			cons: ['Begrenzte Farbauswahl', 'Grün verblasst zu Braun', 'Nicht färbbar', 'Etwas glatt'],
			priceRange: '€€',
			pricePerSqm: '30-45€',
			durability: 4,
			comfort: 3,
			maintenance: 4,
			bestFor: ['Wohnzimmer', 'Schlafzimmer', 'Wintergarten'],
			shopLinks: [
				{ name: 'Tretford', url: 'https://www.tretford.eu' },
				{ name: 'Naturbauhof', url: 'https://www.naturbauhof.de' }
			]
		},
		{
			id: 'seegras-gewebt',
			name: 'Seegras gewebt (Fischgrat)',
			icon: '〰️',
			description: 'Seegras in elegantem Fischgrat- oder Flechtmuster. Hochwertige Optik für anspruchsvolle Räume.',
			pros: ['Elegantes Muster', 'Hochwertige Optik', 'Strukturierte Oberfläche', 'Zeitlos'],
			cons: ['Teurer', 'Schwieriger zu verlegen', 'Muster muss passen'],
			priceRange: '€€€',
			pricePerSqm: '45-65€',
			durability: 4,
			comfort: 3,
			maintenance: 4,
			bestFor: ['Wohnzimmer', 'Esszimmer', 'Boutique'],
			shopLinks: [
				{ name: 'JAB Anstoetz', url: 'https://www.jab.de/seegras' },
				{ name: 'Ruckstuhl', url: 'https://www.ruckstuhl.com' }
			]
		},
		{
			id: 'seegras-bordüre',
			name: 'Seegras mit Bordüre',
			icon: '🖼️',
			description: 'Seegrasteppich mit elegantem Stoffrand. Als Teppich oder maßgefertigt erhältlich.',
			pros: ['Fertige Optik', 'Eleganter Abschluss', 'Individuell anpassbar', 'Hochwertig'],
			cons: ['Teurer', 'Maßanfertigung nötig', 'Längere Lieferzeit'],
			priceRange: '€€€',
			pricePerSqm: '50-80€',
			durability: 4,
			comfort: 3,
			maintenance: 4,
			bestFor: ['Wohnzimmer', 'Esszimmer', 'Empfangsbereich'],
			shopLinks: [
				{ name: 'Kibek', url: 'https://www.kibek.de/seegras' },
				{ name: 'Teppichscheune', url: 'https://www.teppichscheune.de' }
			]
		}
	],
	rooms: [
		{
			name: 'Wohnzimmer',
			icon: '🛋️',
			description: 'Seegras bringt natürliche Eleganz in den Wohnbereich.',
			requirements: ['Natürliche Optik', 'Pflegeleicht', 'Strapazierfähig'],
			recommendedMaterials: ['Seegras gewebt', 'Seegras Natur'],
			avoidMaterials: [],
			thickness: '6-10mm',
			colorTips: 'Naturtöne harmonieren mit jeder Einrichtung',
			specialTips: ['Farbänderung über Zeit einplanen', 'Teppiche als Akzente', 'Passt zu Rattan-Möbeln']
		},
		{
			name: 'Schlafzimmer',
			icon: '🛏️',
			description: 'Natürliches, allergikerfreundliches Material für erholsamen Schlaf.',
			requirements: ['Allergikerfreundlich', 'Natürlich', 'Ruhige Optik'],
			recommendedMaterials: ['Seegras Natur', 'Seegras gewebt'],
			avoidMaterials: [],
			thickness: '6-8mm',
			colorTips: 'Sanfte Grün-Braun-Töne beruhigen',
			specialTips: ['Hypoallergen', 'Angenehmes Barfuß-Gefühl', 'Keine Chemikalien']
		},
		{
			name: 'Wintergarten',
			icon: '🌿',
			description: 'Perfekt für naturnahe Räume mit viel Licht.',
			requirements: ['Lichtbeständig', 'Natürliche Optik', 'Luftfeuchtigkeit tolerant'],
			recommendedMaterials: ['Seegras Natur'],
			avoidMaterials: [],
			thickness: '8-10mm',
			colorTips: 'Naturtöne verstärken das Grün der Pflanzen',
			specialTips: ['Seegras kommt mit höherer Luftfeuchtigkeit besser klar als Sisal', 'Farbveränderung durch Licht einplanen']
		}
	],
	careGuide: {
		basics: [
			{
				icon: '🧹',
				title: 'Regelmäßiges Saugen',
				description: 'Auch bei natürlich imprägniertem Seegras wichtig.',
				tips: ['Wöchentlich saugen', 'In Weberichtung', 'Bürstaufsatz verwenden']
			},
			{
				icon: '💧',
				title: 'Feuchtigkeit',
				description: 'Seegras verträgt mehr Feuchtigkeit als andere Naturfasern.',
				tips: ['Trotzdem nicht nass wischen', 'Verschüttetes abtupfen', 'Luftfeuchtigkeit bis 70% ok']
			},
			{
				icon: '🌞',
				title: 'Farbveränderung',
				description: 'Seegras verändert seine Farbe - das ist normal.',
				tips: ['Grün wird zu warmem Braun', 'Sonnenlicht beschleunigt Prozess', 'Ergebnis ist gleichmäßig schön']
			}
		],
		maintenanceSchedule: [
			{ frequency: 'Wöchentlich', icon: '📅', tasks: ['Gründlich saugen'] },
			{ frequency: 'Monatlich', icon: '📅', tasks: ['Flecken behandeln', 'Auf Beschädigungen prüfen'] },
			{ frequency: 'Jährlich', icon: '📅', tasks: ['Professionelle Reinigung bei Bedarf'] }
		],
		stainRemovals: [
			{
				stain: 'Flüssigkeiten',
				icon: '💧',
				steps: ['Sofort abtupfen', 'Nicht reiben', 'Trocknen lassen'],
				warning: 'Seegras ist natürlich fleckresistent, aber trotzdem schnell handeln'
			},
			{
				stain: 'Trockener Schmutz',
				icon: '🧹',
				steps: ['Trocknen lassen', 'Abbürsten', 'Absaugen'],
				warning: 'Nie nass reinigen - Ränder sind schwer zu entfernen'
			}
		],
		materialSpecificCare: [
			{
				material: 'Seegras allgemein',
				icon: '🌊',
				tips: ['Keine Imprägnierung nötig', 'Bei Bedarf Trockenreinigung', 'Natürliche Patina entwickelt sich']
			}
		]
	}
};
