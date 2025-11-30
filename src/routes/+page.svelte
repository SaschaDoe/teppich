<script lang="ts">
	import { categories } from '$lib/data';

	const quickStats = [
		{ label: 'Bodenarten', value: '25+', desc: 'von Parkett bis Vinyl' },
		{ label: 'Kategorien', value: '6', desc: 'für jeden Bedarf' },
		{ label: 'Shop-Links', value: '100+', desc: 'direkt zum Kaufen' },
		{ label: 'Pflegetipps', value: '200+', desc: 'von Experten' }
	];
</script>

<div class="hero">
	<div class="hero-content">
		<h1>Willkommen beim <span class="gradient-text">Bodenbelag Ratgeber</span></h1>
		<p>Ihr umfassender Guide für den perfekten Boden. Von Parkett über Fliesen bis Vinyl - entdecken Sie alle Bodenarten, Materialien, Pflegetipps und finden Sie Händler in Ihrer Nähe.</p>
		<div class="hero-actions">
			<a href="#kategorien" class="btn btn-primary">Bodenarten entdecken</a>
			<a href="/haendler" class="btn btn-secondary">Händler finden</a>
		</div>
	</div>
</div>

<section class="stats-section container">
	<div class="grid grid-4">
		{#each quickStats as stat}
			<div class="stat-card">
				<div class="stat-value">{stat.value}</div>
				<div class="stat-label">{stat.label}</div>
				<div class="stat-desc">{stat.desc}</div>
			</div>
		{/each}
	</div>
</section>

<section class="categories-section container" id="kategorien">
	<div class="section-header">
		<h2>Alle Bodenarten im Überblick</h2>
		<p>Wählen Sie eine Kategorie, um mehr zu erfahren</p>
	</div>

	<div class="categories-grid">
		{#each categories as category}
			<a href="/{category.slug}" class="category-card" style="--category-color: {category.color}">
				<div class="category-icon">{category.icon}</div>
				<div class="category-content">
					<h3>{category.name}</h3>
					<p>{category.description}</p>
					<div class="floor-types-preview">
						{#each category.floorTypes.slice(0, 4) as floorType}
							<span class="floor-type-tag">{floorType.icon} {floorType.name}</span>
						{/each}
						{#if category.floorTypes.length > 4}
							<span class="floor-type-tag more">+{category.floorTypes.length - 4} mehr</span>
						{/if}
					</div>
					<span class="link-text">Mehr erfahren &rarr;</span>
				</div>
			</a>
		{/each}
	</div>
</section>

<section class="features-section container">
	<div class="section-header">
		<h2>Was Sie hier finden</h2>
		<p>Alles was Sie wissen müssen an einem Ort</p>
	</div>
	<div class="grid grid-3">
		<div class="feature-card card">
			<div class="feature-icon">📊</div>
			<h3>Materialvergleiche</h3>
			<p>Detaillierte Vor- und Nachteile, Preise und Bewertungen für jedes Material - mit direkten Shop-Links.</p>
		</div>
		<div class="feature-card card">
			<div class="feature-icon">🏠</div>
			<h3>Zimmerempfehlungen</h3>
			<p>Welcher Boden passt zu welchem Raum? Wir helfen bei der Entscheidung - von Bad bis Wohnzimmer.</p>
		</div>
		<div class="feature-card card">
			<div class="feature-icon">✨</div>
			<h3>Pflege & Tipps</h3>
			<p>Pflegeanleitungen, Fleckenentfernung und Expertenratschläge für jeden Bodentyp.</p>
		</div>
	</div>
</section>

<section class="cta-section container">
	<div class="cta-box">
		<div class="cta-content">
			<h2>Bereit für Ihren neuen Boden?</h2>
			<p>Schauen Sie bei einem unserer empfohlenen Fachhändler in der Region vorbei!</p>
			<a href="/haendler" class="btn btn-primary">Händler finden</a>
		</div>
	</div>
</section>

<style>
	.hero {
		padding: 6rem 1rem;
		text-align: center;
		background: radial-gradient(circle at top right, rgba(139, 69, 19, 0.15), transparent 40%),
					radial-gradient(circle at bottom left, rgba(74, 144, 217, 0.1), transparent 40%);
		margin-bottom: 4rem;
	}

	.hero-content {
		max-width: 800px;
		margin: 0 auto;
	}

	.hero h1 {
		font-size: 3.5rem;
		margin-bottom: 1.5rem;
		letter-spacing: -0.03em;
		line-height: 1.1;
	}

	.gradient-text {
		background: linear-gradient(135deg, #8B4513, #D2691E);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.hero p {
		font-size: 1.25rem;
		color: var(--color-text-light);
		margin-bottom: 2.5rem;
		line-height: 1.6;
	}

	.hero-actions {
		display: flex;
		gap: 1rem;
		justify-content: center;
		flex-wrap: wrap;
	}

	.stats-section {
		margin-bottom: 4rem;
	}

	.stat-card {
		background: white;
		padding: 2rem;
		border-radius: var(--radius-md);
		text-align: center;
		border: 1px solid rgba(0,0,0,0.04);
		transition: transform 0.3s ease;
	}

	.stat-card:hover {
		transform: translateY(-4px);
		box-shadow: var(--shadow-sm);
	}

	.stat-value {
		font-size: 2.5rem;
		font-weight: 800;
		color: #8B4513;
		margin-bottom: 0.5rem;
		font-family: var(--font-heading);
	}

	.stat-label {
		font-weight: 600;
		color: var(--color-text);
		margin-bottom: 0.25rem;
	}

	.stat-desc {
		font-size: 0.875rem;
		color: var(--color-text-light);
	}

	.categories-section {
		margin-bottom: 4rem;
	}

	.section-header {
		text-align: center;
		margin-bottom: 3rem;
	}

	.section-header h2 {
		font-size: 2.5rem;
		color: var(--color-primary-dark);
		margin-bottom: 0.5rem;
	}

	.section-header p {
		color: var(--color-text-light);
		font-size: 1.1rem;
	}

	.categories-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
		gap: 1.5rem;
	}

	.category-card {
		display: flex;
		gap: 1.5rem;
		padding: 2rem;
		background: white;
		border-radius: var(--radius-lg);
		box-shadow: var(--shadow-sm);
		text-decoration: none;
		color: inherit;
		transition: all 0.3s ease;
		border-left: 4px solid var(--category-color);
	}

	.category-card:hover {
		transform: translateY(-4px);
		box-shadow: var(--shadow-md);
	}

	.category-icon {
		font-size: 3rem;
		flex-shrink: 0;
	}

	.category-content h3 {
		font-size: 1.4rem;
		color: var(--color-primary-dark);
		margin-bottom: 0.5rem;
	}

	.category-content p {
		color: var(--color-text-light);
		font-size: 0.95rem;
		margin-bottom: 1rem;
		line-height: 1.5;
	}

	.floor-types-preview {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-bottom: 1rem;
	}

	.floor-type-tag {
		background: var(--color-background);
		padding: 0.25rem 0.6rem;
		border-radius: var(--radius-sm);
		font-size: 0.8rem;
		color: var(--color-text);
	}

	.floor-type-tag.more {
		background: var(--color-secondary);
		color: var(--color-primary-dark);
	}

	.link-text {
		color: var(--category-color);
		font-weight: 600;
		font-size: 0.9rem;
	}

	.features-section {
		margin-bottom: 4rem;
	}

	.feature-card {
		text-align: center;
		padding: 2.5rem;
	}

	.feature-icon {
		font-size: 3rem;
		margin-bottom: 1rem;
	}

	.feature-card h3 {
		font-size: 1.3rem;
		margin-bottom: 0.75rem;
		color: var(--color-primary-dark);
	}

	.feature-card p {
		color: var(--color-text-light);
		line-height: 1.6;
	}

	.cta-section {
		margin-bottom: 4rem;
	}

	.cta-box {
		background: linear-gradient(135deg, #5D4037, #8B4513);
		border-radius: var(--radius-lg);
		padding: 4rem 2rem;
		text-align: center;
		color: white;
		box-shadow: var(--shadow-lg);
	}

	.cta-content {
		max-width: 600px;
		margin: 0 auto;
	}

	.cta-box h2 {
		color: white;
		font-size: 2.5rem;
		margin-bottom: 1rem;
	}

	.cta-box p {
		color: rgba(255,255,255,0.9);
		font-size: 1.2rem;
		margin-bottom: 2rem;
	}

	@media (max-width: 768px) {
		.hero h1 {
			font-size: 2.2rem;
		}

		.categories-grid {
			grid-template-columns: 1fr;
		}

		.category-card {
			flex-direction: column;
			text-align: center;
		}
	}
</style>
