<script lang="ts">
	interface ShopLink {
		name: string;
		url: string;
	}

	interface Material {
		name: string;
		id: string;
		description: string;
		pros: string[];
		cons: string[];
		priceRange: string;
		pricePerSqm: string;
		durability: number;
		comfort: number;
		maintenance: number;
		bestFor: string[];
		icon: string;
		shopLinks: ShopLink[];
	}

	const materials: Material[] = [
		{
			name: 'Wolle',
			id: 'wolle',
			icon: '🐑',
			description: 'Das edelste Naturmaterial für Teppichböden. Wolle ist seit Jahrhunderten der Goldstandard für hochwertige Teppiche und bietet unübertroffenen Komfort.',
			pros: [
				'Natürlich und nachhaltig',
				'Hervorragende Wärmedämmung',
				'Feuchtigkeitsregulierend',
				'Natürlich schmutzabweisend (Lanolin)',
				'Schwer entflammbar',
				'Antistatisch',
				'Sehr langlebig (20+ Jahre)'
			],
			cons: [
				'Höchste Preisklasse',
				'Empfindlich gegen Motten',
				'Nicht für Feuchträume geeignet',
				'Kann bei Nässe filzen',
				'Verblasst bei direkter Sonneneinstrahlung'
			],
			priceRange: '€€€€',
			pricePerSqm: '40 - 120 €/m²',
			durability: 5,
			comfort: 5,
			maintenance: 3,
			bestFor: ['Wohnzimmer', 'Schlafzimmer', 'Repräsentative Räume'],
			shopLinks: [
				{ name: 'Kibek Wollteppiche', url: 'https://www.kibek.de/teppiche/material/wolle/' },
				{ name: 'BAUHAUS Teppichböden', url: 'https://www.bauhaus.info/teppichboeden/c/10000992' },
				{ name: 'tedox Teppichböden', url: 'https://www.tedox.de/teppichboden/' }
			]
		},
		{
			name: 'Polyamid (Nylon)',
			id: 'polyamid',
			icon: '🔬',
			description: 'Die widerstandsfähigste Kunstfaser für Teppichböden. Ideal für stark beanspruchte Bereiche mit hoher Belastung.',
			pros: [
				'Extrem strapazierfähig',
				'Hohe Elastizität - federt zurück',
				'Einfache Reinigung',
				'Farbecht und lichtbeständig',
				'Gutes Preis-Leistungs-Verhältnis',
				'Weiche Haptik möglich'
			],
			cons: [
				'Synthetisch (nicht nachhaltig)',
				'Kann statisch aufladen',
				'Weniger temperaturregulierende Eigenschaften',
				'Schmilzt bei hoher Hitze'
			],
			priceRange: '€€€',
			pricePerSqm: '20 - 50 €/m²',
			durability: 5,
			comfort: 4,
			maintenance: 5,
			bestFor: ['Flure', 'Kinderzimmer', 'Büros', 'Stark frequentierte Bereiche'],
			shopLinks: [
				{ name: 'BAUHAUS Teppichböden', url: 'https://www.bauhaus.info/teppichboeden/c/10000992' },
				{ name: 'tedox Teppichboden', url: 'https://www.tedox.de/teppichboden/' },
				{ name: 'OBI Teppichböden', url: 'https://www.obi.de/teppichboeden/c/1595' },
				{ name: 'Hornbach Teppichboden', url: 'https://www.hornbach.de/shop/Teppichboden/S1795/artikelliste.html' }
			]
		},
		{
			name: 'Polypropylen (PP)',
			id: 'polypropylen',
			icon: '💧',
			description: 'Der Allrounder unter den Kunstfasern. Besonders beliebt für Bereiche, wo Feuchtigkeit ein Thema ist.',
			pros: [
				'Sehr preisgünstig',
				'Wasserabweisend und schimmelresistent',
				'Allergikerfreundlich',
				'Leicht zu reinigen',
				'Farbecht',
				'Antistatisch'
			],
			cons: [
				'Weniger weich als andere Fasern',
				'Geringere Widerstandsfähigkeit',
				'Kann sich bei Belastung flachlegen',
				'Nicht so langlebig',
				'Weniger luxuriöses Gefühl'
			],
			priceRange: '€',
			pricePerSqm: '8 - 25 €/m²',
			durability: 3,
			comfort: 3,
			maintenance: 5,
			bestFor: ['Keller', 'Hobbyräume', 'Mietwohnungen', 'Gästezimmer'],
			shopLinks: [
				{ name: 'tedox Teppichboden', url: 'https://www.tedox.de/teppichboden/' },
				{ name: 'BAUHAUS Teppichböden', url: 'https://www.bauhaus.info/teppichboeden/c/10000992' },
				{ name: 'POCO Teppichboden', url: 'https://www.poco.de/teppichboden/' },
				{ name: 'Roller Teppichboden', url: 'https://www.roller.de/bodenbelaege/teppichboden/' }
			]
		},
		{
			name: 'Polyester',
			id: 'polyester',
			icon: '✨',
			description: 'Weich und luxuriös im Griff, dabei bezahlbar. Polyester bietet ein seidiges Gefühl zu moderaten Preisen.',
			pros: [
				'Sehr weich und angenehm',
				'Brillante Farben möglich',
				'Gute Fleckenresistenz',
				'Hypoallergen',
				'Feuchtigkeitsabweisend',
				'Günstiger als Wolle'
			],
			cons: [
				'Weniger elastisch - legt sich flach',
				'Nicht so langlebig wie Polyamid',
				'Kann ölige Flecken anziehen',
				'Weniger umweltfreundlich'
			],
			priceRange: '€€',
			pricePerSqm: '15 - 35 €/m²',
			durability: 3,
			comfort: 5,
			maintenance: 4,
			bestFor: ['Schlafzimmer', 'Wohnzimmer', 'Gering frequentierte Räume'],
			shopLinks: [
				{ name: 'Kibek Teppiche', url: 'https://www.kibek.de/teppiche/' },
				{ name: 'BAUHAUS Teppichböden', url: 'https://www.bauhaus.info/teppichboeden/c/10000992' },
				{ name: 'Amazon Hochflor', url: 'https://www.amazon.de/s?k=hochflor+teppich+polyester' }
			]
		},
		{
			name: 'Sisal / Naturfaser',
			id: 'sisal',
			icon: '🌿',
			description: 'Für Naturliebhaber die perfekte Wahl. Sisal und andere Naturfasern wie Jute oder Kokos bieten ein rustikales, natürliches Ambiente.',
			pros: [
				'100% natürlich und biologisch abbaubar',
				'Robuste, strukturierte Oberfläche',
				'Antistatisch',
				'Gute Luftqualität',
				'Einzigartiges Design',
				'Nachhaltig'
			],
			cons: [
				'Rau auf der Haut',
				'Empfindlich gegen Feuchtigkeit',
				'Schwierig zu reinigen',
				'Kann bei Nässe schimmeln',
				'Nicht für alle Räume geeignet',
				'Farbauswahl begrenzt'
			],
			priceRange: '€€',
			pricePerSqm: '20 - 45 €/m²',
			durability: 4,
			comfort: 2,
			maintenance: 2,
			bestFor: ['Arbeitszimmer', 'Eingangsbereich', 'Wintergärten'],
			shopLinks: [
				{ name: 'Kibek Sisalteppiche', url: 'https://www.kibek.de/teppiche/material/sisal/' },
				{ name: 'BAUHAUS Naturfaser', url: 'https://www.bauhaus.info/teppichboeden/c/10000992' },
				{ name: 'Amazon Sisalteppich', url: 'https://www.amazon.de/s?k=sisalteppich' }
			]
		},
		{
			name: 'Mischgewebe',
			id: 'mischgewebe',
			icon: '🔄',
			description: 'Das Beste aus mehreren Welten. Mischgewebe kombinieren die Vorteile verschiedener Fasern für ein optimales Ergebnis.',
			pros: [
				'Kombiniert Vorteile verschiedener Materialien',
				'Oft Wolle/Synthetik-Mix',
				'Besseres Preis-Leistungs-Verhältnis als reine Wolle',
				'Verbesserte Strapazierfähigkeit',
				'Vielseitig einsetzbar'
			],
			cons: [
				'Eigenschaften variieren je nach Mischverhältnis',
				'Pflegeanleitung genau beachten',
				'Qualität schwankt stark',
				'Nicht immer eindeutig deklariert'
			],
			priceRange: '€€-€€€',
			pricePerSqm: '25 - 60 €/m²',
			durability: 4,
			comfort: 4,
			maintenance: 4,
			bestFor: ['Alle Wohnräume', 'Familienhaushalte'],
			shopLinks: [
				{ name: 'Kibek Teppiche', url: 'https://www.kibek.de/teppiche/' },
				{ name: 'BAUHAUS Teppichböden', url: 'https://www.bauhaus.info/teppichboeden/c/10000992' },
				{ name: 'tedox Teppichboden', url: 'https://www.tedox.de/teppichboden/' },
				{ name: 'Hornbach Teppichboden', url: 'https://www.hornbach.de/shop/Teppichboden/S1795/artikelliste.html' }
			]
		}
	];

	function getRatingStars(rating: number): string {
		return '★'.repeat(rating) + '☆'.repeat(5 - rating);
	}
</script>

<svelte:head>
	<title>Teppichboden Materialien - Ratgeber</title>
</svelte:head>

<div class="section-header">
	<h1>Teppichboden Materialien</h1>
	<p>Alles über die verschiedenen Materialien, ihre Eigenschaften, Vor- und Nachteile</p>
</div>

<div class="comparison-table">
	<h2>Materialvergleich auf einen Blick</h2>
	<div class="table-wrapper">
		<table>
			<thead>
				<tr>
					<th>Material</th>
					<th>Preis/m²</th>
					<th>Haltbarkeit</th>
					<th>Komfort</th>
					<th>Pflege</th>
				</tr>
			</thead>
			<tbody>
				{#each materials as material}
					<tr>
						<td><a href="#{material.id}" class="table-link"><strong>{material.icon} {material.name}</strong></a></td>
						<td>{material.pricePerSqm}</td>
						<td class="rating">{getRatingStars(material.durability)}</td>
						<td class="rating">{getRatingStars(material.comfort)}</td>
						<td class="rating">{getRatingStars(material.maintenance)}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>

<div class="materials-grid">
	{#each materials as material}
		<article class="card material-card" id={material.id}>
			<div class="card-header">
				<span class="material-icon">{material.icon}</span>
				<h3>{material.name}</h3>
				<span class="price-tag">{material.priceRange}</span>
			</div>

			<p class="description">{material.description}</p>

			<div class="price-range">
				<strong>Preisspanne:</strong> {material.pricePerSqm}
			</div>

			<div class="ratings">
				<div class="rating-item">
					<span class="rating-label">Haltbarkeit:</span>
					<span class="rating-stars">{getRatingStars(material.durability)}</span>
				</div>
				<div class="rating-item">
					<span class="rating-label">Komfort:</span>
					<span class="rating-stars">{getRatingStars(material.comfort)}</span>
				</div>
				<div class="rating-item">
					<span class="rating-label">Pflegeleicht:</span>
					<span class="rating-stars">{getRatingStars(material.maintenance)}</span>
				</div>
			</div>

			<div class="pros-cons">
				<div class="pros">
					<h4>Vorteile</h4>
					<ul class="pro-con-list pro-list">
						{#each material.pros as pro}
							<li>{pro}</li>
						{/each}
					</ul>
				</div>
				<div class="cons">
					<h4>Nachteile</h4>
					<ul class="pro-con-list con-list">
						{#each material.cons as con}
							<li>{con}</li>
						{/each}
					</ul>
				</div>
			</div>

			<div class="best-for">
				<strong>Ideal für:</strong>
				<div class="tags">
					{#each material.bestFor as room}
						<span class="tag tag-neutral">{room}</span>
					{/each}
				</div>
			</div>

			<div class="shop-links">
				<h4>Jetzt kaufen bei:</h4>
				<div class="shop-buttons">
					{#each material.shopLinks as shop}
						<a href={shop.url} target="_blank" rel="noopener noreferrer" class="shop-btn">
							{shop.name} ↗
						</a>
					{/each}
				</div>
			</div>
		</article>
	{/each}
</div>

<section class="tip-section">
	<div class="tip-box">
		<strong>Tipp vom Experten:</strong> Achten Sie beim Kauf nicht nur auf den Preis pro Quadratmeter, sondern auch auf die Polhöhe und -dichte.
		Ein dichterer Flor ist langlebiger und behält länger sein gutes Aussehen.
	</div>
</section>

<style>
	.comparison-table {
		background: var(--color-surface);
		padding: 1.5rem;
		border-radius: var(--radius-md);
		margin-bottom: 2rem;
		box-shadow: var(--shadow-sm);
	}

	.comparison-table h2 {
		color: var(--color-primary);
		margin-bottom: 1rem;
		text-align: center;
	}

	.table-wrapper {
		overflow-x: auto;
	}

	table {
		width: 100%;
		border-collapse: separate;
		border-spacing: 0;
		margin: 1rem 0;
	}

	th, td {
		padding: 1rem 1.5rem;
		text-align: left;
		white-space: nowrap;
	}

	th {
		background: var(--color-primary);
		color: white;
		font-weight: 600;
		font-size: 0.9rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	th:first-child {
		border-radius: var(--radius-sm) 0 0 0;
	}

	th:last-child {
		border-radius: 0 var(--radius-sm) 0 0;
	}

	td {
		border-bottom: 1px solid var(--color-secondary);
		background: white;
	}

	tr:last-child td:first-child {
		border-radius: 0 0 0 var(--radius-sm);
	}

	tr:last-child td:last-child {
		border-radius: 0 0 var(--radius-sm) 0;
	}

	tr:hover td {
		background: var(--color-background);
	}

	.table-link {
		text-decoration: none;
		color: inherit;
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.table-link:hover {
		color: var(--color-primary);
	}

	.rating {
		color: var(--color-warning);
		font-size: 1.1rem;
		letter-spacing: 0.1em;
	}

	.materials-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		gap: 1.5rem;
		margin-bottom: 2rem;
	}

	.material-card {
		border-left: 4px solid var(--color-primary);
		scroll-margin-top: 80px;
	}

	.material-card .card-header {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		flex-wrap: wrap;
	}

	.material-icon {
		font-size: 2rem;
	}

	.price-tag {
		margin-left: auto;
		background: var(--color-accent);
		padding: 0.25rem 0.75rem;
		border-radius: var(--radius-sm);
		font-weight: bold;
		color: var(--color-primary-dark);
	}

	.description {
		color: var(--color-text-light);
		margin-bottom: 1rem;
	}

	.price-range {
		background: var(--color-background);
		padding: 0.75rem;
		border-radius: var(--radius-sm);
		margin-bottom: 1rem;
		text-align: center;
	}

	.price-range strong {
		color: var(--color-primary);
	}

	.ratings {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		margin-bottom: 1rem;
		padding: 0.75rem;
		background: var(--color-background);
		border-radius: var(--radius-sm);
	}

	.rating-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.rating-label {
		font-weight: 500;
	}

	.rating-stars {
		color: var(--color-warning);
	}

	.pros-cons {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
		margin-bottom: 1rem;
	}

	.pros h4 {
		color: var(--color-success);
		margin-bottom: 0.5rem;
	}

	.cons h4 {
		color: var(--color-error);
		margin-bottom: 0.5rem;
	}

	.best-for {
		border-top: 1px solid var(--color-secondary);
		padding-top: 1rem;
		margin-bottom: 1rem;
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-top: 0.5rem;
	}

	.shop-links {
		background: linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%);
		padding: 1rem;
		border-radius: var(--radius-sm);
		border-left: 4px solid #2196F3;
	}

	.shop-links h4 {
		color: #1565C0;
		margin-bottom: 0.75rem;
		font-size: 0.95rem;
	}

	.shop-buttons {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.shop-btn {
		display: inline-block;
		padding: 0.4rem 0.8rem;
		background: white;
		border: 1px solid #90CAF9;
		border-radius: var(--radius-sm);
		color: #1976D2;
		font-size: 0.85rem;
		text-decoration: none;
		transition: all 0.2s;
	}

	.shop-btn:hover {
		background: #1976D2;
		color: white;
		border-color: #1976D2;
	}

	.tip-section {
		margin-top: 2rem;
	}

	@media (max-width: 600px) {
		.materials-grid {
			grid-template-columns: 1fr;
		}

		.pros-cons {
			grid-template-columns: 1fr;
		}
	}
</style>
