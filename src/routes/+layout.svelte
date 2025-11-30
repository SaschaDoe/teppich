<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import { categories } from '$lib/data';

	let { children } = $props();
	let mobileMenuOpen = $state(false);
	let activeDropdown = $state<string | null>(null);

	function toggleDropdown(id: string) {
		activeDropdown = activeDropdown === id ? null : id;
	}

	function closeDropdown() {
		activeDropdown = null;
	}
</script>

<svelte:head>
	<title>Bodenbelag Ratgeber - Parkett, Fliesen, Vinyl & mehr</title>
	<meta name="description" content="Umfassender Ratgeber für alle Bodenbeläge - Parkett, Laminat, Vinyl, Fliesen, Teppich und mehr. Mit Materialvergleichen, Pflegetipps und Händlersuche." />
</svelte:head>

<nav>
	<div class="nav-container">
		<a href="/" class="logo">
			<span class="logo-icon">🏠</span>
			<span>Bodenbelag Ratgeber</span>
		</a>

		<button class="mobile-menu-btn" onclick={() => mobileMenuOpen = !mobileMenuOpen}>
			{mobileMenuOpen ? '✕' : '☰'}
		</button>

		<ul class="nav-menu" class:open={mobileMenuOpen}>
			<li><a href="/" class="nav-link" class:active={$page.url.pathname === '/'}>Start</a></li>

			{#each categories as category}
				<li class="dropdown" onmouseleave={closeDropdown}>
					<button
						class="nav-link dropdown-trigger"
						class:active={$page.url.pathname.startsWith('/' + category.slug)}
						onclick={() => toggleDropdown(category.id)}
						onmouseenter={() => activeDropdown = category.id}
					>
						{category.icon} {category.name}
						<span class="dropdown-arrow">▼</span>
					</button>

					{#if activeDropdown === category.id}
						<div class="dropdown-menu">
							<a href="/{category.slug}" class="dropdown-item category-overview">
								Alle {category.name} &rarr;
							</a>
							<div class="dropdown-divider"></div>
							{#each category.floorTypes as floorType}
								<a href="/{category.slug}/{floorType.slug}" class="dropdown-item">
									{floorType.icon} {floorType.name}
								</a>
							{/each}
						</div>
					{/if}
				</li>
			{/each}

			<li><a href="/haendler" class="nav-link" class:active={$page.url.pathname === '/haendler'}>Händler</a></li>
		</ul>
	</div>
</nav>

<main>
	{@render children()}
</main>

<footer>
	<div class="container">
		<div class="footer-content">
			<div class="footer-brand">
				<div class="logo" style="color: white; opacity: 0.9;">
					<span class="logo-icon">🏠</span>
					<span>Bodenbelag Ratgeber</span>
				</div>
				<p>Ihr umfassender Guide für den perfekten Boden</p>
			</div>
			<div class="footer-links">
				<h4>Kategorien</h4>
				<ul>
					{#each categories as category}
						<li><a href="/{category.slug}">{category.icon} {category.name}</a></li>
					{/each}
				</ul>
			</div>
			<div class="footer-links">
				<h4>Service</h4>
				<ul>
					<li><a href="/haendler">Händler finden</a></li>
				</ul>
			</div>
		</div>
		<div class="footer-bottom">
			<p>&copy; 2024 Bodenbelag Ratgeber. Alle Rechte vorbehalten.</p>
		</div>
	</div>
</footer>

<style>
	nav {
		background: white;
		box-shadow: 0 2px 10px rgba(0,0,0,0.1);
		position: sticky;
		top: 0;
		z-index: 100;
	}

	.nav-container {
		max-width: 1400px;
		margin: 0 auto;
		padding: 0 1rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 70px;
	}

	.logo {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-weight: 700;
		font-size: 1.2rem;
		text-decoration: none;
		color: var(--color-primary-dark);
	}

	.logo-icon {
		font-size: 1.5rem;
	}

	.mobile-menu-btn {
		display: none;
		background: none;
		border: none;
		font-size: 1.5rem;
		cursor: pointer;
		padding: 0.5rem;
	}

	.nav-menu {
		display: flex;
		list-style: none;
		gap: 0.25rem;
		margin: 0;
		padding: 0;
		align-items: center;
	}

	.nav-link {
		display: flex;
		align-items: center;
		gap: 0.3rem;
		padding: 0.6rem 0.9rem;
		text-decoration: none;
		color: var(--color-text);
		border-radius: var(--radius-sm);
		transition: all 0.2s;
		font-size: 0.95rem;
		background: none;
		border: none;
		cursor: pointer;
		font-family: inherit;
	}

	.nav-link:hover {
		background: var(--color-background);
		color: var(--color-primary);
	}

	.nav-link.active {
		background: var(--color-secondary);
		color: var(--color-primary-dark);
	}

	.dropdown {
		position: relative;
	}

	.dropdown-trigger {
		display: flex;
		align-items: center;
	}

	.dropdown-arrow {
		font-size: 0.6rem;
		margin-left: 0.3rem;
		opacity: 0.6;
	}

	.dropdown-menu {
		position: absolute;
		top: 100%;
		left: 0;
		background: white;
		border-radius: var(--radius-md);
		box-shadow: var(--shadow-lg);
		min-width: 220px;
		padding: 0.5rem;
		z-index: 1000;
	}

	.dropdown-item {
		display: block;
		padding: 0.6rem 1rem;
		text-decoration: none;
		color: var(--color-text);
		border-radius: var(--radius-sm);
		transition: all 0.2s;
		font-size: 0.9rem;
	}

	.dropdown-item:hover {
		background: var(--color-background);
		color: var(--color-primary);
	}

	.dropdown-item.category-overview {
		font-weight: 600;
		color: var(--color-primary);
	}

	.dropdown-divider {
		height: 1px;
		background: var(--color-secondary);
		margin: 0.5rem 0;
	}

	main {
		min-height: calc(100vh - 70px - 300px);
	}

	footer {
		background: #3E2723;
		color: white;
		padding: 3rem 0 1rem;
		margin-top: 4rem;
	}

	.footer-content {
		display: grid;
		grid-template-columns: 2fr 1fr 1fr;
		gap: 3rem;
		margin-bottom: 2rem;
	}

	.footer-brand p {
		color: rgba(255,255,255,0.7);
		margin-top: 0.5rem;
	}

	.footer-links h4 {
		color: white;
		margin-bottom: 1rem;
		font-size: 1rem;
	}

	.footer-links ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.footer-links li {
		margin-bottom: 0.5rem;
	}

	.footer-links a {
		color: rgba(255,255,255,0.7);
		text-decoration: none;
		font-size: 0.9rem;
		transition: color 0.2s;
	}

	.footer-links a:hover {
		color: white;
	}

	.footer-bottom {
		border-top: 1px solid rgba(255,255,255,0.1);
		padding-top: 1rem;
		text-align: center;
	}

	.footer-bottom p {
		color: rgba(255,255,255,0.5);
		font-size: 0.85rem;
		margin: 0;
	}

	@media (max-width: 1024px) {
		.mobile-menu-btn {
			display: block;
		}

		.nav-menu {
			display: none;
			position: absolute;
			top: 70px;
			left: 0;
			right: 0;
			background: white;
			flex-direction: column;
			padding: 1rem;
			box-shadow: var(--shadow-md);
			gap: 0;
		}

		.nav-menu.open {
			display: flex;
		}

		.nav-menu li {
			width: 100%;
		}

		.nav-link {
			width: 100%;
			justify-content: flex-start;
			padding: 1rem;
		}

		.dropdown-menu {
			position: static;
			box-shadow: none;
			padding-left: 1rem;
			background: var(--color-background);
		}

		.footer-content {
			grid-template-columns: 1fr;
			text-align: center;
		}
	}
</style>
