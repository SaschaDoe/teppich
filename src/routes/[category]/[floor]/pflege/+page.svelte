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
</script>

<svelte:head>
	<title>{floor?.name ?? 'Pflege'} Pflege & Tipps - Bodenbelag Ratgeber</title>
	<meta name="description" content="Pflegetipps für {floor?.name ?? ''}: Reinigung, Fleckenentfernung und Expertenratschläge für lange Freude am Boden." />
</svelte:head>

{#if floor && category}
	<div class="container">
		<div class="breadcrumb">
			<a href="/">Start</a> / <a href="/{category.slug}">{category.name}</a> / <a href="/{category.slug}/{floor.slug}">{floor.name}</a> / <span>Pflege & Tipps</span>
		</div>

		<div class="section-header">
			<h1>Pflege & Tipps</h1>
			<p>So bleibt Ihr {floor.name} lange schön - von der täglichen Pflege bis zur Fleckenentfernung</p>
		</div>

		<section class="basic-care">
			<h2>Grundlagen der {floor.name}-Pflege</h2>
			<div class="care-grid">
				{#each floor.careGuide.basics as care}
					<div class="care-card">
						<div class="care-icon">{care.icon}</div>
						<h3>{care.title}</h3>
						<p>{care.description}</p>
						<ul>
							{#each care.tips as tip}
								<li>{tip}</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>
		</section>

		<section class="maintenance-schedule">
			<h2>Pflegeplan</h2>
			<div class="schedule-grid">
				{#each floor.careGuide.maintenanceSchedule as schedule}
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
				{#each floor.careGuide.stainRemovals as stain}
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
								<strong>Achtung:</strong> {stain.warning}
							</div>
						{/if}
					</div>
				{/each}
			</div>
		</section>

		<section class="material-specific">
			<h2>Materialspezifische Pflege</h2>
			<div class="material-tips-grid">
				{#each floor.careGuide.materialSpecificCare as care}
					<div class="material-tip">
						<h3>{care.icon} {care.material}</h3>
						<ul>
							{#each care.tips as tip}
								<li>{tip}</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>
		</section>

		<section class="final-tips">
			<div class="tip-box">
				<strong>Unser wichtigster Tipp:</strong> Testen Sie JEDEN Reiniger zuerst an einer unauffälligen Stelle!
				Warten Sie 24 Stunden und prüfen Sie auf Verfärbungen oder Beschädigungen, bevor Sie die gesamte Fläche behandeln.
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

	.breadcrumb a:hover { text-decoration: underline; }

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

	h2 {
		color: var(--color-primary);
		text-align: center;
		margin: 2rem 0 1.5rem 0;
	}

	section { margin-bottom: 3rem; }

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

	.care-card p {
		color: var(--color-text-light);
		margin-bottom: 1rem;
	}

	.care-card ul {
		list-style: disc;
		padding-left: 1.25rem;
	}

	.care-card li { padding: 0.25rem 0; }

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

	.schedule-icon { font-size: 1.5rem; }

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

	.stain-card { border-top: 4px solid var(--color-primary); }

	.stain-header {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		margin-bottom: 1rem;
	}

	.stain-icon { font-size: 2rem; }

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

	.material-tip li { padding: 0.25rem 0; }

	.final-tips { margin-top: 2rem; }

	.tip-box {
		background: linear-gradient(135deg, #FFF8E1 0%, #FFECB3 100%);
		padding: 1.5rem;
		border-radius: var(--radius-md);
		border-left: 4px solid var(--color-warning);
	}

	@media (max-width: 600px) {
		.stains-grid,
		.care-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
