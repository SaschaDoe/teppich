import type { FloorType } from '$lib/types/floor';

export const sisal: FloorType = {
	id: 'sisal',
	name: 'Sisal / Kokos',
	slug: 'sisal',
	icon: '🌿',
	description: 'Sisal- und Kokosböden sind die robusten Vertreter unter den Naturfaserbelägen. Aus den Blättern der Agave (Sisal) oder der Kokosnuss gewonnen, vereinen sie Nachhaltigkeit mit extremer Strapazierfähigkeit.',
	heroTitle: 'Sisal & Kokos - Natur pur',
	heroDescription: 'Robuste Naturfasern für anspruchsvolle Bereiche. Nachhaltig, strapazierfähig und mit einzigartigem Charakter.',
	quickFacts: [
		{ label: 'Material', value: '100%', desc: 'Naturfaser' },
		{ label: 'Preis/m²', value: '20-60€', desc: 'Je nach Qualität' },
		{ label: 'Robust', value: 'Sehr', desc: 'Stark beanspruchbar' },
		{ label: 'Nachhaltig', value: 'Ja', desc: 'Nachwachsend' }
	],
	materials: [
		{
			id: 'sisal-natur',
			name: 'Sisal Naturfaser',
			icon: '🌿',
			description: 'Klassischer Sisalteppichboden aus Agavenfasern. Hart, strapazierfähig und mit charakteristischer Struktur.',
			pros: ['Sehr strapazierfähig', 'Antistatisch', 'Natürliches Material', 'Gute Trittschalldämmung'],
			cons: ['Fleckenempfindlich', 'Nicht für Feuchträume', 'Hart beim Gehen', 'Fasern können piksen'],
			priceRange: '€€',
			pricePerSqm: '25-50€',
			durability: 4,
			comfort: 2,
			maintenance: 2,
			bestFor: ['Flur', 'Treppe', 'Büro', 'Wohnzimmer'],
			shopLinks: [
				{ name: 'Tretford', url: 'https://www.tretford.eu' },
				{ name: 'BAUHAUS', url: 'https://www.bauhaus.info/sisal' }
			]
		},
		{
			id: 'kokos',
			name: 'Kokosfaser',
			icon: '🥥',
			description: 'Noch robuster als Sisal - Kokosfasern sind ideal für Eingangsbereiche und stark frequentierte Zonen.',
			pros: ['Extrem robust', 'Schmutzabweisend', 'Natürlich', 'Günstig'],
			cons: ['Sehr hart', 'Grobe Struktur', 'Begrenzte Optik', 'Nur für robuste Bereiche'],
			priceRange: '€',
			pricePerSqm: '15-30€',
			durability: 5,
			comfort: 1,
			maintenance: 3,
			bestFor: ['Eingangsbereich', 'Flur', 'Außenbereich überdacht'],
			shopLinks: [
				{ name: 'Hornbach', url: 'https://www.hornbach.de/kokosmatten' },
				{ name: 'Amazon', url: 'https://www.amazon.de/kokosboden' }
			]
		},
		{
			id: 'sisal-wolle',
			name: 'Sisal-Wolle Mix',
			icon: '🐑',
			description: 'Kombination aus Sisal und Wolle für mehr Komfort bei erhaltener Robustheit.',
			pros: ['Weicher als pures Sisal', 'Sehr haltbar', 'Bessere Fleckresistenz', 'Wärmer'],
			cons: ['Teurer', 'Pflegeaufwändiger', 'Motten möglich bei Wolle'],
			priceRange: '€€€',
			pricePerSqm: '40-70€',
			durability: 4,
			comfort: 3,
			maintenance: 2,
			bestFor: ['Wohnzimmer', 'Schlafzimmer', 'Arbeitszimmer'],
			shopLinks: [
				{ name: 'JAB Anstoetz', url: 'https://www.jab.de' },
				{ name: 'Tretford', url: 'https://www.tretford.eu' }
			]
		},
		{
			id: 'sisal-bouclé',
			name: 'Sisal Bouclé',
			icon: '➰',
			description: 'Sisal in Schlingenoptik für eine elegantere, weichere Oberfläche.',
			pros: ['Eleganter Look', 'Etwas weicher', 'Hochwertige Optik', 'Weniger pikend'],
			cons: ['Teurer', 'Ziehfäden möglich', 'Schwieriger zu reinigen'],
			priceRange: '€€€',
			pricePerSqm: '35-60€',
			durability: 3,
			comfort: 3,
			maintenance: 2,
			bestFor: ['Wohnzimmer', 'Esszimmer', 'Boutique'],
			shopLinks: [
				{ name: 'Vorwerk', url: 'https://www.vorwerk-teppich.de' },
				{ name: 'JAB', url: 'https://www.jab.de/sisal' }
			]
		}
	],
	rooms: [
		{
			name: 'Flur / Eingang',
			icon: '🚪',
			description: 'Der klassische Einsatzort - Sisal und Kokos sind hier unschlagbar.',
			requirements: ['Extrem strapazierfähig', 'Schmutzunempfindlich', 'Robust'],
			recommendedMaterials: ['Kokosfaser', 'Sisal Naturfaser'],
			avoidMaterials: ['Sisal Bouclé'],
			thickness: '6-10mm',
			colorTips: 'Naturtöne oder dunkle Farben kaschieren Schmutz',
			specialTips: ['Fußmatte davor schützt zusätzlich', 'Regelmäßig absaugen', 'Keine nassen Schuhe!']
		},
		{
			name: 'Wohnzimmer',
			icon: '🛋️',
			description: 'Natürliche Eleganz mit robuster Oberfläche.',
			requirements: ['Strapazierfähig', 'Natürliche Optik', 'Antistatisch'],
			recommendedMaterials: ['Sisal-Wolle Mix', 'Sisal Bouclé'],
			avoidMaterials: ['Kokosfaser'],
			thickness: '6-8mm',
			colorTips: 'Naturtöne passen zu jedem Einrichtungsstil',
			specialTips: ['Unter Couchtisch evtl. anderen Belag', 'Filzgleiter unter Möbeln', 'Nicht für Haushalte mit Kleinkindern']
		},
		{
			name: 'Treppe',
			icon: '🪜',
			description: 'Rutschfest und strapazierfähig - ideal für Treppen.',
			requirements: ['Rutschfest', 'Strapazierfähig', 'Sicher'],
			recommendedMaterials: ['Sisal Naturfaser', 'Kokosfaser'],
			avoidMaterials: ['Sisal Bouclé'],
			thickness: '6-8mm',
			colorTips: 'Einheitliche Farbe für optische Ruhe',
			specialTips: ['Professionell verlegen lassen', 'Kanten gut befestigen', 'Stufenmatten als Alternative']
		}
	],
	careGuide: {
		basics: [
			{
				icon: '🧹',
				title: 'Regelmäßiges Saugen',
				description: 'Die wichtigste Pflege für Naturfaserböden.',
				tips: ['Täglich oder mehrmals wöchentlich', 'Starke Saugkraft verwenden', 'In Faserrichtung saugen']
			},
			{
				icon: '💧',
				title: 'Feuchtigkeit vermeiden',
				description: 'Naturfasern und Wasser vertragen sich nicht.',
				tips: ['Niemals nass reinigen', 'Verschüttetes sofort aufnehmen', 'Luftfeuchtigkeit unter 65%']
			},
			{
				icon: '☀️',
				title: 'UV-Schutz',
				description: 'Naturfasern können ausbleichen.',
				tips: ['Sonnenschutz an Fenstern', 'Teppiche regelmäßig drehen', 'Gleichmäßige Belichtung']
			}
		],
		maintenanceSchedule: [
			{ frequency: 'Täglich', icon: '📅', tasks: ['Absaugen in stark frequentierten Bereichen'] },
			{ frequency: 'Wöchentlich', icon: '📅', tasks: ['Gründlich saugen', 'Flecken behandeln'] },
			{ frequency: 'Halbjährlich', icon: '📅', tasks: ['Professionelle Trockenreinigung'] },
			{ frequency: 'Jährlich', icon: '📅', tasks: ['Imprägnierung erneuern'] }
		],
		stainRemovals: [
			{
				stain: 'Flüssigkeiten',
				icon: '💧',
				steps: ['Sofort abtupfen', 'Von außen nach innen', 'Nicht reiben', 'Trocknen lassen'],
				warning: 'Wasser hinterlässt Ränder - nur minimal feuchten Lappen verwenden'
			},
			{
				stain: 'Fettflecken',
				icon: '🍳',
				steps: ['Löschpapier auflegen', 'Mit Bügeleisen erwärmen', 'Fett wird aufgesogen'],
				warning: 'Hartnäckige Flecken erfordern Profi-Reinigung'
			}
		],
		materialSpecificCare: [
			{
				material: 'Sisal',
				icon: '🌿',
				tips: ['Imprägnierung empfohlen', 'Trockenreinigung bei Bedarf', 'Lose Fasern absaugen']
			},
			{
				material: 'Kokos',
				icon: '🥥',
				tips: ['Regelmäßig ausklopfen', 'Robuster als Sisal', 'Groben Schmutz abbürsten']
			}
		]
	}
};
