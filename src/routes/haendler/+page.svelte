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
		floorTypes: string[];
	}

	const dealers: Dealer[] = [
		{
			name: 'BAUHAUS',
			address: 'Geisseestraße 89',
			postalCode: '90439',
			city: 'Nürnberg',
			type: 'Baumarkt',
			website: 'https://www.bauhaus.info',
			description: 'Großer Baumarkt mit umfangreicher Bodenbelagsabteilung. Parkett, Laminat, Vinyl, Fliesen und mehr.',
			features: ['Sofort verfügbar', 'Große Auswahl', 'Zubehör vor Ort', 'Verlegeservice'],
			floorTypes: ['Parkett', 'Laminat', 'Vinyl', 'Fliesen', 'Teppich']
		},
		{
			name: 'OBI',
			address: 'Ingolstädter Str. 40',
			postalCode: '90451',
			city: 'Nürnberg',
			type: 'Baumarkt',
			website: 'https://www.obi.de',
			description: 'Großer Baumarkt mit breitem Bodensortiment und Beratung.',
			features: ['Große Auswahl', 'Gute Beratung', 'Musterservice', 'Online bestellen'],
			floorTypes: ['Parkett', 'Laminat', 'Vinyl', 'Fliesen', 'Teppich']
		},
		{
			name: 'Hornbach',
			address: 'Regensburger Str. 420',
			postalCode: '90480',
			city: 'Nürnberg',
			type: 'Baumarkt',
			website: 'https://www.hornbach.de',
			description: 'Baumarkt mit Projektberatung und breitem Bodensortiment.',
			features: ['Projektberatung', 'Große Auswahl', 'Verlegezubehör', 'Online kaufen'],
			floorTypes: ['Parkett', 'Laminat', 'Vinyl', 'Fliesen', 'Teppich']
		},
		{
			name: 'Kibek-Haus Fürth',
			address: 'In der Schmalau 50',
			postalCode: '90765',
			city: 'Fürth-Steinach',
			type: 'Teppichhaus',
			website: 'https://www.kibek.de',
			description: 'Europas größtes Teppichhaus mit riesiger Auswahl. Von Orient-Teppichen bis zu modernen Teppichböden.',
			features: ['Riesige Auswahl', 'Alle Preisklassen', 'Orient-Teppiche', 'Moderne Designs'],
			floorTypes: ['Teppich', 'Sisal', 'Naturfasern']
		},
		{
			name: 'tedox KG',
			address: 'Erlanger Str. 58',
			postalCode: '90765',
			city: 'Fürth',
			type: 'Discounter',
			website: 'https://www.tedox.de',
			description: 'Renovierungsdiscounter mit günstigem Sortiment an Bodenbelägen.',
			features: ['Günstige Preise', 'Breites Sortiment', 'Renovierungsbedarf', 'Selbstabholung'],
			floorTypes: ['Laminat', 'Vinyl', 'Teppich', 'PVC']
		},
		{
			name: 'Fliesen GEMPP',
			address: 'Wöhrder Hauptstraße 28',
			postalCode: '90489',
			city: 'Nürnberg',
			type: 'Fachgeschäft',
			website: 'https://www.gempp.de',
			description: 'Spezialist für Fliesen, Naturstein und Feinsteinzeug mit Showroom.',
			features: ['Fachberatung', 'Showroom', 'Verlegeservice', 'Premium-Qualität'],
			floorTypes: ['Fliesen', 'Feinsteinzeug', 'Naturstein']
		},
		{
			name: 'Parkett Dietrich',
			address: 'Wölckernstr. 60',
			postalCode: '90459',
			city: 'Nürnberg',
			type: 'Fachgeschäft',
			website: 'https://www.parkett-dietrich.de',
			description: 'Traditionelles Parkett-Fachgeschäft mit hochwertiger Auswahl und Verlegeservice.',
			features: ['Parkett-Spezialist', 'Verlegeservice', 'Renovierung', 'Top-Beratung'],
			floorTypes: ['Parkett', 'Massivholz', 'Mehrschicht']
		},
		{
			name: 'casando',
			address: 'Online-Shop',
			postalCode: '',
			city: 'Deutschlandweit',
			type: 'Online-Shop',
			website: 'https://www.casando.de',
			description: 'Großer Online-Shop für Bodenbeläge mit schneller Lieferung.',
			features: ['Online bestellen', 'Große Auswahl', 'Schnelle Lieferung', 'Musterservice'],
			floorTypes: ['Parkett', 'Laminat', 'Vinyl', 'Kork']
		}
	];

	function getTypeIcon(type: string): string {
		switch(type) {
			case 'Fachgeschäft': return '🏪';
			case 'Baumarkt': return '🔨';
			case 'Teppichhaus': return '🏛️';
			case 'Discounter': return '💰';
			case 'Online-Shop': return '🛒';
			default: return '📍';
		}
	}

	function getTypeColor(type: string): string {
		switch(type) {
			case 'Fachgeschäft': return '#4CAF50';
			case 'Baumarkt': return '#FF9800';
			case 'Teppichhaus': return '#9C27B0';
			case 'Discounter': return '#2196F3';
			case 'Online-Shop': return '#607D8B';
			default: return '#757575';
		}
	}

	let selectedType = $state('Alle');
	let selectedFloor = $state('Alle');

	const filteredDealers = $derived(
		dealers.filter(d => {
			const typeMatch = selectedType === 'Alle' || d.type === selectedType;
			const floorMatch = selectedFloor === 'Alle' || d.floorTypes.includes(selectedFloor);
			return typeMatch && floorMatch;
		})
	);

	const dealerTypes = ['Alle', 'Fachgeschäft', 'Baumarkt', 'Teppichhaus', 'Discounter', 'Online-Shop'];
	const floorTypeFilters = ['Alle', 'Parkett', 'Laminat', 'Vinyl', 'Fliesen', 'Teppich', 'Naturstein'];
</script>

<svelte:head>
	<title>Händler finden - Bodenbelag Ratgeber</title>
	<meta name="description" content="Finden Sie Fachhändler für Bodenbeläge in der Region Nürnberg, Erlangen und Fürth. Parkett, Laminat, Fliesen und mehr." />
</svelte:head>

<div class="container">
	<div class="section-header">
		<h1>Händler finden</h1>
		<p>Finden Sie den passenden Bodenbelag-Anbieter in Ihrer Nähe</p>
	</div>

	<div class="filters">
		<div class="filter-group">
			<label for="type-filter">Händlertyp:</label>
			<select id="type-filter" bind:value={selectedType}>
				{#each dealerTypes as type}
					<option value={type}>{type}</option>
				{/each}
			</select>
		</div>
		<div class="filter-group">
			<label for="floor-filter">Bodenart:</label>
			<select id="floor-filter" bind:value={selectedFloor}>
				{#each floorTypeFilters as floor}
					<option value={floor}>{floor}</option>
				{/each}
			</select>
		</div>
	</div>

	<div class="dealer-types">
		<h2>Händlertypen im Überblick</h2>
		<div class="type-grid">
			<div class="type-card">
				<span class="type-icon">🏪</span>
				<h3>Fachgeschäft</h3>
				<p>Beste Beratung, individuelle Lösungen, oft mit Verlegeservice</p>
			</div>
			<div class="type-card">
				<span class="type-icon">🔨</span>
				<h3>Baumarkt</h3>
				<p>Große Auswahl, sofort verfügbar, Zubehör vor Ort</p>
			</div>
			<div class="type-card">
				<span class="type-icon">🏛️</span>
				<h3>Teppichhaus</h3>
				<p>Spezialist für textile Bodenbeläge, kompetente Beratung</p>
			</div>
			<div class="type-card">
				<span class="type-icon">💰</span>
				<h3>Discounter</h3>
				<p>Günstige Preise, Standardsortiment, Selbstabholung</p>
			</div>
		</div>
	</div>

	<div class="dealers-grid">
		{#each filteredDealers as dealer}
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
					{#if dealer.postalCode}
						<p class="address-line">
							{dealer.postalCode} {dealer.city}
						</p>
					{:else}
						<p class="address-line">{dealer.city}</p>
					{/if}
				</div>

				<p class="dealer-description">{dealer.description}</p>

				<div class="floor-types">
					{#each dealer.floorTypes as floorType}
						<span class="floor-tag">{floorType}</span>
					{/each}
				</div>

				<div class="dealer-features">
					{#each dealer.features as feature}
						<span class="feature-tag">{feature}</span>
					{/each}
				</div>

				<div class="dealer-actions">
					<a href={dealer.website} target="_blank" rel="noopener noreferrer" class="btn btn-primary">
						Website besuchen
					</a>
					{#if dealer.postalCode}
						<a
							href="https://www.google.com/maps/search/?api=1&query={encodeURIComponent(dealer.name + ' ' + dealer.address + ' ' + dealer.city)}"
							target="_blank"
							rel="noopener noreferrer"
							class="btn btn-secondary"
						>
							Route planen
						</a>
					{/if}
				</div>
			</article>
		{/each}
	</div>

	{#if filteredDealers.length === 0}
		<div class="no-results">
			<p>Keine Händler gefunden. Versuchen Sie andere Filtereinstellungen.</p>
		</div>
	{/if}

	<section class="buying-tips">
		<h2>Tipps für den Einkauf</h2>
		<div class="tips-grid">
			<div class="tip-card">
				<h3>Vor dem Besuch</h3>
				<ul>
					<li>Raum genau ausmessen (Länge x Breite)</li>
					<li>Fotos vom Raum mitnehmen</li>
					<li>Budget festlegen</li>
					<li>Über Materialien informieren</li>
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
</div>

<style>
	.section-header {
		text-align: center;
		margin-bottom: 2rem;
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

	.filters {
		display: flex;
		gap: 1.5rem;
		justify-content: center;
		margin-bottom: 2rem;
		flex-wrap: wrap;
	}

	.filter-group {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.filter-group label {
		font-weight: 500;
	}

	.filter-group select {
		padding: 0.5rem 1rem;
		border: 1px solid var(--color-secondary);
		border-radius: var(--radius-sm);
		font-size: 1rem;
		background: white;
	}

	.dealer-types {
		background: var(--color-surface);
		padding: 1.5rem;
		border-radius: var(--radius-md);
		margin-bottom: 2rem;
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

	.address-icon { font-size: 1.25rem; }

	.dealer-description {
		color: var(--color-text-light);
		margin-bottom: 1rem;
		flex-grow: 1;
	}

	.floor-types {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
		margin-bottom: 0.75rem;
	}

	.floor-tag {
		background: var(--color-primary);
		color: white;
		padding: 0.2rem 0.5rem;
		border-radius: var(--radius-sm);
		font-size: 0.75rem;
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

	.no-results {
		text-align: center;
		padding: 3rem;
		color: var(--color-text-light);
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

	.tip-card li { padding: 0.25rem 0; }

	@media (max-width: 600px) {
		.dealers-grid { grid-template-columns: 1fr; }

		.dealer-actions {
			flex-direction: column;
		}

		.dealer-actions .btn { width: 100%; }
	}
</style>
