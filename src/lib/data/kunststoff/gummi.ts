import type { FloorType } from '$lib/types/floor';

export const gummi: FloorType = {
	id: 'gummi',
	name: 'Gummi / Kautschuk',
	slug: 'gummi',
	icon: '⚫',
	shortDescription: 'Extrem strapazierfähig',
	description: 'Gummi- und Kautschukböden sind die Spezialisten für extreme Beanspruchung. Ob Fitnessstudio, Industriehalle oder öffentliche Gebäude - hier hält Gummi was andere Böden nicht schaffen.',
	heroTitle: 'Gummiboden - Unverwüstlich',
	heroDescription: 'Der Boden für Extremsituationen. Stoßdämpfend, rutschfest und praktisch unzerstörbar.',
	quickFacts: [
		{ label: 'Belastbarkeit', value: 'Extrem', desc: 'Für Industrie geeignet' },
		{ label: 'Preis/m²', value: '30-80€', desc: 'Je nach Dicke' },
		{ label: 'Stoßdämpfung', value: 'Sehr gut', desc: 'Ideal für Sport' },
		{ label: 'Lebensdauer', value: '30+ J.', desc: 'Bei richtiger Pflege' }
	],
	materials: [
		{
			id: 'kautschuk-natur',
			name: 'Naturkautschuk',
			icon: '🌳',
			description: 'Premium-Bodenbelag aus natürlichem Kautschuk. Langlebig, elastisch und in vielen Farben erhältlich.',
			pros: ['Natürliches Material', 'Extrem langlebig', 'Sehr elastisch', 'Antistatisch'],
			cons: ['Teuer', 'Anfangs Gummigeruch', 'Empfindlich gegen Öle'],
			priceRange: '€€€',
			pricePerSqm: '50-80€',
			durability: 5,
			comfort: 5,
			maintenance: 4,
			bestFor: ['Fitnessstudio', 'Flughäfen', 'Büros', 'Schulen'],
			shopLinks: [
				{ name: 'Nora Flooring', url: 'https://www.nora.com' },
				{ name: 'Artigo', url: 'https://www.artigo.com' }
			]
		},
		{
			id: 'gummi-fliesen',
			name: 'Gummifliesen',
			icon: '🔲',
			description: 'Dicke, stoßdämpfende Fliesen für Fitnessbereiche und Spielplätze. Oft aus recyceltem Gummi.',
			pros: ['Stoßdämpfend', 'Rutschfest', 'Oft recycelt', 'Einfach zu verlegen'],
			cons: ['Schwer', 'Fugen sichtbar', 'Begrenzte Optik'],
			priceRange: '€€',
			pricePerSqm: '30-50€',
			durability: 4,
			comfort: 5,
			maintenance: 4,
			bestFor: ['Homegym', 'Spielplatz', 'Werkstatt'],
			shopLinks: [
				{ name: 'Amazon', url: 'https://www.amazon.de/gummifliesen' },
				{ name: 'Megafit', url: 'https://www.megafitness.shop' }
			]
		},
		{
			id: 'gummi-rolle',
			name: 'Gummiboden Rollenware',
			icon: '📜',
			description: 'Gummibelag von der Rolle für große Flächen. Ideal für Fitnessstudios und Industriebereiche.',
			pros: ['Weniger Fugen', 'Große Flächen möglich', 'Verschiedene Dicken', 'Professionelle Optik'],
			cons: ['Schwere Verlegung', 'Kleber nötig', 'Transport aufwändig'],
			priceRange: '€€',
			pricePerSqm: '25-45€',
			durability: 5,
			comfort: 4,
			maintenance: 4,
			bestFor: ['Fitnessstudio', 'Sporthalle', 'Industrie'],
			shopLinks: [
				{ name: 'Sport-Thieme', url: 'https://www.sport-thieme.de' },
				{ name: 'GymFloor', url: 'https://www.gymfloor.de' }
			]
		},
		{
			id: 'fallschutz',
			name: 'Fallschutzplatten',
			icon: '🛡️',
			description: 'Spezielle Sicherheitsbeläge für Spielplätze und Kindergärten mit definierter Fallschutzwirkung.',
			pros: ['Zertifizierter Fallschutz', 'Wasserdurchlässig', 'Langlebig', 'Sicher für Kinder'],
			cons: ['Teuer', 'Nur für Außen', 'Professionelle Verlegung'],
			priceRange: '€€€',
			pricePerSqm: '50-100€',
			durability: 5,
			comfort: 5,
			maintenance: 3,
			bestFor: ['Spielplatz', 'Kindergarten', 'Schulhof'],
			shopLinks: [
				{ name: 'WARCO', url: 'https://www.warco.de' },
				{ name: 'Kraiburg', url: 'https://www.kraiburg-relastec.com' }
			]
		}
	],
	rooms: [
		{
			name: 'Fitnessstudio / Homegym',
			icon: '💪',
			description: 'Stoßdämpfend, rutschfest und robust - Gummi ist der Standard im Fitnessbereich.',
			requirements: ['Stoßdämpfung', 'Rutschfest', 'Geräuschdämmung', 'Schwerlasttauglich'],
			recommendedMaterials: ['Gummifliesen', 'Gummiboden Rollenware'],
			avoidMaterials: [],
			thickness: '6-20mm je nach Nutzung',
			colorTips: 'Schwarz mit farbigen Akzenten ist Standard',
			specialTips: ['10mm für Kardio', '15-20mm für Freihantelbereich', 'Auf EPDM-Granulat achten']
		},
		{
			name: 'Werkstatt',
			icon: '🔧',
			description: 'Stehhilfe und Sicherheit bei der Arbeit.',
			requirements: ['Antistatisch', 'Ölbeständig', 'Ermüdungshemmend'],
			recommendedMaterials: ['Naturkautschuk', 'Gummifliesen'],
			avoidMaterials: [],
			thickness: '3-6mm Standard',
			colorTips: 'Dunkle Farben praktisch, Sicherheitsmarkierungen möglich',
			specialTips: ['Auf ESD-Eignung achten bei Elektronik', 'Ölresistente Variante für KFZ']
		},
		{
			name: 'Spielplatz',
			icon: '🎪',
			description: 'Zertifizierter Fallschutz für sichere Spielbereiche.',
			requirements: ['Fallschutz nach EN 1177', 'Wasserdurchlässig', 'UV-beständig'],
			recommendedMaterials: ['Fallschutzplatten'],
			avoidMaterials: ['Standard-Gummifliesen'],
			thickness: '30-80mm je nach Fallhöhe',
			colorTips: 'Bunte Farben für kindgerechte Optik',
			specialTips: ['Fallhöhe berechnen lassen', 'Nur zertifizierte Produkte', 'Drainage beachten']
		}
	],
	careGuide: {
		basics: [
			{
				icon: '🧹',
				title: 'Regelmäßige Reinigung',
				description: 'Gummiböden sind pflegeleicht, aber Schmutz schleifen kann die Oberfläche beschädigen.',
				tips: ['Täglich fegen/saugen', 'Feucht wischen', 'pH-neutrale Reiniger verwenden']
			},
			{
				icon: '🚫',
				title: 'Vermeiden',
				description: 'Einige Substanzen greifen Gummi an.',
				tips: ['Keine Lösungsmittel', 'Keine ölhaltigen Reiniger', 'Keine Scheuermittel']
			},
			{
				icon: '💧',
				title: 'Desinfektion',
				description: 'In Fitnessstudios ist Hygiene besonders wichtig.',
				tips: ['Gummiverträgliche Desinfektionsmittel', 'Regelmäßig desinfizieren', 'Schnell trocknen lassen']
			}
		],
		maintenanceSchedule: [
			{ frequency: 'Täglich', icon: '📅', tasks: ['Fegen', 'Flecken entfernen'] },
			{ frequency: 'Wöchentlich', icon: '📅', tasks: ['Feucht wischen', 'Desinfizieren'] },
			{ frequency: 'Monatlich', icon: '📅', tasks: ['Intensivreinigung'] },
			{ frequency: 'Jährlich', icon: '📅', tasks: ['Beschichtung erneuern (bei Bedarf)'] }
		],
		stainRemovals: [
			{
				stain: 'Kreidestaub/Magnesia',
				icon: '🏋️',
				steps: ['Trocken absaugen', 'Feucht nachwischen', 'Trocknen lassen'],
				warning: 'Magnesia kann helle Flecken hinterlassen - schnell entfernen'
			},
			{
				stain: 'Öl/Fett',
				icon: '🛢️',
				steps: ['Sofort aufnehmen', 'Mit Spülmittel behandeln', 'Gründlich spülen'],
				warning: 'Öl kann Gummi angreifen - schnelles Handeln wichtig'
			}
		],
		materialSpecificCare: [
			{
				material: 'Naturkautschuk',
				icon: '🌳',
				tips: ['Spezielle Kautschukpflege verwenden', 'Nicht zu nass wischen', 'UV-Schutz bei Sonneneinstrahlung']
			},
			{
				material: 'Recycling-Gummi',
				icon: '♻️',
				tips: ['Robuster gegen Chemikalien', 'Standard-Reinigung ausreichend', 'Bei Bedarf Granulat nachfüllen']
			}
		]
	}
};
