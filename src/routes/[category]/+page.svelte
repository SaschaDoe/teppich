<script lang="ts">
	import { page } from '$app/stores';
	import { categories } from '$lib/data';
	import { error } from '@sveltejs/kit';

	const categorySlug = $derived($page.params.category);
	const category = $derived(categories.find(c => c.slug === categorySlug));

	$effect(() => {
		if (!category) {
			error(404, 'Kategorie nicht gefunden');
		}
	});
</script>

<svelte:head>
	<title>{category?.name ?? 'Kategorie'} - Bodenbelag Ratgeber</title>
	<meta name="description" content="{category?.description ?? ''} - Alle Infos zu Materialien, Pflege und Händlern." />
</svelte:head>

{#if category}
	<div class="container">
		<div class="category-header" style="--category-color: {category.color}">
			<div class="category-icon">{category.icon}</div>
			<h1>{category.name}</h1>
			<p>{category.description}</p>
		</div>

		<section class="floor-types-section">
			<h2>Alle {category.name} im Überblick</h2>
			<div class="floor-types-grid">
				{#each category.floorTypes as floorType}
					<a href="/{category.slug}/{floorType.slug}" class="floor-type-card">
						<div class="floor-type-icon">{floorType.icon}</div>
						<div class="floor-type-content">
							<h3>{floorType.name}</h3>
							<p>{floorType.shortDescription}</p>
							<div class="floor-type-links">
								<span class="link-item">Materialien</span>
								<span class="link-item">Zimmer</span>
								<span class="link-item">Pflege</span>
							</div>
							<span class="link-text">Mehr erfahren &rarr;</span>
						</div>
					</a>
				{/each}
			</div>
		</section>

		<section class="cta-section">
			<div class="cta-box" style="background: linear-gradient(135deg, {category.color}dd, {category.color})">
				<h2>Den richtigen {category.name.replace('böden', 'boden').replace('Böden', 'boden')} finden</h2>
				<p>Besuchen Sie einen Fachhändler in Ihrer Nähe für persönliche Beratung!</p>
				<a href="/haendler" class="btn btn-primary">Händler finden</a>
			</div>
		</section>
	</div>
{/if}

<style>
	.category-header {
		text-align: center;
		padding: 4rem 0;
		margin-bottom: 3rem;
		background: linear-gradient(135deg, color-mix(in srgb, var(--category-color) 10%, white), white);
		border-radius: var(--radius-lg);
	}

	.category-icon {
		font-size: 4rem;
		margin-bottom: 1rem;
	}

	.category-header h1 {
		font-size: 3rem;
		color: var(--color-primary-dark);
		margin-bottom: 1rem;
	}

	.category-header p {
		font-size: 1.2rem;
		color: var(--color-text-light);
		max-width: 600px;
		margin: 0 auto;
	}

	.floor-types-section {
		margin-bottom: 4rem;
	}

	.floor-types-section h2 {
		text-align: center;
		font-size: 2rem;
		color: var(--color-primary-dark);
		margin-bottom: 2rem;
	}

	.floor-types-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 1.5rem;
	}

	.floor-type-card {
		display: flex;
		gap: 1.5rem;
		padding: 2rem;
		background: white;
		border-radius: var(--radius-lg);
		box-shadow: var(--shadow-sm);
		text-decoration: none;
		color: inherit;
		transition: all 0.3s ease;
		border: 1px solid transparent;
	}

	.floor-type-card:hover {
		transform: translateY(-4px);
		box-shadow: var(--shadow-md);
		border-color: var(--color-secondary);
	}

	.floor-type-icon {
		font-size: 3rem;
		flex-shrink: 0;
	}

	.floor-type-content h3 {
		font-size: 1.3rem;
		color: var(--color-primary-dark);
		margin-bottom: 0.5rem;
	}

	.floor-type-content p {
		color: var(--color-text-light);
		font-size: 0.95rem;
		margin-bottom: 1rem;
	}

	.floor-type-links {
		display: flex;
		gap: 0.5rem;
		margin-bottom: 1rem;
		flex-wrap: wrap;
	}

	.link-item {
		background: var(--color-background);
		padding: 0.25rem 0.6rem;
		border-radius: var(--radius-sm);
		font-size: 0.8rem;
		color: var(--color-text-light);
	}

	.link-text {
		color: var(--color-primary);
		font-weight: 600;
		font-size: 0.9rem;
	}

	.cta-section {
		margin-bottom: 2rem;
	}

	.cta-box {
		border-radius: var(--radius-lg);
		padding: 3rem 2rem;
		text-align: center;
		color: white;
	}

	.cta-box h2 {
		color: white;
		font-size: 2rem;
		margin-bottom: 1rem;
	}

	.cta-box p {
		color: rgba(255,255,255,0.9);
		font-size: 1.1rem;
		margin-bottom: 1.5rem;
	}

	@media (max-width: 768px) {
		.category-header h1 {
			font-size: 2rem;
		}

		.floor-type-card {
			flex-direction: column;
			text-align: center;
		}
	}
</style>
