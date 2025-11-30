<script lang="ts">
	interface Dealer {
		name: string;
		address: string;
		city: string;
		postalCode: string;
		type: string;
		website: string;
		description: string;
		features: string[];
	}

	const dealers: Dealer[] = [
		{
			name: 'Teppich-Hormeß',
			address: 'Neumühle 2',
			postalCode: '91056',
			city: 'Erlangen',
			type: 'Fachgeschäft',
			website: 'https://www.teppich-hormess.de',
			description: 'Traditionsreiches Fachgeschäft für Teppiche und Bodenbeläge in Erlangen. Persönliche Beratung und große Auswahl.',
			features: ['Persönliche Beratung', 'Große Auswahl', 'Verlegeservice', 'Tradition']
		},
		{
			name: 'TEPPICH BODEN IDEAL',
			address: 'Bauerngasse 20-26',
			postalCode: '90443',
			city: 'Nürnberg',
			type: 'Fachgeschäft',
			website: 'https://www.teppichbodenideal.de',
			description: 'Spezialist für Teppichböden und Bodenbeläge in der Nürnberger Innenstadt. Umfassende Beratung und Montageservice.',
			features: ['Große Ausstellung', 'Fachberatung', 'Montageservice', 'Zentrale Lage']
		},
		{
			name: 'BAUHAUS Nürnberg',
			address: 'Geisseestraße 89',
			postalCode: '90439',
			city: 'Nürnberg',
			type: 'Baumarkt',
			website: 'https://www.bauhaus.info',
			description: 'Großer Baumarkt mit umfangreicher Bodenbelagsabteilung. Günstige Preise und sofortige Verfügbarkeit.',
			features: ['Sofort verfügbar', 'Günstige Preise', 'Große Auswahl', 'Zubehör vor Ort']
		},
		{
			name: 'Kibek-Haus Fürth',
			address: 'In der Schmalau 50',
			postalCode: '90765',
			city: 'Fürth-Steinach',
			type: 'Teppichhaus',
			website: 'https://www.kibek.de',
			description: 'Europas größtes Teppichhaus mit riesiger Auswahl. Von Orient-Teppichen bis zu modernen Teppichböden.',
			features: ['Riesige Auswahl', 'Alle Preisklassen', 'Orient-Teppiche', 'Moderne Designs']
		},
		{
			name: 'tedox KG',
			address: 'An der Burg 4-8',
			postalCode: '37120',
			city: 'Bovenden-Harste',
			type: 'Discounter',
			website: 'https://www.tedox.de',
			description: 'Renovierungsdiscounter mit günstigem Sortiment an Bodenbelägen. Ideal für preisbewusste Käufer.',
			features: ['Günstige Preise', 'Breites Sortiment', 'Renovierungsbedarf', 'Selbstabholung']
		}
	];

	function getTypeIcon(type: string): string {
		switch(type) {
			case 'Fachgeschäft': return '🏪';
			case 'Baumarkt': return '🔨';
			case 'Teppichhaus': return '🏛️';
			case 'Discounter': return '💰';
			default: return '📍';
		}
	}

	function getTypeColor(type: string): string {
		switch(type) {
			case 'Fachgeschäft': return '#4CAF50';
			case 'Baumarkt': return '#FF9800';
			case 'Teppichhaus': return '#9C27B0';
			case 'Discounter': return '#2196F3';
			default: return '#757575';
		}
	}
</script>

<svelte:head>
	<title>Teppichboden Händler - Ratgeber</title>
</svelte:head>

<div class="section-header">
	<h1>Händler in Ihrer Nähe</h1>
	<p>Finden Sie den passenden Teppichboden-Anbieter in der Region Nürnberg, Erlangen und Fürth</p>
</div>

<div class="dealer-types">
	<h2>Händlertypen im Überblick</h2>
	<div class="type-grid">
		<div class="type-card">
			<span class="type-icon">🏪</span>
			<h3>Fachgeschäft</h3>
			<p>Beste Beratung, individuelle Lösungen, höhere Preise, oft mit Verlegeservice</p>
		</div>
		<div class="type-card">
			<span class="type-icon">🔨</span>
			<h3>Baumarkt</h3>
			<p>Gute Auswahl, mittlere Preise, Zubehör vor Ort, Selbstverlegung möglich</p>
		</div>
		<div class="type-card">
			<span class="type-icon">🏛️</span>
			<h3>Teppichhaus</h3>
			<p>Riesige Auswahl, alle Preisklassen, auch Orientteppiche, kompetente Beratung</p>
		</div>
		<div class="type-card">
			<span class="type-icon">💰</span>
			<h3>Discounter</h3>
			<p>Günstigste Preise, Standardsortiment, Selbstabholung, weniger Beratung</p>
		</div>
	</div>
</div>

<div class="dealers-grid">
	{#each dealers as dealer}
		<article class="card dealer-card">
			<div class="dealer-header" style="border-color: {getTypeColor(dealer.type)}">
				<span class="dealer-type-badge" style="background-color: {getTypeColor(dealer.type)}">
					{getTypeIcon(dealer.type)} {dealer.type}
				</span>
				<h3>{dealer.name}</h3>
			</div>

			<div class="dealer-address">
				<p class="address-line">
					<span class="address-icon">📍</span>
					{dealer.address}
				</p>
				<p class="address-line">
					{dealer.postalCode} {dealer.city}
				</p>
			</div>

			<p class="dealer-description">{dealer.description}</p>

			<div class="dealer-features">
				{#each dealer.features as feature}
					<span class="feature-tag">{feature}</span>
				{/each}
			</div>

			<div class="dealer-actions">
				<a href={dealer.website} target="_blank" rel="noopener noreferrer" class="btn btn-primary">
					Website besuchen
				</a>
				<a
					href="https://www.google.com/maps/search/?api=1&query={encodeURIComponent(dealer.name + ' ' + dealer.address + ' ' + dealer.city)}"
					target="_blank"
					rel="noopener noreferrer"
					class="btn btn-secondary"
				>
					Route planen
				</a>
			</div>
		</article>
	{/each}
</div>

<section class="buying-tips">
	<h2>Tipps für den Einkauf</h2>
	<div class="tips-grid">
		<div class="tip-card">
			<h3>Vor dem Besuch</h3>
			<ul>
				<li>Raum genau ausmessen (Länge x Breite)</li>
				<li>Fotos vom Raum mitnehmen</li>
				<li>Budget festlegen</li>
				<li>Über Materialien informieren (siehe unsere Materialseite)</li>
			</ul>
		</div>
		<div class="tip-card">
			<h3>Im Geschäft</h3>
			<ul>
				<li>Musterproben anfordern</li>
				<li>Nach Verlegekosten fragen</li>
				<li>Lieferzeiten erfragen</li>
				<li>Garantiebedingungen klären</li>
			</ul>
		</div>
		<div class="tip-card">
			<h3>Nach dem Kauf</h3>
			<ul>
				<li>Rechnung und Garantie aufbewahren</li>
				<li>Restmaterial für Reparaturen aufheben</li>
				<li>Pflegeanleitung befolgen</li>
				<li>Erstpflege durchführen</li>
			</ul>
		</div>
	</div>
</section>

<section class="cost-overview">
	<h2>Kostenübersicht</h2>
	<div class="tip-box">
		<strong>Kalkulieren Sie richtig:</strong> Zum Materialpreis kommen noch hinzu:
		<ul>
			<li><strong>Unterlagsmaterial:</strong> 3-8 €/m²</li>
			<li><strong>Verlegung (Profi):</strong> 8-15 €/m²</li>
			<li><strong>Sockelleisten:</strong> 3-10 €/lfm</li>
			<li><strong>Verschnitt:</strong> ca. 10% Aufschlag einplanen</li>
		</ul>
		<p style="margin-top: 1rem;">Bei einem 20m²-Raum und mittlerem Teppich rechnen Sie mit <strong>800-1.500 €</strong> Gesamtkosten inkl. Verlegung.</p>
	</div>
</section>

<style>
	.dealer-types {
		background: var(--color-surface);
		padding: 1.5rem;
		border-radius: var(--radius-md);
		margin-bottom: 2rem;
		box-shadow: var(--shadow-sm);
	}

	.dealer-types h2 {
		color: var(--color-primary);
		text-align: center;
		margin-bottom: 1.5rem;
	}

	.type-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 1rem;
	}

	.type-card {
		text-align: center;
		padding: 1rem;
		background: var(--color-background);
		border-radius: var(--radius-sm);
	}

	.type-icon {
		font-size: 2.5rem;
		display: block;
		margin-bottom: 0.5rem;
	}

	.type-card h3 {
		color: var(--color-primary);
		margin-bottom: 0.5rem;
	}

	.type-card p {
		font-size: 0.9rem;
		color: var(--color-text-light);
	}

	.dealers-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
		gap: 1.5rem;
		margin-bottom: 2rem;
	}

	.dealer-card {
		display: flex;
		flex-direction: column;
	}

	.dealer-header {
		border-top: 4px solid;
		padding-top: 0.5rem;
		margin-bottom: 1rem;
	}

	.dealer-type-badge {
		display: inline-block;
		padding: 0.25rem 0.75rem;
		border-radius: 999px;
		color: white;
		font-size: 0.85rem;
		margin-bottom: 0.5rem;
	}

	.dealer-header h3 {
		color: var(--color-primary);
		margin: 0;
	}

	.dealer-address {
		background: var(--color-background);
		padding: 0.75rem;
		border-radius: var(--radius-sm);
		margin-bottom: 1rem;
	}

	.address-line {
		margin: 0;
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.address-icon {
		font-size: 1.25rem;
	}

	.dealer-description {
		color: var(--color-text-light);
		flex-grow: 1;
		margin-bottom: 1rem;
	}

	.dealer-features {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-bottom: 1rem;
	}

	.feature-tag {
		background: var(--color-secondary);
		padding: 0.25rem 0.5rem;
		border-radius: var(--radius-sm);
		font-size: 0.8rem;
		color: var(--color-primary-dark);
	}

	.dealer-actions {
		display: flex;
		gap: 0.5rem;
		flex-wrap: wrap;
	}

	.dealer-actions .btn {
		flex: 1;
		min-width: 120px;
	}

	.buying-tips {
		margin-bottom: 2rem;
	}

	.buying-tips h2 {
		color: var(--color-primary);
		text-align: center;
		margin-bottom: 1.5rem;
	}

	.tips-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 1rem;
	}

	.tip-card {
		background: var(--color-surface);
		padding: 1.5rem;
		border-radius: var(--radius-md);
		box-shadow: var(--shadow-sm);
	}

	.tip-card h3 {
		color: var(--color-primary);
		margin-bottom: 1rem;
	}

	.tip-card ul {
		list-style: disc;
		padding-left: 1.25rem;
	}

	.tip-card li {
		padding: 0.25rem 0;
	}

	.cost-overview h2 {
		color: var(--color-primary);
		text-align: center;
		margin-bottom: 1rem;
	}

	.cost-overview .tip-box ul {
		margin-top: 0.5rem;
		list-style: none;
		padding: 0;
	}

	.cost-overview .tip-box li {
		padding: 0.25rem 0;
	}

	@media (max-width: 600px) {
		.dealers-grid {
			grid-template-columns: 1fr;
		}

		.dealer-actions {
			flex-direction: column;
		}

		.dealer-actions .btn {
			width: 100%;
		}
	}
</style>
