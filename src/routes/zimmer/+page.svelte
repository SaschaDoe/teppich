<script lang="ts">
	interface RoomRecommendation {
		name: string;
		icon: string;
		description: string;
		requirements: string[];
		recommendedMaterials: string[];
		avoidMaterials: string[];
		polHeight: string;
		colorTips: string;
		specialTips: string[];
	}

	// Mapping von Material-Namen zu Ankern auf der Materialien-Seite
	const materialAnchors: Record<string, string> = {
		'Wolle': 'wolle',
		'Polyamid': 'polyamid',
		'Polyamid (hochwertig)': 'polyamid',
		'Polyamid (Kurzflor)': 'polyamid',
		'Hochflor-Polyamid': 'polyamid',
		'Günstiger Polyamid': 'polyamid',
		'Polypropylen': 'polypropylen',
		'Polypropylen (hochwertig)': 'polypropylen',
		'Billiges Polypropylen': 'polypropylen',
		'Kurzflor-PP': 'polypropylen',
		'Polyester': 'polyester',
		'Sisal': 'sisal',
		'Sisal (zu rau)': 'sisal',
		'Kokos': 'sisal',
		'Jute': 'sisal',
		'Naturfasern generell': 'sisal',
		'Mischgewebe': 'mischgewebe',
		'Wolle-Synthetik-Mix': 'mischgewebe',
		'Flachgewebe': 'mischgewebe',
		'Outdoor-Teppich': 'polypropylen'
	};

	function getMaterialLink(material: string): string | null {
		// Prüfe exakte Übereinstimmung
		if (materialAnchors[material]) {
			return `/materialien#${materialAnchors[material]}`;
		}
		// Prüfe Teil-Übereinstimmung
		for (const [key, anchor] of Object.entries(materialAnchors)) {
			if (material.toLowerCase().includes(key.toLowerCase())) {
				return `/materialien#${anchor}`;
			}
		}
		return null;
	}

	const rooms: RoomRecommendation[] = [
		{
			name: 'Wohnzimmer',
			icon: '🛋️',
			description: 'Das Herzstück des Hauses verdient einen Teppich, der Komfort und Langlebigkeit vereint. Hier verbringt die Familie die meiste Zeit.',
			requirements: [
				'Mittlere bis hohe Strapazierfähigkeit',
				'Weicher, angenehmer Flor',
				'Gute Fleckenresistenz',
				'Repräsentatives Aussehen'
			],
			recommendedMaterials: ['Wolle', 'Polyamid', 'Wolle-Synthetik-Mix'],
			avoidMaterials: ['Sisal (zu rau)', 'Billiges Polypropylen'],
			polHeight: 'Mittel bis hoch (10-15mm)',
			colorTips: 'Mittlere Töne sind praktisch - nicht zu hell (Flecken sichtbar) und nicht zu dunkel (Staub sichtbar). Beige, Grau, Taupe sind zeitlose Klassiker.',
			specialTips: [
				'Velours oder Saxony für luxuriöses Gefühl',
				'Bei Haustieren: Schlingenteppich vermeiden (Krallen)',
				'Unter schweren Möbeln: Filzgleiter verwenden'
			]
		},
		{
			name: 'Schlafzimmer',
			icon: '🛏️',
			description: 'Der Raum der Entspannung braucht einen besonders weichen und behaglichen Untergrund. Barfußkomfort hat hier oberste Priorität.',
			requirements: [
				'Maximaler Komfort',
				'Wärmedämmung',
				'Geräuschdämmung',
				'Allergikerfreundlich möglich'
			],
			recommendedMaterials: ['Wolle', 'Polyester', 'Hochflor-Polyamid'],
			avoidMaterials: ['Sisal', 'Kokos', 'Kurzflor-PP'],
			polHeight: 'Hoch (15-40mm) für maximalen Komfort',
			colorTips: 'Beruhigende, warme Farben. Creme, Beige, sanfte Pastelltöne oder gedämpftes Blau fördern den Schlaf.',
			specialTips: [
				'Hochflor/Shaggy für Luxusgefühl',
				'Bei Allergien: waschbarer Teppich oder Kurzflor',
				'Beidseitig des Bettes Läufer oder Brücken als Alternative'
			]
		},
		{
			name: 'Kinderzimmer',
			icon: '🧸',
			description: 'Hier wird gespielt, getobt und gelernt. Der Teppich muss robust, pflegeleicht und sicher sein.',
			requirements: [
				'Höchste Strapazierfähigkeit',
				'Leicht zu reinigen',
				'Schadstoffgeprüft',
				'Rutschfest',
				'Weich für Stürze'
			],
			recommendedMaterials: ['Polyamid', 'Polypropylen (hochwertig)'],
			avoidMaterials: ['Wolle (Mottenrisiko, teuer)', 'Sisal (zu rau)', 'Hochflor (schwer zu reinigen)'],
			polHeight: 'Mittel (8-12mm) - Kompromiss aus Komfort und Reinigung',
			colorTips: 'Bunte Farben und Muster sind willkommen! Kaschieren auch Flecken. Spielteppiche mit Straßen oder Motiven sind beliebt.',
			specialTips: [
				'Auf Öko-Tex Standard 100 achten',
				'Kurzflor ist pflegeleichter',
				'Schmutzabweisende Ausrüstung empfehlenswert',
				'Bei Babys: schadstofffreie Materialien sind Pflicht'
			]
		},
		{
			name: 'Flur / Eingangsbereich',
			icon: '🚪',
			description: 'Die meist beanspruchte Zone im Haus. Hier kommt der meiste Schmutz rein und es wird am meisten gelaufen.',
			requirements: [
				'Maximale Strapazierfähigkeit',
				'Schmutzunempfindlich',
				'Pflegeleicht',
				'Rutschfest'
			],
			recommendedMaterials: ['Polyamid (hochwertig)', 'Sisal', 'Flachgewebe'],
			avoidMaterials: ['Hochflor', 'Helle Farben', 'Polyester'],
			polHeight: 'Kurz bis mittel (5-10mm)',
			colorTips: 'Dunkle, gemusterte Töne kaschieren Schmutz am besten. Melierte Oberflächen sind ideal.',
			specialTips: [
				'Schmutzfangmatten im Eingang sind Pflicht',
				'Läufer statt vollflächigem Teppich erwägen',
				'Auf Trittsicherheit achten'
			]
		},
		{
			name: 'Arbeitszimmer / Büro',
			icon: '💼',
			description: 'Ein Raum für Konzentration braucht einen Teppich, der Rollstuhlrollen standhält und Ruhe ausstrahlt.',
			requirements: [
				'Bürostuhlrollen-geeignet',
				'Antistatisch',
				'Schalldämmend',
				'Professionelles Erscheinungsbild'
			],
			recommendedMaterials: ['Polyamid (Kurzflor)', 'Sisal', 'Flachgewebe'],
			avoidMaterials: ['Hochflor', 'Langflor-Velours'],
			polHeight: 'Kurz (4-8mm) für gute Rollbarkeit',
			colorTips: 'Dezente, professionelle Farben: Grau, Anthrazit, dunkles Blau. Gedeckte Töne fördern die Konzentration.',
			specialTips: [
				'Bodenschutzmatte unter dem Stuhl erwägen',
				'Bei offenem Schlingengewebe: auf Rollentauglichkeit achten',
				'Antistatik-Ausrüstung für Elektronik wichtig'
			]
		},
		{
			name: 'Gästezimmer',
			icon: '🛎️',
			description: 'Ein Raum, der wenig genutzt wird, aber bei Bedarf einladend wirken soll.',
			requirements: [
				'Einladendes Ambiente',
				'Geringere Beanspruchung',
				'Gutes Preis-Leistungs-Verhältnis'
			],
			recommendedMaterials: ['Polypropylen', 'Polyester', 'Günstiger Polyamid'],
			avoidMaterials: ['Teure Wolle (lohnt sich hier nicht)'],
			polHeight: 'Mittel (10-15mm)',
			colorTips: 'Neutrale, einladende Töne. Der Raum soll gemütlich wirken, ohne zu persönlich zu sein.',
			specialTips: [
				'Hier kann man sparen ohne schlechtes Gewissen',
				'Neutrale Farben passen zu jeder Einrichtung',
				'Weniger Beanspruchung erlaubt weichere Fasern'
			]
		},
		{
			name: 'Keller / Hobbyraum',
			icon: '🏠',
			description: 'Oft feuchter und kühler als andere Räume. Der Teppich muss mit besonderen Bedingungen umgehen können.',
			requirements: [
				'Feuchtigkeitsbeständig',
				'Schimmelresistent',
				'Robust',
				'Günstig'
			],
			recommendedMaterials: ['Polypropylen', 'Outdoor-Teppich'],
			avoidMaterials: ['Wolle', 'Jute', 'Sisal', 'Naturfasern generell'],
			polHeight: 'Kurz bis mittel (5-10mm)',
			colorTips: 'Dunkle, praktische Farben. Der Raum muss nicht repräsentativ sein.',
			specialTips: [
				'Vor Verlegung: Feuchtigkeit messen',
				'Dampfsperre unter dem Teppich erwägen',
				'Lose Verlegung ermöglicht Trocknung',
				'Bei Überschwemmungsgefahr: Fliesen statt Teppich'
			]
		},
		{
			name: 'Treppe',
			icon: '🪜',
			description: 'Sicherheit geht vor! Eine rutschige Treppe ist gefährlich. Der Teppich muss fest sitzen und trittsicher sein.',
			requirements: [
				'Maximale Rutschfestigkeit',
				'Höchste Strapazierfähigkeit',
				'Feste Verklebung',
				'Keine lose Fasern'
			],
			recommendedMaterials: ['Polyamid (Kurzflor)', 'Flachgewebe', 'Sisal'],
			avoidMaterials: ['Hochflor', 'Schlingenware mit losen Schlaufen'],
			polHeight: 'Kurz (4-6mm) für Sicherheit',
			colorTips: 'Mittlere bis dunkle Töne. Muster können Verschleiß kaschieren.',
			specialTips: [
				'Professionelle Verlegung empfohlen',
				'Treppenkanten mit Schienen sichern',
				'Engmaschiges Gewebe wählen',
				'Regelmäßig Befestigung prüfen'
			]
		}
	];
</script>

<svelte:head>
	<title>Zimmerempfehlungen - Teppichboden Ratgeber</title>
</svelte:head>

<div class="section-header">
	<h1>Zimmerempfehlungen</h1>
	<p>Der richtige Teppich für jeden Raum - passend zu Nutzung und Anforderungen</p>
</div>

<div class="quick-nav">
	<h2>Schnellnavigation</h2>
	<div class="nav-buttons">
		{#each rooms as room}
			<a href="#{room.name.toLowerCase().replace(/\s+/g, '-').replace(/\//g, '-')}" class="nav-btn">
				<span class="nav-icon">{room.icon}</span>
				<span>{room.name}</span>
			</a>
		{/each}
	</div>
</div>

<div class="rooms-list">
	{#each rooms as room}
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
								{@const link = getMaterialLink(mat)}
								{#if link}
									<a href={link} class="tag tag-pro tag-link">{mat}</a>
								{:else}
									<span class="tag tag-pro">{mat}</span>
								{/if}
							{/each}
						</div>
					</div>
					<div class="avoid">
						<h3>Weniger geeignet</h3>
						<div class="tags">
							{#each room.avoidMaterials as mat}
								{@const link = getMaterialLink(mat)}
								{#if link}
									<a href={link} class="tag tag-con tag-link">{mat}</a>
								{:else}
									<span class="tag tag-con">{mat}</span>
								{/if}
							{/each}
						</div>
					</div>
				</div>

				<div class="details-grid">
					<div class="detail-item">
						<h4>Empfohlene Polhöhe</h4>
						<p>{room.polHeight}</p>
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

<style>
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
		transition: all 0.2s;
	}

	.nav-btn:hover {
		background: var(--color-primary);
		color: white;
	}

	.nav-icon {
		font-size: 1.25rem;
	}

	.rooms-list {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.room-card {
		scroll-margin-top: 80px;
	}

	.room-header {
		display: flex;
		align-items: center;
		gap: 1rem;
		border-bottom: 2px solid var(--color-secondary);
		padding-bottom: 1rem;
		margin-bottom: 1rem;
	}

	.room-icon {
		font-size: 3rem;
	}

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

	.tag-link {
		text-decoration: none;
		cursor: pointer;
		transition: all 0.2s;
	}

	.tag-link:hover {
		transform: scale(1.05);
		box-shadow: 0 2px 8px rgba(0,0,0,0.15);
	}

	.tag-link.tag-pro:hover {
		background: #A5D6A7;
	}

	.tag-link.tag-con:hover {
		background: #EF9A9A;
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

	.general-tips {
		margin-top: 2rem;
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
