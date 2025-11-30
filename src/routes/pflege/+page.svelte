<script lang="ts">
	interface StainRemoval {
		stain: string;
		icon: string;
		steps: string[];
		warning?: string;
	}

	const stainRemovals: StainRemoval[] = [
		{
			stain: 'Rotwein',
			icon: '🍷',
			steps: [
				'Sofort mit Küchenpapier abtupfen (nicht reiben!)',
				'Salz großzügig aufstreuen und einwirken lassen',
				'Nach 15 Min. absaugen',
				'Mit Mineralwasser oder verdünntem Essig nachbehandeln',
				'Mit klarem Wasser ausspülen und trocknen lassen'
			],
			warning: 'Niemals heißes Wasser verwenden - das fixiert den Fleck!'
		},
		{
			stain: 'Kaffee',
			icon: '☕',
			steps: [
				'Überschüssige Flüssigkeit sofort aufnehmen',
				'Kaltes Wasser mit etwas Spülmittel mischen',
				'Von außen nach innen tupfen',
				'Mit klarem Wasser nachspülen',
				'Trocknen lassen'
			]
		},
		{
			stain: 'Fett/Öl',
			icon: '🫒',
			steps: [
				'Grobes Fett mit Löffel abheben',
				'Speisestärke oder Backpulver aufstreuen',
				'Mehrere Stunden einwirken lassen',
				'Absaugen',
				'Mit Gallseife oder Teppichschaum nachbehandeln'
			]
		},
		{
			stain: 'Kaugummi',
			icon: '🫧',
			steps: [
				'Mit Eiswürfeln in Plastikbeutel kühlen',
				'Gehärteten Kaugummi vorsichtig abbrechen',
				'Reste mit stumpfem Messer abkratzen',
				'Mit Waschbenzin Rückstände lösen',
				'Mit Seifenlauge nachreinigen'
			]
		},
		{
			stain: 'Tierurin',
			icon: '🐕',
			steps: [
				'Sofort mit Küchenpapier aufnehmen',
				'Mit Essigwasser (1:1) behandeln',
				'Einwirken lassen',
				'Mit Natron bestreuen gegen Geruch',
				'Nach dem Trocknen absaugen'
			],
			warning: 'Spezielle Enzymreiniger sind am effektivsten gegen Gerüche.'
		},
		{
			stain: 'Wachs',
			icon: '🕯️',
			steps: [
				'Wachs vollständig erkalten lassen',
				'Grobes Wachs abbrechen',
				'Löschpapier auflegen',
				'Mit Bügeleisen auf niedriger Stufe erwärmen',
				'Wachs wird vom Papier aufgesogen'
			],
			warning: 'Nicht zu heiß bügeln - Synthetikfasern können schmelzen!'
		}
	];

	const maintenanceSchedule = [
		{
			frequency: 'Täglich',
			tasks: ['Sichtbaren Schmutz aufsammeln', 'Stark frequentierte Bereiche saugen'],
			icon: '📅'
		},
		{
			frequency: 'Wöchentlich',
			tasks: ['Gründlich staubsaugen (alle Räume)', 'Unter Möbeln saugen', 'Flecken sofort behandeln'],
			icon: '📆'
		},
		{
			frequency: 'Monatlich',
			tasks: ['Tiefenreinigung mit Teppichpulver', 'Möbel verrücken und darunter saugen', 'Fransen und Kanten prüfen'],
			icon: '🗓️'
		},
		{
			frequency: 'Jährlich',
			tasks: ['Professionelle Grundreinigung erwägen', 'Florfasern aufbürsten', 'Imprägnierung erneuern'],
			icon: '📋'
		}
	];
</script>

<svelte:head>
	<title>Pflege & Tipps - Teppichboden Ratgeber</title>
</svelte:head>

<div class="section-header">
	<h1>Pflege & Tipps</h1>
	<p>So bleibt Ihr Teppichboden lange schön - von der täglichen Pflege bis zur Fleckenentfernung</p>
</div>

<section class="basic-care">
	<h2>Grundlagen der Teppichpflege</h2>
	<div class="care-grid">
		<div class="care-card">
			<div class="care-icon">🧹</div>
			<h3>Regelmäßiges Saugen</h3>
			<p>Das A und O der Teppichpflege. Saugen Sie mindestens 1-2x pro Woche, in stark genutzten Bereichen täglich.</p>
			<ul>
				<li>Langsam und überlappend saugen</li>
				<li>In beide Richtungen für bessere Reinigung</li>
				<li>Bürstaufsatz bei Hochflor verwenden</li>
				<li>Saugkraft an Material anpassen</li>
			</ul>
		</div>

		<div class="care-card">
			<div class="care-icon">🚫</div>
			<h3>Das sollten Sie vermeiden</h3>
			<ul>
				<li>Zu nasses Reinigen (Schimmelgefahr)</li>
				<li>Aggressive Reinigungsmittel</li>
				<li>Reiben bei Flecken (nur tupfen!)</li>
				<li>Heiße Temperaturen bei Kunstfasern</li>
				<li>Bleichmittel</li>
				<li>Zu starkes Saugen bei Hochflor</li>
			</ul>
		</div>

		<div class="care-card">
			<div class="care-icon">💡</div>
			<h3>Profi-Tipps</h3>
			<ul>
				<li>Schuhe ausziehen schont den Teppich</li>
				<li>Filzgleiter unter Möbelbeine</li>
				<li>Teppich regelmäßig drehen (Abnutzung)</li>
				<li>Fußmatten am Eingang reduzieren Schmutz</li>
				<li>UV-Schutzfolien verhindern Ausbleichen</li>
			</ul>
		</div>
	</div>
</section>

<section class="maintenance-schedule">
	<h2>Pflegeplan</h2>
	<div class="schedule-grid">
		{#each maintenanceSchedule as schedule}
			<div class="schedule-card">
				<div class="schedule-header">
					<span class="schedule-icon">{schedule.icon}</span>
					<h3>{schedule.frequency}</h3>
				</div>
				<ul>
					{#each schedule.tasks as task}
						<li>{task}</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</section>

<section class="stain-removal">
	<h2>Fleckenentfernung</h2>
	<p class="stain-intro">Die goldene Regel: Je schneller Sie handeln, desto besser die Erfolgsaussichten!</p>

	<div class="stains-grid">
		{#each stainRemovals as stain}
			<div class="card stain-card">
				<div class="stain-header">
					<span class="stain-icon">{stain.icon}</span>
					<h3>{stain.stain}</h3>
				</div>
				<ol class="stain-steps">
					{#each stain.steps as step, i}
						<li><span class="step-number">{i + 1}</span> {step}</li>
					{/each}
				</ol>
				{#if stain.warning}
					<div class="stain-warning">
						<strong>⚠️ Achtung:</strong> {stain.warning}
					</div>
				{/if}
			</div>
		{/each}
	</div>
</section>

<section class="deep-cleaning">
	<h2>Tiefenreinigung</h2>
	<div class="cleaning-methods">
		<div class="method-card">
			<h3>Trockene Methoden</h3>
			<div class="method-content">
				<h4>Teppichpulver / Schaum</h4>
				<ul>
					<li>Pulver gleichmäßig verteilen</li>
					<li>Mit Bürste einarbeiten</li>
					<li>30-60 Min. einwirken lassen</li>
					<li>Gründlich absaugen</li>
				</ul>
				<p class="method-pro">Vorteil: Teppich sofort nutzbar</p>
			</div>
		</div>

		<div class="method-card">
			<h3>Feuchte Methoden</h3>
			<div class="method-content">
				<h4>Sprühextraktion (Waschsauger)</h4>
				<ul>
					<li>Reinigungslösung einsprühen</li>
					<li>Kurz einwirken lassen</li>
					<li>Absaugen mit Waschsauger</li>
					<li>Gut trocknen lassen (24-48h)</li>
				</ul>
				<p class="method-pro">Vorteil: Sehr gründliche Reinigung</p>
				<p class="method-con">Nachteil: Lange Trocknungszeit</p>
			</div>
		</div>

		<div class="method-card highlight">
			<h3>Professionelle Reinigung</h3>
			<div class="method-content">
				<p>Für eine Grundreinigung alle 1-2 Jahre empfehlen wir einen professionellen Service:</p>
				<ul>
					<li>Industrielle Geräte</li>
					<li>Spezialreiniger nach Material</li>
					<li>Schnellere Trocknung</li>
					<li>Imprägnierung möglich</li>
				</ul>
				<p class="method-price">Kosten: ca. 2-5 €/m²</p>
			</div>
		</div>
	</div>
</section>

<section class="material-specific">
	<h2>Materialspezifische Pflege</h2>
	<div class="material-tips-grid">
		<div class="material-tip">
			<h3>🐑 Wolle</h3>
			<ul>
				<li>Nur pH-neutrale Reiniger</li>
				<li>Nie zu nass reinigen</li>
				<li>Mottenschutz verwenden</li>
				<li>Direkte Sonne meiden</li>
			</ul>
		</div>
		<div class="material-tip">
			<h3>🔬 Synthetik (PA/PP/PES)</h3>
			<ul>
				<li>Robuster - mehr Methoden möglich</li>
				<li>Antistatikspray bei Bedarf</li>
				<li>Keine Hitze (Bügeleisen!)</li>
				<li>Verträgt feuchte Reinigung besser</li>
			</ul>
		</div>
		<div class="material-tip">
			<h3>🌿 Naturfasern (Sisal/Jute)</h3>
			<ul>
				<li>Nur trockene Methoden!</li>
				<li>Feuchtigkeit unbedingt vermeiden</li>
				<li>Regelmäßig kehren</li>
				<li>Bei Flecken: sofort trocknen</li>
			</ul>
		</div>
	</div>
</section>

<section class="equipment">
	<h2>Empfohlene Ausrüstung</h2>
	<div class="equipment-grid">
		<div class="equipment-card">
			<h3>Grundausstattung</h3>
			<ul>
				<li>Staubsauger mit Bürstenaufsatz</li>
				<li>Teppichbürste oder -rechen</li>
				<li>Weiße Tücher (zum Tupfen)</li>
				<li>Sprühflasche</li>
				<li>Neutralreiniger</li>
			</ul>
		</div>
		<div class="equipment-card">
			<h3>Für Flecken</h3>
			<ul>
				<li>Gallseife</li>
				<li>Essigessenz</li>
				<li>Natron / Backpulver</li>
				<li>Mineralwasser</li>
				<li>Enzymreiniger (Tierhaushalt)</li>
			</ul>
		</div>
		<div class="equipment-card">
			<h3>Für Tiefenreinigung</h3>
			<ul>
				<li>Teppichschaum oder -pulver</li>
				<li>Waschsauger (Miete lohnt sich)</li>
				<li>Teppichklopfer (Outdoor)</li>
				<li>Dampfreiniger (nur für Synthetik!)</li>
			</ul>
		</div>
	</div>
</section>

<section class="final-tips">
	<div class="tip-box">
		<strong>Unser wichtigster Tipp:</strong> Testen Sie JEDEN Reiniger zuerst an einer unauffälligen Stelle!
		Warten Sie 24 Stunden und prüfen Sie auf Verfärbungen oder Beschädigungen, bevor Sie den gesamten Teppich behandeln.
	</div>
</section>

<style>
	h2 {
		color: var(--color-primary);
		text-align: center;
		margin: 2rem 0 1.5rem 0;
	}

	section {
		margin-bottom: 3rem;
	}

	.care-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 1.5rem;
	}

	.care-card {
		background: var(--color-surface);
		padding: 1.5rem;
		border-radius: var(--radius-md);
		box-shadow: var(--shadow-sm);
	}

	.care-icon {
		font-size: 2.5rem;
		margin-bottom: 0.5rem;
	}

	.care-card h3 {
		color: var(--color-primary);
		margin-bottom: 0.75rem;
	}

	.care-card ul {
		list-style: disc;
		padding-left: 1.25rem;
	}

	.care-card li {
		padding: 0.25rem 0;
	}

	.schedule-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
		gap: 1rem;
	}

	.schedule-card {
		background: var(--color-surface);
		padding: 1rem;
		border-radius: var(--radius-md);
		box-shadow: var(--shadow-sm);
	}

	.schedule-header {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin-bottom: 0.75rem;
		border-bottom: 2px solid var(--color-secondary);
		padding-bottom: 0.5rem;
	}

	.schedule-icon {
		font-size: 1.5rem;
	}

	.schedule-header h3 {
		color: var(--color-primary);
		margin: 0;
	}

	.schedule-card ul {
		list-style: none;
		padding: 0;
	}

	.schedule-card li {
		padding: 0.5rem 0;
		padding-left: 1.25rem;
		position: relative;
	}

	.schedule-card li::before {
		content: "✓";
		position: absolute;
		left: 0;
		color: var(--color-success);
	}

	.stain-intro {
		text-align: center;
		font-size: 1.1rem;
		color: var(--color-text-light);
		margin-bottom: 1.5rem;
	}

	.stains-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 1.5rem;
	}

	.stain-card {
		border-top: 4px solid var(--color-primary);
	}

	.stain-header {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		margin-bottom: 1rem;
	}

	.stain-icon {
		font-size: 2rem;
	}

	.stain-header h3 {
		margin: 0;
		color: var(--color-primary);
	}

	.stain-steps {
		list-style: none;
		padding: 0;
	}

	.stain-steps li {
		display: flex;
		align-items: flex-start;
		gap: 0.75rem;
		padding: 0.5rem 0;
	}

	.step-number {
		background: var(--color-primary);
		color: white;
		width: 24px;
		height: 24px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 0.8rem;
		flex-shrink: 0;
	}

	.stain-warning {
		background: #FFF3E0;
		border-left: 3px solid var(--color-warning);
		padding: 0.75rem;
		margin-top: 1rem;
		border-radius: var(--radius-sm);
		font-size: 0.9rem;
	}

	.cleaning-methods {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 1.5rem;
	}

	.method-card {
		background: var(--color-surface);
		padding: 1.5rem;
		border-radius: var(--radius-md);
		box-shadow: var(--shadow-sm);
	}

	.method-card.highlight {
		border: 2px solid var(--color-primary);
		background: linear-gradient(135deg, #FDF5E6 0%, #FAEBD7 100%);
	}

	.method-card h3 {
		color: var(--color-primary);
		border-bottom: 2px solid var(--color-secondary);
		padding-bottom: 0.5rem;
		margin-bottom: 1rem;
	}

	.method-card h4 {
		color: var(--color-primary-light);
		margin-bottom: 0.5rem;
	}

	.method-card ul {
		list-style: disc;
		padding-left: 1.25rem;
		margin-bottom: 0.75rem;
	}

	.method-pro {
		color: var(--color-success);
		font-size: 0.9rem;
	}

	.method-con {
		color: var(--color-error);
		font-size: 0.9rem;
	}

	.method-price {
		background: var(--color-accent);
		padding: 0.5rem;
		border-radius: var(--radius-sm);
		text-align: center;
		font-weight: bold;
		margin-top: 1rem;
	}

	.material-tips-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 1rem;
	}

	.material-tip {
		background: var(--color-surface);
		padding: 1.5rem;
		border-radius: var(--radius-md);
		box-shadow: var(--shadow-sm);
	}

	.material-tip h3 {
		color: var(--color-primary);
		margin-bottom: 0.75rem;
	}

	.material-tip ul {
		list-style: disc;
		padding-left: 1.25rem;
	}

	.equipment-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
		gap: 1rem;
	}

	.equipment-card {
		background: var(--color-surface);
		padding: 1.25rem;
		border-radius: var(--radius-md);
		box-shadow: var(--shadow-sm);
	}

	.equipment-card h3 {
		color: var(--color-primary);
		margin-bottom: 0.75rem;
		font-size: 1rem;
	}

	.equipment-card ul {
		list-style: none;
		padding: 0;
	}

	.equipment-card li {
		padding: 0.35rem 0;
		padding-left: 1.25rem;
		position: relative;
	}

	.equipment-card li::before {
		content: "•";
		position: absolute;
		left: 0;
		color: var(--color-primary);
	}

	@media (max-width: 600px) {
		.stains-grid,
		.cleaning-methods,
		.care-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
