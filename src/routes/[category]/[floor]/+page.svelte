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

	const features = $derived(floor ? [
		{
			icon: '🧵',
			title: 'Materialien & Varianten',
			description: `Erfahren Sie alles über die verschiedenen ${floor.name}-Varianten - mit Preisen, Vor- und Nachteilen.`,
			link: `/${categorySlug}/${floorSlug}/materialien`
		},
		{
			icon: '🛋️',
			title: 'Zimmerempfehlungen',
			description: `Welcher ${floor.name} passt zu welchem Raum? Wir helfen bei der Entscheidung.`,
			link: `/${categorySlug}/${floorSlug}/zimmer`
		},
		{
			icon: '✨',
			title: 'Pflege & Tipps',
			description: `So halten Sie Ihren ${floor.name} lange schön und gepflegt.`,
			link: `/${categorySlug}/${floorSlug}/pflege`
		},
		{
			icon: '🏪',
			title: 'Händler finden',
			description: 'Finden Sie Fachhändler in Ihrer Nähe für persönliche Beratung.',
			link: '/haendler'
		}
	] : []);
</script>

<svelte:head>
	<title>{floor?.name ?? 'Bodenart'} Ratgeber - Bodenbelag Ratgeber</title>
	<meta name="description" content="{floor?.heroDescription ?? ''}" />
</svelte:head>

{#if floor && category}
	<div class="hero">
		<div class="hero-content">
			<div class="breadcrumb">
				<a href="/">Start</a> / <a href="/{category.slug}">{category.name}</a> / <span>{floor.name}</span>
			</div>
			<h1><span class="floor-icon">{floor.icon}</span> {floor.heroTitle}</h1>
			<p>{floor.heroDescription}</p>
			<div class="hero-actions">
				<a href="/{categorySlug}/{floorSlug}/materialien" class="btn btn-primary">Materialien entdecken</a>
				<a href="/haendler" class="btn btn-secondary">Händler finden</a>
			</div>
		</div>
	</div>

	<section class="intro-section container">
		<div class="intro-header">
			<h2>Warum {floor.name}?</h2>
			<p>{floor.description}</p>
		</div>

		<div class="quick-facts grid grid-4">
			{#each floor.quickFacts as fact}
				<div class="fact-card">
					<div class="fact-value">{fact.value}</div>
					<div class="fact-label">{fact.label}</div>
					<div class="fact-desc">{fact.desc}</div>
				</div>
			{/each}
		</div>
	</section>

	<section class="features-section container">
		<div class="section-header">
			<h2>Was Sie hier finden</h2>
			<p>Alles was Sie über {floor.name} wissen müssen</p>
		</div>
		<div class="grid grid-2">
			{#each features as feature}
				<a href={feature.link} class="feature-card card">
					<div class="feature-icon">{feature.icon}</div>
					<div class="feature-content">
						<h3>{feature.title}</h3>
						<p>{feature.description}</p>
						<span class="link-text">Mehr erfahren &rarr;</span>
					</div>
				</a>
			{/each}
		</div>
	</section>

	<section class="materials-preview container">
		<div class="section-header">
			<h2>Beliebte {floor.name}-Varianten</h2>
			<p>Ein Überblick über die wichtigsten Materialien</p>
		</div>
		<div class="materials-grid">
			{#each floor.materials.slice(0, 3) as material}
				<div class="material-preview-card">
					<div class="material-icon">{material.icon}</div>
					<h3>{material.name}</h3>
					<p>{material.description.slice(0, 100)}...</p>
					<div class="material-price">{material.pricePerSqm}</div>
				</div>
			{/each}
		</div>
		<div class="materials-cta">
			<a href="/{categorySlug}/{floorSlug}/materialien" class="btn btn-secondary">Alle Materialien vergleichen &rarr;</a>
		</div>
	</section>

	<section class="cta-section container">
		<div class="cta-box">
			<div class="cta-content">
				<h2>Bereit für Ihren neuen {floor.name}?</h2>
				<p>Schauen Sie bei einem unserer empfohlenen Fachhändler vorbei!</p>
				<a href="/haendler" class="btn btn-primary">Händler finden</a>
			</div>
		</div>
	</section>
{/if}

<style>
	.hero {
		padding: 4rem 1rem 5rem;
		text-align: center;
		background: radial-gradient(circle at top right, rgba(139, 69, 19, 0.12), transparent 50%),
					radial-gradient(circle at bottom left, rgba(74, 144, 217, 0.08), transparent 50%);
		margin-bottom: 3rem;
	}

	.breadcrumb {
		margin-bottom: 1.5rem;
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

	.hero-content {
		max-width: 800px;
		margin: 0 auto;
	}

	.floor-icon {
		font-size: 1em;
	}

	.hero h1 {
		font-size: 3rem;
		margin-bottom: 1.5rem;
		color: var(--color-primary-dark);
	}

	.hero p {
		font-size: 1.2rem;
		color: var(--color-text-light);
		margin-bottom: 2rem;
		line-height: 1.6;
	}

	.hero-actions {
		display: flex;
		gap: 1rem;
		justify-content: center;
		flex-wrap: wrap;
	}

	.intro-section {
		margin-bottom: 4rem;
	}

	.intro-header {
		text-align: center;
		max-width: 700px;
		margin: 0 auto 2.5rem auto;
	}

	.intro-header h2 {
		font-size: 2.2rem;
		margin-bottom: 1rem;
		color: var(--color-primary-dark);
	}

	.intro-header p {
		font-size: 1.1rem;
		color: var(--color-text-light);
		line-height: 1.6;
	}

	.fact-card {
		background: white;
		padding: 1.5rem;
		border-radius: var(--radius-md);
		text-align: center;
		box-shadow: var(--shadow-sm);
	}

	.fact-value {
		font-size: 1.8rem;
		font-weight: 800;
		color: var(--color-primary);
		margin-bottom: 0.3rem;
	}

	.fact-label {
		font-weight: 600;
		color: var(--color-text);
		margin-bottom: 0.2rem;
	}

	.fact-desc {
		font-size: 0.85rem;
		color: var(--color-text-light);
	}

	.features-section {
		margin-bottom: 4rem;
	}

	.section-header {
		text-align: center;
		margin-bottom: 2.5rem;
	}

	.section-header h2 {
		font-size: 2rem;
		color: var(--color-primary-dark);
		margin-bottom: 0.5rem;
	}

	.section-header p {
		color: var(--color-text-light);
	}

	.feature-card {
		display: flex;
		gap: 1.5rem;
		padding: 2rem;
		text-align: left;
	}

	.feature-icon {
		font-size: 2.5rem;
		flex-shrink: 0;
	}

	.feature-content h3 {
		font-size: 1.3rem;
		margin-bottom: 0.5rem;
		color: var(--color-primary-dark);
	}

	.feature-content p {
		color: var(--color-text-light);
		margin-bottom: 1rem;
		line-height: 1.5;
	}

	.link-text {
		color: var(--color-primary);
		font-weight: 600;
		font-size: 0.9rem;
	}

	.materials-preview {
		margin-bottom: 4rem;
	}

	.materials-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 1.5rem;
		margin-bottom: 2rem;
	}

	.material-preview-card {
		background: white;
		padding: 2rem;
		border-radius: var(--radius-md);
		box-shadow: var(--shadow-sm);
		text-align: center;
	}

	.material-icon {
		font-size: 2.5rem;
		margin-bottom: 1rem;
	}

	.material-preview-card h3 {
		font-size: 1.2rem;
		color: var(--color-primary-dark);
		margin-bottom: 0.5rem;
	}

	.material-preview-card p {
		color: var(--color-text-light);
		font-size: 0.9rem;
		margin-bottom: 1rem;
	}

	.material-price {
		background: var(--color-secondary);
		display: inline-block;
		padding: 0.3rem 0.8rem;
		border-radius: var(--radius-sm);
		font-weight: 600;
		color: var(--color-primary-dark);
		font-size: 0.9rem;
	}

	.materials-cta {
		text-align: center;
	}

	.cta-section {
		margin-bottom: 2rem;
	}

	.cta-box {
		background: linear-gradient(135deg, #5D4037, #8B4513);
		border-radius: var(--radius-lg);
		padding: 3.5rem 2rem;
		text-align: center;
		color: white;
	}

	.cta-content {
		max-width: 550px;
		margin: 0 auto;
	}

	.cta-box h2 {
		color: white;
		font-size: 2rem;
		margin-bottom: 0.75rem;
	}

	.cta-box p {
		color: rgba(255,255,255,0.9);
		margin-bottom: 1.5rem;
	}

	@media (max-width: 768px) {
		.hero h1 {
			font-size: 2.2rem;
		}

		.feature-card {
			flex-direction: column;
			text-align: center;
		}
	}
</style>
