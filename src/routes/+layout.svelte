<script>
	import 'modern-normalize';
	import 'pollen-css';

	import Menu from '$lib/Menu.svelte';
</script>

<div id="app">
	<slot />
	<Menu />
</div>

<style>
	#app {
		background-color: var(--color-grey-100);
		color: var(--color-grey-800);
		display: flex;
		flex-direction: column;
		height: 100vh;
		justify-content: space-between;
		margin: 0 auto;
		max-width: var(--width-xs);
		padding: var(--size-2);
		padding-bottom: 0;
	}
</style>
