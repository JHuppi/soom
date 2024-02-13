<script>
	import 'modern-normalize';
	import 'pollen-css';

	import Menu from '$lib/Menu.svelte';
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
