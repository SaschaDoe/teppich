import type { FloorType } from '$lib/types/floor';

export const terrazzo: FloorType = {
	id: 'terrazzo',
	name: 'Terrazzo',
	slug: 'terrazzo',
	icon: '🎨',
	shortDescription: 'Edles Marmorsplit-Design',
	description: 'Terrazzo ist ein traditionelles italienisches Kunsthandwerk, das sein Comeback feiert. Marmorsplitter in Zement oder Kunstharz ergeben einzigartige, zeitlose Böden.',
	heroTitle: 'Terrazzo - Renaissance eines Klassikers',
	heroDescription: 'Von venezianischen Palästen in moderne Designerwohnungen: Terrazzo ist zurück - schöner denn je.',
	quickFacts: [
		{ label: 'Lebensdauer', value: '100+ J.', desc: 'Jahrhunderte möglich' },
		{ label: 'Preis/m²', value: '80-300€', desc: 'Handwerkskunst' },
		{ label: 'Einzigartig', value: '100%', desc: 'Jeder Boden ein Unikat' },
		{ label: 'Trend', value: 'Revival', desc: 'Wieder sehr gefragt' }
	],
	materials: [
		{
			id: 'terrazzo-klassisch',
			name: 'Klassischer Terrazzo (Zement)',
			icon: '🏛️',
			description: 'Traditioneller Terrazzo mit Zementbindung. Vor Ort gegossen und geschliffen - echte Handwerkskunst.',
			pros: ['Authentisch', 'Extrem langlebig', 'Fugenlos', 'Individuelle Gestaltung'],
			cons: ['Sehr teuer', 'Lange Bauzeit', 'Schwer zu reparieren', 'Wenige Fachbetriebe'],
			priceRange: '€€€€',
			pricePerSqm: '150-300€',
			durability: 5,
			comfort: 2,
			maintenance: 3,
			bestFor: ['Altbausanierung', 'Luxuswohnungen', 'Hotels', 'Museen'],
			shopLinks: [
				{ name: 'Terrazzo-Manufaktur', url: 'https://www.terrazzo-manufaktur.de' },
				{ name: 'Italienische Handwerker', url: 'https://www.terrazzo-italiano.de' }
			]
		},
		{
			id: 'terrazzo-kunstharz',
			name: 'Terrazzo Kunstharz',
			icon: '💎',
			description: 'Moderne Variante mit Epoxidharz-Bindung. Schneller, vielseitiger und günstiger.',
			pros: ['Schnellere Verarbeitung', 'Mehr Farboptionen', 'Wasserfest', 'Dünner möglich'],
			cons: ['Weniger traditionell', 'Kann vergilben', 'Empfindlicher gegen Kratzer'],
			priceRange: '€€€',
			pricePerSqm: '100-180€',
			durability: 4,
			comfort: 3,
			maintenance: 4,
			bestFor: ['Moderne Räume', 'Badezimmer', 'Gewerbe'],
			shopLinks: [
				{ name: 'Epodur', url: 'https://www.epodur.de' },
				{ name: 'Silikal', url: 'https://www.silikal.de' }
			]
		},
		{
			id: 'terrazzo-fliesen',
			name: 'Terrazzo-Fliesen',
			icon: '🔲',
			description: 'Vorgefertigte Terrazzofliesen für einfachere Verlegung. Industriell hergestellt mit gleichmäßigem Look.',
			pros: ['Günstiger als Gussterrazzo', 'Einfachere Verlegung', 'Gleichmäßige Qualität', 'Viele Designs'],
			cons: ['Fugen sichtbar', 'Weniger authentisch', 'Begrenzte Größen'],
			priceRange: '€€',
			pricePerSqm: '60-100€',
			durability: 4,
			comfort: 2,
			maintenance: 4,
			bestFor: ['Wohnzimmer', 'Küche', 'Flur'],
			shopLinks: [
				{ name: 'Fliesenmax', url: 'https://www.fliesenmax.de/terrazzo' },
				{ name: 'BAUHAUS', url: 'https://www.bauhaus.info/terrazzo' }
			]
		},
		{
			id: 'terrazzo-optik',
			name: 'Terrazzo-Optik (Feinsteinzeug)',
			icon: '🎭',
			description: 'Feinsteinzeug mit aufgedrucktem Terrazzo-Design. Der günstige Weg zum Trend-Look.',
			pros: ['Günstig', 'Pflegeleicht', 'Robuste Oberfläche', 'Viele Varianten'],
			cons: ['Nicht authentisch', 'Muster wiederholen sich', 'Kein echtes Terrazzo'],
			priceRange: '€',
			pricePerSqm: '30-50€',
			durability: 4,
			comfort: 2,
			maintenance: 5,
			bestFor: ['Budget-Projekt', 'Mietwohnung', 'Badezimmer'],
			shopLinks: [
				{ name: 'Hornbach', url: 'https://www.hornbach.de/terrazzo-optik' },
				{ name: 'OBI', url: 'https://www.obi.de/terrazzo-fliesen' }
			]
		}
	],
	rooms: [
		{
			name: 'Eingangsbereich / Flur',
			icon: '🚪',
			description: 'Der klassische Einsatzort für Terrazzo - repräsentativ und strapazierfähig.',
			requirements: ['Strapazierfähig', 'Repräsentativ', 'Pflegeleicht'],
			recommendedMaterials: ['Klassischer Terrazzo', 'Terrazzo-Fliesen'],
			avoidMaterials: [],
			thickness: '15-25mm bei Guss',
			colorTips: 'Mittlere Töne kaschieren Schmutz am besten',
			specialTips: ['Der erste Eindruck zählt', 'Fußmatte schützt vor Abrieb', 'Heller Sockel hellt auf']
		},
		{
			name: 'Badezimmer',
			icon: '🚿',
			description: 'Wasserfester Terrazzo (Kunstharz) eignet sich hervorragend fürs Bad.',
			requirements: ['Wasserfest', 'Rutschfest', 'Hygienisch'],
			recommendedMaterials: ['Terrazzo Kunstharz', 'Terrazzo-Fliesen'],
			avoidMaterials: ['Klassischer Zement-Terrazzo (säureempfindlich)'],
			thickness: '8-15mm',
			colorTips: 'Helle Steine vergrößern optisch',
			specialTips: ['Fugenlos bis in die Dusche möglich', 'Rutschfeste Zuschläge einarbeiten']
		},
		{
			name: 'Wohnzimmer',
			icon: '🛋️',
			description: 'Terrazzo als Designelement im Wohnbereich.',
			requirements: ['Fußbodenheizung möglich', 'Optischer Blickfang', 'Langlebig'],
			recommendedMaterials: ['Klassischer Terrazzo', 'Terrazzo-Fliesen'],
			avoidMaterials: [],
			thickness: '15-20mm',
			colorTips: 'Farbige Zuschläge als Akzent zur Einrichtung',
			specialTips: ['Teppiche für Wärme', 'Fußbodenheizung empfohlen', 'Möbel mit Filzgleitern']
		}
	],
	careGuide: {
		basics: [
			{
				icon: '🧹',
				title: 'Regelmäßige Reinigung',
				description: 'Terrazzo ist überraschend pflegeleicht.',
				tips: ['Täglich fegen', 'Feucht wischen mit pH-neutralem Reiniger', 'Keine säurehaltigen Mittel']
			},
			{
				icon: '✨',
				title: 'Glanz erhalten',
				description: 'Der typische Terrazzo-Glanz braucht Pflege.',
				tips: ['Regelmäßig polieren', 'Kristallisieren bei Bedarf', 'Wachs für Glanz']
			},
			{
				icon: '🛡️',
				title: 'Schutz',
				description: 'Vorbeugen erhält die Schönheit.',
				tips: ['Filzgleiter unter Möbel', 'Säuren sofort aufwischen', 'Imprägnierung erneuern']
			}
		],
		maintenanceSchedule: [
			{ frequency: 'Täglich', icon: '📅', tasks: ['Fegen', 'Flecken entfernen'] },
			{ frequency: 'Wöchentlich', icon: '📅', tasks: ['Feucht wischen'] },
			{ frequency: 'Jährlich', icon: '📅', tasks: ['Grundreinigung', 'Imprägnierung prüfen'] },
			{ frequency: 'Alle 5-10 Jahre', icon: '📅', tasks: ['Professionell schleifen', 'Polieren', 'Kristallisieren'] }
		],
		stainRemovals: [
			{
				stain: 'Säureflecken',
				icon: '🍋',
				steps: ['Sofort neutralisieren', 'Fläche schleifen lassen', 'Nachpolieren'],
				warning: 'Säure ätzt Terrazzo - Prävention ist alles'
			},
			{
				stain: 'Fettflecken',
				icon: '🛢️',
				steps: ['Katzenstreu/Mehl aufstreuen', 'Einwirken', 'Absaugen', 'Entfetter auftragen'],
				warning: 'Bei unversiegeltem Terrazzo kann Fett eindringen'
			}
		],
		materialSpecificCare: [
			{
				material: 'Zement-Terrazzo',
				icon: '🏛️',
				tips: ['Säureempfindlich!', 'Regelmäßig wachsen', 'Kristallisieren für Glanz', 'Professionelle Pflege empfohlen']
			},
			{
				material: 'Kunstharz-Terrazzo',
				icon: '💎',
				tips: ['Weniger säureempfindlich', 'Nicht zu heiß reinigen', 'UV-Schutz bei Sonneneinstrahlung']
			}
		]
	}
};
