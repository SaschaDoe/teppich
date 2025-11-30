import type { FloorType } from '$lib/types/floor';

export const spachtelboden: FloorType = {
	id: 'spachtelboden',
	name: 'Spachtelboden',
	slug: 'spachtelboden',
	icon: '🖌️',
	shortDescription: 'Individuell gestaltet',
	description: 'Gespachtelte Böden vereinen Handwerkskunst mit moderner Ästhetik. Ob Designspachtel, Pandomo oder Betonoptik - jeder Boden wird von Hand gestaltet und ist ein Unikat.',
	heroTitle: 'Spachtelboden - Handwerk trifft Design',
	heroDescription: 'Von Künstlerhand gespachtelt. Jeder Boden ein Unikat mit lebendiger Oberfläche und charaktervoller Struktur.',
	quickFacts: [
		{ label: 'Handarbeit', value: '100%', desc: 'Jeder Boden einzigartig' },
		{ label: 'Preis/m²', value: '80-200€', desc: 'Je nach System' },
		{ label: 'Fugenlos', value: 'Ja', desc: 'Nahtlose Flächen' },
		{ label: 'Dicke', value: '3-8mm', desc: 'Je nach Untergrund' }
	],
	materials: [
		{
			id: 'pandomo',
			name: 'Pandomo Floor',
			icon: '🌟',
			description: 'Premium-Designspachtel von Ardex. Der Mercedes unter den Spachtelböden mit samtiger Oberfläche.',
			pros: ['Höchste Qualität', 'Samtige Haptik', 'Viele Farben', 'Renommiertes System'],
			cons: ['Teuer', 'Nur zertifizierte Verarbeiter', 'Wartezeit für Termine'],
			priceRange: '€€€€',
			pricePerSqm: '120-180€',
			durability: 4,
			comfort: 4,
			maintenance: 3,
			bestFor: ['Luxuswohnungen', 'Hotels', 'Boutiquen', 'Design-Objekte'],
			shopLinks: [
				{ name: 'Pandomo', url: 'https://www.pandomo.de' },
				{ name: 'Ardex', url: 'https://www.ardex.de' }
			]
		},
		{
			id: 'designspachtel',
			name: 'Designspachtel (diverse)',
			icon: '🎨',
			description: 'Verschiedene Spachtelsysteme für individuelle Betonoptik. Viele Hersteller und Preisklassen.',
			pros: ['Große Auswahl', 'Verschiedene Preisklassen', 'Individuelle Optik', 'Viele Verarbeiter'],
			cons: ['Qualitätsunterschiede', 'Ergebnis abhängig vom Verarbeiter', 'Recherche nötig'],
			priceRange: '€€€',
			pricePerSqm: '80-140€',
			durability: 4,
			comfort: 3,
			maintenance: 3,
			bestFor: ['Wohnzimmer', 'Büro', 'Praxis', 'Gastronomie'],
			shopLinks: [
				{ name: 'Caparol', url: 'https://www.caparol.de/produkte/innenbodenbeschichtungen' },
				{ name: 'Sika', url: 'https://www.sika.de' }
			]
		},
		{
			id: 'kalkspachtel',
			name: 'Kalk-Spachtelboden',
			icon: '🌿',
			description: 'Ökologischer Spachtelboden auf Kalkbasis. Natürlich, atmungsaktiv und mit wohngesundem Raumklima.',
			pros: ['Ökologisch', 'Atmungsaktiv', 'Antibakteriell', 'Wohngesund'],
			cons: ['Empfindlicher', 'Mehr Pflege', 'Weniger Farbauswahl'],
			priceRange: '€€€',
			pricePerSqm: '100-160€',
			durability: 3,
			comfort: 4,
			maintenance: 2,
			bestFor: ['Schlafzimmer', 'Kinderzimmer', 'Allergiker', 'Öko-Bauherrren'],
			shopLinks: [
				{ name: 'Kreidezeit', url: 'https://www.kreidezeit.de' },
				{ name: 'Auro', url: 'https://www.auro.de' }
			]
		},
		{
			id: 'terrazzo-spachtel',
			name: 'Terrazzo-Spachtelboden',
			icon: '💎',
			description: 'Spachtelmasse mit Zuschlägen wie Marmorsplit. Terrazzo-Look ohne klassischen Guss.',
			pros: ['Terrazzo-Look', 'Günstiger als Guss', 'Dünner möglich', 'Individuelle Mischungen'],
			cons: ['Nicht ganz authentisch', 'Begrenzte Größe der Zuschläge', 'Weniger robust als echter Terrazzo'],
			priceRange: '€€€',
			pricePerSqm: '90-150€',
			durability: 4,
			comfort: 3,
			maintenance: 3,
			bestFor: ['Flur', 'Bad', 'Gastronomie', 'Boutique'],
			shopLinks: [
				{ name: 'Senso', url: 'https://www.senso.de' },
				{ name: 'Ideal Work', url: 'https://www.idealwork.de' }
			]
		}
	],
	rooms: [
		{
			name: 'Wohnzimmer',
			icon: '🛋️',
			description: 'Der fugenlose Spachtelboden als Designelement im Wohnbereich.',
			requirements: ['Optisch ansprechend', 'FBH-kompatibel', 'Pflegeleicht'],
			recommendedMaterials: ['Pandomo Floor', 'Designspachtel'],
			avoidMaterials: [],
			thickness: '3-5mm',
			colorTips: 'Warmes Grau oder Beige für Behaglichkeit',
			specialTips: ['Fußbodenheizung ideal', 'Teppiche setzen Akzente', 'Strukturvarianten möglich']
		},
		{
			name: 'Badezimmer',
			icon: '🚿',
			description: 'Fugenlos und wasserfest - perfekt für moderne Bäder.',
			requirements: ['Wasserfest', 'Rutschfest', 'Hygienisch'],
			recommendedMaterials: ['Pandomo Floor', 'Designspachtel'],
			avoidMaterials: ['Kalk-Spachtelboden (zu empfindlich)'],
			thickness: '4-6mm',
			colorTips: 'Helle Töne vergrößern optisch',
			specialTips: ['Auch für Duschen geeignet', 'Hohlkehle zur Wand', 'Regelmäßig versiegeln']
		},
		{
			name: 'Schlafzimmer',
			icon: '🛏️',
			description: 'Wohngesunde Spachtelböden für erholsamen Schlaf.',
			requirements: ['Wohngesund', 'Fußwarm', 'Ruhige Optik'],
			recommendedMaterials: ['Kalk-Spachtelboden', 'Pandomo Floor'],
			avoidMaterials: [],
			thickness: '3-4mm',
			colorTips: 'Sanfte, warme Töne für Ruhe',
			specialTips: ['Ökologische Systeme bevorzugen', 'Fußbodenheizung empfohlen', 'Barfuß angenehm']
		}
	],
	careGuide: {
		basics: [
			{
				icon: '🧹',
				title: 'Sanfte Reinigung',
				description: 'Spachtelböden sind empfindlicher als Fliesen.',
				tips: ['Weiche Besen/Mops', 'pH-neutrale Reiniger', 'Keine Scheuermittel']
			},
			{
				icon: '🛡️',
				title: 'Schutz',
				description: 'Die Versiegelung muss gepflegt werden.',
				tips: ['Regelmäßig wachsen', 'Versiegelung erneuern', 'Kratzer sofort behandeln']
			},
			{
				icon: '💧',
				title: 'Feuchtigkeit',
				description: 'Wasserfest ja, aber stehendes Wasser vermeiden.',
				tips: ['Verschüttetes aufwischen', 'Nach Reinigung trockenwischen', 'Luftfeuchtigkeit beachten']
			}
		],
		maintenanceSchedule: [
			{ frequency: 'Täglich', icon: '📅', tasks: ['Bei Bedarf fegen', 'Flecken aufwischen'] },
			{ frequency: 'Wöchentlich', icon: '📅', tasks: ['Feucht wischen'] },
			{ frequency: 'Monatlich', icon: '📅', tasks: ['Pflegewachs auftragen'] },
			{ frequency: 'Alle 1-2 Jahre', icon: '📅', tasks: ['Versiegelung erneuern'] }
		],
		stainRemovals: [
			{
				stain: 'Wasserflecken',
				icon: '💧',
				steps: ['Trockenwischen', 'Bei Bedarf nachwachsen', 'Politur'],
				warning: 'Kalkflecken mit geeignetem Reiniger behandeln'
			},
			{
				stain: 'Kratzer',
				icon: '📏',
				steps: ['Wachs auftragen', 'Polieren', 'Bei tiefen Kratzern: Ausbesserung'],
				warning: 'Tiefe Kratzer erfordern professionelle Reparatur'
			}
		],
		materialSpecificCare: [
			{
				material: 'Pandomo',
				icon: '🌟',
				tips: ['Original Pandomo-Pflegemittel', 'Professionelle Wartung empfohlen', 'Sehr saugfähig - schnell handeln']
			},
			{
				material: 'Kalk-Spachtelboden',
				icon: '🌿',
				tips: ['Naturseife verwenden', 'Keine säurehaltigen Reiniger', 'Öfter pflegen als andere']
			}
		]
	}
};
