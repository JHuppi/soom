<script>
	import Breathe from './icons/Breathe.svelte';
	import Clock from './icons/Clock.svelte';
	import Info from './icons/Info.svelte';
</script>

<div id="menu">
	<menu>
		<li>
			<Info />
		</li>
		<li>
			<Breathe />
		</li>
		<li>
			<Clock />
		</li>
	</menu>
</div>

<style>
	#menu {
		background-color: var(--color-grey-50);
		border-top-left-radius: var(--radius-xl);
		border-top-right-radius: var(--radius-xl);
		color: var(--color-grey-500);
	}

	menu {
		align-items: baseline;
		display: flex;
		justify-content: space-between;
		margin: 0 auto;
		padding: var(--size-2);
		width: 75vw;
	}

	menu > li {
		list-style: none;
	}

	.active {
		color: var(--color-grey-800);
	}
</style>
