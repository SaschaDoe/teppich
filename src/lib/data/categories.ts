import type { FloorCategory } from '$lib/types/floor';

export const categories: FloorCategory[] = [
	{
		id: 'holz',
		name: 'Holzböden',
		slug: 'holz',
		icon: '🪵',
		description: 'Natürliche Wärme und zeitlose Eleganz - von klassischem Parkett bis modernem Laminat',
		color: '#8B4513',
		floorTypes: [
			{ id: 'parkett', name: 'Parkett', slug: 'parkett', icon: '🪵', shortDescription: 'Echtholz in eleganten Mustern' },
			{ id: 'dielen', name: 'Massivholzdielen', slug: 'dielen', icon: '🌲', shortDescription: 'Klassische breite Holzdielen' },
			{ id: 'laminat', name: 'Laminat', slug: 'laminat', icon: '📋', shortDescription: 'Holz-Optik zum kleinen Preis' },
			{ id: 'kork', name: 'Korkboden', slug: 'kork', icon: '🍾', shortDescription: 'Warm, elastisch, nachhaltig' },
			{ id: 'bambus', name: 'Bambusboden', slug: 'bambus', icon: '🎋', shortDescription: 'Hart, nachhaltig, exotisch' }
		]
	},
	{
		id: 'kunststoff',
		name: 'Kunststoffböden',
		slug: 'kunststoff',
		icon: '🧪',
		description: 'Robust, pflegeleicht und vielseitig - moderne Designböden für jeden Anspruch',
		color: '#4A90D9',
		floorTypes: [
			{ id: 'vinyl', name: 'Vinyl / Designboden', slug: 'vinyl', icon: '✨', shortDescription: 'LVT/SPC - robust und vielseitig' },
			{ id: 'linoleum', name: 'Linoleum', slug: 'linoleum', icon: '🌿', shortDescription: 'Natürlich und nachhaltig' },
			{ id: 'pvc', name: 'PVC-Boden', slug: 'pvc', icon: '🔲', shortDescription: 'Klassiker für Nutzräume' },
			{ id: 'gummi', name: 'Gummi / Kautschuk', slug: 'gummi', icon: '⚫', shortDescription: 'Extrem strapazierfähig' }
		]
	},
	{
		id: 'mineralisch',
		name: 'Mineralische Böden',
		slug: 'mineralisch',
		icon: '🪨',
		description: 'Langlebig und elegant - von klassischen Fliesen bis zu modernem Sichtbeton',
		color: '#708090',
		floorTypes: [
			{ id: 'fliesen', name: 'Keramikfliesen', slug: 'fliesen', icon: '🔲', shortDescription: 'Der Klassiker für Bad & Küche' },
			{ id: 'feinsteinzeug', name: 'Feinsteinzeug', slug: 'feinsteinzeug', icon: '💎', shortDescription: 'Hochwertige dichte Keramik' },
			{ id: 'naturstein', name: 'Naturstein', slug: 'naturstein', icon: '🪨', shortDescription: 'Marmor, Granit, Schiefer' },
			{ id: 'beton', name: 'Betonboden', slug: 'beton', icon: '🏗️', shortDescription: 'Industrial-Look modern' },
			{ id: 'terrazzo', name: 'Terrazzo', slug: 'terrazzo', icon: '🎨', shortDescription: 'Edles Marmorsplit-Design' }
		]
	},
	{
		id: 'fugenlos',
		name: 'Fugenlose Böden',
		slug: 'fugenlos',
		icon: '✨',
		description: 'Nahtlose Eleganz - moderne Beschichtungen ohne störende Fugen',
		color: '#9B59B6',
		floorTypes: [
			{ id: 'mikrozement', name: 'Mikrozement', slug: 'mikrozement', icon: '🏛️', shortDescription: 'Beton-Optik ultradünn' },
			{ id: 'epoxidharz', name: 'Epoxidharz', slug: 'epoxidharz', icon: '💧', shortDescription: 'Hochglänzend und robust' },
			{ id: 'spachtelboden', name: 'Spachtelboden', slug: 'spachtelboden', icon: '🖌️', shortDescription: 'Individuell gestaltet' }
		]
	},
	{
		id: 'textil',
		name: 'Textile Böden',
		slug: 'textil',
		icon: '🧶',
		description: 'Weich, warm und gemütlich - von klassischem Teppich bis zu Naturfasern',
		color: '#E74C3C',
		floorTypes: [
			{ id: 'teppich', name: 'Teppichboden', slug: 'teppich', icon: '🧵', shortDescription: 'Weich und schalldämmend' },
			{ id: 'sisal', name: 'Sisal / Kokos', slug: 'sisal', icon: '🌿', shortDescription: 'Robuste Naturfasern' },
			{ id: 'seegras', name: 'Seegras', slug: 'seegras', icon: '🌊', shortDescription: 'Natürlich strukturiert' }
		]
	},
	{
		id: 'spezial',
		name: 'Spezialböden',
		slug: 'spezial',
		icon: '💎',
		description: 'Außergewöhnliche Bodenbeläge für besondere Ansprüche',
		color: '#F39C12',
		floorTypes: [
			{ id: 'glas', name: 'Glasboden', slug: 'glas', icon: '🔍', shortDescription: 'Transparent und modern' },
			{ id: 'leder', name: 'Lederboden', slug: 'leder', icon: '👜', shortDescription: 'Luxuriös und einzigartig' },
			{ id: 'steinteppich', name: 'Steinteppich', slug: 'steinteppich', icon: '🪨', shortDescription: 'Kiesel in Kunstharz' }
		]
	}
];
