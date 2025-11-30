import type { FloorType } from '$lib/types/floor';

export const beton: FloorType = {
	id: 'beton',
	name: 'Betonboden',
	slug: 'beton',
	icon: '🏗️',
	description: 'Sichtbeton ist der Inbegriff des Industrial-Styles. Ob als geschliffener Estrich, polierter Beton oder Designboden - die puristische Ästhetik ist zeitlos modern.',
	heroTitle: 'Betonboden - Industrial Chic',
	heroDescription: 'Roh, ehrlich, modern. Betonböden sind das Statement für minimalistisches Design.',
	quickFacts: [
		{ label: 'Lebensdauer', value: '50+ J.', desc: 'Extrem langlebig' },
		{ label: 'Preis/m²', value: '30-120€', desc: 'Je nach Ausführung' },
		{ label: 'Trend', value: 'Industrial', desc: 'Loft-Style' },
		{ label: 'Pflege', value: 'Einfach', desc: 'Nach Versiegelung' }
	],
	materials: [
		{
			id: 'geschliffener-estrich',
			name: 'Geschliffener Estrich',
			icon: '💎',
			description: 'Vorhandener Estrich wird geschliffen und versiegelt. Kostengünstig bei Sanierungen.',
			pros: ['Nutzung vorhandener Substanz', 'Günstiger als Neuguss', 'Authentischer Look', 'Nachhaltig'],
			cons: ['Ergebnis abhängig vom Estrich', 'Risse möglich', 'Flecken können durchscheinen'],
			priceRange: '€€',
			pricePerSqm: '30-60€',
			durability: 4,
			comfort: 2,
			maintenance: 4,
			bestFor: ['Loft', 'Atelier', 'Gewerbe'],
			shopLinks: [
				{ name: 'Estrich-Profis', url: 'https://www.estrichprofis.de' },
				{ name: 'Lokale Estrichleger', url: 'https://www.myhammer.de' }
			]
		},
		{
			id: 'sichtbeton',
			name: 'Sichtbeton (Gussboden)',
			icon: '🏗️',
			description: 'Frisch gegossener Betonboden für perfekte Oberflächen. Das Original des Industrial-Looks.',
			pros: ['Perfekte Oberfläche', 'Fugenlos', 'Individuelle Färbung möglich', 'Extrem robust'],
			cons: ['Teuer', 'Lange Trocknungszeit', 'Professionelle Ausführung nötig', 'Kalt'],
			priceRange: '€€€',
			pricePerSqm: '80-120€',
			durability: 5,
			comfort: 2,
			maintenance: 4,
			bestFor: ['Neubau', 'Architektenhaus', 'Gewerbe'],
			shopLinks: [
				{ name: 'Betonwerk', url: 'https://www.betonwerk.de' },
				{ name: 'Sichtbeton-Experten', url: 'https://www.sichtbeton.de' }
			]
		},
		{
			id: 'polierter-beton',
			name: 'Polierter Beton',
			icon: '✨',
			description: 'Hochglanzpolierter Betonboden mit spiegelnder Oberfläche. Elegant und pflegeleicht.',
			pros: ['Hochglanzoptik', 'Sehr pflegeleicht', 'Reflektiert Licht', 'Keine Beschichtung nötig'],
			cons: ['Rutschgefahr', 'Teuer', 'Kratzer sichtbar', 'Aufwändige Herstellung'],
			priceRange: '€€€',
			pricePerSqm: '60-100€',
			durability: 5,
			comfort: 2,
			maintenance: 5,
			bestFor: ['Showroom', 'Museum', 'Luxuswohnungen'],
			shopLinks: [
				{ name: 'Husemann', url: 'https://www.husemann.de' },
				{ name: 'Betonprofis', url: 'https://www.betonprofis.de' }
			]
		},
		{
			id: 'beton-optik',
			name: 'Beton-Optik (Designboden)',
			icon: '🎭',
			description: 'Vinyl oder Laminat in täuschend echter Betonoptik. Der einfache Weg zum Industrial-Look.',
			pros: ['Günstiger als echter Beton', 'Fußwarm', 'Einfache Verlegung', 'Weich beim Gehen'],
			cons: ['Nicht authentisch', 'Muster wiederholen sich', 'Weniger langlebig'],
			priceRange: '€',
			pricePerSqm: '20-40€',
			durability: 3,
			comfort: 4,
			maintenance: 5,
			bestFor: ['Wohnzimmer', 'Schlafzimmer', 'Mietwohnung'],
			shopLinks: [
				{ name: 'BAUHAUS', url: 'https://www.bauhaus.info/betonoptik' },
				{ name: 'OBI', url: 'https://www.obi.de/designboden-betonoptik' }
			]
		}
	],
	rooms: [
		{
			name: 'Wohnzimmer (Loft)',
			icon: '🛋️',
			description: 'Echter Beton für den authentischen Loft-Look.',
			requirements: ['Fußbodenheizung', 'Versiegelt', 'Großflächig'],
			recommendedMaterials: ['Polierter Beton', 'Geschliffener Estrich'],
			avoidMaterials: [],
			thickness: '50-80mm Estrich',
			colorTips: 'Natürliches Grau oder Anthrazit',
			specialTips: ['Teppiche für Wärme', 'Fußbodenheizung empfohlen', 'Möbel setzen Akzente']
		},
		{
			name: 'Küche',
			icon: '🍳',
			description: 'Betonboden in der Küche ist praktisch und stylisch.',
			requirements: ['Versiegelt', 'Pflegeleicht', 'Robust'],
			recommendedMaterials: ['Polierter Beton', 'Geschliffener Estrich'],
			avoidMaterials: ['Unversiegelter Beton'],
			thickness: 'Standard',
			colorTips: 'Hellere Töne für mehr Helligkeit',
			specialTips: ['Vor dem Einzug versiegeln', 'Anti-Rutsch-Läufer am Herd', 'Öl/Fett sofort aufwischen']
		},
		{
			name: 'Garage / Werkstatt',
			icon: '🔧',
			description: 'Der klassische Einsatzort für Betonböden.',
			requirements: ['Extrem belastbar', 'Ölbeständig', 'Pflegeleicht'],
			recommendedMaterials: ['Sichtbeton', 'Beschichteter Beton'],
			avoidMaterials: ['Ungeschützter Beton'],
			thickness: '80-100mm',
			colorTips: 'Grau Standard, farbige Beschichtung möglich',
			specialTips: ['Epoxidharz-Beschichtung für Ölfestigkeit', 'Gefälle für Wasserablauf']
		}
	],
	careGuide: {
		basics: [
			{
				icon: '🧹',
				title: 'Regelmäßige Reinigung',
				description: 'Versiegelter Beton ist überraschend pflegeleicht.',
				tips: ['Fegen oder saugen', 'Feucht wischen', 'pH-neutrale Reiniger']
			},
			{
				icon: '🛡️',
				title: 'Versiegelung pflegen',
				description: 'Die Versiegelung ist der Schlüssel zur Pflegeleichtigkeit.',
				tips: ['Versiegelung bei Bedarf erneuern', 'Kratzer auspolieren', 'Politur auftragen']
			},
			{
				icon: '💧',
				title: 'Flecken vermeiden',
				description: 'Unversiegelter Beton saugt Flüssigkeiten auf.',
				tips: ['Verschüttetes sofort aufwischen', 'Imprägnierung prüfen', 'Matten an Eingängen']
			}
		],
		maintenanceSchedule: [
			{ frequency: 'Täglich', icon: '📅', tasks: ['Bei Bedarf fegen'] },
			{ frequency: 'Wöchentlich', icon: '📅', tasks: ['Feucht wischen'] },
			{ frequency: 'Jährlich', icon: '📅', tasks: ['Versiegelung prüfen', 'Nachpolieren'] },
			{ frequency: 'Alle 5-10 Jahre', icon: '📅', tasks: ['Neu versiegeln', 'Abschleifen bei Bedarf'] }
		],
		stainRemovals: [
			{
				stain: 'Ölflecken',
				icon: '🛢️',
				steps: ['Katzenstreu aufstreuen', 'Einwirken lassen', 'Absaugen', 'Entfetter auftragen'],
				warning: 'Bei unversiegeltem Beton können Ölflecken permanent sein'
			},
			{
				stain: 'Rostflecken',
				icon: '🔩',
				steps: ['Spezial-Rostentferner für Beton', 'Einwirken', 'Ausspülen', 'Nachbehandeln'],
				warning: 'Rost kann tief eindringen - schnell handeln'
			}
		],
		materialSpecificCare: [
			{
				material: 'Polierter Beton',
				icon: '✨',
				tips: ['Nicht scheuern', 'Polierpaste bei mattieren', 'Wachs für Glanz']
			},
			{
				material: 'Geschliffener Estrich',
				icon: '💎',
				tips: ['Versiegelung wichtig', 'Risse beobachten', 'Lokale Reparaturen möglich']
			}
		]
	}
};
