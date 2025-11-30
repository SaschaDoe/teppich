<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';

	let { children } = $props();
</script>

<svelte:head>
	<title>Teppichboden Ratgeber</title>
	<meta name="description" content="Alles rund um Teppichböden - Materialien, Händler, Empfehlungen und Pflegetipps" />
</svelte:head>

<nav>
	<div class="nav-container">
		<a href="/" class="logo">
			<span class="logo-icon">🏠</span>
			<span>Teppich Ratgeber</span>
		</a>
		<ul>
			<li><a href="/" class="nav-link" class:active={$page.url.pathname === '/'}>Start</a></li>
			<li><a href="/materialien" class="nav-link" class:active={$page.url.pathname === '/materialien'}>Materialien</a></li>
			<li><a href="/zimmer" class="nav-link" class:active={$page.url.pathname === '/zimmer'}>Zimmerempfehlungen</a></li>
			<li><a href="/haendler" class="nav-link" class:active={$page.url.pathname === '/haendler'}>Händler</a></li>
			<li><a href="/pflege" class="nav-link" class:active={$page.url.pathname === '/pflege'}>Pflege & Tipps</a></li>
		</ul>
	</div>
</nav>

<main>
	<div class="container">
		{@render children()}
	</div>
</main>

<footer>
	<div class="container">
		<div class="logo" style="color: white; opacity: 0.9;">
			<span class="logo-icon">🏠</span>
			<span>Teppich Ratgeber</span>
		</div>
		<p>&copy; 2024 Teppichboden Ratgeber. Alle Rechte vorbehalten.</p>
	</div>
</footer>
