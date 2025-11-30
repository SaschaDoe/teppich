import type { FloorType } from '$lib/types/floor';

export const parkett: FloorType = {
	id: 'parkett',
	name: 'Parkett',
	slug: 'parkett',
	icon: '🪵',
	description: 'Echtholzboden mit zeitloser Eleganz und natürlicher Wärme',
	heroTitle: 'Parkett Ratgeber',
	heroDescription: 'Ihr umfassender Guide für echten Holzboden. Entdecken Sie Holzarten, Verlegemuster und finden Sie den perfekten Parkett für Ihr Zuhause.',
	quickFacts: [
		{ label: 'Lebensdauer', value: '30-100 Jahre', desc: 'mehrfach renovierbar' },
		{ label: 'Wertsteigerung', value: '+5-15%', desc: 'für Immobilien' },
		{ label: 'Renovierbar', value: '3-8 mal', desc: 'abschleifbar' },
		{ label: 'Holzarten', value: '20+', desc: 'von Eiche bis Walnuss' }
	],
	materials: [
		{
			name: 'Eiche',
			id: 'eiche',
			icon: '🌳',
			description: 'Der Klassiker unter den Parkettholzern. Eiche ist extrem vielseitig und passt zu fast jedem Einrichtungsstil - von rustikal bis modern.',
			pros: [
				'Extrem hart und strapazierfähig',
				'Vielseitige Farbvarianten (natur, geräuchert, weiß geölt)',
				'Zeitloser, klassischer Look',
				'Wertstabil und langlebig',
				'Gut kombinierbar mit Fußbodenheizung',
				'Große Auswahl an Sortierungen'
			],
			cons: [
				'Mittleres bis hohes Preissegment',
				'Kann nachdunkeln',
				'Empfindlich gegen Wasser'
			],
			priceRange: '€€€',
			pricePerSqm: '40 - 120 €/m²',
			durability: 5,
			comfort: 4,
			maintenance: 4,
			bestFor: ['Wohnzimmer', 'Schlafzimmer', 'Flur', 'Esszimmer'],
			shopLinks: [
				{ name: 'BAUHAUS Eichenparkett', url: 'https://www.bauhaus.info/parkett/c/10000994?q=eiche' },
				{ name: 'Hornbach Parkett', url: 'https://www.hornbach.de/shop/Parkett/S1796/artikelliste.html' },
				{ name: 'OBI Parkett', url: 'https://www.obi.de/parkett/c/1587' },
				{ name: 'casando Eiche', url: 'https://www.casando.de/parkett/eiche/' }
			]
		},
		{
			name: 'Nussbaum',
			id: 'nussbaum',
			icon: '🌰',
			description: 'Edles, dunkles Holz mit charakteristischer Maserung. Amerikanischer Nussbaum (Walnut) ist besonders beliebt für moderne, elegante Räume.',
			pros: [
				'Edle, dunkle Optik',
				'Einzigartige Maserung',
				'Hochwertige Ausstrahlung',
				'Dunkelt kaum nach',
				'Hart und langlebig'
			],
			cons: [
				'Hohe Preisklasse',
				'Begrenzte Verfügbarkeit',
				'Kratzer sichtbarer als bei hellem Holz',
				'Nicht für alle Einrichtungsstile'
			],
			priceRange: '€€€€',
			pricePerSqm: '70 - 180 €/m²',
			durability: 4,
			comfort: 4,
			maintenance: 4,
			bestFor: ['Wohnzimmer', 'Schlafzimmer', 'Arbeitszimmer'],
			shopLinks: [
				{ name: 'BAUHAUS Nussbaumparkett', url: 'https://www.bauhaus.info/parkett/c/10000994?q=nussbaum' },
				{ name: 'casando Nussbaum', url: 'https://www.casando.de/parkett/nussbaum/' },
				{ name: 'Parkett Direkt', url: 'https://www.parkett-direkt.net/nussbaum-parkett' }
			]
		},
		{
			name: 'Buche',
			id: 'buche',
			icon: '🌲',
			description: 'Helles, freundliches Holz mit gleichmäßiger Maserung. Buche ist hart, aber reagiert empfindlich auf Feuchtigkeit.',
			pros: [
				'Günstiger als Eiche',
				'Sehr hart (Brinellhärte)',
				'Helle, freundliche Optik',
				'Gleichmäßige Struktur',
				'Gute Verfügbarkeit'
			],
			cons: [
				'Reagiert stark auf Luftfeuchtigkeit',
				'Neigt zu Verfärbungen',
				'Nicht für Fußbodenheizung geeignet',
				'Dunkelt stark nach'
			],
			priceRange: '€€',
			pricePerSqm: '30 - 70 €/m²',
			durability: 4,
			comfort: 4,
			maintenance: 3,
			bestFor: ['Kinderzimmer', 'Gästezimmer', 'Hobbyräume'],
			shopLinks: [
				{ name: 'BAUHAUS Buchenparkett', url: 'https://www.bauhaus.info/parkett/c/10000994?q=buche' },
				{ name: 'OBI Buche Parkett', url: 'https://www.obi.de/parkett/c/1587?q=buche' }
			]
		},
		{
			name: 'Ahorn',
			id: 'ahorn',
			icon: '🍁',
			description: 'Sehr helles, fast weißes Holz mit feiner Maserung. Ahorn bringt viel Licht in den Raum und wirkt modern und skandinavisch.',
			pros: [
				'Sehr hell und freundlich',
				'Extrem hart',
				'Feine, elegante Maserung',
				'Modern-skandinavischer Look',
				'Lässt Räume größer wirken'
			],
			cons: [
				'Empfindlich gegen Verfärbungen',
				'Schmutz gut sichtbar',
				'Kann vergilben',
				'Nicht für Fußbodenheizung'
			],
			priceRange: '€€€',
			pricePerSqm: '45 - 100 €/m²',
			durability: 5,
			comfort: 4,
			maintenance: 3,
			bestFor: ['Moderne Wohnräume', 'Arbeitszimmer', 'Praxen'],
			shopLinks: [
				{ name: 'casando Ahorn', url: 'https://www.casando.de/parkett/ahorn/' },
				{ name: 'Parkett Direkt Ahorn', url: 'https://www.parkett-direkt.net/ahorn-parkett' }
			]
		},
		{
			name: 'Esche',
			id: 'esche',
			icon: '🌳',
			description: 'Helles Holz mit markanter Maserung. Die Esche ist ähnlich hart wie Eiche und bietet ein gutes Preis-Leistungs-Verhältnis.',
			pros: [
				'Markante, lebhafte Maserung',
				'Hart wie Eiche',
				'Gutes Preis-Leistungs-Verhältnis',
				'Elastisch und robust',
				'Geeignet für Fußbodenheizung'
			],
			cons: [
				'Begrenzte Farbauswahl',
				'Weniger verbreitet',
				'Kann nachdunkeln'
			],
			priceRange: '€€',
			pricePerSqm: '35 - 80 €/m²',
			durability: 5,
			comfort: 4,
			maintenance: 4,
			bestFor: ['Wohnzimmer', 'Esszimmer', 'Flur'],
			shopLinks: [
				{ name: 'BAUHAUS Eschenparkett', url: 'https://www.bauhaus.info/parkett/c/10000994?q=esche' },
				{ name: 'casando Esche', url: 'https://www.casando.de/parkett/esche/' }
			]
		},
		{
			name: 'Tropische Hölzer',
			id: 'tropisch',
			icon: '🌴',
			description: 'Exotische Hölzer wie Teak, Merbau, Doussie oder Wenge bieten außergewöhnliche Farben und extreme Härte.',
			pros: [
				'Extrem hart und robust',
				'Einzigartige Farben und Maserungen',
				'Sehr langlebig',
				'Natürliche Resistenz gegen Schädlinge',
				'Exklusive Optik'
			],
			cons: [
				'Höchste Preisklasse',
				'Nachhaltigkeits-Bedenken (FSC beachten!)',
				'Lange Lieferzeiten',
				'Schwer zu reparieren',
				'Spezialpflege nötig'
			],
			priceRange: '€€€€',
			pricePerSqm: '80 - 250 €/m²',
			durability: 5,
			comfort: 4,
			maintenance: 4,
			bestFor: ['Repräsentative Räume', 'Luxuswohnungen'],
			shopLinks: [
				{ name: 'casando Tropenholz', url: 'https://www.casando.de/parkett/' },
				{ name: 'Parkett Direkt Exoten', url: 'https://www.parkett-direkt.net/exotenparkett' }
			]
		}
	],
	rooms: [
		{
			name: 'Wohnzimmer',
			icon: '🛋️',
			description: 'Das Herzstück des Hauses verdient einen edlen Parkettboden, der Wärme und Eleganz ausstrahlt.',
			requirements: [
				'Mittlere bis hohe Strapazierfähigkeit',
				'Repräsentatives Erscheinungsbild',
				'Fußwarm und angenehm',
				'Passend zur Einrichtung'
			],
			recommendedMaterials: ['Eiche', 'Nussbaum', 'Esche'],
			avoidMaterials: ['Buche (zu empfindlich)', 'Sehr weiche Hölzer'],
			thickness: 'Massivparkett 15-22mm oder Mehrschicht 14-15mm',
			colorTips: 'Mittlere Töne sind zeitlos. Dunkle Böden wirken elegant, zeigen aber mehr Staub. Helle Böden lassen Räume größer wirken.',
			specialTips: [
				'Fischgrätmuster für klassische Eleganz',
				'Landhausdielen für modernen Look',
				'Bei Fußbodenheizung: Mehrschichtparkett bevorzugen',
				'Filzgleiter unter allen Möbeln verwenden'
			]
		},
		{
			name: 'Schlafzimmer',
			icon: '🛏️',
			description: 'Ein warmer Holzboden sorgt für ein gemütliches Ambiente und angenehmes Barfußgefühl.',
			requirements: [
				'Fußwärme',
				'Geringe Beanspruchung',
				'Ruhige, entspannte Optik',
				'Allergikerfreundlich'
			],
			recommendedMaterials: ['Eiche natur geölt', 'Ahorn', 'Buche'],
			avoidMaterials: ['Sehr dunkle Hölzer (wirken beengend)'],
			thickness: 'Massivparkett oder Mehrschicht ab 10mm',
			colorTips: 'Warme, natürliche Töne fördern Entspannung. Helle Hölzer lassen den Raum luftig wirken.',
			specialTips: [
				'Geöltes Parkett fühlt sich natürlicher an',
				'Teppich-Brücken am Bett für extra Komfort',
				'Bei Allergien: versiegeltes Parkett leichter zu reinigen'
			]
		},
		{
			name: 'Flur / Eingangsbereich',
			icon: '🚪',
			description: 'Stark beanspruchter Bereich - hier muss Parkett besonders robust sein.',
			requirements: [
				'Maximale Strapazierfähigkeit',
				'Schmutzunempfindlich',
				'Robust gegen Feuchtigkeit',
				'Pflegeleicht'
			],
			recommendedMaterials: ['Eiche geräuchert', 'Esche', 'Tropische Hölzer'],
			avoidMaterials: ['Buche', 'Ahorn (zu hell)', 'Weiche Hölzer'],
			thickness: 'Massivparkett 22mm oder Mehrschicht 15mm',
			colorTips: 'Mittlere bis dunkle Töne kaschieren Schmutz besser. Strukturierte Oberflächen verbergen Kratzer.',
			specialTips: [
				'Fußmatte im Eingang ist Pflicht',
				'Gebürstete Oberfläche verbirgt Gebrauchsspuren',
				'Lackierte Oberfläche ist pflegeleichter',
				'Regelmäßig feucht wischen'
			]
		},
		{
			name: 'Küche',
			icon: '🍳',
			description: 'Parkett in der Küche ist möglich, aber erfordert besondere Vorsicht bei Wasser und Fett.',
			requirements: [
				'Wasserbeständigkeit',
				'Leicht zu reinigen',
				'Robust gegen Flecken',
				'Fettresistent'
			],
			recommendedMaterials: ['Eiche lackiert', 'Tropische Hölzer (Teak)'],
			avoidMaterials: ['Buche', 'Ahorn', 'Geöltes Parkett', 'Empfindliche Hölzer'],
			thickness: 'Mehrschichtparkett 14-15mm, verklebt',
			colorTips: 'Mittlere Töne mit Struktur verstecken Krümel und kleine Flecken.',
			specialTips: [
				'Verschüttetes sofort aufwischen!',
				'Matten vor Spüle und Herd',
				'Regelmäßig versiegeln',
				'Alternativ: Vinyl in Holzoptik erwägen'
			]
		},
		{
			name: 'Kinderzimmer',
			icon: '🧸',
			description: 'Robust und fußwarm - perfekt für spielende Kinder.',
			requirements: [
				'Hohe Strapazierfähigkeit',
				'Weich bei Stürzen',
				'Leicht zu reinigen',
				'Schadstoffarm'
			],
			recommendedMaterials: ['Eiche natur', 'Esche'],
			avoidMaterials: ['Sehr teures Parkett', 'Empfindliche Oberflächen'],
			thickness: 'Mehrschichtparkett ab 14mm',
			colorTips: 'Helle, freundliche Töne schaffen eine positive Atmosphäre.',
			specialTips: [
				'Naturgeöltes Parkett ist wärmer',
				'Kratzer können ausgebessert werden',
				'Spielteppiche schützen stark beanspruchte Bereiche',
				'Auf Öko-Zertifizierung achten (Blauer Engel)'
			]
		}
	],
	careGuide: {
		basics: [
			{
				icon: '🧹',
				title: 'Regelmäßiges Reinigen',
				description: 'Staub und Schmutz sind die größten Feinde von Parkett.',
				tips: [
					'Täglich oder alle 2 Tage trocken kehren oder saugen',
					'Staubsauger mit Parkettdüse verwenden (weiche Borsten)',
					'Wöchentlich nebelfeucht wischen',
					'Niemals nass wischen!',
					'Mikrofasertuch leicht angefeuchtet ist ideal'
				]
			},
			{
				icon: '🚫',
				title: 'Das sollten Sie vermeiden',
				description: 'Parkett ist empfindlich - diese Fehler unbedingt vermeiden.',
				tips: [
					'Stehendes Wasser (quillt das Holz)',
					'Aggressive Reiniger (Scheuermilch, Ammoniak)',
					'Dampfreiniger (zu viel Feuchtigkeit)',
					'Mikrofasertücher auf lackiertem Parkett (können kratzen)',
					'Gummi- oder Latexunterlagen (Verfärbungen)'
				]
			},
			{
				icon: '💡',
				title: 'Profi-Tipps',
				description: 'So bleibt Ihr Parkett jahrzehntelang schön.',
				tips: [
					'Filzgleiter unter ALLE Möbel',
					'Fußmatte am Eingang',
					'Schuhe ausziehen oder Hausschuhe tragen',
					'Raumklima konstant halten (50-60% Luftfeuchtigkeit)',
					'Direkte Sonneneinstrahlung vermeiden (Vorhänge/Jalousien)',
					'Pflanzen nicht direkt auf Parkett stellen'
				]
			}
		],
		maintenanceSchedule: [
			{
				frequency: 'Täglich',
				tasks: ['Grobe Verschmutzungen entfernen', 'Bei Bedarf trocken kehren'],
				icon: '📅'
			},
			{
				frequency: 'Wöchentlich',
				tasks: ['Gründlich staubsaugen', 'Nebelfeucht wischen', 'Flecken sofort behandeln'],
				icon: '📆'
			},
			{
				frequency: 'Monatlich',
				tasks: ['Intensive Reinigung mit Parkettreiniger', 'Möbel verrücken und darunter reinigen'],
				icon: '🗓️'
			},
			{
				frequency: 'Jährlich',
				tasks: [
					'Geöltes Parkett: Nachölen',
					'Lackiertes Parkett: Auffrischen mit Pflegemittel',
					'Auf Beschädigungen prüfen',
					'Fugen kontrollieren'
				],
				icon: '📋'
			}
		],
		stainRemovals: [
			{
				stain: 'Wasserflecken',
				icon: '💧',
				steps: [
					'Sofort trocknen',
					'Bei weißen Flecken: Bügeleisen über Tuch (mittlere Hitze)',
					'Anschließend nachölen oder -polieren',
					'Bei tiefen Flecken: anschleifen und nachbehandeln'
				],
				warning: 'Stehendes Wasser SOFORT aufwischen - Holz quillt schnell!'
			},
			{
				stain: 'Kratzer',
				icon: '📝',
				steps: [
					'Leichte Kratzer: Mit Walnuss einreiben',
					'Mittlere Kratzer: Holzkitt in passender Farbe',
					'Tiefe Kratzer: Anschleifen und nachbehandeln',
					'Bei geöltem Parkett: Stelle leicht anschleifen und nachölen'
				]
			},
			{
				stain: 'Absatzspuren / Gummistreifen',
				icon: '👠',
				steps: [
					'Mit Radiergummi vorsichtig wegrubbeln',
					'Alternativ: Tennisball zum Abreiben',
					'Bei hartnäckigen Spuren: Spezialgummi-Entferner'
				]
			},
			{
				stain: 'Fett / Öl',
				icon: '🫒',
				steps: [
					'Überschüssiges Fett mit Küchenpapier aufnehmen',
					'Speisestärke aufstreuen und einwirken lassen',
					'Absaugen',
					'Mit Neutralreiniger nachbehandeln'
				]
			},
			{
				stain: 'Rotwein',
				icon: '🍷',
				steps: [
					'Sofort mit Küchenpapier aufsaugen',
					'Mit leicht feuchtem Tuch nachwischen',
					'Bei Verfärbung: leicht anschleifen',
					'Nachölen oder nachlackieren'
				],
				warning: 'Niemals Salz verwenden - zieht Feuchtigkeit an!'
			}
		],
		materialSpecificCare: [
			{
				material: 'Geöltes Parkett',
				icon: '🫒',
				tips: [
					'Alle 1-2 Jahre nachölen',
					'Bei starker Beanspruchung öfter',
					'Nur spezielle Parkettöl-Reiniger verwenden',
					'Intensive Reinigung mit Holzbodenseife',
					'Reparaturen punktuell möglich'
				]
			},
			{
				material: 'Lackiertes Parkett',
				icon: '✨',
				tips: [
					'Pflegeleichter als geöltes Parkett',
					'Spezielle Parkett-Lackpflege verwenden',
					'Nicht zu nass wischen',
					'Bei Beschädigung: Komplett abschleifen nötig',
					'Alle 10-15 Jahre neu lackieren'
				]
			},
			{
				material: 'Gewachstes Parkett',
				icon: '🕯️',
				tips: [
					'Regelmäßig nachwachsen',
					'Nur geeignete Wachspflege verwenden',
					'Nicht mit Wasser reinigen',
					'Polieren für Glanz'
				]
			}
		]
	}
};
