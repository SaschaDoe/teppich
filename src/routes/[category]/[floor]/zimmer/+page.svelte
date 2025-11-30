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
	<title>{floor?.name ?? 'Zimmerempfehlungen'} Zimmerempfehlungen - Bodenbelag Ratgeber</title>
	<meta name="description" content="Welcher {floor?.name ?? ''} passt zu welchem Raum? Empfehlungen für Wohnzimmer, Schlafzimmer, Küche und mehr." />
</svelte:head>

{#if floor && category}
	<div class="container">
		<div class="breadcrumb">
			<a href="/">Start</a> / <a href="/{category.slug}">{category.name}</a> / <a href="/{category.slug}/{floor.slug}">{floor.name}</a> / <span>Zimmerempfehlungen</span>
		</div>

		<div class="section-header">
			<h1>Zimmerempfehlungen</h1>
			<p>Der richtige {floor.name} für jeden Raum - passend zu Nutzung und Anforderungen</p>
		</div>

		<div class="quick-nav">
			<h2>Schnellnavigation</h2>
			<div class="nav-buttons">
				{#each floor.rooms as room}
					<a href="#{room.name.toLowerCase().replace(/\s+/g, '-').replace(/\//g, '-')}" class="nav-btn">
						<span class="nav-icon">{room.icon}</span>
						<span>{room.name}</span>
					</a>
				{/each}
			</div>
		</div>

		<div class="rooms-list">
			{#each floor.rooms as room}
				<article class="card room-card" id="{room.name.toLowerCase().replace(/\s+/g, '-').replace(/\//g, '-')}">
					<div class="room-header">
						<span class="room-icon">{room.icon}</span>
						<h2>{room.name}</h2>
					</div>

					<p class="room-description">{room.description}</p>

					<div class="room-content">
						<div class="requirements-section">
							<h3>Anforderungen</h3>
							<ul>
								{#each room.requirements as req}
									<li>{req}</li>
								{/each}
							</ul>
						</div>

						<div class="materials-section">
							<div class="recommended">
								<h3>Empfohlene Materialien</h3>
								<div class="tags">
									{#each room.recommendedMaterials as mat}
										<a href="/{categorySlug}/{floorSlug}/materialien" class="tag tag-pro">{mat}</a>
									{/each}
								</div>
							</div>
							<div class="avoid">
								<h3>Weniger geeignet</h3>
								<div class="tags">
									{#each room.avoidMaterials as mat}
										<span class="tag tag-con">{mat}</span>
									{/each}
								</div>
							</div>
						</div>

						<div class="details-grid">
							<div class="detail-item">
								<h4>Empfohlene Stärke</h4>
								<p>{room.thickness}</p>
							</div>
							<div class="detail-item">
								<h4>Farbtipps</h4>
								<p>{room.colorTips}</p>
							</div>
						</div>

						<div class="special-tips">
							<h4>Besondere Tipps</h4>
							<ul>
								{#each room.specialTips as tip}
									<li>{tip}</li>
								{/each}
							</ul>
						</div>
					</div>
				</article>
			{/each}
		</div>

		<section class="general-tips">
			<div class="tip-box">
				<strong>Genereller Tipp:</strong> Bevor Sie sich entscheiden, holen Sie sich Musterproben und legen Sie diese im geplanten Raum aus.
				Betrachten Sie die Muster bei verschiedenen Lichtverhältnissen (Tag/Nacht, Kunst-/Naturlicht).
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

	.quick-nav {
		background: var(--color-surface);
		padding: 1.5rem;
		border-radius: var(--radius-md);
		margin-bottom: 2rem;
		box-shadow: var(--shadow-sm);
	}

	.quick-nav h2 {
		color: var(--color-primary);
		margin-bottom: 1rem;
		text-align: center;
	}

	.nav-buttons {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		justify-content: center;
	}

	.nav-btn {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.5rem 1rem;
		background: var(--color-background);
		border-radius: var(--radius-sm);
		text-decoration: none;
		color: inherit;
		transition: all 0.2s;
	}

	.nav-btn:hover {
		background: var(--color-primary);
		color: white;
	}

	.nav-icon { font-size: 1.25rem; }

	.rooms-list {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.room-card { scroll-margin-top: 80px; }

	.room-header {
		display: flex;
		align-items: center;
		gap: 1rem;
		border-bottom: 2px solid var(--color-secondary);
		padding-bottom: 1rem;
		margin-bottom: 1rem;
	}

	.room-icon { font-size: 3rem; }

	.room-header h2 {
		color: var(--color-primary);
		margin: 0;
	}

	.room-description {
		color: var(--color-text-light);
		font-size: 1.1rem;
		margin-bottom: 1.5rem;
	}

	.room-content {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.requirements-section h3,
	.materials-section h3,
	.special-tips h4,
	.details-grid h4 {
		color: var(--color-primary);
		margin-bottom: 0.5rem;
	}

	.requirements-section ul,
	.special-tips ul {
		list-style: disc;
		padding-left: 1.5rem;
	}

	.requirements-section li,
	.special-tips li {
		padding: 0.25rem 0;
	}

	.materials-section {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.tag {
		padding: 0.3rem 0.7rem;
		border-radius: var(--radius-sm);
		font-size: 0.9rem;
		text-decoration: none;
	}

	.tag-pro {
		background: #C8E6C9;
		color: #2E7D32;
	}

	.tag-con {
		background: #FFCDD2;
		color: #C62828;
	}

	.tag-pro:hover {
		background: #A5D6A7;
	}

	.details-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
	}

	.detail-item {
		background: var(--color-background);
		padding: 1rem;
		border-radius: var(--radius-sm);
	}

	.detail-item p {
		margin: 0;
		color: var(--color-text-light);
	}

	.special-tips {
		background: linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%);
		padding: 1rem;
		border-radius: var(--radius-sm);
		border-left: 4px solid var(--color-success);
	}

	.general-tips { margin-top: 2rem; }

	.tip-box {
		background: linear-gradient(135deg, #FFF8E1 0%, #FFECB3 100%);
		padding: 1.5rem;
		border-radius: var(--radius-md);
		border-left: 4px solid var(--color-warning);
	}

	@media (max-width: 600px) {
		.materials-section,
		.details-grid {
			grid-template-columns: 1fr;
		}

		.room-header {
			flex-direction: column;
			text-align: center;
		}
	}
</style>
