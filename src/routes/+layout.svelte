<script>
	import 'modern-normalize';
	import 'pollen-css';

	import { dev } from '$app/environment';
	import { base } from '$app/paths';

	import Menu from '$lib/Menu.svelte';

	if ('serviceWorker' in navigator) {
		addEventListener('load', () => {
			navigator.serviceWorker
				.register(`${base}/service-worker.js`, {
					type: dev ? 'module' : 'classic'
				})
				.then(
					(registration) => console.log('Success:', registration),
					(error) => console.error('Failure:', error)
				);

		});
	}
</script>

<div id="app">
	<div id="content">
		<slot />
	</div>
	<Menu />
</div>

<style>
	:global(body) {
		background-color: var(--color-grey-100);
		color: var(--color-grey-800);
	}

	#app {
		display: flex;
		flex-direction: column;
		height: 100vh;
		justify-content: flex-end;
		margin: 0 auto;
		max-width: var(--width-xs);
		padding: var(--size-2);
		padding-bottom: 0;
		position: relative;
	}

	#content {
		margin-bottom: var(--size-24);
	}
</style>
