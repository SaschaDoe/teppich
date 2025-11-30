<script lang="ts">
	const features = [
		{
			icon: '🧵',
			title: 'Materialien',
			description: 'Erfahren Sie alles über die verschiedenen Teppichmaterialien - von Wolle bis Synthetik.',
			link: '/materialien'
		},
		{
			icon: '🛋️',
			title: 'Zimmerempfehlungen',
			description: 'Welcher Teppich passt zu welchem Raum? Wir helfen bei der Entscheidung.',
			link: '/zimmer'
		},
		{
			icon: '🏪',
			title: 'Händler in Ihrer Nähe',
			description: 'Finden Sie lokale Teppichboden-Fachhändler in der Region Nürnberg/Erlangen.',
			link: '/haendler'
		},
		{
			icon: '✨',
			title: 'Pflege & Tipps',
			description: 'So halten Sie Ihren Teppichboden lange schön und sauber.',
			link: '/pflege'
		}
	];

	const quickFacts = [
		{ label: 'Lebensdauer', value: '10-20 Jahre', desc: 'bei guter Pflege' },
		{ label: 'Schalldämmung', value: 'Bis zu 30 dB', desc: 'Trittschallreduzierung' },
		{ label: 'Wärmedämmung', value: '20-30%', desc: 'Energieersparnis möglich' },
		{ label: 'Materialvielfalt', value: '6+ Arten', desc: 'für jeden Bedarf' }
	];
</script>

<div class="hero">
	<div class="hero-content">
		<h1>Willkommen beim <span class="gradient-text">Teppichboden Ratgeber</span></h1>
		<p>Ihr umfassender Guide für den perfekten Bodenbelag. Entdecken Sie Materialien, finden Sie die besten Händler und lernen Sie, wie Sie Ihren Teppich pflegen.</p>
		<div class="hero-actions">
			<a href="/materialien" class="btn btn-primary">Materialien entdecken</a>
			<a href="/haendler" class="btn btn-secondary">Händler finden</a>
		</div>
	</div>
</div>

<section class="intro-section container">
	<div class="intro-header">
		<h2>Warum Teppichboden?</h2>
		<p>Teppichböden bieten zahlreiche Vorteile gegenüber Hartböden: Sie sind fußwarm, schalldämmend und sorgen für eine gemütliche Atmosphäre. 
		Ob im Wohnzimmer, Schlafzimmer oder Büro - mit dem richtigen Teppich verwandeln Sie jeden Raum in eine Wohlfühloase.</p>
	</div>
	
	<div class="quick-facts grid grid-4">
		{#each quickFacts as fact}
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
		<p>Alles was Sie wissen müssen an einem Ort</p>
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

<section class="cta-section container">
	<div class="cta-box">
		<div class="cta-content">
			<h2>Bereit für Ihren neuen Teppichboden?</h2>
			<p>Schauen Sie bei einem unserer empfohlenen Fachhändler in der Region vorbei!</p>
			<a href="/haendler" class="btn btn-primary">Händler finden</a>
		</div>
	</div>
</section>

<style>
	.hero {
		padding: 6rem 1rem;
		text-align: center;
		background: radial-gradient(circle at top right, rgba(241, 222, 201, 0.4), transparent 40%),
					radial-gradient(circle at bottom left, rgba(141, 123, 104, 0.1), transparent 40%);
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
		background: linear-gradient(135deg, var(--color-primary-dark), var(--color-primary));
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
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
	}

	.intro-section {
		margin-bottom: 6rem;
	}

	.intro-header {
		text-align: center;
		max-width: 800px;
		margin: 0 auto 3rem auto;
	}

	.intro-header h2 {
		font-size: 2.5rem;
		margin-bottom: 1rem;
		color: var(--color-primary-dark);
	}

	.intro-header p {
		font-size: 1.1rem;
		color: var(--color-text-light);
	}

	.fact-card {
		background: white;
		padding: 2rem;
		border-radius: var(--radius-md);
		text-align: center;
		border: 1px solid rgba(0,0,0,0.04);
		transition: transform 0.3s ease;
	}

	.fact-card:hover {
		transform: translateY(-4px);
		box-shadow: var(--shadow-sm);
	}

	.fact-value {
		font-size: 2rem;
		font-weight: 800;
		color: var(--color-primary);
		margin-bottom: 0.5rem;
		font-family: var(--font-heading);
	}

	.fact-label {
		font-weight: 600;
		color: var(--color-text);
		margin-bottom: 0.25rem;
	}

	.fact-desc {
		font-size: 0.875rem;
		color: var(--color-text-light);
	}

	.features-section {
		margin-bottom: 6rem;
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
	}

	.feature-card {
		display: flex;
		align-items: flex-start;
		gap: 1.5rem;
		text-align: left;
		padding: 2.5rem;
		height: 100%;
	}

	.feature-icon {
		font-size: 2.5rem;
		background: var(--color-secondary);
		width: 64px;
		height: 64px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: var(--radius-md);
		flex-shrink: 0;
	}

	.feature-content h3 {
		font-size: 1.5rem;
		margin-bottom: 0.75rem;
		color: var(--color-primary-dark);
	}

	.feature-content p {
		color: var(--color-text-light);
		margin-bottom: 1.5rem;
	}

	.link-text {
		color: var(--color-primary);
		font-weight: 600;
		font-size: 0.9rem;
	}

	.cta-section {
		margin-bottom: 4rem;
	}

	.cta-box {
		background: var(--color-primary-dark);
		border-radius: var(--radius-lg);
		padding: 4rem 2rem;
		text-align: center;
		color: white;
		background-image: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 100%);
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
			font-size: 2.5rem;
		}
		
		.feature-card {
			flex-direction: column;
			align-items: center;
			text-align: center;
		}
	}
</style>
