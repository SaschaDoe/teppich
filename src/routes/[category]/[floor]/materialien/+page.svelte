<script lang="ts">
	import { page } from '$app/stores';
	import { getFloorType, categories } from '$lib/data';
	import { error } from '@sveltejs/kit';

	const categorySlug = $derived($page.params.category);
	const floorSlug = $derived($page.params.floor);
	const floor = $derived(getFloorType(floorSlug));
	const category = $derived(categories.find(c => c.slug === categorySlug));

	$effect(() => {
		if (!floor || !category) {
			error(404, 'Bodenart nicht gefunden');
		}
	});

	function getRatingStars(rating: number): string {
		return '★'.repeat(rating) + '☆'.repeat(5 - rating);
	}
</script>

<svelte:head>
	<title>{floor?.name ?? 'Materialien'} Materialien - Bodenbelag Ratgeber</title>
	<meta name="description" content="Alle {floor?.name ?? ''}-Materialien im Vergleich: Preise, Vor- und Nachteile, Bewertungen und Shop-Links." />
</svelte:head>

{#if floor && category}
	<div class="container">
		<div class="breadcrumb">
			<a href="/">Start</a> / <a href="/{category.slug}">{category.name}</a> / <a href="/{category.slug}/{floor.slug}">{floor.name}</a> / <span>Materialien</span>
		</div>

		<div class="section-header">
			<h1>{floor.name} Materialien</h1>
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
						{#each floor.materials as material}
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
			{#each floor.materials as material}
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
				<strong>Tipp vom Experten:</strong> Holen Sie sich immer Musterproben und legen Sie diese zu Hause aus.
				Betrachten Sie die Muster bei verschiedenen Lichtverhältnissen, bevor Sie sich entscheiden.
			</div>
		</section>
	</div>
{/if}

<style>
	.breadcrumb {
		margin-bottom: 2rem;
		font-size: 0.9rem;
		color: var(--color-text-light);
	}

	.breadcrumb a {
		color: var(--color-primary);
		text-decoration: none;
	}

	.breadcrumb a:hover {
		text-decoration: underline;
	}

	.section-header {
		text-align: center;
		margin-bottom: 2.5rem;
	}

	.section-header h1 {
		font-size: 2.5rem;
		color: var(--color-primary-dark);
		margin-bottom: 0.5rem;
	}

	.section-header p {
		color: var(--color-text-light);
		font-size: 1.1rem;
	}

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

	th:first-child { border-radius: var(--radius-sm) 0 0 0; }
	th:last-child { border-radius: 0 var(--radius-sm) 0 0; }

	td {
		border-bottom: 1px solid var(--color-secondary);
		background: white;
	}

	tr:last-child td:first-child { border-radius: 0 0 0 var(--radius-sm); }
	tr:last-child td:last-child { border-radius: 0 0 var(--radius-sm) 0; }

	tr:hover td { background: var(--color-background); }

	.table-link {
		text-decoration: none;
		color: inherit;
	}

	.table-link:hover { color: var(--color-primary); }

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

	.card-header {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		flex-wrap: wrap;
	}

	.material-icon { font-size: 2rem; }

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

	.price-range strong { color: var(--color-primary); }

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

	.rating-label { font-weight: 500; }
	.rating-stars { color: var(--color-warning); }

	.pros-cons {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
		margin-bottom: 1rem;
	}

	.pros h4 { color: var(--color-success); margin-bottom: 0.5rem; }
	.cons h4 { color: var(--color-error); margin-bottom: 0.5rem; }

	.pro-con-list {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.pro-list li::before { content: '✓ '; color: var(--color-success); }
	.con-list li::before { content: '✗ '; color: var(--color-error); }

	.pro-con-list li {
		padding: 0.25rem 0;
		font-size: 0.9rem;
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

	.tag {
		background: var(--color-secondary);
		padding: 0.25rem 0.6rem;
		border-radius: var(--radius-sm);
		font-size: 0.85rem;
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

	.tip-section { margin-top: 2rem; }

	.tip-box {
		background: linear-gradient(135deg, #FFF8E1 0%, #FFECB3 100%);
		padding: 1.5rem;
		border-radius: var(--radius-md);
		border-left: 4px solid var(--color-warning);
	}

	@media (max-width: 600px) {
		.materials-grid { grid-template-columns: 1fr; }
		.pros-cons { grid-template-columns: 1fr; }
	}
</style>
